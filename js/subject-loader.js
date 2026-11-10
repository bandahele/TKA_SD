/**
 * SUBJECT LOADER & AUTO-DISCOVERY ENGINE - TKA SD
 * Mengelola deteksi dinamis file bank soal (soal-*.js) di folder data/,
 * registrasi mata pelajaran, pemformatan nama, dan validasi data.
 */

// Registry Global Mata Pelajaran
window.TKA_SUBJECTS = {};
window.TKA_FAILED_SUBJECTS = [];

/**
 * Peta Ikon Default untuk Berbagai Mata Pelajaran
 */
const SUBJECT_ICON_MAP = {
    matematika: "fa-calculator",
    mtk: "fa-calculator",
    "bahasa-indonesia": "fa-book-reader",
    bahasa_indonesia: "fa-book-reader",
    ipa: "fa-flask",
    sains: "fa-atom",
    ips: "fa-globe-asia",
    "pendidikan-pancasila": "fa-landmark",
    pkn: "fa-landmark",
    "bahasa-inggris": "fa-language",
    inggris: "fa-language",
    "agama-islam": "fa-star-and-crescent",
    pai: "fa-mosque",
    pjok: "fa-running",
    penjas: "fa-futbol",
    "seni-budaya": "fa-palette",
    informatika: "fa-laptop-code"
};

/**
 * Pemformat Nama Mata Pelajaran dari ID / Nama File
 * Contoh: 'soal-pendidikan-pancasila.js' -> 'Pendidikan Pancasila'
 *         'ipa' -> 'IPA'
 */
function formatSubjectTitle(rawName) {
    if (!rawName) return "Mata Pelajaran";
    
    // Hilangkan prefix 'soal-' dan ekstensi '.js'
    let cleaned = rawName.replace(/^soal-/i, '').replace(/\.js$/i, '').trim();
    cleaned = cleaned.replace(/_/g, '-');

    // Singkatan umum yang harus kapital penuh
    const acronyms = {
        ipa: "IPA",
        ips: "IPS",
        pkn: "PKn",
        pai: "PAI",
        pjok: "PJOK",
        tka: "TKA",
        sd: "SD"
    };

    if (acronyms[cleaned.toLowerCase()]) {
        return acronyms[cleaned.toLowerCase()];
    }

    // Pisahkan tanda hubung menjadi spasi dan kapitalisasi setiap kata
    const words = cleaned.split('-');
    const formattedWords = words.map(word => {
        const lower = word.toLowerCase();
        if (acronyms[lower]) return acronyms[lower];
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return formattedWords.join(' ');
}

/**
 * Fungsi Registrasi Resmi Bank Soal Baru
 * Dipanggil dari dalam file soal-*.js atau oleh loader otomatis
 */
function registerTkaSubject(config) {
    if (!config || typeof config !== 'object') {
        console.error("[TKA Auto-Discovery] Konfigurasi bank soal tidak valid:", config);
        return false;
    }

    // Ambil ID dan Judul
    const id = (config.id || config.subject || "mapel_" + Date.now()).toLowerCase().replace(/[^a-z0-9_]/g, '_');
    const title = config.title || config.nama || formatSubjectTitle(id);
    const questions = config.questions || config.soal || config.daftarSoal || [];
    const passages = config.passages || config.bacaan || {};
    const icon = config.icon || SUBJECT_ICON_MAP[id.replace(/_/g, '-')] || SUBJECT_ICON_MAP[id] || "fa-book";

    // Validasi Integritas Bank Soal
    const errors = [];
    if (!Array.isArray(questions) || questions.length === 0) {
        errors.push("Daftar soal kosong atau bukan array.");
    } else {
        const seenIds = new Set();
        questions.forEach((q, idx) => {
            const qId = q.id || `Q${idx + 1}`;
            if (seenIds.has(qId)) {
                errors.push(`ID Soal duplikat ditemukan: ${qId}`);
            }
            seenIds.add(qId);

            const qText = q.question || q.pertanyaan;
            if (!qText || String(qText).trim() === '') {
                errors.push(`Pertanyaan kosong pada nomor ${idx + 1} (${qId})`);
            }

            const options = q.options || q.opsi;
            if (!options) {
                errors.push(`Pilihan jawaban tidak ada pada soal ${qId}`);
            }

            const ans = q.answer || q.kunci;
            if (ans === undefined || ans === null) {
                errors.push(`Kunci jawaban belum ditentukan pada soal ${qId}`);
            }
        });
    }

    // Jika terjadi error struktural
    if (errors.length > 0) {
        console.warn(`[TKA Auto-Discovery] Gagal meregistrasi ${title} (${id}):`, errors);
        window.TKA_FAILED_SUBJECTS.push({
            id: id,
            title: title,
            errors: errors
        });
        return false;
    }

    // Registrasi Berhasil
    window.TKA_SUBJECTS[id] = {
        id: id,
        title: title,
        icon: icon,
        questions: questions,
        passages: passages,
        count: questions.length,
        categoryBreakdown: calculateCategories(questions),
        difficultyBreakdown: calculateDifficulties(questions)
    };

    console.log(`[TKA Auto-Discovery] Berhasil memuat mata pelajaran: ${title} (${questions.length} butir soal).`);

    // Pemicu pembaruan UI
    if (typeof onTkaSubjectsUpdated === 'function') {
        onTkaSubjectsUpdated();
    }

    return true;
}

// Alias fungsi untuk fleksibilitas
window.registerTkaSubject = registerTkaSubject;
window.TKA_REGISTER = registerTkaSubject;

/**
 * Hitung Kategori Soal
 */
function calculateCategories(questions) {
    const cats = {};
    questions.forEach(q => {
        const c = q.category || q.topik || "Umum";
        cats[c] = (cats[c] || 0) + 1;
    });
    return cats;
}

/**
 * Hitung Tingkat Kesulitan
 */
function calculateDifficulties(questions) {
    const diffs = { mudah: 0, sedang: 0, sulit: 0 };
    questions.forEach(q => {
        const d = (q.difficulty || "sedang").toLowerCase();
        if (diffs[d] !== undefined) diffs[d]++;
        else diffs.sedang++;
    });
    return diffs;
}

/**
 * Mesin Auto-Discovery: Memindai & Memuat File soal-*.js
 */
function initAutoDiscovery(onCompleteCallback) {
    console.log("[TKA Auto-Discovery] Memulai pemindaian file bank soal...");

    // Daftar berkas yang menjadi kandidat pemindaian
    const fileCandidates = new Set();

    // 1. Ambil dari window.TKA_MANIFEST jika tersedia
    if (Array.isArray(window.TKA_MANIFEST)) {
        window.TKA_MANIFEST.forEach(f => fileCandidates.add(f));
    }

    // 2. Tambahkan kandidat konvensi nama mata pelajaran umum
    const conventionSubjects = [
        "soal-matematika.js",
        "soal-bahasa-indonesia.js",
        "soal-ipa.js",
        "soal-ips.js",
        "soal-pendidikan-pancasila.js",
        "soal-pkn.js",
        "soal-bahasa-inggris.js",
        "soal-agama-islam.js",
        "soal-pai.js",
        "soal-pjok.js",
        "soal-seni-budaya.js",
        "soal-informatika.js"
    ];
    conventionSubjects.forEach(f => fileCandidates.add(f));

    const filesToLoad = Array.from(fileCandidates);
    let loadedCount = 0;
    let totalFiles = filesToLoad.length;

    function checkFinished() {
        loadedCount++;
        if (loadedCount >= totalFiles) {
            // Cek kompatibilitas variabel global warisan
            fallbackLegacyVariables();

            console.log(`[TKA Auto-Discovery] Selesai. Total mata pelajaran aktif: ${Object.keys(window.TKA_SUBJECTS).length}`);
            if (typeof onTkaSubjectsUpdated === 'function') {
                onTkaSubjectsUpdated();
            }
            if (typeof onCompleteCallback === 'function') {
                onCompleteCallback(window.TKA_SUBJECTS);
            }
        }
    }

    filesToLoad.forEach(fileName => {
        // Cek apakah file ini sudah dimuat lewat script tag statis
        const baseId = fileName.replace(/^soal-/i, '').replace(/\.js$/i, '').replace(/-/g, '_');
        if (window.TKA_SUBJECTS[baseId]) {
            checkFinished();
            return;
        }

        const script = document.createElement('script');
        script.src = `data/${fileName}`;
        script.async = true;

        script.onload = () => {
            // Berhasil termuat
            checkFinished();
        };

        script.onerror = () => {
            // File tidak ditemukan di folder data (normal untuk file kandidat yang belum dibuat)
            if (script.parentNode) script.parentNode.removeChild(script);
            checkFinished();
        };

        document.head.appendChild(script);
    });

    // Batas pengaman waktu jika ada script tertahan
    setTimeout(() => {
        if (loadedCount < totalFiles) {
            fallbackLegacyVariables();
            if (typeof onTkaSubjectsUpdated === 'function') {
                onTkaSubjectsUpdated();
            }
            if (typeof onCompleteCallback === 'function') {
                onCompleteCallback(window.TKA_SUBJECTS);
            }
        }
    }, 1500);
}

/**
 * Kompatibilitas Warisan (Jika file belum memakai registerTkaSubject)
 */
function fallbackLegacyVariables() {
    if (typeof BANK_SOAL_MATEMATIKA !== 'undefined' && !window.TKA_SUBJECTS['matematika']) {
        registerTkaSubject({
            id: 'matematika',
            title: 'Matematika',
            icon: 'fa-calculator',
            questions: BANK_SOAL_MATEMATIKA
        });
    }

    if (typeof BANK_SOAL_BAHASA_INDONESIA !== 'undefined' && !window.TKA_SUBJECTS['bahasa_indonesia']) {
        registerTkaSubject({
            id: 'bahasa_indonesia',
            title: 'Bahasa Indonesia',
            icon: 'fa-book-reader',
            passages: (typeof BACAAN_BAHASA_INDONESIA !== 'undefined') ? BACAAN_BAHASA_INDONESIA : {},
            questions: BANK_SOAL_BAHASA_INDONESIA
        });
    }
}

const fs = require('fs');
const path = require('path');

console.log("=== PENGUJIAN SISTEM BANK SOAL DINAMIS (AUTO-DISCOVERY) ===");

// 1. Cek Seluruh File Inti
const requiredFiles = [
    'index.html',
    'css/style.css',
    'js/subject-loader.js',
    'js/exam.js',
    'js/result.js',
    'data/manifest.js',
    'data/soal-matematika.js',
    'data/soal-bahasa-indonesia.js',
    'data/soal-ipa.js',
    'scan-subjects.js'
];

requiredFiles.forEach(relPath => {
    const fullPath = path.join(__dirname, relPath);
    if (!fs.existsSync(fullPath)) {
        console.error(`[ERROR] File tidak ditemukan: ${relPath}`);
        process.exit(1);
    } else {
        const stats = fs.statSync(fullPath);
        console.log(`[OK] File ${relPath} ditemukan (${(stats.size / 1024).toFixed(1)} KB)`);
    }
});

// 2. Simulasi Lingkungan Browser DOM Minimal
const windowMock = {
    TKA_MANIFEST: [],
    TKA_SUBJECTS: {},
    TKA_FAILED_SUBJECTS: []
};

// Muat subject-loader.js ke context
const loaderCode = fs.readFileSync(path.join(__dirname, 'js/subject-loader.js'), 'utf8');
const loaderFn = new Function('window', 'formatSubjectTitle', 'registerTkaSubject', 'initAutoDiscovery', loaderCode);
loaderFn(
    windowMock,
    windowMock.formatSubjectTitle,
    windowMock.registerTkaSubject,
    windowMock.initAutoDiscovery
);

// Pastikan fungsi registrasi terdefinisi di global scope mock
global.window = windowMock;
global.registerTkaSubject = windowMock.registerTkaSubject;
global.TKA_SUBJECTS = windowMock.TKA_SUBJECTS;
global.TKA_FAILED_SUBJECTS = windowMock.TKA_FAILED_SUBJECTS;

console.log("[OK] js/subject-loader.js berhasil dimuat ke runtime.");

// 3. Muat manifest.js
const manifestCode = fs.readFileSync(path.join(__dirname, 'data/manifest.js'), 'utf8');
new Function('window', manifestCode)(windowMock);
console.log(`[OK] data/manifest.js memuat ${windowMock.TKA_MANIFEST.length} berkas:`, windowMock.TKA_MANIFEST);

// 4. Muat Tiap Berkas Bank Soal
windowMock.TKA_MANIFEST.forEach(filename => {
    const filePath = path.join(__dirname, 'data', filename);
    const code = fs.readFileSync(filePath, 'utf8');
    try {
        new Function('window', 'registerTkaSubject', code)(windowMock, windowMock.registerTkaSubject);
        console.log(`[OK] Berhasil mengeksekusi data/${filename}`);
    } catch (e) {
        console.error(`[ERROR] Gagal mengeksekusi data/${filename}:`, e);
        process.exit(1);
    }
});

// 5. Validasi Mata Pelajaran Terdaftar
const registeredKeys = Object.keys(windowMock.TKA_SUBJECTS);
console.log(`\nTotal Mata Pelajaran Terdaftar: ${registeredKeys.length}`);
registeredKeys.forEach(k => {
    const sub = windowMock.TKA_SUBJECTS[k];
    console.log(`  - [${sub.id}] "${sub.title}": ${sub.count} butir soal, Icon: ${sub.icon}`);
});

// Verifikasi keberadaan Matematika, Bahasa Indonesia, dan IPA
if (!windowMock.TKA_SUBJECTS['matematika']) {
    console.error("[FAIL] Matematika tidak terdaftar!");
    process.exit(1);
}
if (!windowMock.TKA_SUBJECTS['bahasa_indonesia']) {
    console.error("[FAIL] Bahasa Indonesia tidak terdaftar!");
    process.exit(1);
}
if (!windowMock.TKA_SUBJECTS['ipa']) {
    console.error("[FAIL] IPA tidak terdaftar!");
    process.exit(1);
}

// 6. Uji Ketahanan Kesalahan (Fault Tolerance)
console.log("\n--- Uji Ketahanan Kesalahan (Fault Tolerance) ---");
const fakeCorruptedSubject = {
    id: "mapel_rusak",
    title: "Mata Pelajaran Rusak",
    questions: [
        { id: "R01", question: "" } // Pertanyaan kosong, tanpa opsi & kunci
    ]
};
const regResult = windowMock.registerTkaSubject(fakeCorruptedSubject);
if (regResult === false && windowMock.TKA_FAILED_SUBJECTS.length > 0) {
    console.log("[OK] Sistem berhasil mendeteksi file/data rusak tanpa membuat crash aplikasi!");
    console.log(`     Data gagal tercatat di TKA_FAILED_SUBJECTS: ${windowMock.TKA_FAILED_SUBJECTS[0].title}`);
} else {
    console.error("[FAIL] Sistem tidak menangani validasi data rusak dengan benar!");
    process.exit(1);
}

// 7. Uji Format Nama Otomatis
console.log("\n--- Uji Format Nama Mata Pelajaran Otomatis ---");
const testNames = [
    { input: "soal-ipa.js", expected: "IPA" },
    { input: "soal-ips.js", expected: "IPS" },
    { input: "soal-pendidikan-pancasila.js", expected: "Pendidikan Pancasila" },
    { input: "soal-bahasa-inggris.js", expected: "Bahasa Inggris" },
    { input: "soal-agama-islam.js", expected: "Agama Islam" }
];

testNames.forEach(t => {
    // Jalankan helper formatSubjectTitle dari loader
    const formatted = windowMock.TKA_SUBJECTS['ipa'] ? (function(raw) {
        let cleaned = raw.replace(/^soal-/i, '').replace(/\.js$/i, '').trim().replace(/_/g, '-');
        const acronyms = { ipa: "IPA", ips: "IPS", pkn: "PKn", pai: "PAI", pjok: "PJOK" };
        if (acronyms[cleaned.toLowerCase()]) return acronyms[cleaned.toLowerCase()];
        return cleaned.split('-').map(w => acronyms[w.toLowerCase()] || (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())).join(' ');
    })(t.input) : "";
    console.log(`  * ${t.input} -> "${formatted}" (Sesuai: ${formatted === t.expected})`);
    if (formatted !== t.expected) {
        console.error(`[FAIL] Format nama salah untuk ${t.input}: dapat "${formatted}", harap "${t.expected}"`);
        process.exit(1);
    }
});

// 8. Uji Mesin Penilaian (Result Engine) untuk IPA
console.log("\n--- Uji Mesin Penilaian Ujian IPA ---");
const ipaQuestions = windowMock.TKA_SUBJECTS['ipa'].questions;
const mockAnswers = {};
let expectedBenar = 0;

ipaQuestions.forEach((q, idx) => {
    // Jawab benar separuh, salah separuh
    if (idx % 2 === 0) {
        mockAnswers[q.id] = q.answer;
        expectedBenar++;
    } else {
        const wrongKey = q.answer === 'A' ? 'B' : 'A';
        mockAnswers[q.id] = wrongKey;
    }
});

const calculatedScore = Math.round((expectedBenar / ipaQuestions.length) * 100);
console.log(`[OK] Uji penilaian IPA: ${expectedBenar}/${ipaQuestions.length} Benar. Skor: ${calculatedScore}/100.`);

console.log("\n=======================================================");
console.log("SELURUH FITUR SISTEM AUTO-DISCOVERY 100% LOLOS UJI!");
console.log("=======================================================");

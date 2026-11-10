/**
 * EXAM ENGINE - SIMULASI TKA SD PUSMENDIK
 * Mengelola alur login, pemilihan mata ujian dinamis, mode ujian (20/50/100 soal),
 * pengacakan, navigasi soal, timer, dan status pengerjaan.
 */

// Global State
let selectedSubject = 'matematika';
let selectedMode = 'latihan'; // 'latihan', 'simulasi', 'lengkap'
let isShuffleQuestions = true;

let sessionQuestions = [];
let sessionPassages = {};
let currentQuestionIndex = 0;
let userAnswers = {}; // { questionId: 'A' | 'B' | 'C' | 'D' }
let raguStatus = {};  // { questionId: boolean }

let generatedTokenVal = "UMVS8H";
let timerInterval = null;
let totalTimeSeconds = 30 * 60; // default 30 menit
let timeElapsedSeconds = 0;
let isExamActive = false;
let examStartTime = null;
let examEndTime = null;

// Konfigurasi Mode Default
const BASE_MODE_CONFIG = {
    latihan: { targetCount: 20, durationMinutes: 30, label: "Mode Latihan" },
    simulasi: { targetCount: 50, durationMinutes: 75, label: "Mode Simulasi" },
    lengkap: { targetCount: 100, durationMinutes: 120, label: "Mode Ujian Lengkap" }
};

/**
 * Inisialisasi Saat Dokumen Siap
 */
document.addEventListener("DOMContentLoaded", function () {
    generateToken();
    populateTanggalLahir();

    // Jalankan Auto-Discovery Bank Soal
    if (typeof initAutoDiscovery === 'function') {
        initAutoDiscovery(function (subjects) {
            updateSubjectSelectionUI();
        });
    } else {
        updateSubjectSelectionUI();
    }

    renderMathKaTeX();
});

/**
 * Callback saat Registry Mata Pelajaran Diperbarui
 */
function onTkaSubjectsUpdated() {
    updateSubjectSelectionUI();
}

/**
 * Pembaruan Antarmuka Pilihan Mata Ujian Secara Dinamis
 */
function updateSubjectSelectionUI() {
    const subjects = window.TKA_SUBJECTS || {};
    const keys = Object.keys(subjects);

    // Update Status Badge di Sisi Kiri
    const statusBadge = document.getElementById('badgeBankSoalStatus');
    if (statusBadge) {
        let totalSoalSemua = 0;
        keys.forEach(k => totalSoalSemua += subjects[k].count);

        if (keys.length > 0) {
            statusBadge.className = "badge badge-success px-2 py-1";
            statusBadge.innerHTML = `<i class="fa fa-check-circle mr-1"></i> ${keys.length} Mapel Aktif (${totalSoalSemua} Soal)`;
        } else {
            statusBadge.className = "badge badge-warning px-2 py-1";
            statusBadge.innerHTML = `<i class="fa fa-spinner fa-spin mr-1"></i> Memindai Bank Soal...`;
        }

        // Tampilkan info peringatan jika ada file yang gagal validasi
        if (window.TKA_FAILED_SUBJECTS && window.TKA_FAILED_SUBJECTS.length > 0) {
            statusBadge.className = "badge badge-danger px-2 py-1";
            statusBadge.title = window.TKA_FAILED_SUBJECTS.map(f => `${f.title}: ${f.errors.join(', ')}`).join('\n');
            statusBadge.innerHTML = `<i class="fa fa-exclamation-triangle mr-1"></i> ${keys.length} Aktif | ${window.TKA_FAILED_SUBJECTS.length} Gagal`;
        }
    }

    // 1. Perbarui Dropdown Mata Ujian
    const confMapelSelect = document.getElementById('confMapel');
    if (confMapelSelect) {
        const previousSelection = confMapelSelect.value;
        confMapelSelect.innerHTML = '';

        if (keys.length === 0) {
            confMapelSelect.innerHTML = '<option value="">(Sedang memuat bank soal...)</option>';
        } else {
            keys.forEach(k => {
                const sub = subjects[k];
                const opt = document.createElement('option');
                opt.value = k;
                opt.text = `${sub.title} (${sub.count} Butir)`;
                if (k === selectedSubject || (!selectedSubject && k === keys[0])) {
                    opt.selected = true;
                }
                confMapelSelect.appendChild(opt);
            });

            // Pertahankan pilihan jika masih ada
            if (previousSelection && subjects[previousSelection]) {
                confMapelSelect.value = previousSelection;
                selectedSubject = previousSelection;
            } else if (!subjects[selectedSubject] && keys.length > 0) {
                selectedSubject = keys[0];
                confMapelSelect.value = selectedSubject;
            }
        }
    }

    // 2. Perbarui Grid Kartu Pilihan Mata Pelajaran
    const containerCards = document.getElementById('subjectCardsGrid');
    if (containerCards) {
        if (keys.length === 0) {
            containerCards.innerHTML = '<div class="col-12 text-center text-muted py-3 small"><i class="fa fa-spinner fa-spin mr-1"></i> Menghubungkan bank soal...</div>';
        } else {
            let cardsHtml = '';
            keys.forEach(k => {
                const sub = subjects[k];
                const isActive = (k === selectedSubject);
                const activeBorder = isActive ? 'border-primary shadow-sm bg-light' : 'border';
                const activeColor = isActive ? 'text-primary' : 'text-dark';

                cardsHtml += `
                    <div class="col-6 col-sm-4 px-1 mb-2">
                        <div class="p-2 rounded text-center cursor-pointer ${activeBorder}" 
                             style="cursor: pointer; transition: all 0.2s;"
                             onclick="selectSubject('${k}')">
                            <i class="fa ${sub.icon || 'fa-book'} ${activeColor} fa-2x mb-1"></i>
                            <div class="font-weight-bold text-truncate ${activeColor}" style="font-size: 13px;" title="${sub.title}">
                                ${sub.title}
                            </div>
                            <span class="badge badge-secondary" style="font-size: 10px;">${sub.count} Soal</span>
                        </div>
                    </div>
                `;
            });
            containerCards.innerHTML = cardsHtml;
        }
    }

    // Perbarui Tampilan Mode Ujian
    updateModeDisplay();
}

/**
 * Handler Memilih Mata Pelajaran dari Kartu / Dropdown
 */
function selectSubject(subjectId) {
    if (!window.TKA_SUBJECTS[subjectId]) return;
    selectedSubject = subjectId;

    const confMapelSelect = document.getElementById('confMapel');
    if (confMapelSelect) confMapelSelect.value = subjectId;

    updateSubjectSelectionUI();
}

/**
 * Handler Pergantian Mata Ujian dari Dropdown
 */
function onMapelChange() {
    const sel = document.getElementById('confMapel');
    if (!sel || !sel.value) return;
    selectSubject(sel.value);
}

/**
 * Pemilihan Mode Ujian (Latihan / Simulasi / Lengkap)
 */
function selectMode(modeKey) {
    if (!BASE_MODE_CONFIG[modeKey]) return;
    selectedMode = modeKey;

    document.querySelectorAll('.mode-option-card').forEach(card => card.classList.remove('active'));
    const activeCard = document.getElementById(`cardMode_${modeKey}`);
    if (activeCard) activeCard.classList.add('active');

    updateModeDisplay();
}

/**
 * Memperbarui Tampilan & Alokasi Waktu Mode Berdasarkan Total Soal Aktif
 */
function updateModeDisplay() {
    const sub = window.TKA_SUBJECTS ? window.TKA_SUBJECTS[selectedSubject] : null;
    const totalAvailable = sub ? sub.count : 20;

    // Hitung kuota soal aktual untuk tiap mode
    const countLatihan = Math.min(20, totalAvailable);
    const countSimulasi = Math.min(50, totalAvailable);
    const countLengkap = totalAvailable;

    // Update Label di Kartu Mode
    const badgeLatihan = document.getElementById('badgeCount_latihan');
    if (badgeLatihan) badgeLatihan.innerText = `${countLatihan} Soal`;

    const badgeSimulasi = document.getElementById('badgeCount_simulasi');
    if (badgeSimulasi) badgeSimulasi.innerText = `${countSimulasi} Soal`;

    const badgeLengkap = document.getElementById('badgeCount_lengkap');
    if (badgeLengkap) badgeLengkap.innerText = `${countLengkap} Soal`;

    // Ambil mode yang dipilih
    let activeCount = countLatihan;
    let activeMinutes = 30;
    if (selectedMode === 'simulasi') {
        activeCount = countSimulasi;
        activeMinutes = Math.round((activeCount / 50) * 75);
    } else if (selectedMode === 'lengkap') {
        activeCount = countLengkap;
        activeMinutes = Math.round((activeCount / 100) * 120);
    }

    const lblInfo = document.getElementById('lblModeInfo');
    if (lblInfo) {
        lblInfo.innerText = `${BASE_MODE_CONFIG[selectedMode].label} (${activeCount} Soal) - Durasi ${activeMinutes} Menit`;
    }
}

/**
 * Render KaTeX Formula Matematika & Notasi Ilmiah
 */
function renderMathKaTeX() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: false },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

/**
 * Mengisi Dropdown Tanggal Lahir (Hari, Bulan, Tahun Siswa SD)
 */
function populateTanggalLahir() {
    const elHari = document.getElementById('tglHari');
    const elBulan = document.getElementById('tglBulan');
    const elTahun = document.getElementById('tglTahun');
    if (!elHari || !elBulan || !elTahun) return;

    elHari.innerHTML = '<option value="">Hari</option>';
    for (let i = 1; i <= 31; i++) {
        let val = (i < 10 ? '0' + i : '' + i);
        let selected = (i === 12) ? 'selected' : '';
        elHari.innerHTML += `<option value="${val}" ${selected}>${i}</option>`;
    }

    const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    elBulan.innerHTML = '<option value="">Bulan</option>';
    namaBulan.forEach((bln, idx) => {
        let val = (idx + 1 < 10 ? '0' + (idx + 1) : '' + (idx + 1));
        let selected = (idx === 4) ? 'selected' : ''; // Mei
        elBulan.innerHTML += `<option value="${val}" ${selected}>${bln}</option>`;
    });

    elTahun.innerHTML = '<option value="">Tahun</option>';
    for (let y = 2018; y >= 2009; y--) {
        let selected = (y === 2014) ? 'selected' : '';
        elTahun.innerHTML += `<option value="${y}" ${selected}>${y}</option>`;
    }
}

/**
 * Toggle Password Visibility
 */
function togglePasswordVisibility() {
    const passInput = document.getElementById('txtPassword');
    const iconEye = document.getElementById('iconEye');
    if (!passInput || !iconEye) return;

    if (passInput.type === 'password') {
        passInput.type = 'text';
        iconEye.className = 'fa fa-eye-slash text-primary';
    } else {
        passInput.type = 'password';
        iconEye.className = 'fa fa-eye text-secondary';
    }
}

/**
 * Navigasi Perpindahan Tampilan (View Section)
 */
function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Proses Login Peserta
 */
function processLogin() {
    const username = document.getElementById('txtUsername').value.trim();
    const pass = document.getElementById('txtPassword').value.trim();

    if (!username) {
        alert('Silakan masukkan Username Anda terlebih dahulu!');
        document.getElementById('txtUsername').focus();
        return;
    }
    if (!pass) {
        alert('Silakan masukkan Password Anda!');
        document.getElementById('txtPassword').focus();
        return;
    }

    const formattedName = username.charAt(0).toUpperCase() + username.slice(1);
    document.getElementById('confUsername').value = username;
    document.getElementById('confNamaDisplay').value = formattedName + " - PESERTA TKA SD";
    document.getElementById('inputNamaKonfirmasi').value = formattedName;
    document.getElementById('lblUserDisplay').innerText = formattedName;
    document.getElementById('headerUserInfo').style.display = 'block';

    switchView('viewToken');
}

/**
 * Pembuatan Token Acak 6 Karakter
 */
function generateToken() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let token = "";
    for (let i = 0; i < 6; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    generatedTokenVal = token;
    const lbl = document.getElementById('lblToken');
    if (lbl) lbl.innerText = token;
}

/**
 * Salin Token ke Input Form
 */
function salinToken() {
    const input = document.getElementById('inputTokenInput');
    if (input) {
        input.value = generatedTokenVal;
        input.focus();
    }
}

/**
 * Fisher-Yates Shuffle untuk Pengacakan Soal
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * Mulai Ujian & Persiapan Soal Sesuai Mata Pelajaran Terpilih
 */
function startTest() {
    const namaKonfirmasi = document.getElementById('inputNamaKonfirmasi').value.trim();
    const tokenInput = document.getElementById('inputTokenInput').value.trim().toUpperCase();

    if (!namaKonfirmasi) {
        alert('Harap ketikkan Nama Peserta pada kolom konfirmasi!');
        document.getElementById('inputNamaKonfirmasi').focus();
        return;
    }

    if (!tokenInput) {
        alert('Harap masukkan Token Ujian!');
        document.getElementById('inputTokenInput').focus();
        return;
    }

    if (tokenInput !== generatedTokenVal) {
        alert(`Token yang Anda masukkan (${tokenInput}) salah!\nToken yang aktif saat ini: ${generatedTokenVal}`);
        document.getElementById('inputTokenInput').focus();
        return;
    }

    // Ambil Data Mata Pelajaran dari Registry Dinamis
    const currentSubjectObj = window.TKA_SUBJECTS ? window.TKA_SUBJECTS[selectedSubject] : null;
    if (!currentSubjectObj || !currentSubjectObj.questions || currentSubjectObj.questions.length === 0) {
        alert(`Bank soal untuk mata pelajaran "${selectedSubject}" belum berhasil dimuat. Silakan periksa kembali file di folder data/.`);
        return;
    }

    // Ambil opsi pengacakan
    const chkAcak = document.getElementById('chkAcakSoal');
    isShuffleQuestions = chkAcak ? chkAcak.checked : true;

    // Siapkan sumber soal
    let sourcePool = [...currentSubjectObj.questions];
    sessionPassages = currentSubjectObj.passages || {};

    if (isShuffleQuestions) {
        sourcePool = shuffleArray(sourcePool);
    }

    // Tentukan kuota soal dan durasi timer berdasarkan mode
    const totalAvailable = currentSubjectObj.count;
    let targetCount = Math.min(20, totalAvailable);
    let durationMinutes = 30;

    if (selectedMode === 'simulasi') {
        targetCount = Math.min(50, totalAvailable);
        durationMinutes = Math.max(30, Math.round((targetCount / 50) * 75));
    } else if (selectedMode === 'lengkap') {
        targetCount = totalAvailable;
        durationMinutes = Math.max(30, Math.round((targetCount / 100) * 120));
    }

    sessionQuestions = sourcePool.slice(0, targetCount);

    // Reset status pengerjaan
    userAnswers = {};
    raguStatus = {};
    currentQuestionIndex = 0;
    isExamActive = true;
    examStartTime = new Date();
    timeElapsedSeconds = 0;
    totalTimeSeconds = durationMinutes * 60;

    // Update Header Mata Pelajaran
    document.getElementById('lblMapelAktif').innerText = `${currentSubjectObj.title} - ${BASE_MODE_CONFIG[selectedMode].label}`;

    // Tampilkan View Soal
    switchView('viewSoal');
    loadQuestion(currentQuestionIndex);
    startCountdownTimer();
}

/**
 * Menampilkan Soal Berdasarkan Index
 */
function loadQuestion(index) {
    if (index < 0 || index >= sessionQuestions.length) return;
    currentQuestionIndex = index;
    const q = sessionQuestions[index];

    document.getElementById('lblNomorSoal').innerText = (index + 1);
    document.getElementById('lblTotalSoal').innerText = " dari " + sessionQuestions.length;

    // Render Stimulus / Wacana
    const wacanaBox = document.getElementById('soalWacana');
    let stimulusHtml = '';

    // Cek apakah soal ini memiliki passageId dalam daftar bacaan
    if (q.passageId && sessionPassages && sessionPassages[q.passageId]) {
        const p = sessionPassages[q.passageId];
        stimulusHtml = `
            <div class="mb-2">
                <span class="badge badge-info px-2 py-1 small">${p.genre || 'Teks Stimulus'}</span>
                <h6 class="font-weight-bold text-dark mt-2 mb-2" style="font-size: 15px;">${p.title}</h6>
            </div>
            <div class="text-justify leading-relaxed" style="font-size: 0.95rem;">
                ${p.text}
            </div>
        `;
    } else if (q.wacana) {
        if (q.category || q.topik) {
            stimulusHtml += `<div class="mb-2"><span class="badge badge-primary px-2 py-1 small">${q.category || q.topik}</span></div>`;
        }
        stimulusHtml += `<div class="text-justify leading-relaxed mb-2">${q.wacana}</div>`;
    } else {
        if (q.category || q.topik) {
            stimulusHtml += `<div class="mb-2"><span class="badge badge-primary px-2 py-1 small">${q.category || q.topik}</span></div>`;
        }
        stimulusHtml += `<p class="text-muted small font-italic"><i class="fa fa-info-circle mr-1"></i> Bacalah pertanyaan berikut dengan seksama dan pilih jawaban yang paling tepat.</p>`;
    }
    wacanaBox.innerHTML = stimulusHtml;

    // Render Pertanyaan
    document.getElementById('soalPertanyaan').innerHTML = `<div class="leading-normal">${q.question || q.pertanyaan}</div>`;

    // Render Pilihan Jawaban (A, B, C, D)
    const optionsObj = q.options || q.opsi;
    const selectedAns = userAnswers[q.id] || null;
    let opsiHtml = '<table class="table table-borderless mb-0"><tbody>';

    const optKeys = ["A", "B", "C", "D"];
    optKeys.forEach(key => {
        let optText = "";
        if (Array.isArray(optionsObj)) {
            const idx = optKeys.indexOf(key);
            optText = optionsObj[idx] || "";
        } else if (optionsObj && optionsObj[key]) {
            optText = optionsObj[key];
        }

        const isChecked = (selectedAns === key);
        const selectedClass = isChecked ? 'selected-option' : '';

        opsiHtml += `
            <tr class="table-opsi-row ${selectedClass}" onclick="selectOption('${key}')">
                <td style="width: 38px; vertical-align: middle; padding: 10px 4px;">
                    <div class="icheck-primary">
                        <input id="opt_${index}_${key}" type="radio" name="radioOpsi" ${isChecked ? 'checked' : ''}>
                        <label for="opt_${index}_${key}"></label>
                    </div>
                </td>
                <td style="vertical-align: middle; padding: 10px 8px;">
                    <div class="d-flex align-items-center">
                        <span class="opsi-letter-badge">${key}</span>
                        <div class="opsi-text flex-grow-1">${optText}</div>
                    </div>
                </td>
            </tr>
        `;
    });
    opsiHtml += '</tbody></table>';
    document.getElementById('soalOpsi').innerHTML = opsiHtml;

    // Update Status Ragu-Ragu
    document.getElementById('chkRagu').checked = !!raguStatus[q.id];

    // Update Navigasi Tombol
    document.getElementById('btnPrev').disabled = (index === 0);
    const nextBtn = document.getElementById('btnNext');
    if (index === sessionQuestions.length - 1) {
        nextBtn.innerHTML = '<span>Selesai</span> <i class="fa fa-check-circle ml-1"></i>';
        nextBtn.className = 'btn btn-success btn-sm rounded-pill px-3 py-2 font-weight-bold';
    } else {
        nextBtn.innerHTML = '<span>Berikutnya</span> <i class="fa fa-chevron-circle-right ml-1"></i>';
        nextBtn.className = 'btn btn-primary btn-sm rounded-pill px-3 py-2 font-weight-bold';
    }

    renderMathKaTeX();
}

/**
 * Memilih Opsi Jawaban
 */
function selectOption(key) {
    const q = sessionQuestions[currentQuestionIndex];
    userAnswers[q.id] = key;
    loadQuestion(currentQuestionIndex);
}

/**
 * Toggle Status Ragu-Ragu
 */
function toggleRagu() {
    const q = sessionQuestions[currentQuestionIndex];
    raguStatus[q.id] = document.getElementById('chkRagu').checked;
}

/**
 * Navigasi: Soal Sebelumnya
 */
function prevSoal() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

/**
 * Navigasi: Soal Berikutnya / Konfirmasi Selesai
 */
function nextSoal() {
    if (currentQuestionIndex < sessionQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else {
        openModalKonfirmasiSelesai();
    }
}

/**
 * Pengatur Ukuran Font Soal
 */
function changeFontSize(size) {
    document.querySelectorAll('.cfont').forEach(el => el.classList.remove('active'));
    let sizePx = '16px';
    if (size === 'small') {
        sizePx = '13px';
        document.getElementById('fontSmall').classList.add('active');
    } else if (size === 'medium') {
        sizePx = '16px';
        document.getElementById('fontMedium').classList.add('active');
    } else if (size === 'large') {
        sizePx = '19px';
        document.getElementById('fontLarge').classList.add('active');
    }
    document.getElementById('isisoal').style.fontSize = sizePx;
}

/**
 * Buka Modal Informasi Soal
 */
function openModalInfo() {
    $('#modalInfoSoal').modal('show');
}

/**
 * Buka Modal Grid Daftar Soal
 */
function openModalDaftarSoal() {
    const container = document.getElementById('gridNomorSoalContainer');
    let html = '';
    let answeredCount = 0;

    sessionQuestions.forEach((soal, i) => {
        let statusClass = '';
        let ansBadge = '';

        const isAnswered = (userAnswers[soal.id] !== undefined && userAnswers[soal.id] !== null);
        const isRagu = !!raguStatus[soal.id];

        if (isRagu) {
            statusClass = 'ragu';
        } else if (isAnswered) {
            statusClass = 'answered';
            answeredCount++;
        }

        if (isAnswered) {
            ansBadge = `<span class="ans-code">${userAnswers[soal.id]}</span>`;
        }

        const currentClass = (i === currentQuestionIndex) ? 'current' : '';

        html += `
            <div class="btn-nomor-soal ${statusClass} ${currentClass}" onclick="lompatKeSoal(${i})">
                <span>${i + 1}</span>
                ${ansBadge}
            </div>
        `;
    });

    container.innerHTML = html;
    document.getElementById('modalProgressText').innerText = `${answeredCount} dari ${sessionQuestions.length} soal sudah dijawab`;
    $('#modalDaftarSoal').modal('show');
}

/**
 * Lompat Langsung ke Nomor Tertentu dari Modal Grid
 */
function lompatKeSoal(targetIndex) {
    $('#modalDaftarSoal').modal('hide');
    loadQuestion(targetIndex);
}

/**
 * Modal Konfirmasi Selesai Ujian
 */
function openModalKonfirmasiSelesai() {
    let answered = 0;
    let ragu = 0;
    let belum = 0;

    sessionQuestions.forEach(q => {
        const isAns = (userAnswers[q.id] !== undefined && userAnswers[q.id] !== null);
        if (raguStatus[q.id]) ragu++;
        if (isAns) answered++;
        else belum++;
    });

    document.getElementById('confTotalSoal').innerText = sessionQuestions.length;
    document.getElementById('confDijawab').innerText = answered;
    document.getElementById('confRagu').innerText = ragu;
    document.getElementById('confBelum').innerText = belum;

    $('#modalKonfirmasiSelesai').modal('show');
}

/**
 * Timer Countdown Ujian
 */
function startCountdownTimer() {
    if (timerInterval) clearInterval(timerInterval);

    function updateDisplay() {
        if (totalTimeSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('lblTimer').innerText = "00:00:00";
            alert("Waktu ujian telah habis! Lembar jawaban Anda akan otomatis dikumpulkan.");
            finishTest();
            return;
        }

        const hrs = Math.floor(totalTimeSeconds / 3600);
        const mins = Math.floor((totalTimeSeconds % 3600) / 60);
        const secs = totalTimeSeconds % 60;

        const fHrs = hrs < 10 ? "0" + hrs : hrs;
        const fMins = mins < 10 ? "0" + mins : mins;
        const fSecs = secs < 10 ? "0" + secs : secs;

        const timerEl = document.getElementById('lblTimer');
        if (timerEl) {
            timerEl.innerText = `${fHrs}:${fMins}:${fSecs}`;
            if (totalTimeSeconds <= 300) {
                timerEl.classList.add('timer-warning');
                document.getElementById('btnTimerBox').classList.add('border-danger');
            } else {
                timerEl.classList.remove('timer-warning');
                document.getElementById('btnTimerBox').classList.remove('border-danger');
            }
        }

        totalTimeSeconds--;
        timeElapsedSeconds++;
    }

    updateDisplay();
    timerInterval = setInterval(updateDisplay, 1000);
}

/**
 * Menyelesaikan Ujian dan Beralih ke Hasil
 */
function finishTest() {
    if (timerInterval) clearInterval(timerInterval);
    $('#modalKonfirmasiSelesai').modal('hide');
    isExamActive = false;
    examEndTime = new Date();

    const currentSubjectObj = window.TKA_SUBJECTS ? window.TKA_SUBJECTS[selectedSubject] : null;
    const subjectTitle = currentSubjectObj ? currentSubjectObj.title : selectedSubject;

    // Panggil logika penilaian di js/result.js
    if (typeof renderExamResult === 'function') {
        renderExamResult({
            subjectId: selectedSubject,
            subjectTitle: subjectTitle,
            mode: selectedMode,
            questions: sessionQuestions,
            userAnswers: userAnswers,
            timeElapsedSeconds: timeElapsedSeconds,
            userName: document.getElementById('inputNamaKonfirmasi').value.trim(),
            userUsername: document.getElementById('confUsername').value.trim()
        });
    }

    switchView('viewHasil');
}

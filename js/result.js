/**
 * RESULT & EVALUATION ENGINE - SIMULASI TKA SD PUSMENDIK
 * Menghitung skor akhir, persentase akurasi, waktu pengerjaan,
 * rincian per kategori materi, dan menampilkan modul pembahasan lengkap.
 */

let lastExamResult = null;
let currentFilterPembahasan = 'all'; // 'all', 'salah', 'benar'

/**
 * Render Hasil Ujian Utama
 */
function renderExamResult(data) {
    lastExamResult = data;
    const { subject, subjectId, subjectTitle, mode, questions, userAnswers, timeElapsedSeconds, userName, userUsername } = data;

    let benar = 0;
    let salah = 0;
    let kosong = 0;

    // Kategori Breakdown Map: { categoryName: { total: 0, benar: 0 } }
    const categoryStats = {};

    questions.forEach(q => {
        const cat = q.category || q.topik || "Umum";
        if (!categoryStats[cat]) {
            categoryStats[cat] = { total: 0, benar: 0 };
        }
        categoryStats[cat].total++;

        const userAns = userAnswers[q.id];
        let correctKey = q.answer;
        if (typeof correctKey === 'number') {
            const keys = ["A", "B", "C", "D"];
            correctKey = keys[correctKey];
        }

        if (userAns !== undefined && userAns !== null) {
            if (userAns === correctKey) {
                benar++;
                categoryStats[cat].benar++;
            } else {
                salah++;
            }
        } else {
            kosong++;
        }
    });

    const totalSoal = questions.length;
    const skorAkhir = Math.round((benar / totalSoal) * 100);
    const persentaseAkurasi = (benar + salah > 0) ? Math.round((benar / (benar + salah)) * 100) : 0;

    // Tentukan Predikat
    let predikat = "Perlu Bimbingan";
    let predikatClass = "badge badge-danger";
    if (skorAkhir >= 85) {
        predikat = "Sangat Memuaskan";
        predikatClass = "badge badge-success";
    } else if (skorAkhir >= 70) {
        predikat = "Memuaskan";
        predikatClass = "badge badge-primary";
    } else if (skorAkhir >= 55) {
        predikat = "Cukup";
        predikatClass = "badge badge-warning text-white";
    }

    // Format Waktu Pengerjaan
    const mins = Math.floor(timeElapsedSeconds / 60);
    const secs = timeElapsedSeconds % 60;
    const waktuFormatted = `${mins} menit ${secs} detik`;

    // Pasang ke Header Hasil
    const mapelLabel = subjectTitle || (window.TKA_SUBJECTS && window.TKA_SUBJECTS[subjectId || subject] ? window.TKA_SUBJECTS[subjectId || subject].title : 'Mata Pelajaran TKA SD');
    const modeLabel = (typeof BASE_MODE_CONFIG !== 'undefined' && BASE_MODE_CONFIG[mode]) 
        ? BASE_MODE_CONFIG[mode].label 
        : ((typeof MODE_CONFIG !== 'undefined' && MODE_CONFIG[mode]) ? MODE_CONFIG[mode].label : mode);

    document.getElementById('rekapNamaPeserta').innerText = userName;
    document.getElementById('rekapUsername').innerText = userUsername;
    document.getElementById('rekapMapel').innerText = `${mapelLabel} | ${modeLabel}`;
    document.getElementById('rekapNilaiTotal').innerText = skorAkhir;

    const elPred = document.getElementById('rekapPredikat');
    if (elPred) {
        elPred.innerText = predikat;
        elPred.className = `${predikatClass} px-3 py-1 font-weight-bold`;
    }

    document.getElementById('rekapBenar').innerText = benar;
    document.getElementById('rekapSalah').innerText = salah;
    document.getElementById('rekapKosong').innerText = kosong;

    const elWaktu = document.getElementById('rekapWaktuPengerjaan');
    if (elWaktu) elWaktu.innerText = waktuFormatted;

    const elAkurasi = document.getElementById('rekapAkurasi');
    if (elAkurasi) elAkurasi.innerText = `${persentaseAkurasi}%`;

    // Render Tabel Evaluasi Kategori
    renderCategoryBreakdown(categoryStats);

    // Render Pembahasan Soal
    renderPembahasanList(questions, userAnswers, currentFilterPembahasan);
}

/**
 * Render Analisis Statistik Per Kategori Materi
 */
function renderCategoryBreakdown(stats) {
    const container = document.getElementById('containerCategoryStats');
    if (!container) return;

    let html = '<div class="row">';
    for (const [catName, data] of Object.entries(stats)) {
        const pct = Math.round((data.benar / data.total) * 100);
        let barColor = 'bg-danger';
        if (pct >= 80) barColor = 'bg-success';
        else if (pct >= 60) barColor = 'bg-primary';
        else if (pct >= 40) barColor = 'bg-warning';

        html += `
            <div class="col-md-6 mb-3">
                <div class="p-3 border rounded bg-light shadow-sm h-100">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <span class="font-weight-bold small text-dark">${catName}</span>
                        <span class="badge badge-secondary small">${data.benar}/${data.total} Benar (${pct}%)</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                        <div class="progress-bar ${barColor}" role="progressbar" style="width: ${pct}%;" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

/**
 * Render Seluruh Pembahasan Soal Lengkap
 */
function renderPembahasanList(questions, userAnswers, filter) {
    const listContainer = document.getElementById('pembahasanListContainer');
    if (!listContainer) return;

    let html = '';
    const optKeys = ["A", "B", "C", "D"];

    questions.forEach((q, idx) => {
        const no = idx + 1;
        const userAns = userAnswers[q.id] || null;

        let correctKey = q.answer;
        if (typeof correctKey === 'number') {
            correctKey = optKeys[correctKey];
        }

        const isCorrect = (userAns === correctKey);
        const isEmpty = (userAns === null);

        // Terapkan Filter
        if (filter === 'benar' && !isCorrect) return;
        if (filter === 'salah' && isCorrect) return;

        let itemStatusClass = isCorrect ? 'correct' : (isEmpty ? 'empty' : 'incorrect');
        let statusBadge = isCorrect
            ? '<span class="badge badge-success px-2 py-1"><i class="fa fa-check mr-1"></i>Jawaban Anda Benar</span>'
            : (isEmpty
                ? '<span class="badge badge-secondary px-2 py-1"><i class="fa fa-minus mr-1"></i>Tidak Dijawab</span>'
                : `<span class="badge badge-danger px-2 py-1"><i class="fa fa-times mr-1"></i>Jawaban Anda Salah (Pilihan Anda: ${userAns})</span>`);

        const diffBadge = q.difficulty 
            ? `<span class="badge badge-light border text-muted px-2 py-1 mr-1 text-uppercase" style="font-size: 10px;">${q.difficulty}</span>`
            : '';
        const catBadge = q.category 
            ? `<span class="badge badge-primary px-2 py-1 mr-1" style="font-size: 11px;">${q.category}</span>`
            : '';

        // Bacaan jika Bahasa Indonesia
        let bacaanSnippet = '';
        if (q.passageId && typeof BACAAN_BAHASA_INDONESIA !== 'undefined' && BACAAN_BAHASA_INDONESIA[q.passageId]) {
            const p = BACAAN_BAHASA_INDONESIA[q.passageId];
            bacaanSnippet = `
                <div class="mb-2 p-2 bg-light border-left rounded small">
                    <b>Bacaan: ${p.title}</b> (${p.genre || 'Teks'})
                </div>
            `;
        }

        // Pilihan Jawaban
        let optionsHtml = '<div class="row my-2">';
        const optionsObj = q.options || q.opsi;

        optKeys.forEach(k => {
            let textOpt = "";
            if (Array.isArray(optionsObj)) {
                textOpt = optionsObj[optKeys.indexOf(k)] || "";
            } else if (optionsObj && optionsObj[k]) {
                textOpt = optionsObj[k];
            }

            let optBadgeStyle = "background: #edf2f7; color: #4a5568;";
            let borderHighlight = "border: 1px solid #e2e8f0;";

            if (k === correctKey) {
                optBadgeStyle = "background: #27ae60; color: #fff; font-weight: bold;";
                borderHighlight = "border: 2px solid #27ae60; background: #f0fff4;";
            } else if (k === userAns && !isCorrect) {
                optBadgeStyle = "background: #e74c3c; color: #fff; font-weight: bold;";
                borderHighlight = "border: 2px solid #e74c3c; background: #fff5f5;";
            }

            optionsHtml += `
                <div class="col-md-6 mb-2">
                    <div class="p-2 rounded d-flex align-items-center" style="${borderHighlight} font-size: 13.5px;">
                        <span class="mr-2 px-2 py-1 rounded" style="${optBadgeStyle}">${k}</span>
                        <div class="flex-grow-1">${textOpt}</div>
                    </div>
                </div>
            `;
        });
        optionsHtml += '</div>';

        // Kotak Pembahasan
        const explanationText = q.explanation || q.pembahasan || "Pembahasan resmi sesuai dengan konsep dan kunci jawaban di atas.";

        html += `
            <div class="pembahasan-item ${itemStatusClass}">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <div>
                        <span class="font-weight-bold text-dark mr-2" style="font-size: 16px;">Soal No. ${no}</span>
                        ${catBadge}
                        ${diffBadge}
                    </div>
                    <div class="mt-1 mt-sm-0">
                        ${statusBadge}
                    </div>
                </div>
                ${bacaanSnippet}
                <div class="text-dark font-weight-medium mb-2" style="font-size: 14.5px;">
                    ${q.question || q.pertanyaan}
                </div>
                ${optionsHtml}
                <div class="explanation-box">
                    <div class="font-weight-bold text-primary mb-1"><i class="fa fa-lightbulb mr-1"></i>Pembahasan & Kunci Jawaban (Kunci: ${correctKey}):</div>
                    <div class="text-secondary" style="white-space: pre-line;">${explanationText}</div>
                </div>
            </div>
        `;
    });

    if (html === '') {
        html = `<div class="alert alert-info text-center py-4">Tidak ada soal yang sesuai dengan filter yang dipilih.</div>`;
    }

    listContainer.innerHTML = html;
    renderMathKaTeX();
}

/**
 * Filter Tab Pembahasan (Semua, Salah, Benar)
 */
function setFilterPembahasan(filterType) {
    currentFilterPembahasan = filterType;
    document.querySelectorAll('.btn-filter-pembahasan').forEach(btn => btn.classList.remove('active', 'btn-primary'));
    document.querySelectorAll('.btn-filter-pembahasan').forEach(btn => btn.classList.add('btn-outline-primary'));

    const activeBtn = document.getElementById(`btnFilter_${filterType}`);
    if (activeBtn) {
        activeBtn.classList.remove('btn-outline-primary');
        activeBtn.classList.add('btn-primary', 'active');
    }

    if (lastExamResult) {
        renderPembahasanList(lastExamResult.questions, lastExamResult.userAnswers, currentFilterPembahasan);
    }
}

/**
 * Ulangi Simulasi Ini
 */
function restartUjian() {
    if (confirm("Apakah Anda ingin mengulang simulasi ini dari awal dengan mata pelajaran dan mode yang sama?")) {
        startTest();
    }
}

/**
 * Keluar ke Halaman Awal
 */
function keluarKeLogin() {
    if (confirm("Keluar dari simulasi dan kembali ke halaman login?")) {
        location.reload();
    }
}

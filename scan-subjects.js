/**
 * AUTO-SCANNER BANK SOAL TKA SD
 * Memindai seluruh file soal-*.js di folder data/ dan memperbarui data/manifest.js secara otomatis.
 * Cara Penggunaan: node scan-subjects.js
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const manifestFile = path.join(dataDir, 'manifest.js');

console.log("=== PEMINDAIAN BANK SOAL OTOMATIS (SCANNER) ===");
console.log(`Memindai direktori: ${dataDir}`);

if (!fs.existsSync(dataDir)) {
    console.error("[ERROR] Direktori data/ tidak ditemukan!");
    process.exit(1);
}

const files = fs.readdirSync(dataDir);
const subjectFiles = files.filter(f => /^soal-.*\.js$/i.test(f)).sort();

console.log(`Ditemukan ${subjectFiles.length} file bank soal:`);
subjectFiles.forEach((file, idx) => {
    console.log(`  ${idx + 1}. ${file}`);
});

const content = `/**
 * MANIFEST DAFTAR FILE BANK SOAL TKA SD
 * File ini diperbarui secara otomatis oleh scan-subjects.js
 * Waktu Pembaruan: ${new Date().toLocaleString('id-ID')}
 */
window.TKA_MANIFEST = ${JSON.stringify(subjectFiles, null, 2)};
`;

fs.writeFileSync(manifestFile, content, 'utf8');
console.log(`\n[SUKSES] File ${path.relative(__dirname, manifestFile)} berhasil diperbarui!`);
console.log("Mata pelajaran siap dimuat oleh aplikasi secara dinamis.");

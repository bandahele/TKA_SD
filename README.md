# Aplikasi Simulasi Tes Kemampuan Akademik (TKA) SD - Pusmendik
## Sistem Bank Soal Dinamis (Auto-Discovery) & Multi-Mata Pelajaran

Aplikasi web simulasi interaktif berbasis *offline-first* untuk latihan dan simulasi **Tes Kemampuan Akademik (TKA) / ANBK tingkat SD sederajat** dengan antarmuka, tata letak, dan standar operasional yang identik dengan sistem resmi Pusmendik Kementerian Pendidikan Dasar dan Menengah.

---

## 🚀 Fitur Baru: Sistem Auto-Discovery Bank Soal

Aplikasi kini mendukung sistem registrasi dan pendeteksian mata pelajaran secara dinamis (*plug-and-play*). Anda dapat menambahkan mata pelajaran baru (seperti IPA, IPS, Pendidikan Pancasila, Bahasa Inggris, dll.) cukup dengan meletakkan file berkas JavaScript baru ke dalam folder `data/` tanpa perlu merombak atau mengedit kode `index.html` maupun `exam.js`.

### 📂 Struktur Direktori Terkini:
```text
TKA-SD/
│
├── index.html                   # Halaman antarmuka utama simulasi
├── simulasi_tka_sd.html         # Salinan mandiri aplikasi
├── verify_all.js                # Skrip validasi otomatis & uji integritas
├── scan-subjects.js             # Skrip pemindai otomatis folder data/ (Node.js)
├── scan-subjects.bat            # Pintasan pemindai otomatis 1-klik (Windows)
├── README.md                    # Dokumentasi teknis & panduan lengkap
│
├── css/
│   └── style.css                # Desain tema Pusmendik & modul pembahasan
│
├── js/
│   ├── subject-loader.js        # Engine Auto-Discovery & registry dinamis
│   ├── exam.js                  # Mesin ujian: navigasi, timer, mode & acak soal
│   └── result.js                # Mesin penilaian: rekap skor, analisis & pembahasan
│
└── data/
    ├── manifest.js              # Manifest daftar file bank soal aktif
    ├── soal-matematika.js       # Bank Soal Matematika (100 Butir)
    ├── soal-bahasa-indonesia.js # Bank Soal Bahasa Indonesia (100 Butir)
    └── soal-ipa.js              # Bank Soal IPA (20 Butir - File Uji Otomatis)
```

---

## 💡 Cara Menambahkan Mata Pelajaran Baru

### Langkah 1: Buat Berkas Baru di Folder `data/`
Gunakan format nama berkas:
`soal-[nama-mata-pelajaran].js`

Contoh:
- `data/soal-ipa.js` (Otomatis tampil sebagai **IPA**)
- `data/soal-ips.js` (Otomatis tampil sebagai **IPS**)
- `data/soal-pendidikan-pancasila.js` (Otomatis tampil sebagai **Pendidikan Pancasila**)
- `data/soal-bahasa-inggris.js` (Otomatis tampil sebagai **Bahasa Inggris**)
- `data/soal-agama-islam.js` (Otomatis tampil sebagai **Agama Islam**)

### Langkah 2: Gunakan Format Standar Bank Soal
Di dalam file baru, tuliskan array soal Anda dan panggil fungsi registrasi resmi `registerTkaSubject()` di baris paling bawah:

```javascript
/**
 * BANK SOAL ILMU PENGETAHUAN ALAM (IPA) - TKA SD
 */
const BANK_SOAL_IPA = [
  {
    "id": "IPA001",
    "subject": "ipa",
    "category": "Makhluk Hidup dan Lingkungannya",
    "difficulty": "mudah", // mudah, sedang, atau sulit
    "question": "Pertanyaan soal di sini...",
    "options": {
      "A": "Pilihan A",
      "B": "Pilihan B",
      "C": "Pilihan C",
      "D": "Pilihan D"
    },
    "answer": "B",
    "explanation": "Penjelasan mengapa jawaban B benar..."
  }
  // Tambahkan soal-soal berikutnya...
];

// Registrasi Resmi ke Sistem Auto-Discovery TKA SD
if (typeof registerTkaSubject === 'function') {
  registerTkaSubject({
    id: "ipa",                              // ID unik mata pelajaran
    title: "Ilmu Pengetahuan Alam (IPA)",   // Nama tampilan resmi
    icon: "fa-flask",                       // Ikon FontAwesome (opsional)
    questions: BANK_SOAL_IPA                // Array butir soal
  });
}
```

### Langkah 3: Buka Kembali Aplikasi
1. **Untuk nama mata pelajaran standar** (IPA, IPS, Pendidikan Pancasila, Bahasa Inggris, PAI, PJOK):
   Aplikasi secara otomatis mendeteksi dan memuat berkas tersebut saat halaman dibuka!
2. **Untuk sinkronisasi instan seluruh berkas / nama khusus**:
   Cukup klik dua kali `scan-subjects.bat` atau jalankan perintah:
   ```bash
   node scan-subjects.js
   ```
   Pemindai akan mendata seluruh file `soal-*.js` di folder `data/` dan memperbarui `data/manifest.js` secara otomatis dalam waktu 0,1 detik!

---

## 🔒 Penjelasan Teknis & Batasan Lingkungan Browser (*Security Sandbox*)

Secara standar keamanan web (*browser security model*), JavaScript yang berjalan di peramban (terutama protokol luring `file:///` atau Android WebView) **tidak diizinkan** melakukan pemindaian bebas terhadap struktur folder penyimpanan lokal (`directory listing`) tanpa interaksi pengguna (*file picker*).

Untuk mengatasi batasan tersebut secara elegan dan tangguh tanpa memerlukan server:
1. **Mekanisme *Convention Script Probing*:**
   Loader `js/subject-loader.js` secara otomatis memindai pola berkas umum (`soal-ipa.js`, `soal-ips.js`, dll.). Berkas yang tersedia dimuat secara asinkron tanpa memblokir sistem. Berkas yang tidak ada ditangani secara senyap (*graceful fallback*) tanpa memunculkan pesan galat di layar siswa.
2. **Mekanisme *Manifest Registry*:**
   Berkas `data/manifest.js` bertindak sebagai daftar indeks resmi yang dapat disinkronkan secara otomatis kapan saja via skrip `scan-subjects.js`.
3. **Ketahanan terhadap Kesalahan (*Fault Tolerance*):**
   Jika salah satu berkas bank soal mengalami galat sintaksis atau kekurangan properti penting (misal kunci jawaban kosong), sistem secara otomatis mengisolasi berkas tersebut dan mencatatnya di `TKA_FAILED_SUBJECTS`, sementara mata pelajaran lainnya **tetap dapat digunakan dengan normal**.

---

## 🧪 Hasil Uji Validasi Otomatis (`node verify_all.js`)

Semua file dan data telah diuji melalui skrip validasi otomatis dengan hasil:
- ✅ **Matematika:** 100 Butir Soal terdaftar (Icon: `fa-calculator`).
- ✅ **Bahasa Indonesia:** 100 Butir Soal + 28 Teks Bacaan terdaftar (Icon: `fa-book-reader`).
- ✅ **IPA (File Uji Baru):** 20 Butir Soal terdaftar secara otomatis (Icon: `fa-flask`).
- ✅ **Uji Fault Tolerance:** Deteksi data rusak berjalan normal tanpa merusak aplikasi.
- ✅ **Uji Format Nama:** Konversi `soal-pendidikan-pancasila.js` -> "Pendidikan Pancasila", `soal-ipa.js` -> "IPA" valid.
- ✅ **Uji Mesin Penilaian:** Simulasi penilaian dan rekapitulasi nilai IPA berhasil 100%.

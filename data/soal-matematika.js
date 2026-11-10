/**
 * BANK SOAL RESMI MATEMATIKA - TKA SD (100 SOAL LENGKAP)
 * Standar Kurikulum TKA SD Pusmendik Kemendikdasmen
 * 
 * Distribusi Materi:
 * - Bilangan: 30 Soal
 * - Geometri dan Pengukuran: 30 Soal
 * - Aljabar Dasar dan Pola Bilangan: 15 Soal
 * - Data dan Statistika: 25 Soal
 * 
 * Distribusi Tingkat Kesulitan:
 * - Mudah: 20 Soal
 * - Sedang: 50 Soal
 * - Sulit: 30 Soal
 * Total: 100 Soal
 */

const BANK_SOAL_MATEMATIKA = [
  {
    "id": "MTK001",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Sebuah perpustakaan sekolah memiliki koleksi 3.450 buku cerita. Pada bulan ini, perpustakaan menerima sumbangan sebanyak 1.275 buku dari alumni. Kemudian, sebanyak 860 buku yang sudah rusak disingkirkan dari rak. Banyak buku cerita yang layak baca di perpustakaan sekarang adalah ....",
    "options": {
      "A": "3.865 buku",
      "B": "3.855 buku",
      "C": "3.765 buku",
      "D": "3.655 buku"
    },
    "answer": "A",
    "explanation": "Banyak buku mula-mula = 3.450 buku.\nMenerima sumbangan = +1.275 buku.\nBuku rusak disingkirkan = -860 buku.\nTotal buku layak baca = 3.450 + 1.275 - 860 = 4.725 - 860 = 3.865 buku."
  },
  {
    "id": "MTK002",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Pak Ahmad memanen 24 keranjang buah apel. Setiap keranjang berisi 125 buah apel. Seluruh apel tersebut akan dikemas ulang ke dalam kantong plastik dengan isi 15 buah apel per kantong. Banyak kantong plastik yang dibutuhkan Pak Ahmad adalah ....",
    "options": {
      "A": "180 kantong",
      "B": "200 kantong",
      "C": "220 kantong",
      "D": "240 kantong"
    },
    "answer": "B",
    "explanation": "Total seluruh apel = 24 × 125 = 3.000 buah apel.\nBanyak kantong plastik yang dibutuhkan = 3.000 : 15 = 200 kantong."
  },
  {
    "id": "MTK003",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Hasil dari 1.500 + 250 × 4 - 600 : 5 adalah ....",
    "options": {
      "A": "2.380",
      "B": "2.420",
      "C": "2.480",
      "D": "2.520"
    },
    "answer": "A",
    "explanation": "Sesuai urutan hierarki operasi hitung:\n1. Perkalian: 250 × 4 = 1.000\n2. Pembagian: 600 : 5 = 120\n3. Penjumlahan dan pengurangan dari kiri ke kanan: 1.500 + 1.000 - 120 = 2.500 - 120 = 2.380."
  },
  {
    "id": "MTK004",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Suhu di dalam ruang pembeku daging mula-mula adalah -14°C. Karena terjadi pemadaman listrik selama 2 jam, suhu di dalam ruang tersebut naik sebesar 9°C. Setelah listrik menyala kembali, mesin pendingin menurunkan suhunya sebesar 7°C. Suhu ruang pembeku saat ini adalah ....",
    "options": {
      "A": "-12°C",
      "B": "-10°C",
      "C": "-8°C",
      "D": "-6°C"
    },
    "answer": "A",
    "explanation": "Suhu mula-mula = -14°C.\nNaik 9°C = -14 + 9 = -5°C.\nTurun 7°C = -5 - 7 = -12°C."
  },
  {
    "id": "MTK005",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Ibu memiliki persediaan tepung terigu sebanyak 3/4 kg di dapur. Ibu kemudian membeli lagi tepung terigu sebanyak 2/5 kg di warung. Jumlah seluruh tepung terigu yang dimiliki Ibu sekarang adalah ....",
    "options": {
      "A": "5/9 kg",
      "B": "1 1/20 kg",
      "C": "1 3/20 kg",
      "D": "1 7/20 kg"
    },
    "answer": "C",
    "explanation": "Jumlah tepung = 3/4 + 2/5.\nSamakan penyebut (KPK dari 4 dan 5 adalah 20):\n3/4 = 15/20\n2/5 = 8/20\n15/20 + 8/20 = 23/20 = 1 3/20 kg."
  },
  {
    "id": "MTK006",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "mudah",
    "question": "Bentuk persen dari pecahan 7/20 adalah ....",
    "options": {
      "A": "25%",
      "B": "30%",
      "C": "35%",
      "D": "40%"
    },
    "answer": "C",
    "explanation": "Untuk mengubah pecahan menjadi persen, kalikan dengan 100%:\n(7/20) × 100% = 7 × 5% = 35%."
  },
  {
    "id": "MTK007",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Hasil dari (-18) × 6 + 144 : (-12) - (-35) adalah ....",
    "options": {
      "A": "-85",
      "B": "-75",
      "C": "-65",
      "D": "-55"
    },
    "answer": "A",
    "explanation": "Selesaikan operasi perkalian dan pembagian terlebih dahulu:\n(-18) × 6 = -108\n144 : (-12) = -12\nPersamaan menjadi: -108 + (-12) - (-35)\n= -108 - 12 + 35\n= -120 + 35 = -85."
  },
  {
    "id": "MTK008",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Hasil dari 18² - ∛4.096 + 12² adalah ....",
    "options": {
      "A": "442",
      "B": "452",
      "C": "462",
      "D": "472"
    },
    "answer": "B",
    "explanation": "18² = 324\n∛4.096 = 16 (karena 16³ = 4.096)\n12² = 144\nMaka, 324 - 16 + 144 = 308 + 144 = 452."
  },
  {
    "id": "MTK009",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Hasil dari 3 1/4 - 1 2/3 + 2 1/2 adalah ....",
    "options": {
      "A": "3 11/12",
      "B": "4 1/12",
      "C": "4 5/12",
      "D": "4 7/12"
    },
    "answer": "B",
    "explanation": "Ubah ke pecahan biasa atau kelompokkan bilangan bulat dan pecahan:\n(3 - 1 + 2) + (1/4 - 2/3 + 1/2)\n= 4 + (3/12 - 8/12 + 6/12)\n= 4 + 1/12 = 4 1/12."
  },
  {
    "id": "MTK010",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Paman mempunyai seutas tali tambang sepanjang 14 2/5 meter. Tali tersebut dipotong menjadi beberapa bagian yang sama panjang. Setiap potongan panjangnya 1 1/5 meter. Banyak potongan tali yang dihasilkan Paman adalah ....",
    "options": {
      "A": "10 potong",
      "B": "11 potong",
      "C": "12 potong",
      "D": "13 potong"
    },
    "answer": "C",
    "explanation": "Panjang total tali = 14 2/5 = 72/5 meter.\nPanjang tiap potongan = 1 1/5 = 6/5 meter.\nBanyak potongan = (72/5) : (6/5) = (72/5) × (5/6) = 72 / 6 = 12 potong."
  },
  {
    "id": "MTK011",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Urutan pecahan berikut dari yang nilainya terkecil adalah ....",
    "options": {
      "A": "45% ; 0,6 ; 5/8 ; 2/3",
      "B": "45% ; 5/8 ; 0,6 ; 2/3",
      "C": "0,6 ; 45% ; 5/8 ; 2/3",
      "D": "45% ; 0,6 ; 2/3 ; 5/8"
    },
    "answer": "A",
    "explanation": "Ubah seluruh pecahan ke bentuk desimal:\n45% = 0,45\n0,6 = 0,60\n5/8 = 0,625\n2/3 ≈ 0,667\nUrutan dari terkecil: 0,45 (45%) < 0,60 (0,6) < 0,625 (5/8) < 0,667 (2/3)."
  },
  {
    "id": "MTK012",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Hasil dari 2,4 + 1 3/5 × 0,75 - 60% adalah ....",
    "options": {
      "A": "2,8",
      "B": "3,0",
      "C": "3,2",
      "D": "3,4"
    },
    "answer": "B",
    "explanation": "Ubah semua ke bentuk desimal:\n1 3/5 = 1,6\n60% = 0,6\nPerkalian terlebih dahulu: 1,6 × 0,75 = 1,2\nMaka: 2,4 + 1,2 - 0,6 = 3,6 - 0,6 = 3,0."
  },
  {
    "id": "MTK013",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Panitia bakti sosial sekolah menerima sumbangan 84 buku tulis, 56 pensil, dan 42 penggaris. Seluruh barang tersebut akan dibagikan kepada anak-anak panti asuhan dengan jumlah dan jenis barang yang sama rata untuk setiap anak. Banyak anak terbanyak yang dapat menerima paket bantuan tersebut adalah ....",
    "options": {
      "A": "7 anak",
      "B": "14 anak",
      "C": "21 anak",
      "D": "28 anak"
    },
    "answer": "B",
    "explanation": "Banyak penerima terbanyak adalah FPB dari 84, 56, dan 42.\nFaktorisasi prima:\n84 = 2² × 3 × 7\n56 = 2³ × 7\n42 = 2 × 3 × 7\nFPB = 2 × 7 = 14.\nJadi, banyak anak terbanyak adalah 14 anak."
  },
  {
    "id": "MTK014",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Lampu A menyala setiap 12 detik sekali, lampu B menyala setiap 15 detik sekali, dan lampu C menyala setiap 20 detik sekali. Jika pada pukul 19.30 ketiga lampu menyala bersama-sama untuk pertama kali, pada pukul berapa ketiga lampu akan menyala bersama-sama lagi untuk kedua kalinya?",
    "options": {
      "A": "Pukul 19.31",
      "B": "Pukul 19.32",
      "C": "Pukul 19.33",
      "D": "Pukul 19.35"
    },
    "answer": "A",
    "explanation": "Waktu menyala bersama adalah KPK dari 12, 15, dan 20 detik.\nFaktorisasi prima:\n12 = 2² × 3\n15 = 3 × 5\n20 = 2² × 5\nKPK = 2² × 3 × 5 = 60 detik = 1 menit.\nMaka ketiga lampu menyala bersama lagi pada pukul 19.30 + 1 menit = pukul 19.31."
  },
  {
    "id": "MTK015",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Koperasi sekolah memiliki 96 penghapus dan 120 buku gambar. Seluruh barang akan dimasukkan ke dalam beberapa kantong plastik secara merata tanpa ada sisa. Jika banyak kantong plastik dibuat sebanyak mungkin, isi buku gambar di dalam setiap kantong plastik adalah ....",
    "options": {
      "A": "4 buku gambar",
      "B": "5 buku gambar",
      "C": "6 buku gambar",
      "D": "8 buku gambar"
    },
    "answer": "B",
    "explanation": "Banyak kantong plastik maksimum = FPB dari 96 dan 120.\n96 = 2⁵ × 3\n120 = 2³ × 3 × 5\nFPB = 2³ × 3 = 24 kantong.\nIsi buku gambar per kantong = 120 : 24 = 5 buku gambar."
  },
  {
    "id": "MTK016",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Pak Budi memperoleh gaji bulanan sebesar Rp4.800.000,00. Sebanyak 1/4 bagian gaji digunakan untuk keperluan dapur, 3/8 bagian untuk biaya pendidikan anak-anaknya, dan 1/6 bagian untuk membayar tagihan listrik serta air. Sisanya ditabung oleh Pak Budi di bank. Berapakah uang yang ditabung Pak Budi setiap bulan?",
    "options": {
      "A": "Rp1.000.000,00",
      "B": "Rp1.050.000,00",
      "C": "Rp1.100.000,00",
      "D": "Rp1.200.000,00"
    },
    "answer": "A",
    "explanation": "Bagian keperluan dapur = 1/4 × 4.800.000 = Rp1.200.000,00.\nBagian pendidikan = 3/8 × 4.800.000 = Rp1.800.000,00.\nBagian tagihan = 1/6 × 4.800.000 = Rp800.000,00.\nTotal pengeluaran = 1.200.000 + 1.800.000 + 800.000 = Rp3.800.000,00.\nSisa uang yang ditabung = Rp4.800.000,00 - Rp3.800.000,00 = Rp1.000.000,00."
  },
  {
    "id": "MTK017",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Sebuah toko pakaian memberikan potongan harga (diskon) sebesar 25% untuk sepasang sepatu yang berlabel harga Rp360.000,00. Jika Doni membeli sepatu tersebut dan membayar dengan dua lembar uang seratus ribuan dan satu lembar uang lima puluh ribuan serta dua lembar uang sepuluh ribuan, uang kembalian yang diterima Doni adalah ....",
    "options": {
      "A": "Rp0,00 (pas)",
      "B": "Rp5.000,00",
      "C": "Rp10.000,00",
      "D": "Rp15.000,00"
    },
    "answer": "A",
    "explanation": "Besar diskon = 25% × Rp360.000 = Rp90.000,00.\nHarga yang harus dibayar = Rp360.000 - Rp90.000 = Rp270.000,00.\nUang yang diserahkan Doni = (2 × 100.000) + (1 × 50.000) + (2 × 10.000) = 200.000 + 50.000 + 20.000 = Rp270.000,00.\nUang kembalian = Rp270.000 - Rp270.000 = Rp0,00 (uang pas)."
  },
  {
    "id": "MTK018",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Dalam sebuah kompetisi matematika yang terdiri atas 50 soal, aturan penskoran adalah: setiap jawaban benar mendapat skor 4, jawaban salah mendapat skor -2, dan soal yang tidak dijawab mendapat skor -1. Farhan berhasil menjawab benar 38 soal dan tidak menjawab 4 soal. Skor total yang diperoleh Farhan adalah ....",
    "options": {
      "A": "130",
      "B": "132",
      "C": "136",
      "D": "140"
    },
    "answer": "B",
    "explanation": "Total soal = 50 soal.\nJawaban benar = 38 soal (skor: 38 × 4 = 152).\nTidak dijawab = 4 soal (skor: 4 × (-1) = -4).\nJawaban salah = 50 - 38 - 4 = 8 soal (skor: 8 × (-2) = -16).\nSkor total = 152 + (-16) + (-4) = 152 - 20 = 132."
  },
  {
    "id": "MTK019",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Sebuah bak penampungan air terisi 5/8 bagian. Setelah digunakan untuk menyiram tanaman dan mencuci piring sebanyak 45 liter, air di dalam bak tersisa 1/2 bagian. Kapasitas volume bak air tersebut jika terisi penuh adalah ....",
    "options": {
      "A": "320 liter",
      "B": "360 liter",
      "C": "400 liter",
      "D": "420 liter"
    },
    "answer": "B",
    "explanation": "Selisih bagian air yang digunakan = 5/8 - 1/2 = 5/8 - 4/8 = 1/8 bagian.\n1/8 bagian kapasitas bak = 45 liter.\nKapasitas bak penuh = 45 × 8 = 360 liter."
  },
  {
    "id": "MTK020",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Paman membeli 18,5 liter minyak goreng curah. Minyak tersebut akan dimasukkan ke dalam botol-botol kecil berukuran 0,75 liter hingga botol terisi penuh sebanyak-banyaknya. Sisa minyak goreng yang tidak dapat memenuhi satu botol penuh adalah ....",
    "options": {
      "A": "0,25 liter",
      "B": "0,50 liter",
      "C": "0,60 liter",
      "D": "0,70 liter"
    },
    "answer": "B",
    "explanation": "18,5 : 0,75 = 1850 : 75 = 24 sisa 50 per 75.\n24 botol terisi penuh memerlukan: 24 × 0,75 = 18,0 liter.\nSisa minyak yang belum masuk botol penuh = 18,5 - 18,0 = 0,50 liter."
  },
  {
    "id": "MTK021",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Seorang pedagang buah membeli 8 peti jeruk dengan berat kotor 35 kg setiap peti. Tara setiap peti adalah 1,5 kg. Seluruh jeruk bersih dijual dengan harga Rp18.000,00 per kg. Uang total hasil penjualan jeruk pedagang tersebut adalah ....",
    "options": {
      "A": "Rp4.724.000,00",
      "B": "Rp4.824.000,00",
      "C": "Rp4.924.000,00",
      "D": "Rp5.040.000,00"
    },
    "answer": "B",
    "explanation": "Berat bersih (neto) 1 peti = 35 - 1,5 = 33,5 kg.\nNeto 8 peti = 8 × 33,5 = 268 kg.\nTotal hasil penjualan = 268 × Rp18.000 = Rp4.824.000,00."
  },
  {
    "id": "MTK022",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Rian berlatih bulu tangkis setiap 4 hari sekali, Dito setiap 6 hari sekali, dan Bayu setiap 8 hari sekali di GOR yang sama. Pada hari Sabtu, 3 Februari 2024, mereka bertiga berlatih bersama untuk pertama kali. Pada hari dan tanggal berapakah mereka akan berlatih bersama untuk kedua kalinya? (Ingat tahun 2024 adalah tahun kabisat, bulan Februari memiliki 29 hari).",
    "options": {
      "A": "Senin, 26 Februari 2024",
      "B": "Selasa, 27 Februari 2024",
      "C": "Rabu, 28 Februari 2024",
      "D": "Kamis, 29 Februari 2024"
    },
    "answer": "B",
    "explanation": "KPK dari 4, 6, dan 8:\n4 = 2²; 6 = 2 × 3; 8 = 2³.\nKPK = 2³ × 3 = 24 hari.\nMereka bertemu lagi 24 hari setelah 3 Februari 2024 = 3 + 24 = 27 Februari 2024.\nHari: 24 hari = 3 minggu + 3 hari. Tiga hari setelah Sabtu adalah Selasa.\nJadi, mereka bertemu kembali pada hari Selasa, 27 Februari 2024."
  },
  {
    "id": "MTK023",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Pak Joko memiliki sebidang tanah warisan. Sebanyak 2/5 bagian tanah diberikan kepada anak sulung. Dari sisa tanah tersebut, 1/3 bagian diberikan kepada anak bungsu. Jika luas tanah yang masih tersisa milik Pak Joko saat ini adalah 240 m², berapakah luas tanah warisan Pak Joko mula-mula?",
    "options": {
      "A": "480 m²",
      "B": "540 m²",
      "C": "600 m²",
      "D": "720 m²"
    },
    "answer": "C",
    "explanation": "Tanah mula-mula = 1 bagian.\nBagian anak sulung = 2/5, sisa tanah = 1 - 2/5 = 3/5 bagian.\nBagian anak bungsu = 1/3 dari sisa = 1/3 × 3/5 = 1/5 bagian.\nSisa tanah Pak Joko = (3/5) - (1/5) = 2/5 bagian.\nJika 2/5 bagian = 240 m², maka luas mula-mula = 240 × (5/2) = 120 × 5 = 600 m²."
  },
  {
    "id": "MTK024",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Seorang pedagang membeli 50 kg mangga dengan total modal Rp600.000,00. Sebanyak 30 kg mangga berhasil dijual dengan harga Rp16.000,00 per kg. Sebanyak 15 kg mangga dijual dengan harga promo Rp12.000,00 per kg karena sudah sangat matang, sedangkan sisanya busuk dan dibuang. Persentase keuntungan yang diperoleh pedagang tersebut adalah ....",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "12%",
      "D": "15%"
    },
    "answer": "B",
    "explanation": "Modal pembelian = Rp600.000,00.\nPendapatan penjualan:\n- 30 kg × Rp16.000 = Rp480.000,00.\n- 15 kg × Rp12.000 = Rp180.000,00.\n- Sisa busuk = 50 - 30 - 15 = 5 kg (Rp0).\nTotal pendapatan = Rp480.000 + Rp180.000 = Rp660.000,00.\nKeuntungan bersih = Rp660.000 - Rp600.000 = Rp60.000,00.\nPersentase keuntungan = (60.000 / 600.000) × 100% = 10%."
  },
  {
    "id": "MTK025",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Nilai dari (2 1/2 - 1 3/4) : (1 1/8 + 3/8) × 2 2/3 adalah ....",
    "options": {
      "A": "1 1/3",
      "B": "1 2/3",
      "C": "2 1/3",
      "D": "2 2/3"
    },
    "answer": "A",
    "explanation": "Selesaikan kurung pertama:\n2 1/2 - 1 3/4 = 5/2 - 7/4 = 10/4 - 7/4 = 3/4.\nSelesaikan kurung kedua:\n1 1/8 + 3/8 = 9/8 + 3/8 = 12/8 = 3/2.\nOperasi menjadi:\n(3/4) : (3/2) × 2 2/3\n= (3/4 × 2/3) × 8/3\n= 1/2 × 8/3 = 8/6 = 4/3 = 1 1/3."
  },
  {
    "id": "MTK026",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Tiga anak, yaitu Alif, Bagas, dan Candra, patungan untuk membeli perlengkapan tenda pramuka seharga Rp360.000,00. Perbandingan uang iuran Alif dan Bagas adalah 2 : 3, sedangkan iuran Bagas dan Candra adalah 3 : 4. Berapakah besar iuran yang dibayarkan oleh Alif?",
    "options": {
      "A": "Rp80.000,00",
      "B": "Rp90.000,00",
      "C": "Rp120.000,00",
      "D": "Rp160.000,00"
    },
    "answer": "A",
    "explanation": "Perbandingan Alif : Bagas : Candra = 2 : 3 : 4.\nJumlah bagian perbandingan = 2 + 3 + 4 = 9 bagian.\nNilai total = Rp360.000,00.\nBesar iuran Alif = (2 / 9) × Rp360.000,00 = 2 × Rp40.000,00 = Rp80.000,00."
  },
  {
    "id": "MTK027",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Sebuah kotak berisi sejumlah kelereng kurang dari 100 butir. Jika kelereng dihitung dalam kelompok 4 butir, tersisa 3 butir. Jika dihitung dalam kelompok 5 butir, tersisa 4 butir. Jika dihitung dalam kelompok 6 butir, tersisa 5 butir. Berapakah banyak kelereng yang ada di dalam kotak tersebut?",
    "options": {
      "A": "59 butir",
      "B": "69 butir",
      "C": "79 butir",
      "D": "89 butir"
    },
    "answer": "A",
    "explanation": "Perhatikan pola sisa pembagian:\nSisa 3 jika dibagi 4 (artinya kurang 1 agar habis dibagi 4: 4 - 3 = 1).\nSisa 4 jika dibagi 5 (kurang 1 agar habis dibagi 5: 5 - 4 = 1).\nSisa 5 jika dibagi 6 (kurang 1 agar habis dibagi 6: 6 - 5 = 1).\nBilangan tersebut adalah (KPK dari 4, 5, dan 6) dikurangi 1.\nKPK(4, 5, 6) = 60.\nBanyak kelereng = 60 - 1 = 59 butir.\nCek: 59 : 4 = 14 sisa 3; 59 : 5 = 11 sisa 4; 59 : 6 = 9 sisa 5. Tepat 59 butir."
  },
  {
    "id": "MTK028",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Dua buah bus antarkota, Bus Harapan dan Bus Sentosa, berangkat dari terminal yang sama. Bus Harapan berangkat setiap 45 menit sekali, sedangkan Bus Sentosa berangkat setiap 60 menit sekali. Jika kedua bus berangkat bersamaan pertama kali pada pukul 06.30, maka mereka akan berangkat bersamaan untuk ketiga kalinya pada pukul ....",
    "options": {
      "A": "Pukul 09.30",
      "B": "Pukul 11.00",
      "C": "Pukul 12.30",
      "D": "Pukul 13.00"
    },
    "answer": "C",
    "explanation": "Interval bersama = KPK dari 45 dan 60 menit.\n45 = 3² × 5\n60 = 2² × 3 × 5\nKPK = 2² × 3² × 5 = 4 × 9 × 5 = 180 menit = 3 jam.\nBerangkat bersama ke-1 = pukul 06.30.\nBerangkat bersama ke-2 = 06.30 + 3 jam = pukul 09.30.\nBerangkat bersama ke-3 = 09.30 + 3 jam = pukul 12.30."
  },
  {
    "id": "MTK029",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sulit",
    "question": "Diketahui dua buah bilangan adalah 36 dan 48. Selisih antara nilai KPK dan nilai FPB dari kedua bilangan tersebut adalah ....",
    "options": {
      "A": "120",
      "B": "132",
      "C": "144",
      "D": "156"
    },
    "answer": "B",
    "explanation": "Faktorisasi prima:\n36 = 2² × 3²\n48 = 2⁴ × 3\nFPB = 2² × 3 = 4 × 3 = 12.\nKPK = 2⁴ × 3² = 16 × 9 = 144.\nSelisih KPK dan FPB = 144 - 12 = 132."
  },
  {
    "id": "MTK030",
    "subject": "matematika",
    "category": "Bilangan",
    "difficulty": "sedang",
    "question": "Sebuah kapal selam mula-mula berada pada kedalaman 180 meter di bawah permukaan air laut. Kapal selam tersebut kemudian menyelam lebih dalam sejauh 75 meter. Beberapa saat kemudian, kapal selam naik setinggi 120 meter untuk menghindari palung laut. Posisi kapal selam sekarang berada pada kedalaman ....",
    "options": {
      "A": "135 meter di bawah permukaan laut",
      "B": "145 meter di bawah permukaan laut",
      "C": "195 meter di bawah permukaan laut",
      "D": "225 meter di bawah permukaan laut"
    },
    "answer": "A",
    "explanation": "Kedalaman dinyatakan dengan bilangan negatif:\nPosisi awal = -180 meter.\nMenyelam lebih dalam 75 m = -180 - 75 = -255 meter.\nNaik setinggi 120 m = -255 + 120 = -135 meter.\nArtinya kapal selam berada pada kedalaman 135 meter di bawah permukaan laut."
  },
  {
    "id": "MTK031",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Perhatikan sifat-sifat bangun datar berikut:\n(1) Memiliki empat sisi yang sama panjang.\n(2) Sudut-sudut yang berhadapan sama besar, tetapi bukan sudut siku-siku.\n(3) Kedua diagonalnya saling berpotongan tegak lurus dan membagi dua sama panjang.\n(4) Memiliki dua sumbu simetri lipat.\nBangun datar yang memiliki sifat-sifat tersebut adalah ....",
    "options": {
      "A": "Persegi",
      "B": "Belah ketupat",
      "C": "Jajargenjang",
      "D": "Layang-layang"
    },
    "answer": "B",
    "explanation": "Belah ketupat memiliki 4 sisi sama panjang, 2 pasang sudut berhadapan sama besar (bukan siku-siku), diagonal saling tegak lurus dan membagi dua sama panjang, serta memiliki 2 sumbu simetri."
  },
  {
    "id": "MTK032",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Banyak sisi, rusuk, dan titik sudut pada sebuah prisma tegak segitiga berturut-turut adalah ....",
    "options": {
      "A": "5 sisi, 9 rusuk, dan 6 titik sudut",
      "B": "5 sisi, 8 rusuk, dan 5 titik sudut",
      "C": "4 sisi, 6 rusuk, dan 4 titik sudut",
      "D": "6 sisi, 9 rusuk, dan 6 titik sudut"
    },
    "answer": "A",
    "explanation": "Prisma segitiga memiliki:\n- Sisi: 2 sisi segitiga (alas & tutup) + 3 sisi tegak = 5 sisi.\n- Rusuk: 3 rusuk alas + 3 rusuk tutup + 3 rusuk tegak = 9 rusuk.\n- Titik sudut: 3 di alas + 3 di tutup = 6 titik sudut."
  },
  {
    "id": "MTK033",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Bangun datar persegi panjang memiliki jumlah simetri lipat dan simetri putar tingkat berturut-turut sebanyak ....",
    "options": {
      "A": "2 dan 2",
      "B": "4 dan 4",
      "C": "2 dan 4",
      "D": "4 dan 2"
    },
    "answer": "A",
    "explanation": "Persegi panjang memiliki 2 simetri lipat (sumbu vertikal dan horizontal) dan 2 simetri putar (tingkat 2 pada putaran 180° dan 360°)."
  },
  {
    "id": "MTK034",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Kebun sayur kakek berbentuk persegi panjang berukuran panjang 18 meter dan lebar 12 meter. Di sekeliling kebun akan dipasang kawat pagar pembatas. Panjang kawat minimal yang dibutuhkan kakek untuk satu kali putaran pagar adalah ....",
    "options": {
      "A": "50 meter",
      "B": "60 meter",
      "C": "108 meter",
      "D": "216 meter"
    },
    "answer": "B",
    "explanation": "Keliling persegi panjang = 2 × (panjang + lebar)\n= 2 × (18 + 12)\n= 2 × 30 = 60 meter."
  },
  {
    "id": "MTK035",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Siswa kelas 6 SD Melati mengikuti kegiatan perkemahan Sabtu-Minggu selama 1 hari 6 jam 45 menit. Lama kegiatan tersebut jika dinyatakan dalam satuan menit adalah ....",
    "options": {
      "A": "1.745 menit",
      "B": "1.785 menit",
      "C": "1.845 menit",
      "D": "1.905 menit"
    },
    "answer": "C",
    "explanation": "1 hari = 24 jam × 60 = 1.440 menit.\n6 jam = 6 × 60 = 360 menit.\n45 menit = 45 menit.\nTotal menit = 1.440 + 360 + 45 = 1.845 menit."
  },
  {
    "id": "MTK036",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "mudah",
    "question": "Koperasi unit desa menampung hasil panen padi sebanyak 2,5 ton, jagung sebanyak 8 kuintal, dan kedelai sebanyak 350 kg. Berat total seluruh hasil panen tersebut dalam satuan kilogram adalah ....",
    "options": {
      "A": "3.450 kg",
      "B": "3.550 kg",
      "C": "3.650 kg",
      "D": "3.750 kg"
    },
    "answer": "C",
    "explanation": "2,5 ton = 2,5 × 1.000 kg = 2.500 kg.\n8 kuintal = 8 × 100 kg = 800 kg.\n350 kg = 350 kg.\nTotal berat = 2.500 + 800 + 350 = 3.650 kg."
  },
  {
    "id": "MTK037",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah bidang tanah berbentuk gabungan persegi dan segitiga siku-siku yang menempel pada salah satu sisinya. Panjang sisi persegi adalah 14 meter. Tinggi segitiga sama dengan panjang sisi persegi dan alas segitiga adalah 10 meter. Luas seluruh bidang tanah tersebut adalah ....",
    "options": {
      "A": "246 m²",
      "B": "256 m²",
      "C": "266 m²",
      "D": "276 m²"
    },
    "answer": "C",
    "explanation": "Luas persegi = sisi × sisi = 14 × 14 = 196 m².\nLuas segitiga siku-siku = (alas × tinggi) / 2 = (10 × 14) / 2 = 70 m².\nLuas total = 196 + 70 = 266 m²."
  },
  {
    "id": "MTK038",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah taman kota berbentuk lingkaran dengan diameter 28 meter. Di sekeliling tepi taman akan dipasangi lampu taman dengan jarak antarlampu 4 meter. Banyak lampu taman yang dibutuhkan adalah .... (Gunakan π = 22/7)",
    "options": {
      "A": "20 buah",
      "B": "22 buah",
      "C": "24 buah",
      "D": "26 buah"
    },
    "answer": "B",
    "explanation": "Keliling lingkaran = π × d = (22/7) × 28 = 22 × 4 = 88 meter.\nBanyak lampu = Keliling : jarak antarlampu = 88 : 4 = 22 buah."
  },
  {
    "id": "MTK039",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Ibu membuat taplak meja makan berbentuk setengah lingkaran dengan jari-jari 21 cm. Luas kain yang digunakan Ibu untuk taplak meja tersebut adalah .... (Gunakan π = 22/7)",
    "options": {
      "A": "693 cm²",
      "B": "792 cm²",
      "C": "1.386 cm²",
      "D": "1.485 cm²"
    },
    "answer": "A",
    "explanation": "Luas 1 lingkaran penuh = π × r² = (22/7) × 21 × 21 = 22 × 3 × 21 = 1.386 cm².\nLuas setengah lingkaran = 1/2 × 1.386 = 693 cm²."
  },
  {
    "id": "MTK040",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah kardus besar berbentuk balok dengan ukuran panjang 60 cm, lebar 40 cm, dan tinggi 30 cm. Kardus tersebut akan diisi kotak kue berbentuk kubus dengan panjang rusuk 10 cm sampai penuh. Banyak kotak kue yang dapat masuk ke dalam kardus adalah ....",
    "options": {
      "A": "64 kotak",
      "B": "72 kotak",
      "C": "80 kotak",
      "D": "96 kotak"
    },
    "answer": "B",
    "explanation": "Volume balok = 60 × 40 × 30 = 72.000 cm³.\nVolume 1 kotak kubus = 10 × 10 × 10 = 1.000 cm³.\nBanyak kotak kue = 72.000 : 1.000 = 72 kotak."
  },
  {
    "id": "MTK041",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah bak air berbentuk balok tanpa tutup memiliki panjang 1,5 meter, lebar 1 meter, dan tinggi 0,8 meter. Bagian dalam bak tersebut akan dilapisi keramik. Luas permukaan bagian dalam bak air yang akan dilapisi keramik adalah ....",
    "options": {
      "A": "4,5 m²",
      "B": "5,5 m²",
      "C": "6,5 m²",
      "D": "7,0 m²"
    },
    "answer": "B",
    "explanation": "Luas permukaan balok tanpa tutup = Luas alas + 2 × (L depan + L samping)\n= (p × l) + 2 × (p × t + l × t)\n= (1,5 × 1) + 2 × (1,5 × 0,8 + 1 × 0,8)\n= 1,5 + 2 × (1,2 + 0,8)\n= 1,5 + 2 × 2,0\n= 1,5 + 4,0 = 5,5 m²."
  },
  {
    "id": "MTK042",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah pipa air mampu mengalirkan air dengan debit 15 liter/menit. Sebuah kolam ikan berukuran panjang 120 cm, lebar 100 cm, dan tinggi 75 cm dalam keadaan kosong akan diisi air hingga penuh. Waktu yang diperlukan untuk mengisi kolam ikan tersebut adalah ....",
    "options": {
      "A": "45 menit",
      "B": "50 menit",
      "C": "60 menit",
      "D": "75 menit"
    },
    "answer": "C",
    "explanation": "Volume kolam = 120 cm × 100 cm × 75 cm = 900.000 cm³.\n1 liter = 1.000 cm³ -> 900.000 cm³ = 900 liter.\nDebit = 15 liter/menit.\nWaktu = Volume : Debit = 900 : 15 = 60 menit (1 jam)."
  },
  {
    "id": "MTK043",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Ayah mengendarai mobil dari Kota Solo menuju Yogyakarta yang berjarak 65 km. Ayah berangkat pada pukul 07.45 dan tiba di tujuan pada pukul 09.00. Kecepatan rata-rata mobil yang dikendarai Ayah adalah ....",
    "options": {
      "A": "48 km/jam",
      "B": "52 km/jam",
      "C": "56 km/jam",
      "D": "60 km/jam"
    },
    "answer": "B",
    "explanation": "Waktu tempuh = 09.00 - 07.45 = 1 jam 15 menit = 1 1/4 jam = 5/4 jam.\nJarak = 65 km.\nKecepatan = Jarak : Waktu = 65 : (5/4) = 65 × (4/5) = 13 × 4 = 52 km/jam."
  },
  {
    "id": "MTK044",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah lapangan olahraga berbentuk trapesium sama kaki dengan panjang sisi-sisi sejajar adalah 28 meter dan 42 meter. Jika jarak tegak lurus antara kedua sisi sejajar tersebut adalah 18 meter, luas lapangan olahraga tersebut adalah ....",
    "options": {
      "A": "580 m²",
      "B": "630 m²",
      "C": "680 m²",
      "D": "720 m²"
    },
    "answer": "B",
    "explanation": "Luas trapesium = 1/2 × (jumlah sisi sejajar) × tinggi\n= 1/2 × (28 + 42) × 18\n= 1/2 × 70 × 18\n= 35 × 18 = 630 m²."
  },
  {
    "id": "MTK045",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Jarak antara Kota Madiun dan Kota Surabaya pada sebuah peta berskala 1 : 1.500.000 adalah 11 cm. Jarak sebenarnya antara kedua kota tersebut adalah ....",
    "options": {
      "A": "150 km",
      "B": "165 km",
      "C": "175 km",
      "D": "180 km"
    },
    "answer": "B",
    "explanation": "Jarak sebenarnya = Jarak pada peta × Skala\n= 11 cm × 1.500.000 = 16.500.000 cm.\nUbah cm ke km (bagi 100.000):\n16.500.000 : 100.000 = 165 km."
  },
  {
    "id": "MTK046",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Dika berlari mengelilingi lapangan sepak bola yang kelilingnya 350 meter sebanyak 4 putaran. Kemudian, ia melanjutkan lari di jalan lurus sejauh 1,2 km. Jarak total yang telah ditempuh Dika adalah ....",
    "options": {
      "A": "2.400 meter",
      "B": "2.500 meter",
      "C": "2.600 meter",
      "D": "2.800 meter"
    },
    "answer": "C",
    "explanation": "Lari di lapangan = 4 × 350 meter = 1.400 meter.\nLari di jalan lurus = 1,2 km = 1.200 meter.\nJarak total = 1.400 + 1.200 = 2.600 meter."
  },
  {
    "id": "MTK047",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Pak Salim memiliki tanah berbentuk jajargenjang dengan panjang alas 36 meter dan tinggi 24 meter. Tanah tersebut akan ditanami rumput hias dengan biaya penanaman Rp25.000,00 per m². Biaya total yang harus dikeluarkan Pak Salim untuk menanami seluruh tanah tersebut adalah ....",
    "options": {
      "A": "Rp19.600.000,00",
      "B": "Rp20.800.000,00",
      "C": "Rp21.600.000,00",
      "D": "Rp22.400.000,00"
    },
    "answer": "C",
    "explanation": "Luas jajargenjang = alas × tinggi = 36 × 24 = 864 m².\nBiaya total = 864 × Rp25.000,00 = Rp21.600.000,00."
  },
  {
    "id": "MTK048",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah drum minyak berbentuk tabung memiliki jari-jari alas 35 cm dan tinggi 100 cm. Volume drum tersebut adalah .... (Gunakan π = 22/7)",
    "options": {
      "A": "350 liter",
      "B": "385 liter",
      "C": "420 liter",
      "D": "450 liter"
    },
    "answer": "B",
    "explanation": "Volume tabung = π × r² × t\n= (22/7) × 35 × 35 × 100\n= 22 × 5 × 35 × 100\n= 110 × 3.500 = 385.000 cm³.\n1 liter = 1.000 cm³, maka 385.000 cm³ = 385 liter."
  },
  {
    "id": "MTK049",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Sebuah balok memiliki 6 sisi. Jika sisi alas balok berukuran 12 cm × 8 cm, dan sisi depan balok berukuran 12 cm × 5 cm, maka luas sisi samping balok tersebut adalah ....",
    "options": {
      "A": "40 cm²",
      "B": "60 cm²",
      "C": "96 cm²",
      "D": "120 cm²"
    },
    "answer": "A",
    "explanation": "Ukuran balok adalah:\nPanjang p = 12 cm\nLebar l = 8 cm\nTinggi t = 5 cm (dari sisi depan 12 × 5)\nLuas sisi samping = lebar × tinggi = 8 cm × 5 cm = 40 cm²."
  },
  {
    "id": "MTK050",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sedang",
    "question": "Riko memiliki dua buah kotak mainan berbentuk kubus. Panjang rusuk kotak pertama adalah 15 cm, sedangkan panjang rusuk kotak kedua adalah 12 cm. Selisih volume kedua kotak mainan Riko adalah ....",
    "options": {
      "A": "1.547 cm³",
      "B": "1.647 cm³",
      "C": "1.747 cm³",
      "D": "1.847 cm³"
    },
    "answer": "B",
    "explanation": "Volume kubus 1 = 15³ = 3.375 cm³.\nVolume kubus 2 = 12³ = 1.728 cm³.\nSelisih volume = 3.375 - 1.728 = 1.647 cm³."
  },
  {
    "id": "MTK051",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah kolam renang berbentuk persegi panjang memiliki panjang 20 meter dan lebar 15 meter. Di sekeliling luar kolam tersebut dibuat jalan setapak selebar 1,5 meter. Luas jalan setapak tersebut adalah ....",
    "options": {
      "A": "105 m²",
      "B": "114 m²",
      "C": "120 m²",
      "D": "124 m²"
    },
    "answer": "B",
    "explanation": "Ukuran kolam mula-mula:\np = 20 m, l = 15 m -> Luas kolam = 20 × 15 = 300 m².\nUkuran luar beserta jalan setapak (bertambah lebar 1,5 m di kiri dan kanan):\nPanjang luar = 20 + 1,5 + 1,5 = 23 meter.\nLebar luar = 15 + 1,5 + 1,5 = 18 meter.\nLuas total luar = 23 × 18 = 414 m².\nLuas jalan setapak = Luas total luar - Luas kolam = 414 - 300 = 114 m²."
  },
  {
    "id": "MTK052",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah lingkaran berada tepat di dalam sebuah persegi sedemikian sehingga sisi-sisi lingkaran menyinggung keempat sisi persegi. Jika panjang sisi persegi adalah 28 cm, luas daerah di dalam persegi yang berada di luar lingkaran (daerah sudut yang diarsir) adalah .... (Gunakan π = 22/7)",
    "options": {
      "A": "154 cm²",
      "B": "168 cm²",
      "C": "172 cm²",
      "D": "196 cm²"
    },
    "answer": "B",
    "explanation": "Panjang sisi persegi s = 28 cm.\nDiameter lingkaran d = 28 cm, sehingga jari-jari r = 14 cm.\nLuas persegi = s² = 28 × 28 = 784 cm².\nLuas lingkaran = π × r² = (22/7) × 14 × 14 = 22 × 2 × 14 = 616 cm².\nLuas daerah yang diarsir = Luas persegi - Luas lingkaran\n= 784 - 616 = 168 cm²."
  },
  {
    "id": "MTK053",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Jarak Kota P ke Kota Q adalah 180 km. Pak Danu berangkat dari Kota P menuju Kota Q pada pukul 08.15 dengan kecepatan rata-rata 50 km/jam. Pada saat yang sama, Pak Hari berangkat dari Kota Q menuju Kota P dengan kecepatan rata-rata 40 km/jam melalui jalan yang sama. Pada pukul berapakah mereka akan berpapasan di jalan?",
    "options": {
      "A": "Pukul 09.45",
      "B": "Pukul 10.00",
      "C": "Pukul 10.15",
      "D": "Pukul 10.30"
    },
    "answer": "C",
    "explanation": "Kedua kendaraan berangkat bersamaan dari arah berlawanan.\nWaktu berpapasan = Jarak Total : (Kecepatan 1 + Kecepatan 2)\n= 180 : (50 + 40)\n= 180 : 90 = 2 jam.\nWaktu berpapasan = 08.15 + 2 jam = pukul 10.15."
  },
  {
    "id": "MTK054",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Arman mengendarai sepeda motor dari Kota A ke Kota B dengan kecepatan rata-rata 40 km/jam pada pukul 06.30. Setengah jam kemudian (pukul 07.00), Bima menyusul dengan rute yang sama mengendarai mobil berkecepatan rata-rata 60 km/jam. Pada pukul berapakah Bima berhasil menyusul Arman?",
    "options": {
      "A": "Pukul 07.45",
      "B": "Pukul 08.00",
      "C": "Pukul 08.15",
      "D": "Pukul 08.30"
    },
    "answer": "B",
    "explanation": "Selisih waktu berangkat = 30 menit = 0,5 jam.\nJarak yang sudah ditempuh Arman saat Bima berangkat = 40 km/jam × 0,5 jam = 20 km.\nSelisih kecepatan = 60 - 40 = 20 km/jam.\nWaktu menyusul = Selisih jarak : Selisih kecepatan = 20 : 20 = 1 jam setelah Bima berangkat.\nWaktu menyusul = 07.00 + 1 jam = pukul 08.00."
  },
  {
    "id": "MTK055",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah balok kayu berukuran panjang 10 cm, lebar 6 cm, dan tinggi 6 cm ditempelkan rapat dengan sebuah kubus kayu berukuran rusuk 6 cm pada sisi samping balok yang berukuran 6 cm × 6 cm. Luas seluruh permukaan luar bangun gabungan tersebut adalah ....",
    "options": {
      "A": "420 cm²",
      "B": "436 cm²",
      "C": "456 cm²",
      "D": "472 cm²"
    },
    "answer": "C",
    "explanation": "Luas permukaan balok = 2 × (10×6 + 10×6 + 6×6) = 2 × (60 + 60 + 36) = 2 × 156 = 312 cm².\nLuas permukaan kubus = 6 × (6 × 6) = 216 cm².\nBidang yang berhimpit adalah 1 sisi kubus (6 cm × 6 cm = 36 cm²) yang tertutup pada balok dan kubus (berkurang 2 × 36 cm² = 72 cm²).\nLuas permukaan luar gabungan = 312 + 216 - 72 = 456 cm²."
  },
  {
    "id": "MTK056",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah tangki air berbentuk kubus dengan panjang rusuk bagian dalam 1 meter terisi penuh air. Keran pengeluaran mengalirkan air dengan debit 25 liter/menit, dan pada saat bersamaan terjadi kebocoran di bagian dasar tangki sebesar 5 liter/menit. Air di dalam tangki akan habis terkuras dalam waktu ....",
    "options": {
      "A": "30 menit 20 detik",
      "B": "33 menit 20 detik",
      "C": "35 menit 40 detik",
      "D": "40 menit 00 detik"
    },
    "answer": "B",
    "explanation": "Volume tangki = 1 m × 1 m × 1 m = 1 m³ = 1.000 liter.\nLaju pengeluaran total air = Debit keran + Debit bocor = 25 + 5 = 30 liter/menit.\nWaktu habis terkuras = 1.000 : 30 = 33 1/3 menit = 33 menit 20 detik."
  },
  {
    "id": "MTK057",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Ruang aula pertemuan berbentuk persegi panjang berukuran 9 meter × 6 meter akan dipasangi ubin keramik berukuran 30 cm × 30 cm. Satu dus keramik berisi 10 buah ubin. Banyak dus keramik minimal yang harus dibeli agar mencukupi seluruh lantai aula adalah ....",
    "options": {
      "A": "55 dus",
      "B": "60 dus",
      "C": "65 dus",
      "D": "70 dus"
    },
    "answer": "B",
    "explanation": "Luas lantai aula = 9 m × 6 m = 54 m² = 540.000 cm².\nLuas satu buah ubin keramik = 30 cm × 30 cm = 900 cm².\nBanyak ubin yang dibutuhkan = 540.000 : 900 = 600 ubin.\nSatu dus berisi 10 ubin, maka banyak dus = 600 : 10 = 60 dus."
  },
  {
    "id": "MTK058",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah tempat sampah kaleng berbentuk tabung tanpa tutup memiliki diameter 28 cm dan tinggi 35 cm. Luas pelat seng yang digunakan untuk membuat tempat sampah tersebut adalah .... (Gunakan π = 22/7)",
    "options": {
      "A": "3.080 cm²",
      "B": "3.388 cm²",
      "C": "3.696 cm²",
      "D": "4.004 cm²"
    },
    "answer": "C",
    "explanation": "Diameter = 28 cm -> Jari-jari r = 14 cm. Tinggi t = 35 cm.\nLuas tabung tanpa tutup = Luas alas + Luas selimut\n= π × r² + 2 × π × r × t\n= (22/7 × 14 × 14) + (2 × 22/7 × 14 × 35)\n= 616 + (2 × 22 × 2 × 35)\n= 616 + 3.080 = 3.696 cm²."
  },
  {
    "id": "MTK059",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Sebuah gedung serbaguna digambar pada denah berskala 1 : 400 dengan ukuran panjang 8 cm dan lebar 5 cm. Luas sebenarnya dari lantai gedung serbaguna tersebut adalah ....",
    "options": {
      "A": "320 m²",
      "B": "480 m²",
      "C": "640 m²",
      "D": "800 m²"
    },
    "answer": "C",
    "explanation": "Panjang sebenarnya = 8 cm × 400 = 3.200 cm = 32 meter.\nLebar sebenarnya = 5 cm × 400 = 2.000 cm = 20 meter.\nLuas sebenarnya = Panjang sebenarnya × Lebar sebenarnya\n= 32 m × 20 m = 640 m²."
  },
  {
    "id": "MTK060",
    "subject": "matematika",
    "category": "Geometri dan Pengukuran",
    "difficulty": "sulit",
    "question": "Perhatikan sebuah segitiga ABC. Besar sudut A adalah 55° dan besar sudut B adalah dua kali besar sudut A dikurangi 40°. Besar sudut C pada segitiga ABC tersebut adalah ....",
    "options": {
      "A": "45°",
      "B": "50°",
      "C": "55°",
      "D": "60°"
    },
    "answer": "C",
    "explanation": "Besar sudut A = 55°.\nBesar sudut B = 2 × 55° - 40° = 110° - 40° = 70°.\nJumlah seluruh sudut dalam segitiga = 180°.\nBesar sudut C = 180° - (sudut A + sudut B)\n= 180° - (55° + 70°)\n= 180° - 125° = 55°."
  },
  {
    "id": "MTK061",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "mudah",
    "question": "Diberikan barisan bilangan: 4, 11, 18, 25, 32, .... Dua suku berikutnya dari barisan bilangan tersebut adalah ....",
    "options": {
      "A": "38 dan 45",
      "B": "39 dan 46",
      "C": "39 dan 47",
      "D": "40 dan 47"
    },
    "answer": "B",
    "explanation": "Aturan pola adalah bertambah 7 (+7) secara konsisten:\n32 + 7 = 39\n39 + 7 = 46.\nJadi, dua suku berikutnya adalah 39 dan 46."
  },
  {
    "id": "MTK062",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "mudah",
    "question": "Harga 4 buah buku tulis di toko alat tulis adalah Rp18.000,00. Jika Rina ingin membeli 9 buah buku tulis yang sama, jumlah uang yang harus dibayar Rina adalah ....",
    "options": {
      "A": "Rp38.500,00",
      "B": "Rp40.500,00",
      "C": "Rp42.500,00",
      "D": "Rp45.000,00"
    },
    "answer": "B",
    "explanation": "Harga 1 buku tulis = Rp18.000 : 4 = Rp4.500,00.\nHarga 9 buku tulis = 9 × Rp4.500 = Rp40.500,00."
  },
  {
    "id": "MTK063",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "mudah",
    "question": "Nilai n yang memenuhi persamaan 350 + (n × 15) = 575 adalah ....",
    "options": {
      "A": "13",
      "B": "14",
      "C": "15",
      "D": "16"
    },
    "answer": "C",
    "explanation": "350 + (n × 15) = 575\nn × 15 = 575 - 350\nn × 15 = 225\nn = 225 : 15 = 15."
  },
  {
    "id": "MTK064",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Perhatikan barisan bilangan persegi: 1, 4, 9, 16, 25, 36, .... Selisih nilai suku ke-10 dan suku ke-8 dari barisan tersebut adalah ....",
    "options": {
      "A": "32",
      "B": "36",
      "C": "40",
      "D": "44"
    },
    "answer": "B",
    "explanation": "Pola bilangan persegi memiliki rumus Un = n².\nSuku ke-10 (U10) = 10² = 100.\nSuku ke-8 (U8) = 8² = 64.\nSelisih = 100 - 64 = 36."
  },
  {
    "id": "MTK065",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Siswa menyusun batang korek api membentuk pola bangun persegi berderet:\n- Pola 1 (1 persegi) butuh 4 batang korek api.\n- Pola 2 (2 persegi berderet) butuh 7 batang korek api.\n- Pola 3 (3 persegi berderet) butuh 10 batang korek api.\nBanyak batang korek api yang dibutuhkan untuk membuat Pola ke-12 adalah ....",
    "options": {
      "A": "34 batang",
      "B": "37 batang",
      "C": "40 batang",
      "D": "43 batang"
    },
    "answer": "B",
    "explanation": "Barisan bilangan: 4, 7, 10, ... (beda b = 3, suku pertama a = 4).\nRumus suku ke-n: Un = a + (n - 1)b\nU12 = 4 + (12 - 1) × 3\n= 4 + 11 × 3\n= 4 + 33 = 37 batang."
  },
  {
    "id": "MTK066",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Sebuah mobil membutuhkan 6 liter bensin untuk menempuh perjalanan sejauh 72 km. Jika mobil tersebut akan menempuh perjalanan dari Kota A ke Kota B sejauh 180 km, banyak bensin yang dibutuhkan adalah ....",
    "options": {
      "A": "14 liter",
      "B": "15 liter",
      "C": "16 liter",
      "D": "18 liter"
    },
    "answer": "B",
    "explanation": "Konsumsi bensin = 72 km : 6 liter = 12 km/liter.\nBensin yang dibutuhkan untuk 180 km = 180 : 12 = 15 liter."
  },
  {
    "id": "MTK067",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Diberikan barisan bilangan bertingkat: 2, 5, 10, 17, 26, .... Suku ke-8 dari barisan bilangan tersebut adalah ....",
    "options": {
      "A": "50",
      "B": "65",
      "C": "67",
      "D": "72"
    },
    "answer": "B",
    "explanation": "Perhatikan rumus suku ke-n:\nU1 = 1² + 1 = 2\nU2 = 2² + 1 = 5\nU3 = 3² + 1 = 10\nU4 = 4² + 1 = 17\nU5 = 5² + 1 = 26\nRumus Un = n² + 1.\nSuku ke-8 (U8) = 8² + 1 = 64 + 1 = 65."
  },
  {
    "id": "MTK068",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Sebuah jembatan desa diperkirakan selesai dibangun dalam waktu 30 hari oleh 12 orang pekerja. Jika proyek tersebut ingin dipercepat agar selesai dalam waktu 20 hari, banyak pekerja yang harus ditambahkan adalah ....",
    "options": {
      "A": "4 orang",
      "B": "6 orang",
      "C": "8 orang",
      "D": "18 orang"
    },
    "answer": "B",
    "explanation": "Perbandingan berbalik nilai:\nHari 1 × Pekerja 1 = Hari 2 × Pekerja 2\n30 × 12 = 20 × Pekerja 2\n360 = 20 × Pekerja 2\nPekerja 2 = 360 : 20 = 18 orang.\nBanyak pekerja tambahan = 18 - 12 = 6 orang."
  },
  {
    "id": "MTK069",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Resep untuk membuat 15 porsi kue lapis membutuhkan 450 gram tepung ketan dan 300 gram gula merah. Jika Bu Ratna ingin membuat 40 porsi kue lapis, berat gula merah yang dibutuhkan adalah ....",
    "options": {
      "A": "600 gram",
      "B": "750 gram",
      "C": "800 gram",
      "D": "900 gram"
    },
    "answer": "C",
    "explanation": "Gula merah untuk 1 porsi = 300 gram : 15 = 20 gram.\nGula merah untuk 40 porsi = 40 × 20 gram = 800 gram."
  },
  {
    "id": "MTK070",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sedang",
    "question": "Pada sebuah timbangan seimbang, di piring kiri terdapat 3 buah melon identik dan sebuah beban seberat 500 gram. Di piring kanan terdapat 1 buah melon identik dan sebuah beban seberat 2.100 gram. Berat sebuah melon tersebut adalah ....",
    "options": {
      "A": "700 gram",
      "B": "750 gram",
      "C": "800 gram",
      "D": "850 gram"
    },
    "answer": "C",
    "explanation": "Misalkan berat 1 melon = m.\n3m + 500 = 1m + 2.100\n3m - 1m = 2.100 - 500\n2m = 1.600\nm = 1.600 : 2 = 800 gram."
  },
  {
    "id": "MTK071",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sulit",
    "question": "Pak Karyo memiliki persediaan pakan rumput yang cukup untuk 24 ekor sapi selama 15 hari. Jika Pak Karyo menjual 6 ekor sapinya kepada peternak lain, persediaan pakan rumput tersebut sekarang akan cukup untuk ....",
    "options": {
      "A": "18 hari",
      "B": "20 hari",
      "C": "22 hari",
      "D": "24 hari"
    },
    "answer": "B",
    "explanation": "Banyak sapi mula-mula = 24 ekor, waktu = 15 hari.\nSetelah dijual 6 ekor, sisa sapi = 24 - 6 = 18 ekor.\nPerbandingan berbalik nilai:\n24 × 15 = 18 × hari\n360 = 18 × hari\nhari = 360 : 18 = 20 hari."
  },
  {
    "id": "MTK072",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sulit",
    "question": "Perbandingan banyak kelereng Aldi dan Bima adalah 3 : 4, sedangkan perbandingan kelereng Bima dan Ciko adalah 6 : 7. Jika selisih banyak kelereng Aldi dan Ciko adalah 20 butir, banyak kelereng Bima adalah ....",
    "options": {
      "A": "48 butir",
      "B": "60 butir",
      "C": "72 butir",
      "D": "96 butir"
    },
    "answer": "A",
    "explanation": "Aldi : Bima = 3 : 4 = 9 : 12\nBima : Ciko = 6 : 7 = 12 : 14\nMaka Aldi : Bima : Ciko = 9 : 12 : 14.\nSelisih perbandingan Aldi dan Ciko = 14 - 9 = 5 bagian.\n5 bagian = 20 butir -> 1 bagian = 20 : 5 = 4 butir.\nBanyak kelereng Bima = 12 bagian = 12 × 4 = 48 butir."
  },
  {
    "id": "MTK073",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sulit",
    "question": "Perhatikan barisan pola bilangan segitiga: 1, 3, 6, 10, 15, 21, .... Jumlah nilai suku ke-11 dan suku ke-12 adalah ....",
    "options": {
      "A": "134",
      "B": "144",
      "C": "154",
      "D": "164"
    },
    "answer": "B",
    "explanation": "Rumus pola bilangan segitiga adalah Un = (n × (n + 1)) / 2.\nU11 = (11 × 12) / 2 = 132 / 2 = 66.\nU12 = (12 × 13) / 2 = 156 / 2 = 78.\nJumlah U11 + U12 = 66 + 78 = 144."
  },
  {
    "id": "MTK074",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sulit",
    "question": "Tiga tahun yang lalu, umur Ayah adalah empat kali umur Fajar. Saat ini umur Fajar adalah 11 tahun. Berapakah perbandingan umur Ayah dan umur Fajar lima tahun yang akan datang?",
    "options": {
      "A": "5 : 2",
      "B": "7 : 3",
      "C": "8 : 3",
      "D": "9 : 4"
    },
    "answer": "A",
    "explanation": "Saat ini: Fajar = 11 tahun.\nTiga tahun lalu: umur Fajar = 11 - 3 = 8 tahun.\nUmur Ayah 3 tahun lalu = 4 × 8 = 32 tahun.\nUmur Ayah saat ini = 32 + 3 = 35 tahun.\nLima tahun yang akan datang:\nUmur Ayah = 35 + 5 = 40 tahun.\nUmur Fajar = 11 + 5 = 16 tahun.\nPerbandingan umur = 40 : 16 (dibagi 8) = 5 : 2."
  },
  {
    "id": "MTK075",
    "subject": "matematika",
    "category": "Aljabar Dasar dan Pola Bilangan",
    "difficulty": "sulit",
    "question": "Di koperasi sekolah, 3 buku tulis dan 2 pulpen berharga Rp16.500,00. Sedangkan 2 buku tulis dan 1 pulpen berharga Rp10.000,00. Jika Hani membeli 4 buku tulis dan 3 pulpen, jumlah uang yang harus dibayar Hani adalah ....",
    "options": {
      "A": "Rp22.000,00",
      "B": "Rp23.000,00",
      "C": "Rp23.500,00",
      "D": "Rp24.500,00"
    },
    "answer": "B",
    "explanation": "3B + 2P = 16.500 (persamaan 1)\n2B + 1P = 10.000 -> P = 10.000 - 2B (persamaan 2)\nSubstitusi ke pers. 1:\n3B + 2(10.000 - 2B) = 16.500\n3B + 20.000 - 4B = 16.500\n-B = 16.500 - 20.000\n-B = -3.500 -> B = Rp3.500,00.\nHarga Pulpen P = 10.000 - 2(3.500) = 10.000 - 7.000 = Rp3.000,00.\nHarga 4 buku dan 3 pulpen:\n4(3.500) + 3(3.000) = 14.000 + 9.000 = Rp23.000,00."
  },
  {
    "id": "MTK076",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "mudah",
    "question": "Data hasil penimbangan berat badan (dalam kg) siswa kelas 6 SD Harapan Bangsa disajikan dalam tabel berikut:\n- 34 kg: 4 siswa\n- 35 kg: 8 siswa\n- 36 kg: 10 siswa\n- 37 kg: 6 siswa\n- 38 kg: 2 siswa\nBanyak siswa yang memiliki berat badan lebih dari 35 kg adalah ....",
    "options": {
      "A": "8 siswa",
      "B": "16 siswa",
      "C": "18 siswa",
      "D": "26 siswa"
    },
    "answer": "C",
    "explanation": "Siswa dengan berat badan lebih dari 35 kg adalah yang memiliki berat 36 kg, 37 kg, dan 38 kg.\nBanyak siswa = 10 + 6 + 2 = 18 siswa."
  },
  {
    "id": "MTK077",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "mudah",
    "question": "Data penjualan beras (dalam karung) di Toko Makmur selama 5 hari berturut-turut adalah: Senin = 25 karung, Selasa = 32 karung, Rabu = 28 karung, Kamis = 45 karung, dan Jumat = 30 karung. Selisih penjualan beras tertinggi dan terendah pada toko tersebut adalah ....",
    "options": {
      "A": "15 karung",
      "B": "18 karung",
      "C": "20 karung",
      "D": "22 karung"
    },
    "answer": "C",
    "explanation": "Penjualan tertinggi terjadi pada hari Kamis (45 karung).\nPenjualan terendah terjadi pada hari Senin (25 karung).\nSelisih = 45 - 25 = 20 karung."
  },
  {
    "id": "MTK078",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "mudah",
    "question": "Nilai ulangan matematika Lani dalam 6 kali penilaian adalah: 75, 80, 85, 90, 70, dan 80. Nilai rata-rata ulangan matematika Lani adalah ....",
    "options": {
      "A": "78",
      "B": "80",
      "C": "82",
      "D": "84"
    },
    "answer": "B",
    "explanation": "Jumlah seluruh nilai = 75 + 80 + 85 + 90 + 70 + 80 = 480.\nBanyak kali ulangan = 6.\nNilai rata-rata = 480 : 6 = 80."
  },
  {
    "id": "MTK079",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "mudah",
    "question": "Data ukuran sepatu yang dipakai oleh 12 pemain sepak bola cilik adalah sebagai berikut:\n34, 36, 35, 36, 37, 36, 35, 38, 36, 37, 35, 36.\nModus dari data ukuran sepatu tersebut adalah ....",
    "options": {
      "A": "Ukuran 34",
      "B": "Ukuran 35",
      "C": "Ukuran 36",
      "D": "Ukuran 37"
    },
    "answer": "C",
    "explanation": "Hitung frekuensi masing-masing ukuran sepatu:\n- Ukuran 34: 1 anak\n- Ukuran 35: 3 anak\n- Ukuran 36: 5 anak\n- Ukuran 37: 2 anak\n- Ukuran 38: 1 anak\nModus adalah data yang paling sering muncul, yaitu ukuran 36 (muncul 5 kali)."
  },
  {
    "id": "MTK080",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "mudah",
    "question": "Sebuah diagram batang menunjukkan hasil panen jagung Desa Sukatani selama 4 tahun berturut-turut:\n- Tahun 2020: 40 ton\n- Tahun 2021: 55 ton\n- Tahun 2022: 45 ton\n- Tahun 2023: 70 ton\nJumlah seluruh hasil panen jagung selama 4 tahun tersebut adalah ....",
    "options": {
      "A": "200 ton",
      "B": "210 ton",
      "C": "220 ton",
      "D": "230 ton"
    },
    "answer": "B",
    "explanation": "Jumlah panen total = 40 + 55 + 45 + 70 = 210 ton."
  },
  {
    "id": "MTK081",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Sebanyak 120 siswa kelas 6 SD Garuda mengikuti salah satu kegiatan ekstrakurikuler. Data disajikan dalam bentuk diagram lingkaran:\n- Sepak Bola: 35%\n- Pramuka: 25%\n- Seni Tari: 15%\n- Renang: 10%\n- Bulu Tangkis: sisanya\nBanyak siswa yang mengikuti ekstrakurikuler bulu tangkis adalah ....",
    "options": {
      "A": "16 siswa",
      "B": "18 siswa",
      "C": "20 siswa",
      "D": "24 siswa"
    },
    "answer": "B",
    "explanation": "Persentase Bulu Tangkis = 100% - (35% + 25% + 15% + 10%) = 100% - 85% = 15%.\nBanyak siswa bulu tangkis = 15% × 120 = (15 / 100) × 120 = 18 siswa."
  },
  {
    "id": "MTK082",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Diagram lingkaran menyajikan data mata pencaharian orang tua dari 180 siswa:\n- Petani: 140°\n- Pedagang: 90°\n- Karyawan Swasta: 70°\n- PNS: sisanya\nBanyak orang tua siswa yang bekerja sebagai PNS adalah ....",
    "options": {
      "A": "25 orang",
      "B": "30 orang",
      "C": "35 orang",
      "D": "40 orang"
    },
    "answer": "B",
    "explanation": "Sudut lingkaran penuh = 360°.\nSudut PNS = 360° - (140° + 90° + 70°) = 360° - 300° = 60°.\nBanyak orang tua PNS = (60° / 360°) × 180 = (1/6) × 180 = 30 orang."
  },
  {
    "id": "MTK083",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Tabel berikut menyajikan data nilai ulangan IPA sekelompok siswa:\n- Nilai 6: 3 siswa\n- Nilai 7: 6 siswa\n- Nilai 8: 8 siswa\n- Nilai 9: 2 siswa\n- Nilai 10: 1 siswa\nNilai rata-rata ulangan IPA dari kelompok siswa tersebut adalah ....",
    "options": {
      "A": "7,45",
      "B": "7,60",
      "C": "7,75",
      "D": "8,00"
    },
    "answer": "B",
    "explanation": "Hitung total nilai (nilai × frekuensi):\n6 × 3 = 18\n7 × 6 = 42\n8 × 8 = 64\n9 × 2 = 18\n10 × 1 = 10\nJumlah total nilai = 18 + 42 + 64 + 18 + 10 = 152.\nTotal siswa = 3 + 6 + 8 + 2 + 1 = 20 siswa.\nNilai rata-rata = 152 : 20 = 7,60."
  },
  {
    "id": "MTK084",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Nilai ulangan Bahasa Indonesia 11 orang siswa adalah sebagai berikut:\n78, 85, 92, 70, 88, 75, 80, 85, 90, 82, 85.\nMedian dari data nilai tersebut adalah ....",
    "options": {
      "A": "82",
      "B": "85",
      "C": "86",
      "D": "88"
    },
    "answer": "B",
    "explanation": "Urutkan data dari yang terkecil ke terbesar:\n70, 75, 78, 80, 82, 85, 85, 85, 88, 90, 92.\nBanyak data n = 11 (ganjil).\nMedian berada pada data ke-(11 + 1) / 2 = data ke-6.\nData ke-6 adalah 85."
  },
  {
    "id": "MTK085",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Data tinggi badan (dalam cm) dari 10 orang pemain voli adalah:\n156, 162, 158, 165, 160, 164, 159, 168, 161, 163.\nMedian tinggi badan pemain voli tersebut adalah ....",
    "options": {
      "A": "161,0 cm",
      "B": "161,5 cm",
      "C": "162,0 cm",
      "D": "162,5 cm"
    },
    "answer": "B",
    "explanation": "Urutkan data dari terkecil ke terbesar:\n156, 158, 159, 160, 161, 162, 163, 164, 165, 168.\nBanyak data n = 10 (genap).\nMedian adalah rata-rata data ke-5 dan ke-6:\nData ke-5 = 161, Data ke-6 = 162.\nMedian = (161 + 162) / 2 = 161,5 cm."
  },
  {
    "id": "MTK086",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Hendra telah mengikuti 4 kali ulangan matematika dengan nilai 82, 86, 78, dan 84. Agar nilai rata-rata ulangan matematika Hendra dari 5 kali ulangan menjadi tepat 85, nilai yang harus diperoleh Hendra pada ulangan ke-5 adalah ....",
    "options": {
      "A": "92",
      "B": "94",
      "C": "95",
      "D": "96"
    },
    "answer": "C",
    "explanation": "Target total 5 kali ulangan = 5 × 85 = 425.\nJumlah nilai 4 ulangan yang sudah diikuti = 82 + 86 + 78 + 84 = 330.\nNilai ulangan ke-5 yang harus dicapai = 425 - 330 = 95."
  },
  {
    "id": "MTK087",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Diagram lingkaran menyajikan data jenis buah kesukaan 240 pengunjung pameran kuliner:\n- Apel: 25%\n- Mangga: 30%\n- Jeruk: 20%\n- Pisang: sisanya (25%)\nSelisih banyak pengunjung yang menyukai mangga dan yang menyukai jeruk adalah ....",
    "options": {
      "A": "18 orang",
      "B": "20 orang",
      "C": "24 orang",
      "D": "30 orang"
    },
    "answer": "C",
    "explanation": "Selisih persentase mangga dan jeruk = 30% - 20% = 10%.\nSelisih banyak pengunjung = 10% × 240 = 24 orang."
  },
  {
    "id": "MTK088",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Data suhu badan seorang pasien yang dicatat setiap 2 jam sejak pukul 06.00 hingga 14.00 adalah:\n- 06.00: 37,2°C\n- 08.00: 37,6°C\n- 10.00: 38,5°C\n- 12.00: 38,1°C\n- 14.00: 39,2°C\nKenaikan suhu badan terbesar terjadi pada rentang waktu ....",
    "options": {
      "A": "06.00 - 08.00",
      "B": "08.00 - 10.00",
      "C": "10.00 - 12.00",
      "D": "12.00 - 14.00"
    },
    "answer": "D",
    "explanation": "Hitung kenaikan tiap interval:\n- 06.00 - 08.00: 37,6 - 37,2 = 0,4°C.\n- 08.00 - 10.00: 38,5 - 37,6 = 0,9°C.\n- 10.00 - 12.00: mengalami penurunan (38,1 - 38,5 = -0,4°C).\n- 12.00 - 14.00: 39,2 - 38,1 = 1,1°C.\nKenaikan terbesar adalah 1,1°C pada rentang pukul 12.00 - 14.00."
  },
  {
    "id": "MTK089",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Diagram batang ganda mencatat peminjaman buku cerita dan buku pelajaran di perpustakaan selama 3 hari:\n- Hari 1: Cerita = 24 buku, Pelajaran = 16 buku\n- Hari 2: Cerita = 30 buku, Pelajaran = 22 buku\n- Hari 3: Cerita = 18 buku, Pelajaran = 25 buku\nPerbandingan total peminjaman buku cerita dan buku pelajaran selama 3 hari tersebut adalah ....",
    "options": {
      "A": "7 : 6",
      "B": "8 : 7",
      "C": "9 : 8",
      "D": "10 : 9"
    },
    "answer": "B",
    "explanation": "Total buku cerita = 24 + 30 + 18 = 72 buku.\nTotal buku pelajaran = 16 + 22 + 25 = 63 buku.\nPerbandingan Cerita : Pelajaran = 72 : 63.\nKeduanya dibagi faktor pembagi persekutuan 9:\n72 : 9 = 8 dan 63 : 9 = 7.\nMaka perbandingannya adalah 8 : 7."
  },
  {
    "id": "MTK090",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Perhatikan data nilai tes minat bakat sekelompok anak: 6, 7, 8, 8, 7, 9, 8, 10, 6, 8, 7. Selisih antara nilai modus dan nilai median dari data tersebut adalah ....",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2",
      "D": "3"
    },
    "answer": "A",
    "explanation": "Urutan data dari terkecil ke terbesar:\n6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 10.\nBanyak data = 11 data.\nModus (paling sering muncul): 8 (muncul 4 kali).\nMedian (data ke-6): 8.\nSelisih antara modus dan median = 8 - 8 = 0."
  },
  {
    "id": "MTK091",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Tinggi badan rata-rata dari 5 orang pemain basket mini adalah 152 cm. Empat orang di antaranya memiliki tinggi badan 150 cm, 155 cm, 148 cm, dan 153 cm. Tinggi badan pemain kelima adalah ....",
    "options": {
      "A": "151 cm",
      "B": "153 cm",
      "C": "154 cm",
      "D": "156 cm"
    },
    "answer": "C",
    "explanation": "Jumlah tinggi seluruh 5 pemain = 5 × 152 = 760 cm.\nJumlah tinggi 4 pemain yang diketahui = 150 + 155 + 148 + 153 = 606 cm.\nTinggi pemain kelima = 760 - 606 = 154 cm."
  },
  {
    "id": "MTK092",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Rata-rata berat badan 8 siswa adalah 36 kg. Jika digabungkan dengan 2 siswa baru yang masing-masing memiliki berat badan 40 kg dan 42 kg, berat badan rata-rata dari seluruh 10 siswa tersebut menjadi ....",
    "options": {
      "A": "36,8 kg",
      "B": "37,0 kg",
      "C": "37,2 kg",
      "D": "37,5 kg"
    },
    "answer": "B",
    "explanation": "Jumlah berat badan 8 siswa awal = 8 × 36 = 288 kg.\nTambahan berat 2 siswa baru = 40 + 42 = 82 kg.\nJumlah berat badan 10 siswa = 288 + 82 = 370 kg.\nRata-rata baru = 370 : 10 = 37,0 kg."
  },
  {
    "id": "MTK093",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sedang",
    "question": "Berikut adalah data nilai ulangan tematik 10 siswa: 70, 75, 80, 85, 90, 65, 80, 75, 85, 95. Siswa yang memperoleh nilai di bawah nilai rata-rata wajib mengikuti kegiatan remedial. Banyak siswa yang harus mengikuti remedial adalah ....",
    "options": {
      "A": "3 siswa",
      "B": "4 siswa",
      "C": "5 siswa",
      "D": "6 siswa"
    },
    "answer": "B",
    "explanation": "Jumlah nilai = 70 + 75 + 80 + 85 + 90 + 65 + 80 + 75 + 85 + 95 = 800.\nRata-rata = 800 : 10 = 80.\nNilai yang berada di bawah rata-rata (< 80) adalah: 65, 70, 75, dan 75.\nBanyak siswa yang harus remedial ada 4 siswa."
  },
  {
    "id": "MTK094",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Di suatu kelas terdiri atas 14 siswa laki-laki dan 16 siswa perempuan. Nilai rata-rata ulangan matematika siswa laki-laki adalah 78, sedangkan nilai rata-rata siswa perempuan adalah 84. Nilai rata-rata ulangan matematika seluruh siswa di kelas tersebut adalah ....",
    "options": {
      "A": "80,8",
      "B": "81,0",
      "C": "81,2",
      "D": "81,5"
    },
    "answer": "C",
    "explanation": "Jumlah nilai laki-laki = 14 × 78 = 1.092.\nJumlah nilai perempuan = 16 × 84 = 1.344.\nTotal seluruh nilai = 1.092 + 1.344 = 2.436.\nTotal siswa = 14 + 16 = 30 siswa.\nRata-rata gabungan = 2.436 : 30 = 81,2."
  },
  {
    "id": "MTK095",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Nilai rata-rata ulangan harian IPA kelas 6 adalah 80. Rata-rata nilai 18 siswa perempuan adalah 82, sedangkan rata-rata nilai siswa laki-laki adalah 77. Banyak siswa laki-laki di kelas tersebut adalah ....",
    "options": {
      "A": "10 siswa",
      "B": "12 siswa",
      "C": "14 siswa",
      "D": "15 siswa"
    },
    "answer": "B",
    "explanation": "Gunakan konsep perbandingan selisih rata-rata:\nSelisih nilai perempuan dengan rata-rata kelas = 82 - 80 = 2.\nSelisih nilai laki-laki dengan rata-rata kelas = 80 - 77 = 3.\nPerbandingan banyak Laki-laki : Perempuan = Selisih P : Selisih L = 2 : 3.\nBanyak Laki-laki / 18 = 2 / 3.\nBanyak Laki-laki = (2 / 3) × 18 = 12 siswa."
  },
  {
    "id": "MTK096",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Data hobi dari 360 siswa disajikan dalam diagram lingkaran derajat:\n- Membaca: 100°\n- Menggambar: 80°\n- Menari: 60°\n- Olahraga: sisanya\nJika 40% dari siswa yang gemar berolahraga memilih cabang bulu tangkis, banyak siswa yang gemar bulu tangkis adalah ....",
    "options": {
      "A": "44 siswa",
      "B": "48 siswa",
      "C": "52 siswa",
      "D": "56 siswa"
    },
    "answer": "B",
    "explanation": "Sudut Olahraga = 360° - (100° + 80° + 60°) = 360° - 240° = 120°.\nTotal siswa olahraga = (120° / 360°) × 360 = (1/3) × 360 = 120 siswa.\nSiswa gemar bulu tangkis = 40% × 120 = (40 / 100) × 120 = 48 siswa."
  },
  {
    "id": "MTK097",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Rata-rata nilai ulangan matematika dari 25 siswa adalah 76. Setelah diperiksa kembali, ternyata terjadi kesalahan pencatatan nilai seorang siswa yang seharusnya 85 tetapi tertulis 60. Nilai rata-rata kelas yang sebenarnya setelah diperbaiki adalah ....",
    "options": {
      "A": "76,5",
      "B": "77,0",
      "C": "77,5",
      "D": "78,0"
    },
    "answer": "B",
    "explanation": "Jumlah nilai sebelum koreksi = 25 × 76 = 1.900.\nSelisih perbaikan nilai = 85 - 60 = +25.\nJumlah nilai setelah perbaikan = 1.900 + 25 = 1.925.\nRata-rata sebenarnya = 1.925 : 25 = 77,0."
  },
  {
    "id": "MTK098",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Perhatikan tabel distribusi nilai matematika siswa kelas 6:\n- Nilai 65: 2 siswa\n- Nilai 70: 5 siswa\n- Nilai 75: 8 siswa\n- Nilai 80: 10 siswa\n- Nilai 85: 9 siswa\n- Nilai 90: 4 siswa\n- Nilai 95: 2 siswa\nMedian dari data pada tabel tersebut adalah ....",
    "options": {
      "A": "75",
      "B": "80",
      "C": "82,5",
      "D": "85"
    },
    "answer": "B",
    "explanation": "Total frekuensi N = 2 + 5 + 8 + 10 + 9 + 4 + 2 = 40 siswa (genap).\nMedian berada di antara data ke-20 dan data ke-21.\nHitung frekuensi kumulatif:\n- s.d. 65 = 2\n- s.d. 70 = 2 + 5 = 7\n- s.d. 75 = 7 + 8 = 15\n- s.d. 80 = 15 + 10 = 25 -> data ke-16 hingga data ke-25 bernilai 80.\nKarena data ke-20 = 80 dan data ke-21 = 80, maka Median = (80 + 80) / 2 = 80."
  },
  {
    "id": "MTK099",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Diketahui data lima kali ulangan Doni adalah 78, 84, 82, 90, dan 86. Pernyataan yang BENAR mengenai data tersebut adalah ....",
    "options": {
      "A": "Nilai rata-rata lebih kecil daripada nilai median",
      "B": "Nilai rata-rata sama besar dengan nilai median",
      "C": "Nilai median adalah 82",
      "D": "Jangkauan data (selisih terbesar dan terkecil) adalah 14"
    },
    "answer": "B",
    "explanation": "Urutan data: 78, 82, 84, 86, 90.\n- Median = data ke-3 = 84.\n- Rata-rata = (78 + 82 + 84 + 86 + 90) : 5 = 420 : 5 = 84.\n- Jangkauan = 90 - 78 = 12.\nMaka pernyataan yang benar adalah nilai rata-rata sama besar dengan nilai median (keduanya 84)."
  },
  {
    "id": "MTK100",
    "subject": "matematika",
    "category": "Data dan Statistika",
    "difficulty": "sulit",
    "question": "Sebuah sekolah dasar memiliki tiga rombongan belajar kelas 6 dengan rincian:\n- Kelas 6A: 30 siswa, rata-rata nilai matematika 82\n- Kelas 6B: 32 siswa, rata-rata nilai matematika 80\n- Kelas 6C: 28 siswa, rata-rata nilai matematika 85\nNilai rata-rata gabungan matematika untuk seluruh siswa kelas 6 di sekolah tersebut adalah ....",
    "options": {
      "A": "82,0",
      "B": "82,2",
      "C": "82,5",
      "D": "83,0"
    },
    "answer": "B",
    "explanation": "Total nilai Kelas 6A = 30 × 82 = 2.460.\nTotal nilai Kelas 6B = 32 × 80 = 2.560.\nTotal nilai Kelas 6C = 28 × 85 = 2.380.\nJumlah seluruh nilai = 2.460 + 2.560 + 2.380 = 7.400.\nTotal seluruh siswa = 30 + 32 + 28 = 90 siswa.\nNilai rata-rata gabungan = 7.400 : 90 = 82,22... ≈ 82,2."
  }
];

// Registrasi Dinamis ke Registry Aplikasi TKA SD
if (typeof registerTkaSubject === 'function') {
  registerTkaSubject({
    id: "matematika",
    title: "Matematika",
    icon: "fa-calculator",
    questions: BANK_SOAL_MATEMATIKA
  });
}


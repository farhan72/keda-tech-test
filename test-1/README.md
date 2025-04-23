# Test 1 Project

Proyek ini berisi beberapa fungsi JavaScript sederhana dan pengujian unit untuk memverifikasi fungsionalitasnya. Proyek ini cocok untuk pembelajaran dasar JavaScript, terutama dalam hal algoritma dasar dan penggunaan testing framework seperti Jest.

## Struktur Folder

```plaintext
test-1/
├── node_modules/                     # Dependency modules
├── src/                              # Source code utama
│   ├── __test__/                     # File-file unit test
│   │   ├── bubleSortDescending.test.js
│   │   ├── findMaxSubarraySum.test.js
│   │   └── sumEvenNumbersInObject.test.js
│   ├── bubleSortDescending.js
│   ├── findMaxSubarraySum.js
│   └── sumEvenNumbersInObject.js
├── package.json                      # Metadata dan dependensi proyek
├── package-lock.json                 # Lockfile dependensi
└── README.md                         # Dokumentasi proyek ini
```

## Deskripsi Fungsi

- bubleSortDescending.js  
  Mengimplementasikan algoritma bubble sort untuk mengurutkan array secara menurun.

- findMaxSubarraySum.js  
  Menghitung jumlah maksimum dari subarray kontigu dalam array angka (implementasi dari masalah "Kadane's Algorithm").

- sumEvenNumbersInObject.js  
  Menjumlahkan semua angka genap dalam objek bersarang.

## Unit Testing

Pengujian unit menggunakan framework Jest. Semua file test berada di dalam folder `src/__test__` dan dinamai dengan akhiran `.test.js`.

Contoh file test:
- bubleSortDescending.test.js
- findMaxSubarraySum.test.js
- sumEvenNumbersInObject.test.js

### Menjalankan Unit Test

1. Pastikan semua dependensi telah terinstal:
   npm install

2. Jalankan semua test dengan perintah:
   npm test

Atau, untuk menjalankan test tertentu:
   `npm test namaFile.test`

Contoh:
   `npm test findMaxSubarraySum`

Jika ingin menjalankan test dengan tampilan interaktif (watch mode):
   npm test -- --watch

## Prasyarat

- Node.js
- npm

## Instalasi

git clone https://github.com/farhan72/keda-tech-test.git
cd test-1
npm install

## Lisensi

Proyek ini menggunakan lisensi MIT.

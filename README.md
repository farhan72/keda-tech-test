# Monorepo: test-1 & test-2

Repositori ini terdiri dari dua proyek utama:

1. **`test-1/`**  
   Berisi dua sub-proyek:
   - `src/`: Implementasi algoritma dan unit test menggunakan JavaScript.
   - Dokumentasi lengkap: [README.md](test-1/README.md)

2. **`test-2/`**  
   Proyek frontend lain yang juga menggunakan Vite dan Tailwind CSS, dengan struktur konfigurasi TypeScript yang lebih modular.
   - Dokumentasi lengkap: [README.md](test-2/README.md)

---

## 📁 Struktur Folder

```
test-1/
│
├── src/                   # Proyek algoritma/test case JS
│   ├── __test__/          # Unit tests
│   ├── *.js               # Fungsi-fungsi JS
│
│
├── README.md              # Dokumentasi utama


test-2/
│
├── src/                   # Kode sumber frontend
├── public/                # File statis publik
├── dist/                  # Output build
├── *.config.js|ts         # Konfigurasi proyek
├── README.md              # Dokumentasi proyek
```

---

## 📌 Petunjuk Menjalankan

### 🧪 test-1 - Proyek Algoritma (`src/`)

```bash
cd test-1/src
npm install
npm test
```

### 💻 test-1 - Proyek Frontend (`dist/`)

```bash
cd test-1/dist
npm install
npm run dev
```

### 💻 test-2 - Proyek Frontend Vite + Tailwind

```bash
cd test-2
npm install
npm run dev
```

---

## 🛠 Tools yang Digunakan

- Node.js
- Vite (test-2)
- Tailwind CSS (test-2)
- TypeScript (test-2)
- Jest (test-1)

---

## 📄 Lisensi

Proyek ini berada di bawah lisensi
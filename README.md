# DiabeTest Frontend

Selamat datang di repositori frontend untuk aplikasi DiabeTest! Aplikasi ini adalah platform web interaktif untuk memprediksi risiko diabetes.

## Tentang Proyek

DiabeTest adalah aplikasi web yang dirancang untuk deteksi risiko diabetes secara mandiri. Frontend ini menyediakan antarmuka pengguna yang responsif, memungkinkan pengguna memasukkan data kesehatan dan melihat hasil prediksi dari backend.

## Fitur Utama

* Antarmuka pengguna interaktif dan responsif.
* Formulir input data kesehatan untuk prediksi risiko.
* Tampilan hasil prediksi yang jelas.
* Mudah diakses melalui web browser di berbagai perangkat.

## Demo Aplikasi

Anda bisa mencoba aplikasi DiabeTest secara langsung di:
[DiabeTest Live Demo](https://diabetest-frontend-8ugr-git-master-lilina02s-projects.vercel.app/)

## Teknologi yang Digunakan

* **Framework UI:** React.js
* **Build Tool:** Vite
* **Styling:** [Sertakan nama library CSS/UI yang Anda gunakan, misal: Bootstrap]
* **Deployment:** Vercel

## Instalasi dan Menjalankan Proyek

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah di bawah:

### Prasyarat

* [Node.js](https://nodejs.org/) (direkomendasikan versi LTS terbaru)
* [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### Langkah-langkah

1.  **Clone repositori:**
    ```bash
    git clone [https://github.com/Lilina02/diabetest-frontend.git](https://github.com/Lilina02/diabetest-frontend.git)
    cd diabetest-frontend
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Konfigurasi API Endpoint:**
    Buat file `.env` di root proyek dan tambahkan URL backend Anda (ini akan terhubung ke deployment Railway Anda):
    ```
    VITE_APP_API_URL=[https://diabetest-backend-production.up.railway.app](https://diabetest-backend-production.up.railway.app)
    ```

4.  **Jalankan aplikasi:**
    ```bash
    npm run dev
    # atau
    yarn dev
    ```
    Aplikasi akan berjalan di `http://localhost:5173`.

## Struktur Utama Proyek

diabetest-frontend/
├── public/                 # File statis dan aset publik (misal: index.html, logo)
├── src/                    # Kode sumber utama aplikasi React
│   ├── index.html          # Template HTML utama
│   ├── main.js             # Entry point aplikasi
│   └── styles.css          # Global CSS
├── .gitignore              # File yang diabaikan oleh Git
├── package.json            # Dependensi proyek
├── package-lock.json       # Lock file untuk dependensi (npm)
└── README.md               # File ini


## Kontak

Untuk pertanyaan, silakan hubungi:
* TEAM CAPSTONE DICODING CC25 - CF024

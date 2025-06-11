# Submission-Web-Intermediate-Pertama
# Belajar Pengembangan Web Intermediate - Dicoding Submission

Proyek ini merupakan hasil submission dari kelas **Belajar Pengembangan Web Intermediate** oleh Dicoding. Aplikasi ini dibuat menggunakan **Webpack**, menerapkan arsitektur **Single Page Application (SPA)**, dan menggunakan pola **Model-View-Presenter (MVP)**.

## 📁 Struktur Folder

src/
├── data/ # Simulasi data untuk posting dan user
│ ├── PostData.js
│ └── UserData.js
├── presenter/ # Logika presenter untuk tiap fitur
│ ├── AddStoryPresenter.js
│ ├── LoginPresenter.js
│ ├── PostPresenter.js
│ └── RegisterPresenter.js
├── script/ # Entry point aplikasi
│ └── index.js
├── style/ # File CSS
│ └── style.css
├── utils/ # Router dan helper lokasi
│ ├── location.js
│ └── router.js
├── views/ # Halaman tampilan (view)
│ └── pages/
│ ├── add-page.js
│ ├── home-page.js
│ ├── login-page.js
│ ├── register-page.js
│ └── PostView.js
└── index.html # Template HTML utama

bash
Copy
Edit

## ⚙️ Cara Menjalankan Proyek

### 1. Clone Repository
Pastikan kamu sudah menginstall [Git](https://git-scm.com/) di perangkatmu.

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
Gantilah username/nama-repo sesuai dengan nama repository milikmu.

2. Install Dependency
Pastikan kamu sudah menginstall Node.js dan npm.

bash
Copy
Edit
npm install
3. Jalankan Aplikasi (Mode Development)
bash
Copy
Edit
npm run start
Aplikasi akan berjalan di http://localhost:8080/

Perubahan pada kode akan ter-refresh secara otomatis (hot reload)

4. Build untuk Produksi
bash
Copy
Edit
npm run build
Hasil build akan muncul di folder dist/

Siap untuk di-deploy ke GitHub Pages, Vercel, Netlify, dll.

🛠️ Teknologi yang Digunakan
Webpack 5

JavaScript ES6

SPA (Single Page Application)

MVP (Model-View-Presenter) Architecture

CSS

Leaflet.js (jika ada penggunaan peta)

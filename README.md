# Kotakio Packaging Studio & 3D Dieline CAD Generator (Full Local System)

Aplikasi web lengkap untuk mendesain pola potong kemasan (*dieline* siap cetak) dan visualisasi *mockup 3D realtime* langsung di browser, berbasis **Vue 3**, **Three.js r170**, **Tailwind CSS**, dan **Lucide Icons**.

> **100% Full Local System & Standalone**:
> - **No Cloudflare Browser Insights / RUM**: Seluruh skrip telemetri pihak ketiga dinetralisir.
> - **No Google Authentication**: Tidak memerlukan akun Google Sign-in maupun koneksi OAuth luar.
> - **Pro Unlocked**: Seluruh 18 model kemasan FEFCO/ECMA dan seluruh opsi ekspor (Vektor SVG, Mockup 3D 4K PNG, Lembar Spesifikasi PDF) langsung aktif tanpa pembatasan.

---

## 🚀 Cara Menjalankan

Aplikasi ini dapat dijalankan menggunakan Node.js (versi 16 ke atas) secara instan tanpa perlu instal dependensi tambahan:

```bash
cd C:/Users/willi/Obsidian/kotakbio

# Jalankan server lokal
npm start
# atau
node server.js
```

Buka browser dan akses:
- **Studio Desain Langsung**: [http://localhost:3000/studio](http://localhost:3000/studio)
- **Dashboard Admin Pemilik**: [http://localhost:3000/admin](http://localhost:3000/admin)
- **Halaman Utama / Landing Page**: [http://localhost:3000/](http://localhost:3000/)

---

## ✨ Fitur Lengkap yang Tersedia

### 1. 18 Model Kemasan Standar Industri (FEFCO / ECMA)
Semua model dapat dipilih dan diatur ukurannya secara parametrik:
1. **Reverse Tuck End Box (FEFCO 0215)** — Kotak lipat standar skincare, serum, kosmetik, dan obat herbal.
2. **Straight Tuck End Box (ECMA A15.20)** — Kotak tuck sejajar untuk farmasi dan elektronik.
3. **Auto-Lock Bottom Box (Crash-Lock)** — Kotak bawah otomatis terkunci cepat untuk lini produksi cepat.
4. **E-Commerce Mailer Box (FEFCO 0427)** — Kardus corrugated pengiriman paket online & hampers.
5. **Dus Snack & Nasi Kotak (SNACK-BOX)** — Kemasan makanan dengan kancing slip tahan tumpah.
6. **Lunch Box Take Away (LUNCH-BOX)** — Kotak makanan siap saji dengan lipatan anti bocor.
7. **Pizza Box (PIZZA-BOX)** — Kotak corrugated ceper dengan ventilasi uap panas.
8. **Box Donat & Kue (DONUT-BOX)** — Kotak kue lebar dengan tutup klip.
9. **Tray & Sleeve (TRAY-SLEEVE)** — Kotak geser dua bagian untuk produk aksesoris & perhiasan.
10. **Standing Pouch Ziplock (POUCH-3D)** — Kemasan fleksibel untuk biji kopi, bubuk, dan keripik.
11. **Stiker & Label Kemasan (STIKER)** — Pola stiker die-cut bulat, oval, atau persegi panjang.
12. **Pillow Box (PILLOW-BOX)** — Kemasan lengkung bentuk bantal untuk sabun, syal, souvenir.
13. **Paper Bag (BAG-SOS)** — Tas kertas belanja dengan lipatan dasar kotak.
14. **Kaleng Silinder & Jar (CYL-360)** — Mockup botol silinder, kaleng minuman 330ml, dan jar krim.
15. **Regular Slotted Container (FEFCO 0201 - RSC)** — Kardus master box ekspedisi standar internasional.
16. **Food Box & Bakery Carrier (GABLE-BOX)** — Kotak jinjing dengan pegangan tenteng terintegrasi.
17. **Sliding Box (SLIDE-BOX)** — Kotak laci geser eksklusif (drawer & outer sleeve).
18. **Luxury Rigid Gift Box (FEFCO 0320)** — Hardbox mewah dengan tutup pisah (*base & lid*).

---

### 2. Parameter & Dimensi Presisi Tinggi
- **Panjang (P), Lebar (L), Tinggi (T)**: Input slider dan angka presisi dalam satuan milimeter (mm).
- **Mode Dimensi**:
  - `Dalam`: Menghitung ruang bersih bagian dalam kotak untuk tempat produk.
  - `Luar`: Menghitung ukuran luar kardus untuk keperluan packing kardus master.
- **Kompensasi Ketebalan Bahan (Board Caliper Compensation)**:
  - Ivory 260 / 300 / 350 gsm (0.30 - 0.45 mm)
  - Duplex 310 / 350 gsm (0.35 - 0.50 mm)
  - Kraft Liner 275 / 350 gsm (0.32 - 0.48 mm)
  - Art Carton 260 / 310 gsm (0.28 - 0.40 mm)
  - Corrugated E-Flute / B-Flute (1.5 - 3.0 mm)

---

### 3. Jendela Mika & Lubang Gantungan (Hanger)
- **Jendela Mika Depan**: Menghitung lubang die-cut tembus pandang dan area lem mika plastik transparan di sisi dalam.
- **Gantungan Display Toko**:
  - `Tanpa Gantungan`
  - `Gantungan Bulat (Round Hole)`
  - `Gantungan Euro (Euroslot)` untuk cantolan rak supermarket/minimarket.

---

### 4. Dieline 2D Siap Cetak (CAD Vector Engine)
- Garis **Potong (Cut Line)** warna merah solid.
- Garis **Lipat (Crease/Fold Line)** warna biru putus-putus (*dashed line*).
- Garis **Bleed (Area Lebih Tinta)** warna abu-abu tipis (3 mm di luar pola potong).
- Garis **Area Aman (Safe Margin)** untuk memastikan teks dan logo tidak terpotong pisau pond.
- **Anotasi Ukuran**: Ukuran dimensi P, L, T dan sudut chamfer flap otomatis dihitung dan ditampilkan.
- **Zoom & Pan**: Navigasi kanvas 2D yang responsif (*scroll to zoom*, *drag to pan*).

---

### 5. Simulasi Lipatan 3D (Three.js r170 Kinematics)
- **Slider Lipatan (0% - 100%)**:
  - `0%`: Pola lembaran datar (*flat dieline*).
  - `50%`: Kotak setengah terlipat (*semi-assembled view*).
  - `100%`: Kotak tertutup rapat sempurna (*fully assembled box*).
- **Kontrol Kamera**:
  - Sudut Isometrik (*Isometric Perspective*)
  - Tampak Depan (*Front View*)
  - Tampak Atas (*Top View*)
  - Tampak Samping (*Side View*)
- **Pencahayaan & Rendering**:
  - Saklar mode Terang / Studio Lighting
  - Tombol Otomatis Putar (*Auto-Rotate*)
  - OrbitControls untuk rotasi dan zoom bebas dengan mouse / touch.

---

### 6. Desain Grafis & Kustomisasi
- Teks brand title, subtitle, tagline, deskripsi samping, sertifikasi Halal / BPOM.
- Integrasi katalog Google Fonts (IBM Plex Sans, Inter, Roboto, Playfair Display, Cinzel, Montserrat, dll).
- Pembuat Kode QR (QR Code generator) otomatis.
- Pembuat Kode Batang (Barcode EAN-13 / Code 128) otomatis.
- Pengaturan palet warna: Warna Luar (*Base Color*), Warna Dalam (*Inside Board*), dan Tinta Grafis (*Accent Color*).
- Unggah logo / stiker vektor transparan.

---

### 7. Ekspor Produksi Tanpa Batas
1. **Ekspor Dieline SVG**: File vektor skala 1:1 siap diimpor ke Adobe Illustrator, CorelDRAW, AutoCAD, atau mesin potong laser / pisau pond percetakan.
2. **Ekspor Mockup 3D PNG (Ultra HD 4K)**: Tangkapan layar 3D resolusi tinggi (hingga 3840px) tanpa background untuk materi presentasi dan katalog e-commerce.
3. **Ekspor PDF Lembar Spesifikasi Teknis**: Dokumen spesifikasi cetak lengkap berisi gambar 2D, pratinjau 3D, tabel dimensi, jenis bahan gsm, kode warna tinta, dan instruksi finishing (matte/gloss/foil).

---

## 📂 Struktur File di `/Obsidian/kotakbio`

```
C:/Users/willi/Obsidian/kotakbio/
├── server.js              # Server HTTP mandiri + Mock API pro lokal + Cloudflare neutralizer
├── package.json           # Konfigurasi npm (scripts: start, sync)
├── cookies.txt            # Netscape HTTP Cookie specification
├── sync-assets.js         # Script sinkronisasi stealth (Camofox/Rea compatible)
├── studio.html            # Entry point studio editor kemasan
├── index.html             # Entry point landing page Kotakio (dibersihkan dari telemetri)
├── README.md              # Dokumentasi lengkap
├── ARCHITECTURE.md        # Analisis teknis rekayasa balik (reverse-engineering)
├── assets/                # Bundle Vue, Three.js, Lucide, CSS, webp, dan video demo
│   ├── index-CMZTRe2i.js  # Runtime inti Vue, router, store, & katalog model
│   ├── App-B6dsLZV_.js     # Mesin 3D Three.js, CAD dieline, kinematic folding & editor UI
│   ├── AuthModal-B3hKGvKZ.js # Komponen modal autentikasi
│   ├── AdminPage-dTfClQpT.js # Komponen admin internal
│   ├── index-CMxk3kTM.css  # Gaya Tailwind CSS & utilitas
│   ├── App-CAaPZQVS.css   # Gaya komponen studio
│   └── *.webp, *.mp4      # Aset gambar mockup dan video preview lipatan
└── fonts/                 # Font web lokal (IBM Plex Sans)
```

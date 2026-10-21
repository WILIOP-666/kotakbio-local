# Arsitektur Teknis Kotakio Packaging & 3D Dieline Engine

Dokumen ini menguraikan rincian rekayasa balik (*reverse engineering*), struktur komponen, kalkulasi CAD pola potong (*dieline*), dan kinematika lipatan 3D yang digunakan dalam aplikasi **Kotakio** (`kotakio.biz.id`).

---

## 1. Tumpukan Teknologi (Tech Stack)

Berdasarkan analisis berkas dan artefak bundle:
- **Framework UI**: Vue 3 (Composition API, `<script setup>`, Reactive Refs, Computed Stores).
- **Mesin Grafis 3D**: Three.js r170 (`WebGLRenderer`, `PerspectiveCamera`, `OrbitControls`, `MeshStandardMaterial`, `CanvasTexture`).
- **Ikon**: Lucide Vue Next (`lucide-vue-next` v0.468.0).
- **CSS Framework**: Tailwind CSS v3 dengan palet kustom:
  - `paper`: `#f3f3f1` (warna kanvas latar belakang kertas alami)
  - `ink`: warna teks utama
  - `cut`: `#e11d48` (warna garis potong pisau pond)
  - `crease`: `#2563eb` (warna garis lipat / creasing rule)
- **Ekspor Vektor**: SVG DOM Builder & Canvas 2D Context renderer.
- **Ekspor Dokumen**: Cetak Lembar Spesifikasi PDF via window print stylesheet layout.

---

## 2. Struktur Model & Katalog FEFCO

Katalog model didefinisikan dalam array `Es` (`index-CMZTRe2i.js`), mencakup 18 template:

| ID Model | Kode Standar | Nama Kemasan | Kategori Industri |
|---|---|---|---|
| `tuck-end-0215` | FEFCO 0215 | Reverse Tuck End Box | Kosmetik, Skincare, Obat |
| `straight-tuck-end` | ECMA A15.20 | Straight Tuck End Box | Ritel, Elektronik, Farmasi |
| `autolock-bottom-box` | CRASH-LOCK | Auto-Lock Bottom Box | Produksi Cepat UMKM |
| `mailer-box-0427` | FEFCO 0427 | E-Commerce Mailer Box | Logistik, Hampers, Fashion |
| `snack-box-lock` | SNACK-BOX | Dus Snack & Nasi Kotak | Katering & Restoran |
| `lunch-box-takeaway` | LUNCH-BOX | Lunch Box Take Away | F&B Takeaway |
| `pizza-box` | PIZZA-BOX | Pizza Box | F&B Kuliner |
| `donut-box` | DONUT-BOX | Box Donat & Kue | Bakery & Pastry |
| `tray-sleeve-box` | TRAY-SLEEVE | Tray & Sleeve | Hadiah, Aksesoris |
| `standing-pouch-coffee`| POUCH-3D | Standing Pouch Ziplock | Biji Kopi, Teh, Cemilan |
| `sticker-label` | STIKER | Stiker & Label Kemasan | Label Botol, Toples |
| `pillow-box` | PILLOW-BOX | Pillow Box | Souvenir, Kaos, Sabun |
| `paper-bag-sos` | BAG-SOS | Paper Bag | Retail Toko, Butik |
| `cylinder-can-330` | CYL-360 | Kaleng Silinder & Jar | Minuman Kaleng, Toples |
| `rsc-shipping-0201` | FEFCO 0201 | Regular Slotted Container | Kardus Ekspedisi Pengiriman |
| `food-gable-box` | GABLE-BOX | Food Box & Bakery Carrier | Oleh-oleh & Cake Jinjing |
| `sliding-drawer-box` | SLIDE-BOX | Sliding Box (Laci & Sleeve)| Eksklusif & Elegan |
| `luxury-gift-box` | FEFCO 0320 | Luxury Rigid Gift Box | Hadiah Mewah Base & Lid |

---

## 3. Matematika CAD Dieline 2D

Pola potong kemasan dihasilkan menggunakan rumus geometris parametrik:
1. **Panel Utama**:
   - Panel Depan (*Front*): Lebar = $P$, Tinggi = $T$
   - Panel Belakang (*Back*): Lebar = $P$, Tinggi = $T$
   - Panel Samping Kiri (*Left*): Lebar = $L$, Tinggi = $T$
   - Panel Samping Kanan (*Right*): Lebar = $L$, Tinggi = $T$
   - Lidah Lem (*Glue Flap*): Lebar $\approx 12 - 18\text{ mm}$ dengan sudut potong chamfer $15^\circ - 45^\circ$.
2. **Tutup Atas & Bawah (Tuck Flaps)**:
   - Panel Tutup Atas (*Top Flap*): Tinggi = $L$
   - Lidah Selip Atas (*Tuck In Lip*): Tinggi $\approx 15 - 20\text{ mm}$ dengan sudut lengkung radius (*friction fit lock*).
   - Sayap Debu Samping (*Dust Flaps*): Lebar = $L/2$, Tinggi disesuaikan dengan kedalaman lipatan.
   - Pada **Reverse Tuck End (FEFCO 0215)**: Lidah atas melipat ke belakang, sedangkan lidah bawah melipat ke depan (berlawanan arah).
   - Pada **Straight Tuck End (ECMA A15.20)**: Kedua lidah melipat ke arah yang sama.
3. **Kompensasi Ketebalan Kertas ($t$)**:
   - Jika dipilih ukuran **Dalam (Internal)**:
     $$P_{\text{luar}} = P + 2t, \quad L_{\text{luar}} = L + 2t, \quad T_{\text{luar}} = T + 2t$$
   - Lipatan panel diberi margin toleransi bending sebesar $0.5t - 1t$ agar kertas tidak robek atau menggembung saat dirakit.

---

## 4. Mesin Kinematika Lipatan 3D (Three.js r170)

Kinematika 3D diimplementasikan menggunakan struktur pohon objek bersarang (*Hierarchical Scene Graph*):

1. **Root Pivot (Base Panel)**:
   - Panel depan atau panel belakang berfungsi sebagai acuan koordinat diam $(0,0,0)$.
2. **Hinge Joints (Engsel Lipatan)**:
   - Setiap panel terhubung ke panel induknya melalui `THREE.Group` yang diposisikan persis di garis lipatan (*crease line*).
   - Contoh:
     ```js
     const rightHinge = new THREE.Group();
     rightHinge.position.set(P / 2, 0, 0); // Di tepi kanan panel depan
     frontPanel.add(rightHinge);

     const rightPanel = new THREE.Mesh(rightGeo, rightMat);
     rightPanel.position.set(L / 2, 0, 0);
     rightHinge.add(rightPanel);
     ```
3. **Interpolasi Rotasi Sudut**:
   - Slider lipatan memberikan nilai normalisasi $k \in [0, 1]$ (dari 0% sampai 100%).
   - Sudut lipatan panel dinding utama:
     $$\theta_{\text{wall}}(k) = k \times \frac{\pi}{2} \quad (90^\circ)$$
   - Sudut lipatan flap penutup:
     $$\theta_{\text{flap}}(k) = k \times \frac{\pi}{2}$$
   - Sudut selip lidah tuck-in:
     $$\theta_{\text{tuck}}(k) = k \times \left(\frac{\pi}{2} + \alpha_{\text{friction}}\right)$$
4. **Tekstur Dinamis (Dynamic UV & Canvas Texture)**:
   - Elemen teks, logo, QR code, dan warna latar belakang dirender ke dalam `HTMLCanvasElement` 2D beresolusi tinggi (2048x2048 atau 4096x4096).
   - Kanvas tersebut diikat ke Three.js sebagai `THREE.CanvasTexture` dengan `needsUpdate = true`, sehingga setiap perubahan teks atau warna langsung terproyeksikan secara instan ke permukaan 3D.

---

## 5. Rekayasa Akses Bebas (Pro Unlock & Anti-Auth Decoupling)

Pada aplikasi produksi asli:
- Pengecekan status pro dilakukan melalui endpoint `/auth/me` dan token Bearer.
- Ekspor dieline SVG dan lembar spesifikasi PDF dilindungi oleh middleware `_s` (isLoggedIn) dan `Ti` (isPro), serta verifikasi tanda tangan sidik jari desain pada `/exports/authorize`.
- Jika belum masuk, pengguna dicegat oleh dialog modal Google Sign-In (`https://accounts.google.com/gsi/client`).

**Pembaruan yang Diterapkan di /Obsidian/kotakbio**:
1. State reaktif `je` diatur secara *pre-baked* dengan data akun Pro.
2. `wh` (status autentikasi) dan `vh` (status lisensi Pro) diubah menjadi fungsi konstan `() => true`.
3. Fungsi `jh` (`/exports/authorize`) diubah agar langsung memberikan `{ authorized: true }` tanpa ketergantungan jaringan.
4. Server lokal `server.js` menyediakan endpoint tiruan (*mock responses*) untuk semua jalur API autentikasi dan tagihan, menjamin kestabilan dan kemandirian penuh tanpa koneksi internet.

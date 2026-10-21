# ENSIKLOPEDIA & KAMUS LENGKAP KOTAKIO (FULL REA SPECIFICATION)
## Arsitektur CAD, 18 Model FEFCO/ECMA, Kalkulasi Matematika, Material Board, Kinematika 3D & Glosarium Grafika Kemasan

> Dokumen ini adalah hasil ekstraksi dan dekonstruksi menyeluruh (*Full Reverse-Engineering Architecture*) dari seluruh berkas JavaScript, CSS, dan runtime WebGL Three.js aplikasi **Kotakio** (`kotakio.biz.id`). Dokumen ini mencakup seluruh fitur, data parametrik, rumus matematika, dan istilah teknis industri percetakan kemasan secara lengkap tanpa ada yang terlewat.

---

## DAFTAR ISI
1. [Katalog 18 Model Kemasan (FEFCO & ECMA)](#1-katalog-18-model-kemasan-fefco--ecma)
2. [Kamus Material, Board & Ketebalan Caliper (`xh`)](#2-kamus-material-board--ketebalan-caliper-xh)
3. [Palet Warna & Presets Material PBR Three.js (`_h`)](#3-palet-warna--presets-material-pbr-threejs-_h)
4. [Katalog Tipografi & Google Fonts (`Su` & `oh`)](#4-katalog-tipografi--google-fonts-su--oh)
5. [Matematika & Geometri CAD Dieline 2D](#5-matematika--geometri-cad-dieline-2d)
6. [Kinematika Lipatan 3D (Three.js r170 Hierarchical Scene Graph)](#6-kinematika-lipatan-3d-threejs-r170-hierarchical-scene-graph)
7. [Spesifikasi Jendela Mika & Lubang Gantungan Toko](#7-spesifikasi-jendela-mika--lubang-gantungan-toko)
8. [Glosarium Lengkap Istilah Industri Percetakan & Kemasan](#8-glosarium-lengkap-istilah-industri-percetakan--kemasan)

---

## 1. KATALOG 18 MODEL KEMASAN (FEFCO & ECMA)

Data lengkap 18 model kemasan yang didefinisikan pada array `Es`:

### 1. Reverse Tuck End Box
- **ID Model**: `tuck-end-0215`
- **Standar Industri**: **FEFCO 0215**
- **Kategori**: Kosmetik & Skincare | **Badge**: Terlaris UMKM
- **Deskripsi**: Kotak lipat standar industri untuk botol serum skincare, parfum, obat herbal, dan kemasan ritel.
- **Tutup & Kancing**: Tutup atas melipat ke belakang (*tuck to back*), tutup bawah melipat ke depan (*tuck to front*).
- **Dimensi Default**: $P = 90\text{ mm}, L = 65\text{ mm}, T = 140\text{ mm}$, Tebal $= 0.4\text{ mm}$, Bahan = `ivory-300`.
- **Bahan yang Didukung**: `art-carton-260`, `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Box Serum 30ml*: $45 \times 45 \times 115\text{ mm}$
  2. *Box Parfum 100ml*: $85 \times 55 \times 135\text{ mm}$
  3. *Box Teh Herbal / Suplemen*: $110 \times 70 \times 150\text{ mm}$
- **Desain Bawaan**: Base `#3d5a4a` (Sage), Inside `#e8e1d2`, Finish `matte`, Brand *"Aura Botanica"*, Subtitle *"Brightening Serum"*.

### 2. Straight Tuck End Box
- **ID Model**: `straight-tuck-end`
- **Standar Industri**: **ECMA A15.20**
- **Kategori**: Herbal & Suplemen | **Badge**: Standar Farmasi
- **Deskripsi**: Kedua lidah penutup melipat ke arah yang sama (belakang). Sangat rapi untuk tampak depan farmasi dan obat.
- **Dimensi Default**: $P = 80\text{ mm}, L = 50\text{ mm}, T = 130\text{ mm}$, Tebal $= 0.4\text{ mm}$, Bahan = `ivory-300`.
- **Bahan yang Didukung**: `art-carton-260`, `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Box Strip Obat / Kapsul*: $70 \times 35 \times 120\text{ mm}$
  2. *Box Botol Tetes 60ml*: $55 \times 55 \times 110\text{ mm}$
  3. *Box Madu & Propolis*: $60 \times 60 \times 140\text{ mm}$

### 3. Auto-Lock Bottom Box (Crash-Lock)
- **ID Model**: `autolock-bottom-box`
- **Standar Industri**: **CRASH-LOCK / FEFCO 0711**
- **Kategori**: Botol & Toples | **Badge**: Cepat Rakit
- **Deskripsi**: Bagian bawah otomatis mengunci saat kotak ditekan mengembang. Mampu menahan beban berat botol sirup, toples madu, dan tumbler.
- **Dimensi Default**: $P = 100\text{ mm}, L = 100\text{ mm}, T = 160\text{ mm}$, Tebal $= 0.5\text{ mm}$, Bahan = `duplex-350`.
- **Bahan yang Didukung**: `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`, `e-flute`.
- **Preset Ukuran**:
  1. *Box Toples Jar 250g*: $95 \times 95 \times 110\text{ mm}$
  2. *Box Botol Sirup 250ml*: $75 \times 75 \times 180\text{ mm}$
  3. *Box Tumbler & Botol Minum*: $85 \times 85 \times 230\text{ mm}$

### 4. E-Commerce Mailer Box
- **ID Model**: `mailer-box-0427`
- **Standar Industri**: **FEFCO 0427**
- **Kategori**: Fashion & Hampers | **Badge**: Favorit Olshop
- **Deskripsi**: Kardus bergelombang model flip-top dengan dinding samping ganda (*double sidewall*) anti remuk untuk pengiriman paket ekspedisi.
- **Dimensi Default**: $P = 220\text{ mm}, L = 160\text{ mm}, T = 70\text{ mm}$, Tebal $= 1.5\text{ mm}$, Bahan = `e-flute`.
- **Bahan yang Didukung**: `e-flute`, `b-flute`, `kraft-350`.
- **Preset Ukuran**:
  1. *Mailer Baju / Kaos (T-Shirt)*: $280 \times 200 \times 50\text{ mm}$
  2. *Mailer Aksesoris & Hijab*: $200 \times 150 \times 50\text{ mm}$
  3. *Mailer Sepatu / Hampers*: $320 \times 220 \times 120\text{ mm}$

### 5. Dus Snack & Nasi Kotak Kancing
- **ID Model**: `snack-box-lock`
- **Standar Industri**: **SNACK-BOX LOCK**
- **Kategori**: Katering & Kue | **Badge**: Tanpa Lem
- **Deskripsi**: Dus makanan dengan kancing lidah interlocking tanpa lem. Cocok untuk snack rapat, bakery, dan kue basah.
- **Dimensi Default**: $P = 160\text{ mm}, L = 120\text{ mm}, T = 75\text{ mm}$, Tebal $= 0.5\text{ mm}$, Bahan = `duplex-350`.
- **Bahan yang Didukung**: `duplex-350`, `ivory-300`, `ivory-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Dus Snack 3 Kue*: $140 \times 105 \times 70\text{ mm}$
  2. *Dus Snack 4 Kue + Air*: $160 \times 120 \times 75\text{ mm}$
  3. *Dus Snack Besar / Nasi Mini*: $180 \times 130 \times 75\text{ mm}$

### 6. Lunch Box Take Away
- **ID Model**: `lunch-box-takeaway`
- **Standar Industri**: **LUNCH-BOX FOLD**
- **Kategori**: Kuliner & Katering | **Badge**: Anti Bocor
- **Deskripsi**: Kotak makan sudut tertutup tanpa celah, tahan kuah dan rembesan minyak. Standar F&B ayam geprek, nasi goreng, mie.
- **Dimensi Default**: $P = 180\text{ mm}, L = 110\text{ mm}, T = 50\text{ mm}$, Tebal $= 0.4\text{ mm}$, Bahan = `foodpack-290`.
- **Bahan yang Didukung**: `foodpack-290`, `kraft-pe`, `duplex-350`.
- **Preset Ukuran**:
  1. *Lunch Box S (Snack / Dimsum)*: $120 \times 90 \times 50\text{ mm}$
  2. *Lunch Box M (Nasi Ayam Geprek)*: $160 \times 100 \times 50\text{ mm}$
  3. *Lunch Box L (Porsi Jumbo / Bento)*: $180 \times 110 \times 55\text{ mm}$

### 7. Pizza Box
- **ID Model**: `pizza-box`
- **Standar Industri**: **PIZZA-BOX CEPER**
- **Kategori**: Pizza & Martabak | **Badge**: Tahan Panas
- **Deskripsi**: Kotak kardus gelombang ceper dengan ventilasi uap untuk menjaga kerenyahan pizza, martabak manis, dan pie susu.
- **Dimensi Default**: $P = 240\text{ mm}, L = 240\text{ mm}, T = 45\text{ mm}$, Tebal $= 1.5\text{ mm}$, Bahan = `e-flute`.
- **Bahan yang Didukung**: `e-flute`, `b-flute`, `duplex-350`.
- **Preset Ukuran**:
  1. *Pizza Personal (8 inch)*: $200 \times 200 \times 40\text{ mm}$
  2. *Pizza Regular (10 inch)*: $250 \times 250 \times 45\text{ mm}$
  3. *Pizza Large (12 inch)*: $300 \times 300 \times 45\text{ mm}$

### 8. Box Donat & Kue
- **ID Model**: `donut-box`
- **Standar Industri**: **DONUT-BOX WIDE**
- **Kategori**: Bakery & Kue | **Badge**: Tutup Lebar
- **Deskripsi**: Kotak bertutup engsel dengan bukaan lebar untuk memudahkan penataan donat isi 6 atau 12, brownies, dan chiffon cake.
- **Dimensi Default**: $P = 270\text{ mm}, L = 185\text{ mm}, T = 55\text{ mm}$, Tebal $= 0.4\text{ mm}$, Bahan = `ivory-300`.
- **Bahan yang Didukung**: `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Donat Isi 3 / Brownies Mini*: $180 \times 100 \times 55\text{ mm}$
  2. *Donat Isi 6 (Setengah Lusin)*: $270 \times 185 \times 55\text{ mm}$
  3. *Donat Isi 12 (Satu Lusin)*: $360 \times 270 \times 55\text{ mm}$

### 9. Tray & Sleeve Box
- **ID Model**: `tray-sleeve-box`
- **Standar Industri**: **TRAY-SLEEVE 2-PART**
- **Kategori**: Kue & Frozen Food | **Badge**: Kemasan Geser
- **Deskripsi**: Kemasan dua bagian: wadah dalam (*tray*) dan selongsong luar (*sleeve*). Menampilkan kesan modern dan eksklusif.
- **Dimensi Default**: $P = 150\text{ mm}, L = 100\text{ mm}, T = 45\text{ mm}$, Tebal $= 0.4\text{ mm}$, Bahan = `foodpack-290`.
- **Bahan yang Didukung**: `foodpack-290`, `ivory-300`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Macaron / Cokelat Praline*: $120 \times 60 \times 40\text{ mm}$
  2. *Cookies / Pastry Bar*: $150 \times 100 \times 45\text{ mm}$
  3. *Frozen Bento / Ready Meal*: $190 \times 130 \times 45\text{ mm}$

### 10. Standing Pouch Ziplock
- **ID Model**: `standing-pouch-coffee`
- **Standar Industri**: **POUCH-3D GUSSET**
- **Kategori**: Kopi & Snack UMKM | **Badge**: Kemasan Fleksibel
- **Deskripsi**: Kantong berdiri dengan lipatan bawah (*bottom gusset*) dan ziplock untuk biji kopi, bubuk minuman, keripik, dan granola.
- **Dimensi Default**: $P = 140\text{ mm}, L = 70\text{ mm}$ (Gusset), $T = 220\text{ mm}$, Tebal $= 0.15\text{ mm}$, Bahan = `kraft-pe`.
- **Bahan yang Didukung**: `kraft-pe`, `pet-pe`, `pet-alu-pe`.
- **Preset Ukuran**:
  1. *Pouch Kopi 100g*: $120 \times 60 \times 200\text{ mm}$
  2. *Pouch Kopi 250g*: $140 \times 70 \times 220\text{ mm}$
  3. *Pouch Kopi / Snack 500g*: $160 \times 80 \times 260\text{ mm}$

### 11. Stiker & Label Kemasan
- **ID Model**: `sticker-label`
- **Standar Industri**: **LABEL DIE-CUT**
- **Kategori**: Toples, Botol & Thinwall | **Badge**: Label Siap Cetak
- **Deskripsi**: Layout pola stiker lembaran siap cetak untuk label botol, toples kue kering, cup minuman, dan segel kemasan.
- **Dimensi Default**: $P = 80\text{ mm}, L = 50\text{ mm}, T = 1\text{ mm}$, Tebal $= 0.1\text{ mm}$, Bahan = `label-vinyl`.
- **Bahan yang Didukung**: `label-paper`, `label-vinyl`, `label-bopp`.
- **Preset Ukuran**:
  1. *Segel Toples / Label Bulat*: $50 \times 50 \times 1\text{ mm}$
  2. *Label Botol Minuman 250ml*: $140 \times 50 \times 1\text{ mm}$
  3. *Label Kotak Makanan Thinwall*: $100 \times 60 \times 1\text{ mm}$

### 12. Pillow Box (Kotak Bantal)
- **ID Model**: `pillow-box`
- **Standar Industri**: **PILLOW-BOX CURVED**
- **Kategori**: Suvenir & Perhiasan | **Badge**: Bentuk Unik
- **Deskripsi**: Kotak bentuk bantal dengan tutup melengkung elegan di kedua ujung. Sangat populer untuk syal, sabun organik, suvenir pernikahan, dan perhiasan.
- **Dimensi Default**: $P = 130\text{ mm}, L = 90\text{ mm}, T = 35\text{ mm}$, Tebal $= 0.3\text{ mm}$, Bahan = `art-carton-260`.
- **Bahan yang Didukung**: `art-carton-260`, `ivory-300`, `kraft-350`.
- **Preset Ukuran**:
  1. *Kotak Aksesoris / Anting*: $90 \times 60 \times 25\text{ mm}$
  2. *Kotak Sabun Batang Alami*: $120 \times 80 \times 35\text{ mm}$
  3. *Kotak Syal / Kaos Kaki*: $160 \times 110 \times 40\text{ mm}$

### 13. Paper Bag SOS (Square Bottom Bag)
- **ID Model**: `paper-bag-sos`
- **Standar Industri**: **BAG-SOS SQUARE-BASE**
- **Kategori**: Butik, Kafe & Oleh-oleh | **Badge**: Ramah Lingkungan
- **Deskripsi**: Kantong kertas dengan dasar persegi dapat berdiri tegak, dengan lipatan samping accordion untuk ritel dan kafe.
- **Dimensi Default**: $P = 150\text{ mm}, L = 90\text{ mm}, T = 240\text{ mm}$, Tebal $= 0.15\text{ mm}$, Bahan = `kraft-paper-120`.
- **Bahan yang Didukung**: `kraft-paper-120`, `art-paper-150`, `kraft-350`.
- **Preset Ukuran**:
  1. *Paper Bag Roti / Pastry*: $120 \times 70 \times 210\text{ mm}$
  2. *Paper Bag Belanja Standar*: $150 \times 90 \times 240\text{ mm}$
  3. *Paper Bag Butik / Kaos*: $220 \times 110 \times 280\text{ mm}$

### 14. Kaleng Silinder & Jar
- **ID Model**: `cylinder-can-330`
- **Standar Industri**: **CYLINDER 360-WRAP**
- **Kategori**: Minuman & Kosmetik | **Badge**: Silinder 360°
- **Deskripsi**: Visualisasi label silinder melingkar 360 derajat untuk kaleng minuman soda 330ml, botol aerosol, dan jar krim.
- **Dimensi Default**: $P = 212\text{ mm}$ (Keliling $\pi D$), $L = 66\text{ mm}$ (Diameter), $T = 120\text{ mm}$, Tebal $= 0.1\text{ mm}$, Bahan = `label-paper`.
- **Bahan yang Didukung**: `label-paper`, `label-vinyl`, `label-bopp`.
- **Preset Ukuran**:
  1. *Jar Kosmetik 50g*: $180 \times 55 \times 45\text{ mm}$
  2. *Kaleng Minuman Standar 330ml*: $212 \times 66 \times 120\text{ mm}$
  3. *Kaleng Sleek Can 250ml*: $175 \times 53 \times 135\text{ mm}$

### 15. Regular Slotted Container (RSC)
- **ID Model**: `rsc-shipping-0201`
- **Standar Industri**: **FEFCO 0201**
- **Kategori**: Kargo & Logistik | **Badge**: Master Box
- **Deskripsi**: Kardus bergelombang standar ekspedisi global dengan 4 flap atas dan bawah yang bertemu tepat di tengah untuk dilakban.
- **Dimensi Default**: $P = 300\text{ mm}, L = 200\text{ mm}, T = 200\text{ mm}$, Tebal $= 3.0\text{ mm}$, Bahan = `b-flute`.
- **Bahan yang Didukung**: `e-flute`, `b-flute`, `c-flute`, `bc-flute`.
- **Preset Ukuran**:
  1. *Kardus Ekspedisi Kecil (5 kg)*: $250 \times 180 \times 150\text{ mm}$
  2. *Kardus Ekspedisi Sedang (10 kg)*: $320 \times 220 \times 200\text{ mm}$
  3. *Master Box Skincare (24 pcs)*: $380 \times 280 \times 250\text{ mm}$

### 16. Food Gable Box (Kotak Tenteng)
- **ID Model**: `food-gable-box`
- **Standar Industri**: **GABLE-BOX CARRIER**
- **Kategori**: Kuliner F&B | **Badge**: Pegangan Tenteng
- **Deskripsi**: Kotak berbentuk atap segitiga dengan pegangan jinjing terintegrasi. Sangat diminati untuk oleh-oleh bolu, pie, dan hampers ayam utuh.
- **Dimensi Default**: $P = 200\text{ mm}, L = 120\text{ mm}, T = 150\text{ mm}$, Tebal $= 0.5\text{ mm}$, Bahan = `kraft-350`.
- **Bahan yang Didukung**: `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Kotak Bolu Gulung*: $240 \times 100 \times 110\text{ mm}$
  2. *Kotak Hampers Ayam Utuh*: $220 \times 140 \times 150\text{ mm}$
  3. *Kotak Snack Jinjing Rapat*: $180 \times 110 \times 120\text{ mm}$

### 17. Sliding Box (Laci & Sleeve)
- **ID Model**: `sliding-drawer-box`
- **Standar Industri**: **SLIDE-BOX DRAWER**
- **Kategori**: Cokelat & Hampers | **Badge**: Laci Geser
- **Deskripsi**: Kotak laci geser yang terdiri dari laci dalam kokoh dan selongsong luar. Memberikan pengalaman unboxing yang sangat memuaskan.
- **Dimensi Default**: $P = 160\text{ mm}, L = 90\text{ mm}, T = 40\text{ mm}$, Tebal $= 0.45\text{ mm}$, Bahan = `ivory-350`.
- **Bahan yang Didukung**: `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Box Cokelat Batang / Praline*: $140 \times 70 \times 30\text{ mm}$
  2. *Box Jam Tangan / Gelang*: $160 \times 90 \times 40\text{ mm}$
  3. *Box Parfum Mini Travel Set*: $180 \times 110 \times 45\text{ mm}$

### 18. Luxury Rigid Gift & Coffee Box
- **ID Model**: `luxury-gift-box`
- **Standar Industri**: **FEFCO 0320**
- **Kategori**: Kopi & Gift Box | **Badge**: Hardbox Mewah
- **Deskripsi**: Kotak tutup dan alas terpisah (*base and lid*) berbahan greyboard tebal dilapisi kertas seni halus untuk kemasan mewah.
- **Dimensi Default**: $P = 130\text{ mm}, L = 95\text{ mm}, T = 170\text{ mm}$, Tebal $= 2.0\text{ mm}$, Bahan = `greyboard-2`.
- **Bahan yang Didukung**: `greyboard-2`, `greyboard-25`.
- **Preset Ukuran**:
  1. *Box Drip Coffee 10 Sachet*: $125 \times 90 \times 155\text{ mm}$
  2. *Box Gift Set Jam / Dompet*: $140 \times 120 \times 85\text{ mm}$
  3. *Box Reed Diffuser Luxury*: $100 \times 100 \times 210\text{ mm}$

---

## 2. KAMUS MATERIAL, BOARD & KETEBALAN CALIPER (`xh`)

Tabel spesifikasi material kertas dan karton kemasan yang dikomputasikan ke dalam kalkulasi CAD:

| Kunci ID | Nama Material & Deskripsi | Ketebalan Caliper ($t$) | Karakteristik Penggunaan |
|---|---|---|---|
| `art-carton-260` | Art Carton 260 gsm | $0.30\text{ mm}$ | Kedua sisi putih licin, sangat tajam untuk cetak offset separasi warna. |
| `ivory-230` | Ivory 230 gsm | $0.30\text{ mm}$ | Satu sisi licin glossy, sisi belakang kasar doff; ringan untuk kosmetik kecil. |
| `ivory-300` | Ivory 300 gsm | $0.40\text{ mm}$ | Bahan standar terpopuler untuk kemasan kosmetik, skincare, obat, dan suplemen. |
| `ivory-350` | Ivory 350 gsm | $0.45\text{ mm}$ | Lebih tebal dan kaku, cocok untuk kemasan botol kaca dan produk premium. |
| `duplex-350` | Duplex 350 gsm | $0.50\text{ mm}$ | Sisi depan putih, sisi belakang abu-abu; ekonomis dan kuat untuk dus snack & makanan. |
| `kraft-350` | Kraft Liner 350 gsm | $0.50\text{ mm}$ | Serat daur ulang cokelat alami (*earthy look*), kokoh dan ramah lingkungan. |
| `foodpack-290` | Foodpack 290 gsm (Food Grade) | $0.40\text{ mm}$ | Bersertifikat aman kontak makanan langsung (*direct food contact*), anti minyak. |
| `kraft-paper-120` | Kertas Kraft 120 gsm | $0.15\text{ mm}$ | Fleksibel dan liat, digunakan untuk paper bag belanja ritel. |
| `art-paper-150` | Art Paper 150 gsm | $0.15\text{ mm}$ | Kertas licin tipis untuk lapisan luar rigid box (*wrapping paper*). |
| `e-flute` | Karton Gelombang E-Flute | $1.50\text{ mm}$ | Gelombang halus (*fine flute*), tahan banting untuk mailer box e-commerce. |
| `b-flute` | Karton Gelombang B-Flute | $3.00\text{ mm}$ | Gelombang medium, standar kardus shipping pengiriman logistik & pizza box. |
| `c-flute` | Karton Gelombang C-Flute | $4.00\text{ mm}$ | Gelombang tebal dengan peredam benturan tinggi untuk barang berat. |
| `bc-flute` | Double Wall BC-Flute | $7.00\text{ mm}$ | Kardus 2 lapis gelombang (5 ply) untuk ekspor mesin dan barang fragile. |
| `greyboard-2` | Greyboard 2,0 mm + Lapisan | $2.00\text{ mm}$ | Papan kaku keras untuk pembuatan hardbox kado mewah (*rigid box*). |
| `greyboard-25` | Greyboard 2,5 mm + Lapisan | $2.50\text{ mm}$ | Greyboard ekstra kaku untuk packaging display korporat dan perhiasan. |
| `kraft-pe` | Kraft + Lapisan PE | $0.15\text{ mm}$ | Kertas kraft dilaminasi plastik PE kedap udara untuk standing pouch kopi. |
| `pet-pe` | PET / PE (Bening) | $0.10\text{ mm}$ | Plastik transparan bening food grade untuk pouch makanan ringan. |
| `pet-alu-pe` | PET / Alumunium Foil / PE | $0.12\text{ mm}$ | Tiga lapis metalized dengan barrier proteksi cahaya 100% untuk bubuk & kopi. |
| `label-paper` | Stiker Kertas Chromo | $0.10\text{ mm}$ | Stiker berbasis kertas ekonomis untuk toples dan label botol kering. |
| `label-vinyl` | Stiker Vinyl Putih (Tahan Air) | $0.10\text{ mm}$ | Stiker sintetis anti sobek dan tahan air untuk botol frozen dan sampo. |
| `label-bopp` | Stiker BOPP Transparan | $0.08\text{ mm}$ | Stiker plastik ultra-bening tanpa background (*no-label look*). |

---

## 3. PALET WARNA & PRESETS MATERIAL PBR THREE.JS (`_h`)

Preset material *Physically Based Rendering (PBR)* yang digunakan dalam Three.js `MeshStandardMaterial`:

```javascript
[
  { id: "kraft",      name: "Kraft cokelat",     baseColor: "#c49a6c", insideColor: "#b08257", roughness: 0.85, metalness: 0.05 },
  { id: "ivory",      name: "Art carton putih",  baseColor: "#f6f4ef", insideColor: "#e6e3dc", roughness: 0.35, metalness: 0.08 },
  { id: "sage",       name: "Hijau sage",        baseColor: "#3d5a4a", insideColor: "#e8e1d2", roughness: 0.45, metalness: 0.10 },
  { id: "navy",       name: "Biru tua",          baseColor: "#1f2438", insideColor: "#d9d4cc", roughness: 0.25, metalness: 0.25 },
  { id: "chili",      name: "Merah cabai",       baseColor: "#b3372c", insideColor: "#efe9e0", roughness: 0.30, metalness: 0.12 },
  { id: "terracotta", name: "Terakota",          baseColor: "#c4612f", insideColor: "#f4efe6", roughness: 0.55, metalness: 0.08 }
]
```

### Opsi Finishing Kemasan
1. **`matte` (Doff)**: Permukaan halus tanpa pantulan silau, menghasilkan kesan elegan, organik, dan premium.
2. **`glossy` (Mengkilap)**: Permukaan berkilau memantulkan cahaya, warna terlihat lebih kontras dan cerah (*vibrant*).
3. **`foil` (Hot Stamping Foil)**: Efek foil logam emas/perak yang memantulkan kilau metalik pada logo atau teks brand.
4. **`kraft` (Alami)**: Permukaan bertekstur kertas kraft alami tanpa lapisan plastik.

---

## 4. KATALOG TIPOGRAFI & GOOGLE FONTS (`Su` & `oh`)

Aplikasi mengklasifikasikan font ke dalam 4 kategori estetika desain kemasan:

### 1. Klasik / Elegan (Serif)
*Merriweather, EB Garamond, Crimson Pro, Libre Caslon Text, Noto Serif, PT Serif, Source Serif 4, Spectral, Cinzel, Prata, Yeseva One, Marcellus, Bodoni Moda, Fraunces, Gloock, Young Serif, Instrument Serif, Rozha One, Old Standard TT, Cardo, Gilda Display, Italiana, DM Serif Text, Cormorant SC, Bitter, Roboto Slab, Zilla Slab, Arvo.*

### 2. Modern & Bersih (Sans-Serif)
*Inter, Roboto, Open Sans, Lato, Work Sans, Manrope, DM Sans, Figtree, Sora, Space Grotesk, Urbanist, Lexend, Mulish, Nunito Sans, Rubik, Karla, Barlow, Kanit, Prompt, Hanken Grotesk, Be Vietnam Pro, Red Hat Display, Albert Sans, Epilogue, Syne, Tenor Sans, Jost, Questrial, IBM Plex Sans, Cabin, Ubuntu, Exo 2.*

### 3. Tegas & Kuat (Display & Bold)
*Oswald, Archivo Black, Bungee, Teko, Big Shoulders Display, Unbounded, Dela Gothic One, Rubik Mono One, Staatliches, Passion One, Paytone One, Russo One, Bowlby One, Ultra, Bree Serif, Shrikhand, Chango, Black Han Sans, Anton SC, League Gothic, Fjalla One, Changa One.*

### 4. Santai & Ramah (Rounded & Script)
*Quicksand, Baloo 2, Comfortaa, Varela Round, M PLUS Rounded 1c, Chewy, Titan One, Luckiest Guy, Sniglet, Grandstander, Mali, Itim, Gluten, Bubblegum Sans, Coiny, DynaPuff, Concert One, Patrick Hand.*

---

## 5. MATEMATIKA & GEOMETRI CAD DIELINE 2D

### 5.1 Perhitungan Kompensasi Ketebalan Kertas (*Board Caliper*)
Jika pengguna memilih ukuran **Dalam (Internal)** untuk memastikan produk muat:
$$P_{\text{luar}} = P_{\text{dalam}} + 2t$$
$$L_{\text{luar}} = L_{\text{dalam}} + 2t$$
$$T_{\text{luar}} = T_{\text{dalam}} + 2t$$
Pada panel lipatan berganda (*double wall*) seperti pada FEFCO 0427 (Mailer Box), kompensasi ditambah $4t$ sampai $6t$ agar lipatan tidak menggembung (*buckling*).

### 5.2 Geometri Panel Badan (FEFCO 0215)
- **Panel Samping Kiri**: Lebar = $L$, Tinggi = $T$, Titik $X = 0$
- **Panel Depan**: Lebar = $P$, Tinggi = $T$, Titik $X = L$
- **Panel Samping Kanan**: Lebar = $L$, Tinggi = $T$, Titik $X = L + P$
- **Panel Belakang**: Lebar = $P$, Tinggi = $T$, Titik $X = 2L + P$
- **Lidah Lem (Glue Flap)**: Lebar $G = \max(12, \min(20, 0.15 \times P))$, dihubungkan ke sisi samping dengan sudut potong chamfer $15^\circ$ di ujung atas dan bawah.
- **Total Panjang Lembaran Dieline**:
  $$W_{\text{sheet}} = 2P + 2L + G$$

### 5.3 Geometri Tutup Selip (Tuck Flaps)
- **Tinggi Tutup Utama**: $L$
- **Tinggi Lidah Selip (Tuck Tongue)**: $H_{\text{tuck}} \approx 15\text{ mm}$
- **Radius Kuping Pengunci (Friction Lock Ears)**: $R = 3\text{ mm}$
- **Sayap Penahan Debu (Dust Flaps)**:
  - Tinggi $= L/2$
  - Sudut potong pembebas (*relief angle*) $= 45^\circ$ agar sayap tidak bergesekan saat dirakit.

---

## 6. KINEMATIKA LIPATAN 3D (THREE.JS R170)

Kinematika lipatan 3D dibangun menggunakan pohon engsel (*hierarchical hinge groups*):

```
BasePanel (Back Panel di (0,0,0))
  │
  ├── [Hinge Samping Kiri] RotY: +90° * k
  │     └── LeftPanel
  │           └── [Hinge Lidah Lem] RotY: +90° * k ──> GlueFlap
  │
  ├── [Hinge Samping Kanan] RotY: -90° * k
  │     └── RightPanel
  │           └── [Hinge Depan] RotY: -90° * k ──> FrontPanel
  │
  ├── [Hinge Tutup Atas] RotX: +90° * k
  │     └── TopPanel
  │           └── [Hinge Lidah Atas] RotX: +90° * k ──> TopTuckFlap
  │
  └── [Hinge Tutup Bawah] RotX: -90° * k
        └── BottomPanel
              └── [Hinge Lidah Bawah] RotX: -90° * k ──> BottomTuckFlap
```

- Parameter $k \in [0.0, 1.0]$ dikendalikan oleh slider **Lipatan** di bilah bawah antarmuka.
- Pada $k = 0.0$: Semua rotasi bernilai 0 radian (lembaran pola potong 2D datar utuh).
- Pada $k = 1.0$: Semua engsel berputar $90^\circ$ ($\pi/2$ radian) menghasilkan kotak 3D tertutup rapat.

---

## 7. SPESIFIKASI JENDELA MIKA & LUBANG GANTUNGAN TOKO

### 7.1 Jendela Mika Depan (Window Die-Cut)
- **Ukuran Lubang**: Ditentukan proporsional terhadap panel depan ($P \times T$):
  - Lebar Jendela: $W_{\text{win}} = P - 2 \times \text{margin}_X$ (standar margin $15\text{ mm}$)
  - Tinggi Jendela: $H_{\text{win}} = T - 2 \times \text{margin}_Y$ (standar margin $20\text{ mm}$)
- **Area Tempel Lem Mika Plastik**: Ditambahkan bibir lem sebesar $5\text{ mm}$ di sekeliling lubang pada sisi dalam (*inside face*).

### 7.2 Lubang Gantungan Rak Toko (Display Hangers)
1. **Gantungan Bulat (Round Hole)**:
   - Diameter lubang: $\varnothing 8\text{ mm}$
   - Posisi: Tepat di sumbu simetri $X = P/2$, berjarak $12\text{ mm}$ dari puncak lidah atas.
2. **Gantungan Euro (Euroslot Standar Supermarket)**:
   - Standar dimensi internasional: Lebar utama $32\text{ mm}$, Tinggi celah $9\text{ mm}$, Lubang tengah atas $6\text{ mm}$ dengan radius lengkung $3\text{ mm}$.
   - Cocok untuk cantolan besi ganda pada rak ritel minimarket dan supermarket.

---

## 8. GLOSARIUM LENGKAP ISTILAH INDUSTRI PERCETAKAN & KEMASAN

1. **Dieline (Pola Pond)**: Gambar teknik vektor 2D yang menunjukkan garis potong pisau, garis lipat, dan area lembaran cetak.
2. **Creasing / Scoring (Garis Lipat / Ril)**: Proses penekanan pisau tumpul pada kertas untuk membuat alur lipatan agar kertas tidak pecah saat dilipat.
3. **Die-Cutting (Pond / Pon)**: Proses pemotongan lembaran kertas menggunakan pisau baja tajam (*cutting rule*) yang ditanam pada papan kayu (*die board*).
4. **Bleed (Area Lebih Tinta)**: Area desain grafis yang dilebihkan 3 mm keluar dari garis potong pisau pond untuk mencegah munculnya tepi putih saat toleransi pergeseran potong terjadi.
5. **Safe Margin (Area Aman Teks)**: Batas dalam minimal 3–5 mm dari garis potong/lipat agar teks atau logo tidak terpotong pisau pond.
6. **Gramatur (GSM - Grams per Square Meter)**: Satuan berat jenis kertas per meter persegi.
7. **Caliper / Thickness**: Ketebalan fisik lembaran kertas, biasanya diukur dalam satuan milimeter (mm) atau mikron ($\mu\text{m}$).
8. **Arah Serat (Grain Direction)**: Arah jajaran serat selulosa kertas (*Long Grain* vs *Short Grain*). Garis lipatan utama harus sejajar dengan arah serat agar lipatan rapi dan tidak retak.
9. **Glue Flap (Lidah Lem)**: Panel tepi sempit berperekat yang disatukan ke dinding lawan untuk membentuk tabung kotak lipat.
10. **Tuck Flap (Lidah Selip)**: Panel penutup tanpa lem yang diselipkan ke dalam celah kotak untuk membuka dan menutup kotak berulang kali.
11. **Dust Flap (Sayap Debu)**: Sayap samping di bawah tutup utama yang berfungsi menahan debu masuk dan menjaga kekakuan sudut kotak.
12. **Interlocking Lock (Kancingan Slip)**: Sistem penguncian kertas menggunakan kait tanpa lem (seperti pada dus nasi dan snack box).
13. **Auto-Lock Bottom (Crash-Lock)**: Bagian bawah kotak berperekat khusus yang otomatis mengembang dan mengunci sendiri saat ditekan mendatar.
14. **Euroslot (Euro Hole)**: Lubang gantungan standar rak toko ritel berbentuk kombinasi garis horizontal dan lengkungan kubah atas.
15. **Laminasi Doff / Matte**: Pelapisan film plastik tipis berkarakteristik menyerap pantulan cahaya, memberikan tekstur lembut dan mewah.
16. **Laminasi Glossy**: Pelapisan film plastik mengkilap yang memantulkan cahaya dan tahan percikan air.
17. **Hot Stamping Foil**: Teknik transfer foil logam panas (emas, perak, tembaga, hologram) menggunakan klise tembaga/timah.
18. **Spot UV**: Pelapisan cairan pernis mengkilap yang dikeringkan dengan sinar ultraviolet hanya pada area logo atau teks tertentu.
19. **Emboss & Deboss**: Teknik penekanan cetak timbul keluar (*emboss*) atau cetak tenggelam ke dalam (*deboss*) tanpa tinta (*blind emboss*) atau bersama tinta.
20. **FEFCO (European Federation of Corrugated Board Manufacturers)**: Standar kodefikasi desain kemasan karton gelombang internasional.
21. **ECMA (European Carton Makers Association)**: Standar kodefikasi desain kemasan kertas lipat (*folding boxboard*) internasional.

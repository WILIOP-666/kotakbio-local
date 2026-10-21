# REA FULL MODELS SPECIFICATION: 18 FEFCO & ECMA PACKAGING TEMPLATES

> **Target Source**: `https://kotakio.biz.id/`  
> **Framework**: REA (Reverse Engineer Anything) Full Mathematical & Parametric Deconstruction  
> **Destination**: `C:/Users/willi/Obsidian/kotakbio/REA-FULL-MODELS.md`  
> **Akses & Lisensi**: 100% Unlocked / Full Pro Access  

Dokumen ini memuat dekonstruksi lengkap dan mendalam dari seluruh **18 Model Kemasan** yang ada di Kotakio, mencakup:
- Identitas, standar industri (FEFCO / ECMA), deskripsi, dan peruntukan produk.
- Dimensi bawaan ($P \times L \times T$), toleransi tebal bahan ($t$), dan daftar preset ukuran industri.
- Desain default (palet warna PBR, tipografi, finish, badge sertifikasi).
- Rumus geometri CAD 2D (bentangan sheet, panel badan, lidah lem, penutup tuck/flaps, dust flaps, dan kompensasi ketebalan).
- Struktur kinematika lipatan 3D Three.js r170 (pohon engsel, sumbu rotasi, dan formula sudut terhadap slider lipatan $k \in [0.0, 1.0]$).

---

## DAFTAR 18 MODEL LENGKAP

1. [`tuck-end-0215` — Reverse Tuck End Box (FEFCO 0215)](#1-tuck-end-0215--reverse-tuck-end-box-fefco-0215)
2. [`straight-tuck-end` — Straight Tuck End Box (ECMA A15.20)](#2-straight-tuck-end--straight-tuck-end-box-ecma-a1520)
3. [`autolock-bottom-box` — Auto-Lock Bottom Box (CRASH-LOCK)](#3-autolock-bottom-box--auto-lock-bottom-box-crash-lock)
4. [`mailer-box-0427` — E-Commerce Mailer Box (FEFCO 0427)](#4-mailer-box-0427--e-commerce-mailer-box-fefco-0427)
5. [`snack-box-lock` — Dus Snack & Nasi Kotak (SNACK-BOX)](#5-snack-box-lock--dus-snack--nasi-kotak-snack-box)
6. [`lunch-box-takeaway` — Lunch Box Take Away (LUNCH-BOX)](#6-lunch-box-takeaway--lunch-box-take-away-lunch-box)
7. [`pizza-box` — Pizza Box (PIZZA-BOX)](#7-pizza-box--pizza-box-pizza-box)
8. [`donut-box` — Box Donat & Kue (DONUT-BOX)](#8-donut-box--box-donat--kue-donut-box)
9. [`tray-sleeve-box` — Tray & Sleeve (TRAY-SLEEVE)](#9-tray-sleeve-box--tray--sleeve-tray-sleeve)
10. [`standing-pouch-coffee` — Standing Pouch Ziplock (POUCH-3D)](#10-standing-pouch-coffee--standing-pouch-ziplock-pouch-3d)
11. [`sticker-label` — Stiker & Label Kemasan (STIKER)](#11-sticker-label--stiker--label-kemasan-stiker)
12. [`pillow-box` — Pillow Box (PILLOW-BOX)](#12-pillow-box--pillow-box-pillow-box)
13. [`paper-bag-sos` — Paper Bag (BAG-SOS)](#13-paper-bag-sos--paper-bag-bag-sos)
14. [`cylinder-can-330` — Kaleng Silinder & Jar (CYL-360)](#14-cylinder-can-330--kaleng-silinder--jar-cyl-360)
15. [`rsc-shipping-0201` — Regular Slotted Container (FEFCO 0201)](#15-rsc-shipping-0201--regular-slotted-container-fefco-0201)
16. [`food-gable-box` — Food Box & Bakery Carrier (GABLE-BOX)](#16-food-gable-box--food-box--bakery-carrier-gable-box)
17. [`sliding-drawer-box` — Sliding Box Laci & Sleeve (SLIDE-BOX)](#17-sliding-drawer-box--sliding-box-laci--sleeve-slide-box)
18. [`luxury-gift-box` — Luxury Rigid Gift Box (FEFCO 0320)](#18-luxury-gift-box--luxury-rigid-gift-box-fefco-0320)

---

### 1. `tuck-end-0215` — Reverse Tuck End Box (FEFCO 0215)
- **Kategori**: Kosmetik & Skincare | **Badge**: Terlaris UMKM | **Glyph**: `tuck`
- **Aplikasi**: Botol serum skincare, parfum, kosmetik, botol tetes herbal, strip vitamin.
- **Dimensi Default**:
  - Panjang ($P$): $90\text{ mm}$
  - Lebar ($L$): $65\text{ mm}$
  - Tinggi ($T$): $140\text{ mm}$
  - Tebal ($t$): $0.4\text{ mm}$ (`ivory-300`)
- **Bahan Kompatibel**: `art-carton-260`, `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Box Serum 30ml*: $45 \times 45 \times 115\text{ mm}$
  2. *Box Parfum 100ml*: $85 \times 55 \times 135\text{ mm}$
  3. *Box Teh Herbal / Suplemen*: $110 \times 70 \times 150\text{ mm}$
- **Desain Bawaan**: Base `#3d5a4a` (Sage), Inside `#e8e1d2`, Finish `matte`, Brand *"Aura Botanica"*, Subtitle *"Brightening Serum"*, Tagline *"Niacinamide 5% · Centella Asiatica · 30 ml"*, Typeface `klasik`, Accent `#f2ecdf`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - $W_{\text{sheet}} = 2P + 2L + G$ (di mana lidah lem $G = 15\text{ mm}$).
  - $H_{\text{sheet}} = T + 2L + 2H_{\text{tuck}}$ (di mana $H_{\text{tuck}} = 15\text{ mm}$).
  - Tutup atas menempel pada Panel Depan ($X = L$ hingga $L + P$), melipat ke arah belakang.
  - Tutup bawah menempel pada Panel Belakang ($X = 2L + P$ hingga $2L + 2P$), melipat ke arah depan (berlawanan).
  - Kuping selip (*friction ear*) beradius $R = 3\text{ mm}$ dengan notch pengunci $1.5\text{ mm}$.
- **Kinematika 3D**:
  - `leftHinge.rotation.y = +0.5 * Math.PI * k`
  - `rightHinge.rotation.y = -0.5 * Math.PI * k`
  - `frontHinge.rotation.y = -0.5 * Math.PI * k`
  - `glueFlapHinge.rotation.y = +0.5 * Math.PI * k`
  - `topLidHinge.rotation.x = +0.5 * Math.PI * k`, `topTuckHinge.rotation.x = +0.5 * Math.PI * k`
  - `bottomLidHinge.rotation.x = -0.5 * Math.PI * k`, `bottomTuckHinge.rotation.x = -0.5 * Math.PI * k`

---

### 2. `straight-tuck-end` — Straight Tuck End Box (ECMA A15.20)
- **Kategori**: Herbal & Suplemen | **Badge**: Standar Farmasi | **Glyph**: `ste`
- **Aplikasi**: Strip obat kapsul, madu botol kaca, salep, kosmetik tampak depan bersih.
- **Dimensi Default**: $P = 70\text{ mm}, L = 45\text{ mm}, T = 120\text{ mm}, t = 0.4\text{ mm}$ (`ivory-300`).
- **Bahan Kompatibel**: `art-carton-260`, `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Botol kapsul 60*: $55 \times 55 \times 105\text{ mm}$
  2. *Sirup herbal 100ml*: $60 \times 45 \times 140\text{ mm}$
  3. *Teh celup 25*: $125 \times 70 \times 75\text{ mm}$
- **Desain Bawaan**: Base `#f1e8d6`, Inside `#e8e1d2`, Finish `matte`, Brand *"Herba Lestari"*, Subtitle *"Kapsul Temulawak"*, Tagline *"Isi 60 kapsul · Untuk daya tahan tubuh"*, Typeface `tegas`, Accent `#3b2f1e`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Kedua tutup (atas dan bawah) terhubung ke Panel Depan atau Panel Belakang secara searah, sehingga garis bukaan di sisi depan terlihat seragam dan tidak bertabrakan dengan grafis.
- **Kinematika 3D**:
  - Kedua tutup atas dan bawah berputar ke arah sumbu yang sama (menuju ke belakang kotak).

---

### 3. `autolock-bottom-box` — Auto-Lock Bottom Box (CRASH-LOCK)
- **Kategori**: Botol & Toples | **Badge**: Cepat Rakit | **Glyph**: `autolock`
- **Aplikasi**: Sirup botol 250ml/500ml, toples madu, sambal kemasan, tumbler berat.
- **Dimensi Default**: $P = 75\text{ mm}, L = 75\text{ mm}, T = 160\text{ mm}, t = 0.5\text{ mm}$ (`duplex-350`).
- **Bahan Kompatibel**: `ivory-350`, `duplex-350`, `kraft-350`, `e-flute`.
- **Preset Ukuran**:
  1. *Botol sirup 250 ml*: $70 \times 70 \times 190\text{ mm}$
  2. *Toples sambal 200 g*: $80 \times 80 \times 100\text{ mm}$
  3. *Botol minyak 500 ml*: $75 \times 75 \times 240\text{ mm}$
- **Desain Bawaan**: Base `#123e5c`, Inside `#efeae0`, Finish `glossy`, Brand *"Sambal Juara"*, Subtitle *"Sambal Bawang Pedas"*, Tagline *"Tanpa pengawet · Isi 200 g"*, Typeface `tegas`, Accent `#f6efe2`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Alas bawah terdiri dari 4 flap majemuk: dua flap lipatan diagonal $45^\circ$ dan dua flap pengait yang saling mengunci (*snap-lock / crash bottom*) dengan titik lem industri.
- **Kinematika 3D**:
  - Lipatan alas bawah mengembang secara otomatis mengikuti rotasi dinding bodi utama.

---

### 4. `mailer-box-0427` — E-Commerce Mailer Box (FEFCO 0427)
- **Kategori**: Fashion & Hampers | **Badge**: Favorit Brand | **Glyph**: `mailer`
- **Aplikasi**: Pengiriman online shop, hijab, t-shirt streetwear, sepatu, hampers lebaran/natal.
- **Dimensi Default**: $P = 220\text{ mm}, L = 160\text{ mm}, T = 75\text{ mm}, t = 1.5\text{ mm}$ (`e-flute`).
- **Bahan Kompatibel**: `e-flute`, `b-flute`.
- **Preset Ukuran**:
  1. *Box Hijab / Aksesoris*: $180 \times 140 \times 50\text{ mm}$
  2. *Box Kaos / Streetwear*: $250 \times 200 \times 70\text{ mm}$
  3. *Box Hampers Lebaran*: $280 \times 220 \times 95\text{ mm}$
- **Desain Bawaan**: Base `#c49a6c`, Inside `#b5835a`, Finish `kraft`, Brand *"Kala Studio"*, Subtitle *"Handcrafted Apparel"*, Tagline *"Dibuat dengan tangan di Bandung"*, Typeface `modern`, Accent `#24211d`, Badge `recycle`.
- **Geometri CAD 2D**:
  - Bentangan satu lembar utuh tanpa lem (*roll-over box*).
  - Dinding samping ganda (*double sidewall*) dengan lubang kancingan (*locking slots*).
  - Tutup utama flip-top memiliki sepasang kuping pengunci samping (*cherry locks*) yang meluncur masuk ke celah dinding ganda.
- **Kinematika 3D**:
  - Tahap 1: Dinding samping luar melipat $90^\circ$, lalu dinding samping dalam melipat $180^\circ$ mengunci dasar.
  - Tahap 2: Dinding belakang dan penutup atas berputar menutup kotak.

---

### 5. `snack-box-lock` — Dus Snack & Nasi Kotak (SNACK-BOX)
- **Kategori**: Katering & Kue | **Badge**: Paling Dicari | **Glyph**: `snack`
- **Aplikasi**: Katering rapat kantor, dus kue arisan, nasi kotak hajatan.
- **Dimensi Default**: $P = 150\text{ mm}, L = 150\text{ mm}, T = 60\text{ mm}, t = 0.5\text{ mm}$ (`duplex-350`).
- **Bahan Kompatibel**: `ivory-300`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Snack box 10 × 10*: $100 \times 100 \times 50\text{ mm}$
  2. *Snack box 15 × 15*: $150 \times 150 \times 60\text{ mm}$
  3. *Nasi kotak 20 × 20*: $200 \times 200 \times 75\text{ mm}$
- **Desain Bawaan**: Base `#f4ead5`, Inside `#fbf8f1`, Finish `matte`, Brand *"Dapur Bu Ratna"*, Subtitle *"Snack & Nasi Kotak"*, Tagline *"Katering rumahan untuk acara kantor dan keluarga"*, Typeface `tegas`, Accent `#7a2e1d`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Dinding samping memiliki lidah berbentuk bulan sabit (*hook tab*) yang masuk ke celah slot di dinding depan/belakang tanpa lem.

---

### 6. `lunch-box-takeaway` — Lunch Box Take Away (LUNCH-BOX)
- **Kategori**: Kuliner & Katering | **Badge**: Baru | **Glyph**: `lunch`
- **Aplikasi**: Ayam geprek, nasi goreng, bento take away, mie goreng, dimsum.
- **Dimensi Default**: $P = 160\text{ mm}, L = 110\text{ mm}, T = 50\text{ mm}, t = 0.4\text{ mm}$ (`foodpack-290`).
- **Bahan Kompatibel**: `foodpack-290`, `ivory-300`, `kraft-350`.
- **Preset Ukuran**:
  1. *Lunch box S (snack, kue)*: $130 \times 90 \times 45\text{ mm}$
  2. *Lunch box M (nasi + lauk)*: $160 \times 110 \times 50\text{ mm}$
  3. *Lunch box L (porsi besar)*: $190 \times 130 \times 55\text{ mm}$
- **Desain Bawaan**: Base `#c49a6c`, Inside `#efe6d6`, Finish `kraft`, Brand *"Dapur Nusa"*, Subtitle *"Nasi Bakar Cakalang"*, Tagline *"Hangat dari dapur · Habiskan dalam 4 jam"*, Typeface `tegas`, Accent `#2b2420`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Dinding miring piramidal (*draft angle* $5^\circ - 8^\circ$) untuk memudahkan penumpukan (*nesting*). Sudut lipatan berupa lipatan lipit tertutup (*gusseted fold*) yang mencegah kuah makanan merembes keluar.

---

### 7. `pizza-box` — Pizza Box (PIZZA-BOX)
- **Kategori**: Pizza & Martabak | **Badge**: Baru | **Glyph**: `pizza`
- **Aplikasi**: Pizza 8/10/12 inch, martabak manis Bangka, pie susu Bali, roti canai.
- **Dimensi Default**: $P = 270\text{ mm}, L = 270\text{ mm}, T = 40\text{ mm}, t = 1.5\text{ mm}$ (`e-flute`).
- **Bahan Kompatibel**: `e-flute`, `b-flute`.
- **Preset Ukuran**:
  1. *Pizza 8 inci / martabak kecil*: $220 \times 220 \times 40\text{ mm}$
  2. *Pizza 10 inci / martabak*: $270 \times 270 \times 40\text{ mm}$
  3. *Pizza 12 inci*: $320 \times 320 \times 45\text{ mm}$
- **Desain Bawaan**: Base `#c89b6e`, Inside `#b08257`, Finish `kraft`, Brand *"Pizza Rumahan"*, Subtitle *"Wood-fired Pizza"*, Tagline *"Dipanggang saat dipesan · Nikmati selagi hangat"*, Typeface `tegas`, Accent `#6b1209`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Bentangan ceper bujur sangkar dengan dinding gulung lipat ganda dan 2–4 lubang ventilasi setengah lingkaran diameter $8\text{ mm}$ di sudut belakang.

---

### 8. `donut-box` — Box Donat & Kue (DONUT-BOX)
- **Kategori**: Bakery & Kue | **Badge**: Baru | **Glyph**: `donut`
- **Aplikasi**: Donat isi 3, 6, 12, chiffon cake, bolu kukus, roti sobek.
- **Dimensi Default**: $P = 260\text{ mm}, L = 175\text{ mm}, T = 55\text{ mm}, t = 0.4\text{ mm}$ (`ivory-300`).
- **Bahan Kompatibel**: `ivory-300`, `foodpack-290`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Donat isi 3*: $260 \times 90 \times 55\text{ mm}$
  2. *Donat isi 6*: $260 \times 175 \times 55\text{ mm}$
  3. *Donat isi 12*: $350 \times 265 \times 55\text{ mm}$
- **Desain Bawaan**: Base `#f7d9df`, Inside `#fffaf6`, Finish `glossy`, Brand *"Donat Mama"*, Subtitle *"Donat Kentang Lembut"*, Tagline *"Dibuat pagi ini · Isi 6"*, Typeface `klasik`, Accent `#7a2140`, Badge `halal-organic`, `windowCut: true`.
- **Geometri CAD 2D**:
  - Tutup atas memiliki jendela mika (*window cut*) berukuran $180 \times 100\text{ mm}$ dengan radius sudut $10\text{ mm}$ dan border tempel lem mika $5\text{ mm}$.

---

### 9. `tray-sleeve-box` — Tray & Sleeve (TRAY-SLEEVE)
- **Kategori**: Kue & Frozen Food | **Badge**: Baru | **Glyph**: `tray`
- **Aplikasi**: Macaron, sushi bento, bolu potong, cokelat praline, frozen food.
- **Dimensi Default**: $P = 180\text{ mm}, L = 120\text{ mm}, T = 45\text{ mm}, t = 0.4\text{ mm}$, Lebar Sleeve $= 70\text{ mm}$ (`foodpack-290`).
- **Bahan Kompatibel**: `foodpack-290`, `ivory-300`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Bolu / kue potong*: $180 \times 120 \times 45\text{ mm}$ (sleeve: $70\text{ mm}$)
  2. *Dimsum / sushi isi 6*: $200 \times 100 \times 45\text{ mm}$ (sleeve: $80\text{ mm}$)
  3. *Brownies 20 × 20*: $200 \times 200 \times 50\text{ mm}$ (sleeve: $90\text{ mm}$)
- **Desain Bawaan**: Base `#2f5d3a`, Inside `#f4efe6`, Finish `matte`, Brand *"Bolu Ibu"*, Subtitle *"Bolu Pandan Lapis"*, Tagline *"Tanpa pengawet · Tahan 3 hari"*, Typeface `klasik`, Accent `#f4efe6`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Menghasilkan dua pola potong dalam satu lembar: Bagian 1 adalah Tray lipat 4 sudut, Bagian 2 adalah Sleeve pembungkus dengan lidah lem $15\text{ mm}$ dan kelonggaran keliling $+1.5\text{ mm}$.

---

### 10. `standing-pouch-coffee` — Standing Pouch Ziplock (POUCH-3D)
- **Kategori**: Kopi & Snack UMKM | **Badge**: Primadona UMKM | **Glyph**: `pouch`
- **Aplikasi**: Biji kopi sangrai, bubuk matcha, keripik pisang, granola, teh tubruk.
- **Dimensi Default**: $P = 140\text{ mm}, L = 65\text{ mm}$ (Gusset), $T = 210\text{ mm}, t = 0.15\text{ mm}$ (`kraft-pe`).
- **Bahan Kompatibel**: `kraft-pe`, `pet-pe`, `pet-alu-pe`.
- **Preset Ukuran**:
  1. *Pouch Snack / Keripik 150g*: $120 \times 55 \times 185\text{ mm}$
  2. *Pouch Kopi 250g Standar*: $140 \times 65 \times 210\text{ mm}$
  3. *Pouch Bubuk 500g Besar*: $160 \times 80 \times 240\text{ mm}$
- **Desain Bawaan**: Base `#2b231f`, Inside `#d9d4cc`, Finish `matte`, Brand *"Kopi Gunung"*, Subtitle *"Arabika Gayo"*, Tagline *"Biji kopi sangrai · Netto 250 g"*, Typeface `tegas`, Accent `#d6b36a`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Panel depan dan belakang identik dengan segel panas (*heat seal*) selebar $8\text{ mm}$ di kiri, kanan, dan atas. Lipatan bawah berbentuk busur W (*bottom gusset W-fold*).

---

### 11. `sticker-label` — Stiker & Label Kemasan (STIKER)
- **Kategori**: Toples, Botol & Thinwall | **Badge**: Baru | **Glyph**: `sticker`
- **Aplikasi**: Segel toples kue lebaran, label botol cold brew, cup boba, stiker kemasan box.
- **Dimensi Default**: $P = 60\text{ mm}, L = 60\text{ mm}, T = 0\text{ mm}, t = 0.1\text{ mm}$, Bentuk = `round` (`label-vinyl`).
- **Bahan Kompatibel**: `label-paper`, `label-vinyl`, `label-bopp`.
- **Preset Ukuran**:
  1. *Tutup toples / thinwall Ø 60*: $60 \times 60\text{ mm}$ (Bulat)
  2. *Segel logo Ø 35*: $35 \times 35\text{ mm}$ (Bulat)
  3. *Label oval 80 × 50*: $80 \times 50\text{ mm}$ (Oval)
  4. *Label botol 90 × 60*: $90 \times 60\text{ mm}$ (Persegi Panjang)
- **Desain Bawaan**: Base `#fbf6ec`, Inside `#ffffff`, Finish `glossy`, Brand *"Sambal Mbok Sri"*, Subtitle *"Sambal Bawang"*, Tagline *"Netto 150 g"*, Typeface `tegas`, Accent `#a3261b`, Badge `none`.

---

### 12. `pillow-box` — Pillow Box (PILLOW-BOX)
- **Kategori**: Suvenir & Perhiasan | **Badge**: Bentuk Unik | **Glyph**: `pillow`
- **Aplikasi**: Suvenir pernikahan, gelang, kalung, syal batik, sabun alami batangan.
- **Dimensi Default**: $P = 160\text{ mm}, L = 100\text{ mm}, T = 30\text{ mm}, t = 0.3\text{ mm}$ (`art-carton-260`).
- **Bahan Kompatibel**: `art-carton-260`, `ivory-300`, `kraft-350`.
- **Preset Ukuran**:
  1. *Suvenir pernikahan*: $140 \times 90 \times 25\text{ mm}$
  2. *Perhiasan / gelang*: $110 \times 70 \times 25\text{ mm}$
  3. *Kaos lipat*: $260 \times 180 \times 50\text{ mm}$
- **Desain Bawaan**: Base `#e9dfd3`, Inside `#f6f1ea`, Finish `matte`, Brand *"Sekar & Bayu"*, Subtitle *"Terima kasih"*, Tagline *"Yogyakarta · 12 Oktober 2026"*, Typeface `klasik`, Accent `#3e3a36`, Badge `none`.
- **Geometri CAD 2D**:
  - Badan terdiri dari dua busur simetris dengan alur garis lipat elips di kedua ujung. Saat ujung ditekan ke dalam, kotak mengembang menjadi bentuk bantal 3D lonjong.

---

### 13. `paper-bag-sos` — Paper Bag (BAG-SOS)
- **Kategori**: Butik, Kafe & Oleh-oleh | **Badge**: Ramah Lingkungan | **Glyph**: `bag`
- **Aplikasi**: Kafe kopi kekinian, butik pakaian, toko roti, suvenir seminar.
- **Dimensi Default**: $P = 250\text{ mm}, L = 100\text{ mm}, T = 300\text{ mm}, t = 0.15\text{ mm}$ (`kraft-paper-120`).
- **Bahan Kompatibel**: `kraft-paper-120`, `art-paper-150`, `ivory-230`.
- **Preset Ukuran**:
  1. *Tas kecil (perhiasan, kosmetik)*: $180 \times 80 \times 220\text{ mm}$
  2. *Tas sedang (kue, kopi)*: $250 \times 100 \times 300\text{ mm}$
  3. *Tas besar (pakaian)*: $320 \times 120 \times 400\text{ mm}$
- **Desain Bawaan**: Base `#c49a6c`, Inside `#b5835a`, Finish `kraft`, Brand *"Toko Senja"*, Subtitle *"Oleh-oleh Khas Bandung"*, Tagline *"Terima kasih sudah berbelanja"*, Typeface `modern`, Accent `#2b2420`, Badge `recycle`.
- **Geometri CAD 2D**:
  - Pola kantong dasar persegi (*Self-Opening Satchel / SOS*) dengan lipatan heksagonal di bagian bawah dan lipatan gusset accordion di kedua sisi.

---

### 14. `cylinder-can-330` — Kaleng Silinder & Jar (CYL-360)
- **Kategori**: Minuman & Kosmetik | **Badge**: 3D Silinder | **Glyph**: `cylinder`
- **Aplikasi**: Minuman kaleng soda 330ml, sleek can 250ml, toples keripik tabung, jar krim lulur.
- **Dimensi Default**: $P = 75\text{ mm}, L = 75\text{ mm}, T = 135\text{ mm}, t = 0.1\text{ mm}$ (`label-paper`).
- **Bahan Kompatibel**: `label-paper`, `label-bopp`.
- **Preset Ukuran**:
  1. *Jar Skincare / Scrub 100g*: $75 \times 75 \times 68\text{ mm}$
  2. *Kaleng Minuman 330ml*: $66 \times 66 \times 122\text{ mm}$
  3. *Tabung Kopi / Cookies Premium*: $95 \times 95 \times 165\text{ mm}$
- **Desain Bawaan**: Base `#b3372c`, Inside `#efe9e0`, Finish `glossy`, Brand *"Freshcan"*, Subtitle *"Sparkling Botanical Soda"*, Tagline *"Tanpa gula · Vitamin C · 330 ml"*, Typeface `tegas`, Accent `#ffffff`, Badge `recycle`.

---

### 15. `rsc-shipping-0201` — Regular Slotted Container (FEFCO 0201)
- **Kategori**: Kargo & Logistik | **Badge**: Standar Pabrik | **Glyph**: `rsc`
- **Aplikasi**: Master box ekspedisi 5–20 kg, distribusi pabrik, kardus pindahan.
- **Dimensi Default**: $P = 240\text{ mm}, L = 180\text{ mm}, T = 160\text{ mm}, t = 3.0\text{ mm}$ (`b-flute`).
- **Bahan Kompatibel**: `e-flute`, `b-flute`, `c-flute`, `bc-flute`.
- **Preset Ukuran**:
  1. *Kardus Olshop Kecil*: $200 \times 150 \times 120\text{ mm}$
  2. *Kardus Distribusi Medium*: $300 \times 220 \times 200\text{ mm}$
  3. *Master Box Grosir*: $360 \times 260 \times 240\text{ mm}$
- **Desain Bawaan**: Base `#c89b6e`, Inside `#b08257`, Finish `kraft`, Brand *"Nusantara Express"*, Subtitle *"Barang pecah belah"*, Tagline *"Jaga tetap kering · Maks. tumpuk 5"*, Typeface `modern`, Accent `#24211d`, Badge `fragile`.
- **Geometri CAD 2D**:
  - Standar industri terpopuler di dunia. Semua flap memiliki panjang sama ($L/2$), sehingga saat ditutup kedua flap terluar bertemu tepat di tengah tanpa tumpang tindih.

---

### 16. `food-gable-box` — Food Box & Bakery Carrier (GABLE-BOX)
- **Kategori**: Kuliner F&B | **Badge**: Kuliner Hits | **Glyph**: `food` | **isPremium**: `true`
- **Aplikasi**: Bolu gulung oleh-oleh, hampers ayam panggang utuh, kue tart mini, snack rapat.
- **Dimensi Default**: $P = 200\text{ mm}, L = 140\text{ mm}, T = 90\text{ mm}, t = 0.5\text{ mm}$ (`kraft-350`).
- **Bahan Kompatibel**: `duplex-350`, `kraft-350`, `e-flute`.
- **Preset Ukuran**:
  1. *Donat isi 6*: $220 \times 150 \times 70\text{ mm}$
  2. *Roti / pastry isi 4*: $200 \times 140 \times 90\text{ mm}$
  3. *Kue tart 18 cm*: $210 \times 210 \times 110\text{ mm}$
- **Desain Bawaan**: Base `#a94f24`, Inside `#f4efe6`, Finish `glossy`, Brand *"Roti Senja"*, Subtitle *"Artisan Bakery"*, Tagline *"Dipanggang setiap pagi · Tanpa pengawet"*, Typeface `klasik`, Accent `#fbf3e4`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Bagian atas membentuk atap miring dengan dua pegangan die-cut yang saling mengunci di puncak atap, sehingga dapat ditenteng tangan tanpa kantong plastik tambahan.

---

### 17. `sliding-drawer-box` — Sliding Box Laci & Sleeve (SLIDE-BOX)
- **Kategori**: Cokelat & Hampers | **Badge**: Premium | **Glyph**: `sliding` | **isPremium**: `true`
- **Aplikasi**: Cokelat batang artisan, lipstik travel set, kotak jam tangan, perhiasan mewah.
- **Dimensi Default**: $P = 160\text{ mm}, L = 100\text{ mm}, T = 35\text{ mm}, t = 0.45\text{ mm}$ (`ivory-350`).
- **Bahan Kompatibel**: `ivory-300`, `ivory-350`, `duplex-350`, `kraft-350`.
- **Preset Ukuran**:
  1. *Cokelat batang isi 4*: $160 \times 100 \times 30\text{ mm}$
  2. *Lipstik / parfum mini*: $120 \times 60 \times 30\text{ mm}$
  3. *Hampers aksesoris*: $220 \times 160 \times 60\text{ mm}$
- **Desain Bawaan**: Base `#5b2a3a`, Inside `#f3e3cf`, Finish `matte`, Brand *"Kakao Nusantara"*, Subtitle *"Dark Chocolate 70%"*, Tagline *"Kakao Jembrana · Isi 4 batang"*, Typeface `klasik`, Accent `#f3e3cf`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Terdiri dari Laci (*Drawer Tray*) berkuping lipat ganda di keempat sisi dan Selongsong (*Sleeve Shell*) tabung 4 sisi dengan lidah lem.

---

### 18. `luxury-gift-box` — Luxury Rigid Gift Box (FEFCO 0320)
- **Kategori**: Kopi & Gift Box | **Badge**: PRO | **Glyph**: `rigid` | **isPremium**: `true`
- **Aplikasi**: Gift set korporat, drip coffee bag premium, parfum luxury, jam tangan mewah.
- **Dimensi Default**: $P = 130\text{ mm}, L = 95\text{ mm}, T = 170\text{ mm}, t = 2.0\text{ mm}$ (`greyboard-2`).
- **Bahan Kompatibel**: `greyboard-2`, `greyboard-25`.
- **Preset Ukuran**:
  1. *Box Drip Coffee 10 Sachet*: $125 \times 90 \times 155\text{ mm}$
  2. *Box Gift Set Jam / Dompet*: $140 \times 120 \times 85\text{ mm}$
  3. *Box Reed Diffuser Luxury*: $100 \times 100 \times 210\text{ mm}$
- **Desain Bawaan**: Base `#1f2438`, Inside `#2f3550`, Finish `foil`, Brand *"Gayo Roastery"*, Subtitle *"Single Origin Arabica"*, Tagline *"Specialty grade · Medium-dark roast · 250 g"*, Typeface `klasik`, Accent `#d6b36a`, Badge `halal-organic`.
- **Geometri CAD 2D**:
  - Dua bagian terpisah: Wadah Alas (*Base Tray*) dan Tutup Luar (*Full-Depth Lid*). Masing-masing dibuat dari greyboard tebal yang dibungkus kertas seni dengan margin lem lipatan masuk $15\text{ mm}$.

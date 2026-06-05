# 💒 Undangan Pernikahan Digital

Template undangan pernikahan digital yang elegan dan responsif, dibuat dengan HTML, CSS, dan JavaScript.

## 📋 Fitur

✅ **Desain Elegan** - Kombinasi warna emas dan cokelat yang mewah  
✅ **Responsive** - Tampil baik di semua perangkat (desktop, tablet, mobile)  
✅ **RSVP Form** - Formulir konfirmasi kehadiran  
✅ **Galeri Foto** - Menampilkan foto pasangan  
✅ **Animasi** - Transisi dan efek yang menarik  
✅ **Mudah Dikustomisasi** - Ganti nama, tanggal, dan data sesuai kebutuhan  

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/Yunizaf/undangan-pernikahan.git
cd undangan-pernikahan
```

### 2. Buka di Browser
Buka file `index.html` langsung di browser Anda atau gunakan Live Server di VS Code.

### 3. Kustomisasi Data
Edit file `index.html` dan ubah:
- Nama pasangan: `Ade & Bella`
- Tanggal acara: `Sabtu, 15 Juni 2024`
- Nama orang tua
- Waktu dan lokasi acara
- Foto di galeri

## 📝 Struktur File

```
undangan-pernikahan/
├── index.html      # File HTML utama
├── style.css       # Styling
├── script.js       # Interaktivitas
└── README.md       # Dokumentasi
```

## 🎨 Warna Tema

- Primary Color: `#d4af37` (Emas)
- Secondary Color: `#8b4513` (Cokelat)
- Text Dark: `#2c3e50`
- Background Light: `#f9f7f4`

Anda bisa mengubah warna-warna ini di dalam file `style.css` di bagian `:root`.

## 📱 Responsif

Template ini fully responsive dan telah dioptimalkan untuk:
- Desktop (1200px keatas)
- Tablet (768px - 1199px)
- Mobile (dibawah 768px)

## ✨ Customization Tips

### Mengubah Nama Pasangan
Cari di `index.html`:
```html
<h1 class="couple-name">Ade & Bella</h1>
```

### Mengubah Tanggal
```html
<p class="invitation-date">Sabtu, 15 Juni 2024</p>
```

### Menambahkan Foto ke Galeri
Ganti URL placeholder dengan foto Anda:
```html
<img src="URL_FOTO_ANDA" alt="Foto 1">
```

### Mengubah Warna Tema
Edit di `style.css`:
```css
:root {
    --primary-color: #d4af37;      /* Ubah warna emas */
    --secondary-color: #8b4513;    /* Ubah warna cokelat */
    /* dst */
}
```

## 🌐 Deploy Gratis

### GitHub Pages
1. Push repository ke GitHub
2. Buka Settings → Pages
3. Pilih branch `main` dan folder `/root`
4. Website akan tersedia di `https://username.github.io/undangan-pernikahan`

### Netlify
1. Kunjungi [Netlify](https://netlify.com)
2. Drag & drop folder project
3. Website akan otomatis online

### Vercel
1. Kunjungi [Vercel](https://vercel.com)
2. Import repository GitHub Anda
3. Deploy dengan satu klik

## 📧 RSVP Form

Form RSVP saat ini menyimpan data di console browser. Untuk mengirim email, Anda bisa:
- Gunakan layanan seperti FormSubmit.co
- Integrasikan dengan backend server
- Gunakan Google Forms embedded

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Google Fonts (Cormorant Garamond, Poppins)

## 📄 Lisensi

Bebas digunakan untuk keperluan pribadi maupun komersial.

## 👨‍💻 Dibuat oleh

[Yunizaf](https://github.com/Yunizaf)

---

**Selamat menikah! 💕**
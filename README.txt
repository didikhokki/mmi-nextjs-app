1. Saya menggunakan API konek MySQL
2. Saya menggunakan API bawaan Framework JS (NodeJS), karena memudahkan untuk integrasi dan 
   troubleshoot nya.

3. Tambahkan Domain di Vercel :
	Masuk ke Dashboard Vercel dan Pilih Projectnya.
	Buka Settings > Domains.
	Masukkan nama domain Anda dan klik Add.
   
   Konfigurasi DNS di Penyedia Domain (Domain Registrar)
	Buka dashboard domain Anda (DomaiNesia).
	- Cari menu DNS Management.
		Hapus record A atau CNAME lama yang mengarah ke hosting sebelumnya.
		Tambahkan A Record baru:
			Type: A
			Name: @
			Value/Points to: 76.76.21.21 (IP Anycast Vercel).	
	- Cari Menu NAMESERVER :
		Tambahkan DNSNameServer
			ns1.vercel-dns.com
			ns2.vercel-dns.com


4. Membangun admin panel custom   Kalau fitur admin lebih spesifik, saya akan membuat panel sendiri menggunakan 
   React/Vue + Tailwind untuk UI, dengan backend API yang aman dan scalable.

5. Di sisi frontend:
   - Mengompresi dan mengoptimalkan gambar (WebP, lazy loading)
   - Menggunakan lazy loading untuk konten yang tidak langsung terlihat
   - Mengurangi penggunaan library berat yang tidak diperlukan

   Di sisi backend:
   - Mengaktifkan caching (Redis, file cache) untuk mengurangi request berulang
   - Optimasi query database agar tidak lambat

6. Di sisi frontend:
   - Saya akan menggunakan HTTPS agar data yang dikirim terenkripsi dan 
     tidak mudah disadap saat proses transmisi.
   - Saya akan mengirim data melalui metode yang tepat seperti 
     POST request menggunakan AJAX/Fetch API atau form standar, 
     sehingga data tidak tampil di URL seperti pada GET.

   Di sisi backend :
   - Validasi input untuk mencegah SQL Injection dan XSS
   - Menggunakan Token agar form tidak bisa disalahgunakan oleh pihak lain
   - Mengatur authentication dan authorization jika form hanya untuk user tertentu
   - Penyimpanan data sensitif dengan enkripsi jika diperlukan

7. Saya akan memilih format gambar yang tepat, misalnya:
   WebP untuk ukuran lebih kecil dengan kualitas tetap bagus
   SVG untuk icon atau ilustrasi sederhana karena scalable tanpa pecah

   Selain itu, saya menerapkan:
   Responsive images (srcset) agar perangkat mobile tidak memuat gambar terlalu besar
   Lazy loading, sehingga gambar hanya dimuat saat diperlukan ketika user scroll
   Menentukan dimensi gambar yang sesuai dan efektif.
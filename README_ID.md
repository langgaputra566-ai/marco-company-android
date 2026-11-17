# MARCO COMPANY — paket awal Android

Paket ini membungkus HTML MARCO COMPANY yang diberikan menjadi aplikasi Android berbasis WebView, serta menyediakan contoh backend Node.js untuk menghubungkan chat karyawan ke OpenAI.

## Status penting
- Ini **source project Android**, belum APK siap instal.
- Layar dan fitur yang ada masih mengikuti HTML awal.
- Chat pada HTML masih simulasi. Backend di folder `backend` adalah fondasi API; belum dihubungkan ke antarmuka HTML dan belum dipasang di server.
- Database bersama, login, sinkronisasi cloud, rapat AI multi-agen, dan pembagian tugas otomatis belum diimplementasikan.
- API key tidak boleh ditaruh di HTML atau APK. Simpan hanya sebagai environment variable di server.

## Membuka project Android
1. Instal Android Studio di komputer.
2. Buka folder `marco_company_android` sebagai project.
3. Tunggu Gradle sync dan pasang Android SDK yang diminta.
4. Jalankan ke perangkat Android untuk uji coba.
5. Untuk membuat APK: menu **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

## Menjalankan backend (di komputer/server)
1. Masuk ke folder `backend`.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env`, lalu isi `OPENAI_API_KEY` di server.
4. Jalankan `npm start`.
5. Uji `GET /health` dan `POST /api/chat`.

Sebelum dipakai publik, backend perlu autentikasi, pembatasan penggunaan, validasi input, HTTPS, logging aman, dan pembatasan biaya. Endpoint ini contoh awal, bukan sistem produksi.

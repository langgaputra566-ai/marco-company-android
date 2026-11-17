# Membuat APK MARCO COMPANY hanya dengan HP Android

Paket ini menyediakan workflow GitHub Actions untuk membangun APK di cloud, jadi tidak perlu memasang Android Studio di HP.

## Langkah
1. Buat akun atau masuk ke GitHub melalui browser Android.
2. Buat repository baru, misalnya `marco-company-android`.
3. Ekstrak ZIP ini. Unggah seluruh ISI folder `marco_company_android` (termasuk folder tersembunyi `.github`) ke repository. Pastikan `settings.gradle`, `build.gradle`, dan folder `app` berada di root repository.
4. Buka tab **Actions** di repository. Jika diminta, izinkan workflow.
5. Pilih **Build Marco Company APK** lalu tekan **Run workflow** (atau tunggu build otomatis setelah push).
6. Setelah proses selesai, buka hasil run yang sukses, gulir ke **Artifacts**, lalu unduh `marco-company-debug-apk`.
7. Ekstrak file ZIP hasil artifact untuk mendapatkan `app-debug.apk`, lalu buka APK di Android dan izinkan instalasi dari sumber tersebut bila diminta.

## Catatan
- Build ini menghasilkan APK debug untuk uji coba, bukan APK rilis Play Store.
- Ini hanya membangun aplikasi Android dari source yang tersedia. Backend online dan integrasi AI belum otomatis aktif; server backend perlu di-deploy dan API key disimpan sebagai secret di server, bukan di APK.
- GitHub Actions menyediakan kuota gratis terbatas untuk repository publik dan batas tertentu untuk repository privat; penggunaan di luar kuota dapat berbiaya. Periksa ketentuan akun GitHub sebelum menjalankan build berulang kali.

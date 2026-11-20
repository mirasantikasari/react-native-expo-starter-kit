# React Native Template

Template kosongan React Native berbasis **Expo SDK 58** + **Expo Router** + **TypeScript**.

## Stack

| Item | Versi |
|---|---|
| Expo | ~58.0 |
| React Native | 0.88 |
| React | 19.3 |
| Expo Router | ~58.0 (file-based routing, typed routes) |
| TypeScript | ~6.0 (strict) |

## Memulai

```bash
npm install
npm start
```

| Script | Fungsi |
|---|---|
| `npm start` | Jalankan Expo dev server |
| `npm run android` | Build & jalankan di Android (`expo run:android`) |
| `npm run ios` | Build & jalankan di iOS (`expo run:ios`) |
| `npm run web` | Jalankan versi web |
| `npm run typecheck` | Cek tipe TypeScript |
| `npm run doctor` | Cek kesehatan projek (`expo-doctor`) |

## Struktur Projek

```
.
├── plugins/                              # Expo config plugin (Android)
│   ├── withAndroidForceDarkOff.js        # Matikan force dark
│   └── withAndroidPortraitFeatureOptional.js
├── src/
│   ├── app/                              # Route (Expo Router)
│   │   ├── _layout.tsx                   # Root layout (Stack)
│   │   └── index.tsx                     # Halaman awal
│   └── constants/
│       └── colors.ts                     # Warna dasar
├── app.json                              # Konfigurasi Expo
├── eas.json                              # Profil build EAS
└── tsconfig.json                         # Alias `@/*` → `src/*`
```

Tambah halaman baru dengan membuat file di `src/app/`, misalnya `src/app/about.tsx` menjadi route `/about`.

Import dari `src/` memakai alias `@/`:

```ts
import { colors } from '@/constants/colors';
```

## Setelah Meng-clone Template

Ubah identitas app sebelum dipakai:

1. **`app.json`**: ganti `name`, `slug`, `scheme`, `ios.bundleIdentifier`, dan `android.package` (sekarang `com.example.template`).
2. **`package.json`**: ganti `name`.
3. **EAS**: jalankan `eas init` untuk membuat project baru. Perintah ini mengisi `extra.eas.projectId` dan `owner` di `app.json`.
4. Tambahkan `icon`, `splash`, dan `android.adaptiveIcon` di `app.json` bila diperlukan.

## Build dengan EAS

```bash
eas build --profile preview --platform android      # APK internal
eas build --profile production --platform android   # AAB untuk Play Store
```

## Menambah Library

Pasang library yang kompatibel dengan SDK lewat Expo, bukan `npm install` langsung:

```bash
npx expo install <nama-paket>
```

Jika library butuh permission atau config plugin, daftarkan di `plugins` pada `app.json`.

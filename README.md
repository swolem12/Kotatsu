# Chirui Reader — Prototype scaffolding

Original: KotatsuApp/Kotatsu
Fork: swolem12/Kotatsu
Created-by: swolem12
Created-date: 2025-11-22
License: Follow original repository license; track changes/dates in source files.

This is a minimal web scaffolding to start the Chirui Reader web app.

How to run locally:
- Serve the files with a static server (e.g., `npx serve` or `python -m http.server`).
- Edit index.html / src/* and commit to a branch.

Planned next steps:
- Implement SPA router and page layouts
- Integrate MangaDex API
- Implement reader view and offline caching (PWA)

---

## Android App

Chirui is also available as an Android app, forked from Kotatsu.

### Download APK

APK builds are automatically generated for each push and release:

1. **From Releases**: Go to [Releases](https://github.com/swolem12/Kotatsu/releases) and download the latest APK
2. **From Actions**: Go to [Actions](https://github.com/swolem12/Kotatsu/actions) → select a workflow run → download artifacts

### Main Features

- Online manga catalogs (with 1100+ manga sources)
- Search manga by name, genres, and more filters
- Favorites organized by user-defined categories
- Reading history, bookmarks, and incognito mode support
- Download manga and read it offline. Third-party CBZ archives are also supported
- Clean and convenient Material You UI, optimized for phones, tablets, and desktop
- Standard and Webtoon-optimized customizable reader, gesture support on reading interface
- Notifications about new chapters with updates feed, manga recommendations (with filters)
- Integration with manga tracking services: Shikimori, AniList, MyAnimeList, Kitsu
- Password / fingerprint-protected access to the app
- Automatically sync app data with other devices on the same account
- Support for older devices running Android 5+

---

## How to Build Locally

### Prerequisites

- Java Development Kit (JDK) 17 or higher
- Android Studio (recommended) or Gradle CLI

### Build Steps

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/swolem12/Kotatsu.git
   cd Kotatsu
   ```

2. **Build Debug APK**:
   ```bash
   ./gradlew assembleDebug
   ```
   Output: `app/build/outputs/apk/debug/app-debug.apk`

3. **Build Release APK**:
   ```bash
   ./gradlew assembleRelease
   ```
   Output: `app/build/outputs/apk/release/app-release-unsigned.apk`

4. **Install on device** (with USB debugging enabled):
   ```bash
   ./gradlew installDebug
   ```

### Build Variants

| Variant | Command | Description |
|---------|---------|-------------|
| Debug | `./gradlew assembleDebug` | Development build with debugging enabled |
| Release | `./gradlew assembleRelease` | Optimized production build |
| Nightly | `./gradlew assembleNightly` | Pre-release testing build |

---

## Parser System

### What is the Parser?

The **parser** is an external library (`kotatsu-parsers`) that enables Chirui to fetch manga from 1100+ online sources. It handles:

- **Source Discovery**: Finding and listing available manga catalogs
- **Manga Fetching**: Retrieving manga details (title, author, description, cover art)
- **Chapter Loading**: Getting the list of available chapters
- **Page Extraction**: Downloading individual manga pages/images
- **Search & Filters**: Enabling search by name, genre, status, etc.

### How Parsers Work

```
User Request → Chirui App → Parser Library → Manga Website → Data returned
```

1. User searches for manga or browses a catalog
2. Chirui sends the request to the appropriate parser
3. Parser fetches data from the manga website
4. Parser extracts and structures the data
5. Chirui displays the result to the user

### Parser Repository

Parsers are maintained in a shared upstream repository:
- **Repository**: [KotatsuApp/kotatsu-parsers](https://github.com/KotatsuApp/kotatsu-parsers)
- **Why shared?**: Parsers work independently of app branding and benefit from community contributions

### Adding Custom Sources

To contribute a new manga source parser:
1. Fork the [kotatsu-parsers](https://github.com/KotatsuApp/kotatsu-parsers) repository
2. Follow the parser implementation guide in that repository
3. Submit a pull request

---

## Project Structure

```
Kotatsu/
├── app/                    # Android application
│   ├── src/
│   │   ├── main/          # Main source code
│   │   ├── debug/         # Debug-specific resources
│   │   ├── nightly/       # Nightly build resources
│   │   └── release/       # Release build resources
│   └── build.gradle       # App-level build config
├── src/                   # Web app scaffolding
│   ├── app.js
│   └── styles.css
├── index.html             # Web app entry point
├── .github/workflows/     # CI/CD workflows
│   └── build.yml          # APK build automation
└── README.md
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
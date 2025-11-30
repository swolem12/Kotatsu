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

## Android App

Chirui is also available as an Android app, forked from Kotatsu.

**Main Features:**

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
# Chirui Roadmap — Issues (one issue per milestone)

Below are ready-to-create issue bodies. Create one issue per H2 title, paste the corresponding checklist as the issue body.

## Phase 1 - Milestone 1.1: Project Foundation & Basic UI
- Create project structure
- Set up HTML/CSS/JavaScript framework
- Implement responsive Material Design UI
- Create navigation structure (header, sidebar, main content area)
- Set up routing for single-page application (SPA)
- Implement dark/light theme toggle

## Phase 1 - Milestone 1.2: Manga Catalog & Search
- Create manga listing/grid view
- Implement search functionality
- Add filtering by genre, status, rating
- Create manga detail page
- Display manga metadata (title, author, description, cover, tags)
- Implement pagination for manga lists

## Phase 1 - Milestone 1.3: Manga Reader Core
- Build manga reader interface
- Implement page navigation (next/previous)
- Add keyboard shortcuts (arrow keys, space)
- Create reading modes (single page, double page, webtoon/vertical scroll)
- Implement zoom and pan controls
- Add fullscreen mode
- Create progress indicator

## Phase 1 - Milestone 1.4: Data Source Integration
- Design API abstraction layer
- Implement 1st manga source (MangaDex API)
- Implement 2nd manga source (alternative free API)
- Add source selection in UI
- Implement chapter list fetching
- Implement page image loading with caching
- Add loading states and error handling

## Phase 1 - Milestone 1.5: User Features - Favorites & History
- Implement localStorage for data persistence
- Create favorites/bookmarks system
- Add "Add to Favorites" functionality
- Create favorites page/section
- Implement reading history tracking
- Create history page
- Add "Continue Reading" feature
- Implement bookmark positions within chapters

## Phase 1 - Milestone 1.6: User Features - Library Management
- Create user library/collection system
- Implement custom categories/folders
- Add manga to multiple categories
- Create category management UI
- Implement sorting options (title, last read, date added)
- Add bulk actions (move, delete, mark as read)

## Phase 1 - Milestone 1.7: Reader Enhancements
- Implement reading settings panel
- Add brightness control
- Add page transition animations
- Implement gesture controls (swipe for mobile)
- Add chapter selection dropdown in reader
- Create reader toolbar (auto-hide)
- Implement "mark as read" functionality
- Add reading statistics

## Phase 1 - Milestone 1.8: Advanced Features
- Implement updates notification system
- Create "New Chapters" feed
- Add manga recommendations
- Implement filters for recommendations
- Create "Popular" and "Trending" sections
- Add manga rating/review display
- Implement advanced search filters

## Phase 1 - Milestone 1.9: Offline Support & PWA
- Convert to Progressive Web App (PWA)
- Implement service worker for caching
- Add offline reading capability
- Create download manager UI
- Implement chapter download functionality
- Add storage management tools
- Create install prompts

## Phase 1 - Milestone 1.10: Polish & Optimization
- Optimize image loading and caching
- Implement lazy loading
- Add loading skeletons/placeholders
- Improve error handling and user feedback
- Add accessibility features (ARIA labels, keyboard nav)
- Implement analytics (privacy-respecting)
- Performance optimization
- Cross-browser testing and fixes

## Phase 1 - Milestone 1.11: Additional Sources
- Implement 3rd manga source
- Implement 4th manga source
- Implement 5th manga source
- Create source management UI
- Add source enable/disable functionality
- Implement source priority settings

## Phase 2 - Milestone 2.1: User Accounts & Sync
- Design authentication system (Firebase/Supabase)
- Implement user registration/login
- Add cloud sync for favorites and history
- Implement cross-device synchronization
- Create account management UI
- Add data export/import functionality

## Phase 2 - Milestone 2.2: Social Features
- Implement user profiles
- Add manga lists sharing
- Create reading lists/collections
- Implement comments/discussions (optional)
- Add recommendation sharing

## Phase 2 - Milestone 2.3: Advanced Reader Features
- Implement page pre-loading
- Add reading speed statistics
- Create custom reading modes
- Implement color filter overlays
- Add page bookmarking with notes
- Implement text-to-speech for text-heavy manga (experimental)

## Phase 2 - Milestone 2.4: Integration Features
- Implement Shikimori integration
- Implement AniList integration
- Implement MyAnimeList integration
- Implement Kitsu integration
- Add sync status tracking
- Create integration settings UI

## Phase 3 - Milestone 3.1: Android Project Setup
- Set up Android Studio project
- Configure Kotlin and Gradle
- Implement Material You design
- Set up dependency injection (Hilt)
- Configure Room database
- Set up multi-module architecture

## Phase 3 - Milestone 3.2: Core Android Features
- Port web UI to Android native
- Implement navigation component
- Create fragments for main screens
- Implement Android reader with gestures
- Add notification support
- Implement background updates

## Phase 3 - Milestone 3.3: Android-Specific Features
- Implement file system downloads
- Add CBZ/CBR file support
- Create Android widgets
- Implement app shortcuts
- Add biometric authentication
- Implement system dark mode integration

## Phase 3 - Milestone 3.4: Data Migration & Sync
- Create web-to-Android data migration tool
- Implement cloud sync between web and Android
- Add backup/restore functionality
- Create settings sync

## Phase 3 - Milestone 3.5: Performance & Optimization
- Optimize for Android 6.0+ support
- Implement battery optimization
- Add memory management
- Optimize for tablets
- Test on various devices

## Phase 3 - Milestone 3.6: Publishing
- Prepare app for release
- Create F-Droid build
- Create GitHub releases
- Write documentation
- Create user guides

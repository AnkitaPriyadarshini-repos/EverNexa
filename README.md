# Apple App Store "Today" Page Recreation

A pixel-accurate, highly faithful public frontend recreation of the live India App Store "Today" web interface ([https://apps.apple.com/in/iphone/today](https://apps.apple.com/in/iphone/today)).

## Features

- **Live Data extraction**: Contains all 6 major shelves, editorial stories, app cards, and collections extracted directly from Apple's server response.
- **Responsive Layout**: Recreates the desktop 240px sidebar, top header, platform category pills (iPhone, iPad, Mac, Watch, TV), and mobile bottom navigation tab bar (< 1024px).
- **Horizontal Carousels**: Real smooth horizontal scroll containers for 3-row app collections ("Top apps this week", "Hot this week") and editorial stories ("Today's Biggest Events", "Indie Games We Love").
- **Interactive Search**: Real-time query search filtering across all apps, categories, and editorial stories.
- **Complete Footer**: Features India storefront region indicator, 11 Indian regional languages selector (हिंदी, ਪੰਜਾਬੀ, मराठी, বাংলা, etc.), and collapsible region selector drawer.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite 8**
- **React Router DOM 7**
- **Tailwind CSS v4**
- **Lucide React Icons**

## Development

Install dependencies:
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Routes

- `/today` - Main App Store Today page
- `/games` - Games storefront
- `/apps` - Apps storefront
- `/arcade` - Apple Arcade storefront
- `/iphone`, `/ipad`, `/mac`, `/watch`, `/tv` - Device storefronts
- `/search` - Interactive search interface

## Project Structure

```
src/
├── components/
│   ├── AppCard.tsx
│   ├── AppShell.tsx
│   ├── EditorialCard.tsx
│   ├── EditorialCarousel.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HorizontalShelf.tsx
│   ├── MobileNavigation.tsx
│   ├── SearchBar.tsx
│   └── Sidebar.tsx
├── data/
│   └── appStoreData.ts
├── pages/
│   ├── CategoryPage.tsx
│   ├── SearchResultsPage.tsx
│   └── TodayPage.tsx
├── types/
│   └── appStore.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Disclaimer

"This is an independent frontend recreation of a publicly accessible App Store interface created for educational and portfolio purposes. Apple, App Store, and related trademarks belong to their respective owners."

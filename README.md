# Apple App Store Today UI Recreation

A complete, production-quality React & TypeScript recreation of the public-facing **Apple App Store Today** web interface (`https://apps.apple.com/in/iphone/today`) featuring responsive navigation, editorial stories, categories, search, and a dedicated product page for **Twenty Four Seven**.

---

## 🌟 Key Features

- **Apple App Store Left Sidebar Navigation**: Persistent Apple-style sidebar featuring ` App Store for iPhone ˅`, Search field, Core Navigation (`Today`, `Games`, `Apps`, `Arcade`), and Categories list (`Photo & Video`, `Health & Fitness`, `Productivity`, `Entertainment`, `Food & Drink`, `Action`, `Adventure`, `Puzzle`, `Indie`).
- **Internal Browser Navigation Header Bar**: Chrome/Safari tab bar with back `←`, forward `→`, refresh `↻`, security lock `🔒`, and dynamic route URL display (`https://apps.apple.com/in/iphone/today` or `https://apps.apple.com/in/app/twenty-four-seven/id1049305223`).
- **Today Page Editorial Cards**:
  - **"3 AI apps we love"**: Rendered with custom 3D dandelion radial fiber sphere artwork (`DandelionArt`) and featured AI app icons (ChatGPT, Claude AI, Midjourney).
  - **"Discover Pokémon on the App Store"**: Rendered with custom Pikachu vector illustration (`PikachuArt`) and Pokémon app icons.
  - **"Edit with Adobe on the go"**: Adobe Photoshop, Lightroom, Premiere AI, Express showcase.
  - **"App of the Day"**: Spotlight card for **Twenty Four Seven**.
- **Twenty Four Seven App Listing (`/twenty-four-seven`)**:
  - Complete App Store product detail page with 24S icon, ratings (4.6 ★), age rating (4+), chart rank (#1 Food & Drink), screenshots gallery, release notes (v4.2.0), reviews, and information table.
  - **Interactive Live App Simulator**: Clicking `GET` or `OPEN APP SIMULATOR` launches the full live 24Seven food delivery web application (hot food customizer, shopping cart, promo codes, stamp card rewards, checkout, and live rider map tracking).
- **Functional Search**: Live search filtering apps and stories across the App Store.
- **Apple Web Footer**: Language selector (`India | हिंदी | ਪੰਜਾਬੀ | मराठी | বাংলা | ...`), Apple copyright 2026, and legal links.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Routing**: React Router 7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4 + Custom Modern CSS
- **Icons**: Lucide React (`lucide-react`)
- **Effects**: Canvas Confetti

---

## 🚀 Getting Started

### Installation

```bash
git clone <repository-url>
cd twentysevenNewproject
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/                  # High quality food photography & icons
├── components/              # Reusable presentational components
│   ├── AppShell.tsx         # Responsive main layout wrapper
│   ├── Sidebar.tsx          # Apple App Store left sidebar navigation
│   ├── SidebarItem.tsx      # Sidebar item with active highlight
│   ├── TopNavigation.tsx    # Internal browser address bar chrome
│   ├── SearchBar.tsx        # Search input component
│   ├── AppStoreFooter.tsx   # Official Apple web footer
│   ├── DandelionArt.tsx     # 3D dandelion vector graphic artwork
│   ├── PikachuArt.tsx       # Custom Pikachu vector artwork
│   ├── StoryModal.tsx       # Full editorial story modal view
│   ├── AppSimulatorModal.tsx # Interactive 24Seven app simulator modal
│   └── TwentyFourSevenApp/  # Live 24Seven food delivery app components
├── data/                    # Structured mock data
│   ├── appStoreData.ts      # App Store stories, apps, categories & id1049305223
│   ├── products.ts          # 24Seven ready-to-eat hot food menu
│   ├── stores.ts            # 24Seven Delhi-NCR store locations
│   └── promos.ts            # Promos and coupon vouchers
├── pages/                   # Application page views
│   ├── TodayPage.tsx        # App Store Today feed (/today)
│   ├── GamesPage.tsx        # Games listing page (/games)
│   ├── AppsPage.tsx         # Apps listing page (/apps)
│   ├── ArcadePage.tsx       # Apple Arcade page (/arcade)
│   ├── CategoriesPage.tsx   # Categories index page (/categories)
│   ├── CategoryDetailPage.tsx # Category detail page (/category/:id)
│   ├── TwentyFourSevenPage.tsx # Twenty Four Seven app detail page (/twenty-four-seven)
│   └── SearchResultsPage.tsx # Search results page (/search)
├── types/                   # TypeScript interfaces
│   └── index.ts
├── index.css                # Custom CSS design tokens & utilities
├── App.tsx                  # React Router setup & main routes
└── main.tsx                 # Entry mount point
```

---

## 🛣️ Implemented Routes

| Route | Description |
|---|---|
| `/` | Redirects to `/today` |
| `/today` | App Store Today editorial feed |
| `/games` | Top Games listing |
| `/apps` | Top Apps listing |
| `/arcade` | Apple Arcade titles |
| `/categories` | Categories directory |
| `/category/:id` | Category detail views (photo-video, health-fitness, productivity, food-drink, etc.) |
| `/twenty-four-seven` | Dedicated product listing page for Twenty Four Seven (`id1049305223`) |
| `/search` | Live search results page |

---

## ⚠️ Disclaimer

This project is an independent frontend recreation created for educational and portfolio purposes. Apple, App Store, and associated trademarks belong to Apple Inc.

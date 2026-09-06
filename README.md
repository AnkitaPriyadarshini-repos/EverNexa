# EverNexa — Production-Grade Full-Stack App Discovery & 24/7 Commerce Platform

EverNexa is a production-grade full-stack web platform inspired by the public Apple App Store India "Today" and "Indie" experiences, integrated with a 24/7 convenience store, real-time order tracking, live app metadata lookup, debounced search, authentication, database persistence, and system telemetry monitoring.

## 🚀 Repository & Deployment Links

- **GitHub Repository**: [https://github.com/AnkitaPriyadarshini-repos/EverNexa.git](https://github.com/AnkitaPriyadarshini-repos/EverNexa.git)
- **Local Application URL**: [http://localhost:5173/](http://localhost:5173/)
- **24S Express Convenience Store**: [http://localhost:5173/twenty-four-seven](http://localhost:5173/twenty-four-seven)
- **Indie Grouping Storefront**: [http://localhost:5173/grouping/174175](http://localhost:5173/grouping/174175)
- **Admin Management Portal**: [http://localhost:5173/admin](http://localhost:5173/admin)
- **Telemetry Health Check**: [http://localhost:5173/api/health](http://localhost:5173/api/health)

---

## 🌟 Key Platform Features

1. **App Store Today & Indie Experience**:
   - Recreates all major App Store shelves: Hero Editorial Cards, Today's Biggest Events, Discover Something New, Indie Games We Love, Story-Rich Adventures, Cozy Indies, Top Apps This Week (18 apps), and Hot This Week (20 apps).
   - Exact replica of the official App Store **Indie grouping page** (`/grouping/174175`) featuring ranked list cards (`#1` to `#5`) for Top Paid & Top Free, All-Time Greats, and Quick Links.
   - Smooth horizontal carousels with drag/swipe and chevron scroll controls.

2. **Real App Detail Pages (`/app/:appId`)**:
   - Displays icon, developer, category, age rating, star rating, preview screenshots, description, and What's New version release notes.
   - Official **"View on App Store"** action button opening legitimate `apps.apple.com` destinations.

3. **24/7 Twenty Four Seven (24S) Convenience Store (`/twenty-four-seven`)**:
   - 24/7 Express Delivery store for hot food (Hot Dogs), iced coffee, snacks, drinks, and daily essentials.
   - Product detail page (`/twenty-four-seven/product/:id`), persistent cart drawer/page (`/cart`), checkout (`/checkout`), and test payment processor.

4. **Realtime Order Tracking (`/orders` & `/orders/:id`)**:
   - Live order tracker with status progress bar: `PLACED` ➔ `CONFIRMED` ➔ `PACKED` ➔ `OUT_FOR_DELIVERY` ➔ `DELIVERED`.
   - Realtime status change event listener updates customer status instantly when advanced in Admin.

5. **Admin Portal (`/admin`)**:
   - Order Status pipeline control.
   - Inventory stock control and price management.
   - System Health Telemetry Dashboard (`/admin/system`).

6. **Database Schema & Telemetry**:
   - Supabase PostgreSQL schema (`supabase/schema.sql`).
   - `.env.example` configuration file.
   - `/api/health` JSON telemetry endpoint.

---

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Vite 8, React Router DOM 7, Tailwind CSS v4, Lucide React Icons
- **Backend & Database**: Supabase Client / PostgreSQL Schema (`supabase/schema.sql`)
- **State & Realtime**: Custom Event Dispatcher (`cart-updated`, `orders-updated`, `order-status-changed`)
- **Version Control**: Git & GitHub (`main` branch)

---

## 📦 Quick Start Guide

### 1. Installation
```bash
git clone https://github.com/AnkitaPriyadarshini-repos/EverNexa.git
cd EverNexa
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env`:
```env
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
VITE_APP_VERSION=1.0.0
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 📄 Disclaimer

"This is an independent frontend & full-stack recreation created for educational and portfolio purposes. Apple, App Store, and related trademarks belong to their respective owners."

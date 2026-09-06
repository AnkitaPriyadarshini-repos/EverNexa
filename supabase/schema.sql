-- Supabase Database Schema for App Store Today & 24/7 Store Platform

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- APPS TABLE
CREATE TABLE IF NOT EXISTS apps (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  developer TEXT,
  category TEXT NOT NULL,
  icon_url TEXT NOT NULL,
  screenshots TEXT[],
  rating NUMERIC(2,1) DEFAULT 4.8,
  rating_count INTEGER DEFAULT 1250,
  age_rating TEXT DEFAULT '4+',
  version TEXT DEFAULT '1.0.0',
  release_date TEXT,
  app_store_url TEXT NOT NULL,
  platforms TEXT[] DEFAULT ARRAY['iPhone', 'iPad'],
  is_featured BOOLEAN DEFAULT false,
  is_trending BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- EDITORIAL STORIES TABLE
CREATE TABLE IF NOT EXISTS editorial_stories (
  id TEXT PRIMARY KEY,
  kind TEXT NOT NULL,
  eyebrow TEXT,
  title TEXT NOT NULL,
  description TEXT,
  hero_image TEXT,
  bg_color TEXT,
  text_color TEXT,
  app_id TEXT REFERENCES apps(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 24/7 CONVENIENCE STORE PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS store_products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  discount_price NUMERIC(10,2),
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  inventory INTEGER DEFAULT 100,
  is_available BOOLEAN DEFAULT true,
  delivery_time TEXT DEFAULT '15 mins',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- CART ITEMS TABLE
CREATE TABLE IF NOT EXISTS cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id TEXT REFERENCES store_products(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  total_amount NUMERIC(10,2) NOT NULL,
  status TEXT DEFAULT 'PLACED',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id TEXT REFERENCES orders(id) ON DELETE CASCADE,
  product_id TEXT REFERENCES store_products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  quantity INTEGER NOT NULL
);

-- FAVORITES TABLE
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  app_id TEXT REFERENCES apps(id) ON DELETE CASCADE,
  product_id TEXT REFERENCES store_products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

import { ProductItem } from '../types/appStore';

export const STORE_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "24S Signature Cold Coffee",
    description: "Rich, creamy chilled espresso brew blended with milk and subtle vanilla sweetness.",
    price: 120,
    discountPrice: 99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    inventory: 45,
    isAvailable: true,
    deliveryTime: "12-15 mins"
  },
  {
    id: "prod-2",
    name: "Classic New York Hot Dog",
    description: "Grilled juicy chicken sausage served in a warm sesame bun with mustard and relish.",
    price: 180,
    discountPrice: 149,
    category: "Hot Food",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80",
    inventory: 30,
    isAvailable: true,
    deliveryTime: "15 mins"
  },
  {
    id: "prod-3",
    name: "Spicy Mexican Loaded Nachos",
    description: "Crispy tortilla chips topped with warm melted cheese, jalapeños, and salsa dip.",
    price: 160,
    discountPrice: 139,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80",
    inventory: 25,
    isAvailable: true,
    deliveryTime: "15 mins"
  },
  {
    id: "prod-4",
    name: "Red Bull Energy Drink (250ml)",
    description: "Vitalizes body and mind. High taurine energy drink for late night work & gaming.",
    price: 125,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    inventory: 100,
    isAvailable: true,
    deliveryTime: "10 mins"
  },
  {
    id: "prod-5",
    name: "Gourmet Truffle Potato Chips (150g)",
    description: "Thinly sliced golden potatoes fried to perfection with black truffle aroma.",
    price: 99,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    inventory: 60,
    isAvailable: true,
    deliveryTime: "10 mins"
  },
  {
    id: "prod-6",
    name: "Special Masala Instant Noodles 4-Pack",
    description: "Quick 2-minute savory spiced noodles with aromatic Indian herbs.",
    price: 80,
    discountPrice: 72,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=600&q=80",
    inventory: 80,
    isAvailable: true,
    deliveryTime: "15 mins"
  },
  {
    id: "prod-7",
    name: "70% Belgian Dark Chocolate Bar",
    description: "Artisanal dark chocolate with rich cocoa flavor and smooth melt-in-mouth finish.",
    price: 150,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
    inventory: 50,
    isAvailable: true,
    deliveryTime: "10 mins"
  },
  {
    id: "prod-8",
    name: "Artisan Cookie Dough Ice Cream Tub (500ml)",
    description: "Creamy vanilla ice cream packed with chewy chocolate chip cookie dough bites.",
    price: 299,
    discountPrice: 249,
    category: "Ice Cream",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80",
    inventory: 20,
    isAvailable: true,
    deliveryTime: "12 mins"
  }
];

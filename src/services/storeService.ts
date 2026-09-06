import { ProductItem } from '../types/appStore';
import { STORE_PRODUCTS } from '../data/storeProducts';

let productsState: ProductItem[] = [...STORE_PRODUCTS];

export const getStoreProducts = async (category?: string): Promise<ProductItem[]> => {
  if (!category || category === 'All') return productsState;
  return productsState.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = async (id: string): Promise<ProductItem | null> => {
  return productsState.find(p => p.id === id) || null;
};

export const updateProductInventory = async (id: string, newInventory: number): Promise<boolean> => {
  const item = productsState.find(p => p.id === id);
  if (item) {
    item.inventory = newInventory;
    item.isAvailable = newInventory > 0;
    return true;
  }
  return false;
};

export const updateProductPrice = async (id: string, newPrice: number): Promise<boolean> => {
  const item = productsState.find(p => p.id === id);
  if (item) {
    item.price = newPrice;
    return true;
  }
  return false;
};

export const addStoreProduct = async (product: Omit<ProductItem, 'id'>): Promise<ProductItem> => {
  const newProduct: ProductItem = {
    ...product,
    id: `prod-${Date.now()}`
  };
  productsState.unshift(newProduct);
  return newProduct;
};

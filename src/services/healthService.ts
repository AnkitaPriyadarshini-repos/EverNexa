import { SystemHealth } from '../types/appStore';
import { STORE_PRODUCTS } from '../data/storeProducts';
import { getOrders } from './orderService';
import { TOP_APPS_WEEK, HOT_APPS_WEEK } from '../data/appStoreData';

export const getSystemHealth = async (): Promise<SystemHealth> => {
  const orders = getOrders();
  const totalApps = TOP_APPS_WEEK.length + HOT_APPS_WEEK.length;

  return {
    status: "ok",
    database: "connected",
    timestamp: new Date().toISOString(),
    version: import.meta.env.VITE_APP_VERSION || "1.0.0",
    productCount: STORE_PRODUCTS.length,
    orderCount: orders.length,
    appCount: totalApps
  };
};

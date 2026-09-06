import { Order, OrderItem, OrderStatus } from '../types/appStore';
import { getCartSummary, clearCart } from './cartService';

const ORDERS_KEY = '24s_store_orders_v1';

export const getOrders = (): Order[] => {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
};

export const saveOrders = (orders: Order[]) => {
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    window.dispatchEvent(new Event('orders-updated'));
  } catch (err) {
    console.error("Failed to save orders:", err);
  }
};

export const getOrderById = (id: string): Order | null => {
  const orders = getOrders();
  return orders.find(o => o.id === id) || null;
};

export const createOrder = async (
  customerName: string,
  phone: string,
  address: string
): Promise<Order> => {
  const summary = getCartSummary();
  if (summary.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const orderItems: OrderItem[] = summary.items.map(item => ({
    productId: item.product.id,
    productName: item.product.name,
    price: item.product.discountPrice || item.product.price,
    quantity: item.quantity
  }));

  const newOrder: Order = {
    id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    customerName,
    phone,
    address,
    totalAmount: summary.total,
    status: 'PLACED',
    items: orderItems,
    createdAt: new Date().toISOString()
  };

  const currentOrders = getOrders();
  currentOrders.unshift(newOrder);
  saveOrders(currentOrders);
  clearCart();

  return newOrder;
};

export const updateOrderStatus = (orderId: string, status: OrderStatus): Order | null => {
  const orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
    saveOrders(orders);
    
    // Broadcast realtime event
    window.dispatchEvent(new CustomEvent('order-status-changed', { 
      detail: { orderId, status } 
    }));
    return order;
  }
  return null;
};

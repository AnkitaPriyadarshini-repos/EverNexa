import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Order, OrderStatus } from '../types/appStore';
import { getOrders, getOrderById } from '../services/orderService';
import { Clock, CheckCircle, Package, Truck, Home, ArrowLeft } from 'lucide-react';

export const OrdersPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const refreshOrders = () => {
    const list = getOrders();
    setOrders(list);
    if (id) {
      setCurrentOrder(getOrderById(id));
    }
  };

  useEffect(() => {
    refreshOrders();
    window.addEventListener('orders-updated', refreshOrders);
    window.addEventListener('order-status-changed', refreshOrders as EventListener);
    return () => {
      window.removeEventListener('orders-updated', refreshOrders);
      window.removeEventListener('order-status-changed', refreshOrders as EventListener);
    };
  }, [id]);

  const statuses: OrderStatus[] = ['PLACED', 'CONFIRMED', 'PACKED', 'OUT_FOR_DELIVERY', 'DELIVERED'];

  const getStatusStepIndex = (status: OrderStatus) => {
    return statuses.indexOf(status);
  };

  if (id && currentOrder) {
    const activeStep = getStatusStepIndex(currentOrder.status);

    return (
      <div className="max-w-3xl mx-auto space-y-8 pb-20">
        <button onClick={() => navigate('/orders')} className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>All Orders</span>
        </button>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-zinc-800 shadow-xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-zinc-800">
            <div>
              <div className="text-xs font-bold text-gray-400">ORDER ID</div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">{currentOrder.id}</h2>
              <div className="text-xs text-gray-500 mt-0.5">{new Date(currentOrder.createdAt).toLocaleString()}</div>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-extrabold shadow-sm">
              {currentOrder.status}
            </div>
          </div>

          {/* Realtime Progress Steps Bar */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live Order Status Tracking</h4>
            <div className="grid grid-cols-5 gap-2 text-center">
              {statuses.map((s, idx) => {
                const isPassed = idx <= activeStep;
                return (
                  <div key={s} className="space-y-2">
                    <div className={`h-2 rounded-full transition-all ${isPassed ? 'bg-amber-500' : 'bg-gray-200 dark:bg-zinc-800'}`} />
                    <span className={`text-[10px] font-bold block ${isPassed ? 'text-amber-600 dark:text-amber-400' : 'text-gray-400'}`}>
                      {s.replace(/_/g, ' ')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-gray-50 dark:bg-zinc-950 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <div>
              <span className="font-bold text-gray-400 block mb-1">DELIVERY TO</span>
              <span className="font-bold text-gray-900 dark:text-white">{currentOrder.customerName}</span>
              <p className="text-gray-500 mt-0.5">{currentOrder.address}</p>
              <p className="text-gray-500">Ph: {currentOrder.phone}</p>
            </div>
            <div>
              <span className="font-bold text-gray-400 block mb-1">TOTAL AMOUNT</span>
              <span className="text-lg font-black text-gray-900 dark:text-white">₹{currentOrder.totalAmount}</span>
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order Items</h4>
            <div className="space-y-2">
              {currentOrder.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm py-2 border-b border-gray-100 dark:border-zinc-800/60 last:border-0">
                  <span className="font-semibold text-gray-800 dark:text-zinc-200">{item.productName} × {item.quantity}</span>
                  <span className="font-extrabold text-gray-900 dark:text-white">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="py-20 text-center text-gray-400">No past orders found.</div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => navigate(`/orders/${order.id}`)}
              className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex items-center justify-between cursor-pointer"
            >
              <div>
                <div className="text-xs font-bold text-amber-600">{order.id}</div>
                <div className="text-base font-extrabold text-gray-900 dark:text-white mt-0.5">₹{order.totalAmount}</div>
                <div className="text-xs text-gray-400 mt-1">{new Date(order.createdAt).toLocaleString()} • {order.items.length} items</div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold">
                {order.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

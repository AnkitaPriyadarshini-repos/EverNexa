import React, { useState, useEffect } from 'react';
import { getOrders, updateOrderStatus } from '../services/orderService';
import { getStoreProducts, updateProductInventory, updateProductPrice } from '../services/storeService';
import { getSystemHealth } from '../services/healthService';
import { Order, OrderStatus, ProductItem, SystemHealth } from '../types/appStore';
import { ShieldCheck, Package, Clock, Activity, CheckCircle, RefreshCw } from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'system'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [health, setHealth] = useState<SystemHealth | null>(null);

  const refreshData = async () => {
    setOrders(getOrders());
    const prods = await getStoreProducts();
    setProducts([...prods]);
    const h = await getSystemHealth();
    setHealth(h);
  };

  useEffect(() => {
    refreshData();
    window.addEventListener('orders-updated', refreshData);
    return () => window.removeEventListener('orders-updated', refreshData);
  }, []);

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus);
    refreshData();
  };

  const handleInventoryChange = async (productId: string, newInventory: number) => {
    await updateProductInventory(productId, newInventory);
    refreshData();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-zinc-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Portal</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white">Store & System Dashboard</h1>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'orders' ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300'
            }`}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'products' ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300'
            }`}
          >
            Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'system' ? 'bg-amber-500 text-white shadow-md' : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300'
            }`}
          >
            System Health
          </button>
        </div>
      </div>

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Manage Realtime Orders</h3>
          {orders.length === 0 ? (
            <div className="py-12 text-center text-gray-400">No active orders placed yet.</div>
          ) : (
            <div className="space-y-4">
              {orders.map((o) => (
                <div key={o.id} className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 dark:border-zinc-800 pb-3">
                    <div>
                      <span className="text-xs font-bold text-amber-600">{o.id}</span>
                      <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">{o.customerName} ({o.phone})</h4>
                      <p className="text-xs text-gray-500">{o.address}</p>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-black text-gray-900 dark:text-white">₹{o.totalAmount}</div>
                      <span className="text-[10px] text-gray-400">{new Date(o.createdAt).toLocaleTimeString()}</span>
                    </div>
                  </div>

                  {/* Status Advancement Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-xs font-bold text-gray-400 mr-2">Advance Realtime Status:</span>
                    {(['PLACED', 'CONFIRMED', 'PACKED', 'OUT_FOR_DELIVERY', 'DELIVERED'] as OrderStatus[]).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleStatusChange(o.id, st)}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                          o.status === st 
                            ? 'bg-emerald-600 text-white ring-2 ring-emerald-400' 
                            : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-gray-200'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Inventory & Price Control</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((p) => (
              <div key={p.id} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{p.name}</h4>
                    <span className="text-xs font-extrabold text-amber-600">₹{p.discountPrice || p.price}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-400">Stock:</span>
                  <input
                    type="number"
                    value={p.inventory}
                    onChange={(e) => handleInventoryChange(p.id, parseInt(e.target.value) || 0)}
                    className="w-16 px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800 border text-xs font-bold text-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Health Tab */}
      {activeTab === 'system' && (
        <div className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-500" />
              <span>Telemetry & Health Monitoring</span>
            </h3>
            <button onClick={refreshData} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800">
              <RefreshCw className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {health && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                <span className="text-xs font-bold text-gray-400 uppercase">STATUS</span>
                <div className="text-xl font-black text-emerald-500 mt-1 uppercase">{health.status}</div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                <span className="text-xs font-bold text-gray-400 uppercase">DATABASE</span>
                <div className="text-xl font-black text-blue-500 mt-1 uppercase">{health.database}</div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                <span className="text-xs font-bold text-gray-400 uppercase">PRODUCTS</span>
                <div className="text-xl font-black text-amber-500 mt-1">{health.productCount}</div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800">
                <span className="text-xs font-bold text-gray-400 uppercase">VERSION</span>
                <div className="text-xl font-black text-purple-500 mt-1">{health.version}</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

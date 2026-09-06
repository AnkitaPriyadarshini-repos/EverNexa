import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductItem } from '../types/appStore';
import { getProductById } from '../services/storeService';
import { addToCart } from '../services/cartService';
import { ArrowLeft, Clock, ShoppingCart, CheckCircle, Zap } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (id) {
        const item = await getProductById(id);
        setProduct(item);
      }
    };
    load();
  }, [id]);

  if (!product) {
    return <div className="py-20 text-center text-gray-400">Loading product...</div>;
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-16">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-semibold text-amber-600 hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Store</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-zinc-800 shadow-xl">
        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{product.category}</span>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">{product.name}</h1>
            <p className="text-sm text-gray-600 dark:text-zinc-400">{product.description}</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-gray-900 dark:text-white">₹{product.discountPrice || product.price}</span>
              {product.discountPrice && <span className="text-base text-gray-400 line-through">₹{product.price}</span>}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <Zap className="w-4 h-4" /> Express Delivery in {product.deliveryTime}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 dark:border-zinc-800 rounded-full px-3 py-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 font-bold text-lg">-</button>
                <span className="px-4 font-bold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-2 font-bold text-lg">+</button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {added ? <CheckCircle className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{added ? 'Added to Cart' : 'Add to Cart'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

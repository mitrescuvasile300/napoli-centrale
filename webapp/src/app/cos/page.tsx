"use client";

import Link from "next/link";
import { useCart } from "../components/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  const deliveryFee = totalPrice >= 100 ? 0 : 10;
  const total = totalPrice + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-md p-12">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Coșul tău este gol</h1>
            <p className="text-gray-600 mb-8">
              Adaugă produse delicioase din meniul nostru italian!
            </p>
            <Link
              href="/meniu"
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Vezi Meniul
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Coș de cumpărături</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4"
              >
                {/* Image Placeholder */}
                <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🍽️</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 truncate">{item.name}</h3>
                  <p className="text-red-600 font-semibold">{item.price} lei</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Total & Remove */}
                <div className="text-right">
                  <p className="font-bold text-gray-900">
                    {(item.price * item.quantity).toFixed(2)} lei
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Șterge
                  </button>
                </div>
              </div>
            ))}

            <Link
              href="/meniu"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continuă cumpărăturile
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sumar comandă</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} produse)</span>
                  <span>{totalPrice.toFixed(2)} lei</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livrare</span>
                  <span>{deliveryFee === 0 ? "Gratis" : `${deliveryFee} lei`}</span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-sm text-gray-500">
                    Livrare gratuită pentru comenzi peste 100 lei
                  </p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-red-600">{total.toFixed(2)} lei</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-red-600 text-white text-center py-4 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                Continuă cu Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

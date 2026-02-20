"use client";

import { useState } from "react";
import { useCart } from "../components/CartContext";
import menuData from "../data/menu_data_complete.json";
import { Plus, Check } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gramaj: number;
  image: string;
  popular?: boolean;
  allergens?: string[];
  options?: string[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("pizza");
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addItem } = useCart();

  const categories: Category[] = menuData.categories;
  const activeProducts = categories.find(c => c.id === activeCategory)?.products || [];

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    });
    
    setAddedItems(prev => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meniu</h1>
          <p className="text-red-100 text-lg">Descoperă aromele autentice ale Italiei</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-20 z-30 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-gray-600 mt-1">
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center relative">
                <span className="text-6xl">🍽️</span>
                {product.popular && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="text-lg font-bold text-red-600">
                    {product.price} lei
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{product.gramaj}g</span>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      addedItems.has(product.id)
                        ? "bg-green-500 text-white"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    {addedItems.has(product.id) ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Adăugat</span>
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" />
                        <span>Adaugă</span>
                      </>
                    )}
                  </button>
                </div>

                {product.allergens && product.allergens.length > 0 && (
                  <p className="text-xs text-gray-400 mt-3">
                    Alergeni: {product.allergens.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

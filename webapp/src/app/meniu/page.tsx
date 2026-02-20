"use client";

import { useState } from "react";
import { useCart } from "../components/CartContext";
import menuData from "../data/menu_data_complete.json";
import { Plus, Check, Flame } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gramaj: number;
  image: string;
  popular?: boolean;
  allergens?: string[];
  spicy?: boolean;
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
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#8B0000] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L50 0 L100 50 L50 100 L0 50 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide" style={{fontFamily: 'Playfair Display, serif'}}>
            Meniu
          </h1>
          <p className="text-xl md:text-2xl opacity-90 italic" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Arome autentice din inima Italiei
          </p>
          <div className="mt-8 w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-[#8B0000]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-lg whitespace-nowrap transition-all duration-300 border-2 ${
                  activeCategory === category.id
                    ? "bg-[#8B0000] text-white border-[#D4AF37] shadow-lg"
                    : "bg-white text-[#8B0000] border-[#8B0000]/20 hover:border-[#8B0000] hover:bg-[#8B0000]/5"
                }`}
                style={{fontFamily: 'Playfair Display, serif'}}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            {categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
          <div className="mt-4 w-24 h-0.5 mx-auto bg-[#D4AF37]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#8B0000]/10 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Placeholder with Italian styling */}
              <div className="h-56 bg-gradient-to-br from-[#8B0000]/5 to-[#D4AF37]/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B0000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">🍽️</span>
                
                {product.popular && (
                  <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#1a1a1a] text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Flame className="w-4 h-4" /> Popular
                  </span>
                )}
                
                {product.spicy && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                    🌶️ Picant
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-[#1a1a1a]" style={{fontFamily: 'Playfair Display, serif'}}>
                    {product.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#8B0000]">
                    {product.price} <span className="text-lg">lei</span>
                  </span>
                </div>

                <p className="text-gray-600 mb-4 italic leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#8B0000]/10">
                  <span className="text-gray-500 text-sm">{product.gramaj}g</span>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                      addedItems.has(product.id)
                        ? "bg-green-600 text-white"
                        : "bg-[#8B0000] text-white hover:bg-[#D4AF37] hover:text-[#8B0000] border-2 border-[#8B0000] hover:border-[#D4AF37]"
                    }`}
                    style={{fontFamily: 'Playfair Display, serif'}}
                  >
                    {addedItems.has(product.id) ? (
                      <>
                        <Check className="w-5 h-5" />
                        Adăugat
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" />
                        Adaugă
                      </>
                    )}
                  </button>
                </div>

                {product.allergens && product.allergens.length > 0 && (
                  <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-dashed border-gray-200">
                    Alergeni: {product.allergens.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Italian Flag Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#006400] via-white via-50% to-[#8B0000]" />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Pizza } from "lucide-react";

interface NavbarProps {
  cartItemCount?: number;
}

export default function Navbar({ cartItemCount = 0 }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Acasă" },
    { href: "/meniu", label: "Meniu" },
    { href: "/despre", label: "Despre" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-lg border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-red-600 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
              <Pizza className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-red-600 tracking-tight">
                Napoli
              </span>
              <span className="text-sm font-medium text-green-700 -mt-1">
                Centrale
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 font-medium text-lg hover:text-red-600 transition-colors duration-200 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Cart Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              href="/cos"
              className="relative p-2 text-gray-700 hover:text-red-600 transition-colors duration-200 group"
            >
              <ShoppingCart className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md animate-pulse">
                  {cartItemCount > 99 ? "99+" : cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Închide meniu" : "Deschide meniu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-inner">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Cart Link */}
          <Link
            href="/cos"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-green-50 hover:text-green-700 transition-all duration-200 border-t border-gray-100 mt-2 pt-4"
          >
            <span>Coș de cumpărături</span>
            {cartItemCount > 0 && (
              <span className="bg-green-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

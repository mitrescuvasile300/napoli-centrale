"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#8B0000] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006400] via-[#D4AF37] via-50% to-[#8B0000]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
              <span className="text-sm font-medium tracking-wider uppercase">🍕 Din 1998 în Cluj-Napoca</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{fontFamily: 'Playfair Display, serif'}}>
              Gustul Autentic al
              <span className="block text-[#D4AF37] mt-2">Napoli</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 italic leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Pizza coaptă în cuptor cu lemne, paste proaspete făcute în casă 
              și deserturi italiene autentice. O călătorie culinară în inima Italiei.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/meniu"
                className="inline-flex items-center justify-center bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                style={{fontFamily: 'Playfair Display, serif'}}
              >
                Vezi Meniul
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:0040264450500"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
                style={{fontFamily: 'Playfair Display, serif'}}
              >
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { num: "25+", label: "Ani experiență" },
                { num: "40+", label: "Preparate" },
                { num: "4.9", label: "Rating clienți" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-[#D4AF37]" style={{fontFamily: 'Playfair Display, serif'}}>{stat.num}</div>
                  <div className="text-sm text-white/70 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Food Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl h-52 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-500 group">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">🍕</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl h-72 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-500 group">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">🍝</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl h-72 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-500 group">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500">🥗</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl h-52 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-500 group">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500">🍰</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 70 720 80C840 90 960 100 1080 105C1200 110 1320 110 1380 110L1440 110V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FAF9F6"
          />
        </svg>
      </div>
    </section>
  );
}

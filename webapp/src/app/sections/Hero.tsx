"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🍕 Din 1998 în Cluj-Napoca</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Gustul Autentic al
              <span className="block text-yellow-300">Napoli</span>
            </h1>
            
            <p className="text-lg md:text-xl text-red-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Pizza coaptă în cuptor cu lemne, paste proaspete făcute în casă 
              și deserturi italiene autentice. O călătorie culinară în inima Italiei.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/meniu"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Vezi Meniul
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:0040264450500"
                className="inline-flex items-center justify-center bg-red-700 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">25+</div>
                <div className="text-sm text-red-100">Ani de experiență</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">40+</div>
                <div className="text-sm text-red-100">Preparate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">4.9</div>
                <div className="text-sm text-red-100">Rating clienți</div>
              </div>
            </div>
          </div>

          {/* Right Content - Food Images */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-48 flex items-center justify-center">
                <span className="text-6xl">🍕</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl">🍝</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center">
                <span className="text-6xl">🥗</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-48 flex items-center justify-center">
                <span className="text-6xl">🍰</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

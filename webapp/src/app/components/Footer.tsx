'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              <span className="text-green-500">Napoli</span>{' '}
              <span className="text-red-500">Centrale</span>
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Pioniera bucătăriei cu specific italianesc din Cluj Napoca, încă din anul 1998. 
              Vă oferim arome autentice din inima Italiei, preparate cu pasiune și ingrediente proaspete.
            </p>
            <div className="flex items-center gap-2 text-sm text-stone-400">
              <span className="inline-block w-8 h-1 bg-gradient-to-r from-green-500 via-white to-red-500 rounded-full"></span>
              <span>Est. 1998</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-red-600 pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Strada Memorandumului 16, Cluj-Napoca 400114</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+40364123456" className="text-sm hover:text-white transition-colors">
                  +40 364 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@napolicentrale.ro" className="text-sm hover:text-white transition-colors">
                  contact@napolicentrale.ro
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-green-600 pb-2 inline-block">
              Program
            </h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex justify-between">
                <span>Luni - Joi</span>
                <span className="text-white font-medium">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Vineri - Sâmbătă</span>
                <span className="text-white font-medium">10:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Duminică</span>
                <span className="text-white font-medium">11:00 - 21:00</span>
              </li>
            </ul>
            <p className="text-xs text-stone-500 pt-2">
              * Programul poate varia în sărbători
            </p>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white border-b-2 border-white pb-2 inline-block">
              Linkuri Rapide
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="text-stone-400 hover:text-green-400 transition-colors">
                  Meniu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/rezervari" className="text-stone-400 hover:text-red-400 transition-colors">
                  Rezervări
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-sm font-medium text-stone-300 mb-3">Urmărește-ne</h5>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com/napolicentrale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-blue-600 transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/napolicentrale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://goo.gl/maps/napolicentrale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-green-600 transition-colors group"
                  aria-label="Google Maps"
                >
                  <svg className="w-5 h-5 text-stone-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Italian Flag Divider */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-stone-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>
              © {currentYear} <span className="text-stone-300">Napoli Centrale</span>. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-stone-300 transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/terms" className="hover:text-stone-300 transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

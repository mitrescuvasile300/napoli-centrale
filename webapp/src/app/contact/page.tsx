"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#8B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Contact
          </h1>
          <div className="w-24 h-1 mx-auto bg-[#D4AF37]" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              Contactează-ne
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-[#8B0000]/10">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <p className="text-gray-600">0040 264 450 500</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-[#8B0000]/10">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">contact@pizzerianapolicentrale.ro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-[#8B0000]/10">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Adresă</h3>
                  <p className="text-gray-600">Strada Napoli, Cluj-Napoca</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md border border-[#8B0000]/10">
                <div className="w-12 h-12 bg-[#8B0000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#8B0000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Program</h3>
                  <p className="text-gray-600">Luni-Vineri: 10:00-22:00</p>
                  <p className="text-gray-600">Sâmbătă: 11:00-23:00</p>
                  <p className="text-gray-600">Duminică: 12:00-21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#8B0000]/10">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              Scrie-ne un mesaj
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Mesaj trimis!</h3>
                <p className="text-gray-600">Îți mulțumim. Te contactăm în curând.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nume</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Numele tău"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="email@exemplu.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="07xx xxx xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Ce dorești să ne spui?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{fontFamily: 'Playfair Display, serif'}}
                >
                  <Send className="w-5 h-5" />
                  Trimite Mesaj
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Italian Flag Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#006400] via-white via-50% to-[#8B0000]" />
    </div>
  );
}

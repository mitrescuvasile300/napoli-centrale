import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Hero />
      
      {/* Featured Categories - Italian Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B0000' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20z' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Descoperă <span className="text-[#8B0000]">Aromele Italiei</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: "🍕", title: "Pizza Napoletană", desc: "Cuptor cu lemne, aluat autentic, ingrediente proaspete", color: "from-[#8B0000]/10 to-[#8B0000]/5" },
              { icon: "🍝", title: "Paste Proaspete", desc: "Fatte in casa, pregătite zilnic cu tradiție", color: "from-[#006400]/10 to-[#006400]/5" },
              { icon: "🍰", title: "Deserturi Italiene", desc: "Tiramisù, Panna Cotta și multe altele", color: "from-[#D4AF37]/20 to-[#D4AF37]/10" },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 border border-[#8B0000]/10 hover:border-[#D4AF37] hover:-translate-y-3`}>
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3" style={{fontFamily: 'Playfair Display, serif'}}>{item.title}</h3>
                  <p className="text-gray-600 italic text-lg" style={{fontFamily: 'Cormorant Garamond, serif'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section - Luxury Style */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#D4AF37]/20 rounded-full text-[#D4AF37] text-sm font-semibold mb-6 tracking-wider uppercase">
                Din 1998
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Povestea Noastră
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Pizzeria Spaghetteria Napoli Centrale este pioniera bucătăriei cu specific 
                italianesc din orașul Cluj Napoca, încă din anul 1998.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                Originalitatea gustului bucătăriei Italiene este succesul nostru, fiecare 
                produs având savoarea autentică a unei plimbări pe străzile din minunatul 
                oraș Napoli.
              </p>
              <div className="flex gap-8">
                {[
                  { num: "25+", label: "Ani de Experiență" },
                  { num: "40+", label: "Preparate" },
                  { num: "1000+", label: "Clienți Fericiți" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold text-[#D4AF37]" style={{fontFamily: 'Playfair Display, serif'}}>{stat.num}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000] to-[#D4AF37] rounded-3xl transform rotate-3 opacity-30" />
              <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-3xl h-96 flex items-center justify-center relative border border-[#D4AF37]/30">
                <span className="text-9xl opacity-30">🏛️</span>
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-[#D4AF37] italic text-center" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    „Pastele noastre fatte in casa vă vor cuceri din prima îmbucătură"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#8B0000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Comandă Acum și Savurează Italia!
          </h2>
          <p className="text-white/80 text-xl mb-10 italic" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Livrare rapidă în Cluj-Napoca sau ridicare personală
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/meniu" 
              className="bg-white text-[#8B0000] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{fontFamily: 'Playfair Display, serif'}}
            >
              Vezi Meniul Complet
            </a>
            <a 
              href="tel:0040264450500" 
              className="bg-transparent text-white border-2 border-white/50 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              style={{fontFamily: 'Playfair Display, serif'}}
            >
              📞 Sună Acum
            </a>
          </div>
        </div>
      </section>
      
      {/* Italian Flag Bar */}
      <div className="h-2 bg-gradient-to-r from-[#006400] via-white via-50% to-[#8B0000]" />
    </div>
  );
}

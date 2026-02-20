import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Descoperă <span className="text-red-600">Aromele Italiei</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-red-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🍕</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pizza Napoletană</h3>
                <p className="text-gray-600">Cuptor cu lemne, aluat autentic, ingrediente proaspete</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🍝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Paste Proaspete</h3>
                <p className="text-gray-600">Fatte in casa, pregătite zilnic cu tradiție</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-amber-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">🍰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deserturi Italiene</h3>
                <p className="text-gray-600">Tiramisù, Panna Cotta și multe altele</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Povestea Noastră
              </h2>
              <p className="text-gray-600 mb-4">
                Pizzeria Spaghetteria Napoli Centrale este pioniera bucătăriei cu specific 
                italianesc din orașul Cluj Napoca, încă din anul 1998.
              </p>
              <p className="text-gray-600 mb-6">
                Originalitatea gustului bucătăriei Italiene este succesul nostru, fiecare 
                produs având savoarea autentică a unei plimbări pe străzile din minunatul 
                oraș Napoli.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">25+</div>
                  <div className="text-sm text-gray-500">Ani de Experiență</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">40+</div>
                  <div className="text-sm text-gray-500">Preparate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">1000+</div>
                  <div className="text-sm text-gray-500">Clienți Fericiți</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <span className="text-gray-400 text-6xl">🏛️</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comandă Acum și Savurează Italia!
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Livrare rapidă în Cluj-Napoca sau ridicare personală
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/meniu" 
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Vezi Meniul Complet
            </a>
            <a 
              href="tel:0040264450500" 
              className="bg-red-700 text-white px-8 py-4 rounded-full font-bold hover:bg-red-800 transition-colors"
            >
              📞 Sună Acum
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

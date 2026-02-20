import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-[#8B0000] via-[#B22222] to-[#8B0000] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
            Despre Noi
          </h1>
          <div className="w-24 h-1 mx-auto bg-[#D4AF37]" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#8B0000]/10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Povestea Napoli Centrale
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Pizzeria Spaghetteria Napoli Centrale este pioniera bucătăriei cu specific italianesc 
            din orașul Cluj Napoca, încă din anul 1998. Originalitatea gustului bucătăriei Italiene 
            este succesul nostru, fiecare produs având savoarea autentică a unei plimbări pe străzile 
            din minunatul oraș Napoli.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Puteți savura o pizza pe minunata noastră terasă, oază de liniște în centrul Clujului, 
            înconjurați de o grădină plină de verdeață. Conducerea familială conferă restaurantului 
            Napoli Centrale o atmosferă primitoare care te face să te simți ca și acasă.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Pastele noastre "fatte in casa" vă vor cuceri din prima îmbucătură, savoarea lor autentică 
            și aspectul lor încântător vă așteaptă proaspete în fiecare zi. Lasagne, Ravioli, Tortelloni, 
            Tagliatelle, Rigatini, Pappardelle, Fagottini... mmmm... Che buone!!!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-[#8B0000]/5 rounded-2xl">
              <div className="text-4xl font-bold text-[#8B0000] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>25+</div>
              <div className="text-gray-600">Ani de Experiență</div>
            </div>
            <div className="text-center p-6 bg-[#8B0000]/5 rounded-2xl">
              <div className="text-4xl font-bold text-[#8B0000] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>40+</div>
              <div className="text-gray-600">Preparate</div>
            </div>
            <div className="text-center p-6 bg-[#8B0000]/5 rounded-2xl">
              <div className="text-4xl font-bold text-[#8B0000] mb-2" style={{fontFamily: 'Playfair Display, serif'}}>1000+</div>
              <div className="text-gray-600">Clienți Fericiți</div>
            </div>
          </div>
        </div>

        {/* Program */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border border-[#8B0000]/10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center" style={{fontFamily: 'Playfair Display, serif'}}>
            Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <Clock className="w-8 h-8 text-[#8B0000] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Luni - Vineri</h3>
              <p className="text-gray-600">10:00 - 22:00</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-8 h-8 text-[#8B0000] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Sâmbătă</h3>
              <p className="text-gray-600">11:00 - 23:00</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-8 h-8 text-[#8B0000] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Duminică</h3>
              <p className="text-gray-600">12:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Italian Flag Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#006400] via-white via-50% to-[#8B0000]" />
    </div>
  );
}

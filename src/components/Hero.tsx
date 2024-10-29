import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=1920"
          alt="Luxury Eyewear"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-bold mb-4">Pedrão viado</h1>
              <p className="text-xl mb-8 text-orange-100">
                Descubra nossa coleção exclusiva de óculos de grau e solares
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                  Comprar Agora
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

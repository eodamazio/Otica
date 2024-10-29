import React from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Óculos de Sol Premium',
    image: 'https://images.app.goo.gl/sJ6kLxTQD9x5ehpv9',
    price: 'R$ 459,90',
    description: 'Proteção UV com estilo refinado',
  },
  {
    id: 2,
    name: 'Armação Moderna',
    image:
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600',
    price: 'R$ 299,90',
    description: 'Design contemporâneo para seu dia a dia',
  },
  {
    id: 3,
    name: 'Coleção Esportiva',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600',
    price: 'R$ 379,90',
    description: 'Performance e proteção combinadas',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Destaques</h2>
        <p className="text-gray-600 text-center mb-12">
          Conheça nossas peças mais populares
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-orange-500 font-bold mb-4">
                  {product.price}
                </p>
                <button className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  Ver Detalhes <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

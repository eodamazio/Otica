import React from 'react';
import { Home, Glasses, Calendar, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Glasses className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">Ótica Brasil</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { href: '#home', icon: Home, label: 'Início' },
              { href: '#products', icon: Glasses, label: 'Produtos' },
              { href: '#appointment', icon: Calendar, label: 'Agendamento' },
              { href: '#contact', icon: Phone, label: 'Contato' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
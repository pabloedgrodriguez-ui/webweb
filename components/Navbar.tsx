import React from 'react';

interface NavbarProps {
  onOpenDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-arista rounded-lg flex items-center justify-center shadow-lg shadow-arista/30">
              <span className="text-white font-black text-2xl">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-gray-900 font-black text-lg tracking-wide">ARISTA</span>
              <span className="text-arista font-bold text-xs tracking-[0.2em]">ESTUDIO</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {['Problema', 'Solución', 'Precios'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                className="text-gray-600 hover:text-arista font-bold uppercase tracking-wider text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button 
              onClick={onOpenDemo}
              className="bg-arista hover:bg-arista-dark text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-arista/20 hover:shadow-arista/40 transition-all hover:-translate-y-0.5 text-sm uppercase tracking-wider"
            >
              Probar Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
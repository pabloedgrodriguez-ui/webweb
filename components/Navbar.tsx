import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Arista ALUM', id: 'alum', isNew: true },
    { label: 'Problema', id: 'problema' },
    { label: 'Solución', id: 'solucion' },
    { label: 'Precios', id: 'precios' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="flex items-baseline">
              <span className="text-arista-dark font-extrabold text-2xl tracking-tighter">ARISTA</span>
              <span className="text-arista font-light text-2xl tracking-tighter">ESTUDIO</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${item.isNew ? 'text-arista' : 'text-slate-500 hover:text-arista-dark'}`}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              onClick={onOpenDemo}
              className="bg-arista-dark text-white font-bold py-3 px-6 rounded-lg transition-all text-[10px] uppercase tracking-widest hover:bg-arista"
            >
              Solicitar Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-arista-muted p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute top-full left-0 w-full p-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className="font-bold uppercase tracking-widest text-xs text-slate-600 p-2"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={onOpenDemo}
              className="bg-arista text-white font-bold py-4 rounded-lg text-xs uppercase tracking-widest shadow-lg shadow-arista/20"
            >
              PROBAR DEMO
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
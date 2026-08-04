import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  activeView: 'software' | 'digital';
  onSelectView: (view: 'software' | 'digital') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, activeView, onSelectView }) => {
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
    { label: 'Precios', id: 'precios' },
    { label: 'Preguntas', id: 'faq' }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (activeView !== 'software') {
      onSelectView('software');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
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
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavToDigital = () => {
    onSelectView('digital');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavToSoftware = () => {
    onSelectView('software');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={handleNavToSoftware}
          >
            <div className="flex items-baseline">
              <span className="text-arista-dark font-extrabold text-2xl tracking-tighter">ARISTA</span>
              <span className="text-arista font-light text-2xl tracking-tighter">ESTUDIO</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer ${activeView === 'software' && item.isNew ? 'text-arista' : 'text-slate-500 hover:text-arista-dark'}`}
              >
                {item.label}
              </a>
            ))}

            {/* Prominent Arista Digital Button / Link */}
            <button
              onClick={handleNavToDigital}
              className={`relative text-[11px] font-extrabold uppercase tracking-widest transition-all px-3 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer ${
                activeView === 'digital'
                  ? 'bg-arista text-white shadow-md shadow-arista/20'
                  : 'bg-slate-900 text-white hover:bg-arista'
              }`}
            >
              <span>Arista Digital</span>
              <span className="bg-amber-400 text-slate-950 font-black text-[9px] px-1.5 py-0.2 rounded uppercase">
                Web & Ads
              </span>
            </button>
            
            <button 
              onClick={onOpenDemo}
              className="bg-arista-dark text-white font-bold py-2.5 px-5 rounded-lg transition-all text-[10px] uppercase tracking-widest hover:bg-arista cursor-pointer"
            >
              Solicitar Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={handleNavToDigital}
              className="bg-arista text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1.5 rounded-md"
            >
              Arista Digital
            </button>
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
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleNavToSoftware}
              className={`text-left font-bold uppercase tracking-widest text-xs p-2 ${activeView === 'software' ? 'text-arista' : 'text-slate-600'}`}
            >
              Software Arista ALUM
            </button>
            
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className="font-bold uppercase tracking-widest text-xs text-slate-600 p-2 pl-4"
              >
                • {item.label}
              </a>
            ))}

            <button
              onClick={handleNavToDigital}
              className={`text-left font-black uppercase tracking-widest text-xs p-3 rounded-xl flex items-center justify-between ${
                activeView === 'digital' ? 'bg-arista text-white' : 'bg-slate-900 text-white'
              }`}
            >
              <span>Arista Digital (Web & Redes)</span>
              <span className="bg-amber-400 text-slate-950 font-extrabold text-[9px] px-2 py-0.5 rounded">
                NUEVO
              </span>
            </button>

            <button 
              onClick={onOpenDemo}
              className="bg-arista text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-widest shadow-lg shadow-arista/20 mt-2"
            >
              PROBAR DEMO SOFTWARE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
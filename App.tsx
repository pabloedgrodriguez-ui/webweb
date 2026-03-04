import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import AlumSection from './components/AlumSection';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import DemoModal from './components/DemoModal';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-arista/30 selection:text-arista-dark">
      
      <Navbar onOpenDemo={openDemo} />
      
      <main>
        <Hero onOpenDemo={openDemo} />
        <Problem />
        <Features />
        <AlumSection onOpenDemo={openDemo} />
        <Pricing onOpenDemo={openDemo} />
      </main>

      <footer className="bg-slate-950 text-slate-400 py-20 text-center text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="flex items-baseline">
              <span className="text-white font-extrabold text-3xl tracking-tighter drop-shadow-[2px_2px_0px_rgba(251,146,60,0.3)]">ARISTA</span>
              <span className="text-arista font-light text-3xl tracking-tighter">ESTUDIO</span>
              <span className="text-arista-muted font-bold text-[11px] tracking-[0.3em] ml-4">ALUM</span>
            </div>
            
            <div className="flex gap-12">
              {['Funciones', 'Módulo Alum', 'Precios', 'Contacto'].map(link => (
                <a key={link} href="#" className="text-[11px] font-bold text-white/40 hover:text-arista uppercase tracking-[0.2em] transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/30 text-xs font-medium max-w-md text-center md:text-left">
              © 2026 ARISTASTUDIO. El estándar de ingeniería para la industria del vidrio y aluminio en Argentina.
            </p>
            <div className="flex gap-8">
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Hecho en Argentina</span>
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">v2.8.4</span>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />

    </div>
  );
};

export default App;
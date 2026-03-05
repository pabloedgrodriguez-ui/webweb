import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-arista/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-[11px] font-bold tracking-[0.4em] text-arista uppercase">Software de Ingeniería</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl tracking-tighter leading-none mb-8"
          >
            <span className="text-arista-dark font-extrabold">ARISTA</span>
            <span className="text-arista font-light">ESTUDIO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mb-8"
          >
            La plataforma definitiva para la industria del vidrio y aluminio. 
            Ahora en todos tus dispositivos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center gap-4 mb-10 bg-slate-50 px-8 py-4 rounded-full border border-slate-100 shadow-sm"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
            </div>
            <span className="text-sm font-black text-arista-dark uppercase tracking-widest">Multi-dispositivo: Celular, Tablet y PC</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={onOpenDemo}
              className="bg-arista-dark text-white font-bold px-12 py-5 rounded-xl text-sm uppercase tracking-widest transition-all hover:bg-arista shadow-xl hover:scale-105 active:scale-95"
            >
              Solicitar Demo Gratis
            </button>
          </motion.div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto mt-12 bg-slate-50 rounded-2xl p-4 min-h-[400px] flex items-center justify-center shadow-2xl border border-slate-100 overflow-hidden">
          <img 
            src="https://i.imgur.com/GySDOn0.png" 
            alt="Interfaz AristaStudio" 
            className="w-full h-auto rounded-xl shadow-lg block"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
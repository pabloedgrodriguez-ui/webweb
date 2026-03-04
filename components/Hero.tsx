import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center mb-16">
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
            className="text-5xl md:text-7xl tracking-tighter leading-none mb-8"
          >
            <span className="text-arista-dark font-extrabold">ARISTA</span>
            <span className="text-arista font-light">ESTUDIO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-10"
          >
            Gestión integral para la industria del vidrio y aluminio. 
            Presupuestos, optimización y pedidos en una sola plataforma profesional.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button 
              onClick={onOpenDemo}
              className="bg-arista-dark text-white font-bold px-10 py-4 rounded-lg text-sm uppercase tracking-widest transition-all hover:bg-arista shadow-lg"
            >
              Solicitar Demo
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-100">
            <img 
              src="https://i.imgur.com/stVjJUn.png" 
              alt="AristaStudio App Screenshot" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
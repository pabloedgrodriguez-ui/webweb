import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const AlumSection: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  return (
    <section id="alum" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-arista-dark mb-6 tracking-tight">
              Módulo Especializado ALUM
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Ingeniería de precisión para carpintería de aluminio. AristaStudio automatiza el cálculo de perfiles, herrajes y optimización de corte para las líneas más utilizadas del mercado.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Cotización dinámica por peso (KG)',
                'Gestión de líneas certificadas (Módena, A30, etc.)',
                'Cálculo automático de accesorios y herrajes',
                'Planillas de corte listas para producción'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-arista"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={onOpenDemo}
              className="text-arista-dark font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:text-arista transition-colors"
            >
              Saber más sobre el módulo <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <img 
              src="https://i.imgur.com/stVjJUn.png" 
              alt="AristaStudio Alum Module"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlumSection;
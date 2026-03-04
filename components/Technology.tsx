import React from 'react';
import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Zap, Globe } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-arista"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-arista uppercase">Infrastructure</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-arista-dark tracking-tighter leading-[0.9] mb-8"
            >
              TU TALLER <br />
              <span className="text-arista">SIN LÍMITES.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-500 font-medium leading-relaxed mb-12"
            >
              Usamos infraestructura de nivel mundial para que tus datos estén seguros y disponibles las 24 horas. No importa si estás en el taller, en la obra o de vacaciones.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <ShieldCheck className="w-8 h-8 text-arista mb-4" />
                <h4 className="font-black text-arista-dark tracking-widest uppercase text-xs mb-2">Seguridad</h4>
                <p className="text-slate-500 text-sm font-medium">Encriptación de grado bancario para toda tu información comercial.</p>
              </div>
              <div>
                <Globe className="w-8 h-8 text-arista mb-4" />
                <h4 className="font-black text-arista-dark tracking-widest uppercase text-xs mb-2">Cloud Sync</h4>
                <p className="text-slate-500 text-sm font-medium">Accedé a tus presupuestos desde cualquier dispositivo con internet.</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-arista/5 blur-[100px] rounded-full"></div>
            <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 shadow-inner relative overflow-hidden">
              <div className="flex flex-col gap-6">
                <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
                <div className="h-2 bg-slate-200 rounded-full w-1/2"></div>
                <div className="h-2 bg-slate-200 rounded-full w-5/6"></div>
                <div className="flex justify-between items-center mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-50 bg-slate-200"></div>
                    ))}
                  </div>
                  <div className="px-4 py-2 bg-arista/10 rounded-full text-[10px] font-black text-arista uppercase tracking-widest">
                    Live Sync Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Technology;

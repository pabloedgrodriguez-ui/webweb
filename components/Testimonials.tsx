import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Dueño de Vidriería El Sol",
    content: "Arista Studio cambió por completo nuestra forma de trabajar. Antes tardábamos horas en optimizar cortes, ahora lo hacemos en segundos con desperdicio cero.",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    name: "Elena Martínez",
    role: "Gerente de Producción, AlumTech",
    content: "La precisión del módulo ALUM es impresionante. Los despieces de herrajes son exactos y nos ahorraron miles de pesos en errores de pedido.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    name: "Jorge Sánchez",
    role: "Carpintería de Aluminio Sánchez",
    content: "El soporte técnico es excelente y el software es muy intuitivo. Mis empleados aprendieron a usarlo en un solo día.",
    avatar: "https://picsum.photos/seed/jorge/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[1px] w-12 bg-arista"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-arista uppercase">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-arista-dark tracking-tighter leading-[0.9]"
          >
            CONFIANZA DE <br />
            <span className="text-arista">LÍDERES.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-arista text-arista" />
                ))}
              </div>
              <p className="text-xl text-slate-500 font-medium leading-tight mb-8 text-balance">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-black text-arista-dark text-xs tracking-widest uppercase">{t.name}</h4>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

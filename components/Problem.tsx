import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Clock, TrendingDown, FileWarning } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-arista-dark tracking-tight mb-4">
            Los problemas reales del taller
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Sabemos lo difícil que es gestionar una carpintería sin las herramientas adecuadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: "Desperdicio de Material", 
              desc: "Retales de aluminio y vidrios mal calculados que terminan en la basura, reduciendo tu ganancia.",
              icon: <TrendingDown className="w-6 h-6 text-red-500" />
            },
            { 
              title: "Errores de Presupuesto", 
              desc: "Cotizaciones manuales lentas y con errores que te hacen perder clientes o dinero por inflación.",
              icon: <AlertTriangle className="w-6 h-6 text-amber-500" />
            },
            { 
              title: "Caos en Pedidos", 
              desc: "Olvidos en herrajes o accesorios que frenan la producción y generan viajes innecesarios al proveedor.",
              icon: <FileWarning className="w-6 h-6 text-slate-400" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold text-arista-dark mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-arista-dark rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">La solución es ARISTASTUDIO</h3>
            <p className="text-arista-muted max-w-2xl mx-auto mb-8 text-lg">
              Digitalizamos la lógica de tu taller para que vos te enfoques en vender y fabricar, mientras el software se encarga de la ingeniería y los costos.
            </p>
            <div className="flex justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Precisión</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Rapidez</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">Rentabilidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
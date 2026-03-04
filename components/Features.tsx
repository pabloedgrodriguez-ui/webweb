import React from 'react';
import { motion } from 'motion/react';
import { FileText, BarChart3, Layers, Ruler, Package } from 'lucide-react';

const featuresData = [
  {
    title: "Presupuestos",
    desc: "Generación de presupuestos técnicos detallados con un solo clic. Profesionalismo y rapidez para tus clientes.",
    icon: <FileText className="w-6 h-6 text-arista" />
  },
  {
    title: "Auditoría de Costos",
    desc: "Control total sobre tus márgenes. Analiza costos en tiempo real y evita pérdidas por inflación.",
    icon: <BarChart3 className="w-6 h-6 text-arista" />
  },
  {
    title: "Optimización de Aluminio",
    desc: "Algoritmos avanzados para el máximo aprovechamiento de perfiles de 6m. Reduce el desperdicio al mínimo.",
    icon: <Layers className="w-6 h-6 text-arista" />
  },
  {
    title: "Optimización de Vidrios",
    desc: "Cálculo exacto de paños y descuentos. Planos de corte precisos para enviar directamente a fábrica.",
    icon: <Ruler className="w-6 h-6 text-arista" />
  },
  {
    title: "Pedido de Materiales",
    desc: "Listados automáticos de perfiles, herrajes y accesorios. Exportación a PDF lista para tus proveedores.",
    icon: <Package className="w-6 h-6 text-arista" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="solucion" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-arista-dark tracking-tight mb-4"
          >
            Todo lo que tu taller necesita
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Herramientas diseñadas específicamente para profesionales del aluminio y vidrio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-arista-dark mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
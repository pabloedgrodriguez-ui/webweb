import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "¿Cómo calcular los descuentos para construir una abertura de aluminio?",
      answer: "Los descuentos de corte varían según la línea (Módena, A30, Herrero) y los perfiles utilizados. Tradicionalmente, se calculan restando milímetros específicos al ancho y alto total para dar espacio a felpas, rodamientos y guías. Con Arista Studio, el cálculo de descuentos para construir una abertura de aluminio es 100% automático: ingresás las medidas finales del vano y el software calcula los cortes exactos al milímetro para evitar errores humanos."
    },
    {
      question: "¿Cómo construir una ventana de aluminio con Arista Studio?",
      answer: "Para construir una ventana de aluminio perfecta, el primer paso es tomar las medidas del vano. Luego, en la plataforma de Arista Studio, seleccionás el modelo de ventana de aluminio (corrediza, banderola, paño fijo, etc.) y colocás las medidas. El sistema procesará las holguras necesarias y te entregará la planilla de corte optimizada para que puedas ir directamente a la cortadora y ensamblar cada hoja de manera rápida y precisa."
    },
    {
      question: "¿Qué tipos de aberturas de aluminio puedo diseñar y presupuestar?",
      answer: "Nuestra plataforma es totalmente flexible y soporta una amplia variedad de aberturas de aluminio. Podés presupuestar y optimizar desde una ventana de aluminio corrediza común hasta una puerta de aluminio de alta gama con doble contacto, paños fijos, oscilobatientes, proyectantes, banderolas y puertas de abrir simples o dobles, adaptándose a las líneas de perfiles más utilizadas de Argentina (Aluar, MDT, Hydro, Flamia)."
    },
    {
      question: "¿Cómo funciona la optimización de perfiles de aluminio de 6 metros?",
      answer: "Una vez calculados los descuentos y las medidas de corte de tu ventana o puerta de aluminio, el algoritmo inteligente de Arista Studio analiza todas las piezas necesarias y las distribuye de forma óptima en barras comerciales de 6 metros. Esto te permite minimizar el desperdicio (retal) al mínimo absoluto, ahorrando hasta un 15% en la compra de materiales por cada obra."
    },
    {
      question: "¿El sistema calcula también los vidrios y los herrajes necesarios?",
      answer: "Sí, de manera totalmente integrada. Al definir las aberturas de aluminio, el software no solo aplica los descuentos para perfiles, sino que también determina las dimensiones exactas de los vidrios (simples o DVH) y genera la lista detallada de accesorios, burletes, escuadras y herrajes necesarios para el armado de cada módulo."
    }
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.4em] text-arista uppercase block mb-3">Soporte Técnico & SEO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-arista-dark tracking-tight mb-4">
            Preguntas Frecuentes sobre <span className="text-arista font-normal">Aberturas de Aluminio</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-sm sm:text-base">
            Resolvé tus dudas sobre cómo calcular descuentos, optimizar cortes y fabricar aberturas de aluminio de forma profesional con nuestro software.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-350 hover:bg-white hover:border-slate-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-arista border-arista/30' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic Trust Badge */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-arista" /> ¿Tenés otra consulta técnica sobre carpintería? Hablanos directamente por WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import ProductMockup from './ProductMockup';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-fade-in-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arista opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-arista"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Software líder en Argentina</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
          Transforma tu Vidriería: <br />
          Presupuestos al Instante y <br />
          <span className="text-arista relative">
             Cero Desperdicio
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-arista/30" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          El software diseñado para vidrieros argentinos que buscan eficiencia y rentabilidad. Dejá de perder plata en cortes mal calculados.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-arista hover:bg-arista-dark text-white font-black text-lg py-4 px-8 rounded-2xl shadow-xl shadow-arista/30 hover:shadow-2xl hover:shadow-arista/40 hover:-translate-y-1 transition-all uppercase tracking-wide"
          >
            Probar Demo Gratis
          </button>
          <a 
            href="https://wa.me/1234567890" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
            Contactar Ventas
          </a>
        </div>

        {/* Mockup Showcase */}
        <div className="relative max-w-5xl mx-auto">
          <ProductMockup className="animate-float" />
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 font-bold text-sm uppercase tracking-widest">
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> +500 Talleres</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> Soporte Local</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> Actualizado 2025</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
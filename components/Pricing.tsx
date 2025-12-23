import React from 'react';

interface PricingProps {
  onOpenDemo: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="precios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-arista font-bold tracking-widest uppercase mb-4 text-sm">Planes Simples</h2>
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            Inversión que se recupera sola
          </h3>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          {/* Monthly Plan */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Plan Mensual</h4>
            <p className="text-gray-500 text-sm mb-6">Para talleres que quieren flexibilidad.</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-gray-900">$35.000</span>
              <span className="text-gray-400 font-medium">/ mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Optimización de cortes', 'Presupuestos ilimitados', 'Base de datos de clientes', 'Soporte por email'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <i className="fa-solid fa-check text-arista"></i> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={onOpenDemo}
              className="w-full bg-white border-2 border-arista text-arista hover:bg-arista hover:text-white font-bold py-3 rounded-xl transition-colors uppercase tracking-wide"
            >
              Probar Demo Gratis
            </button>
          </div>

          {/* Annual Plan */}
          <div className="bg-arista p-8 rounded-3xl shadow-2xl shadow-arista/30 transform md:scale-105 relative border border-arista-light">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
              Más Popular
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Plan Anual</h4>
            <p className="text-blue-100 text-sm mb-6">Ahorrá y olvidate de los aumentos.</p>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-black text-white">$320.000</span>
              <span className="text-blue-100 font-medium">/ año</span>
            </div>
            <div className="text-sm font-bold text-yellow-300 mb-8 bg-white/10 inline-block px-2 py-1 rounded">
              Ahorrás $100.000 al año
            </div>
            <ul className="space-y-4 mb-8">
              {['Todo lo del plan mensual', 'Soporte prioritario WhatsApp', 'Configuración inicial asistida', 'Capacitación para empleados', 'Actualizaciones anticipadas'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white font-medium">
                  <div className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                     <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={onOpenDemo}
              className="w-full bg-white text-arista hover:bg-gray-50 font-black py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-wide"
            >
              Empezar Ahora
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
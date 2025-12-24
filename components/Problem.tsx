import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problema" className="bg-dark-900 py-24 text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-arista font-bold tracking-widest uppercase mb-4 text-sm">El Costo Oculto</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Tu Taller Podría Estar Perdiendo Dinero. <span className="text-gray-500">Y Mucho.</span>
          </h3>
          <p className="text-gray-400 text-lg">
            Seguir trabajando con lápiz y papel o Excel básico en 2025 es la forma más rápida de perder rentabilidad frente a la competencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-dark-800 p-8 rounded-2xl border border-gray-800 hover:border-arista/50 transition-colors group">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-scissors text-2xl text-red-500"></i>
            </div>
            <h4 className="text-xl font-bold mb-3">Desperdicio de Material</h4>
            <p className="text-gray-400 leading-relaxed">
              Cortes mal optimizados que terminan en el tacho de basura. Cada pedazo de vidrio tirado es plata quemada.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-dark-800 p-8 rounded-2xl border border-gray-800 hover:border-arista/50 transition-colors group">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-calculator text-2xl text-orange-500"></i>
            </div>
            <h4 className="text-xl font-bold mb-3">Cálculos Lentos</h4>
            <p className="text-gray-400 leading-relaxed">
              Horas perdidas calculando presupuestos a mano. Errores humanos que cuestan caro al momento de cobrar.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-dark-800 p-8 rounded-2xl border border-gray-800 hover:border-arista/50 transition-colors group">
            <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-folder-open text-2xl text-yellow-500"></i>
            </div>
            <h4 className="text-xl font-bold mb-3">Desorden de Pedidos</h4>
            <p className="text-gray-400 leading-relaxed">
              Papeles perdidos, medidas confusas y clientes enojados por demoras o errores en la entrega.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-arista/20 to-transparent p-1 rounded-2xl">
          <div className="bg-dark-900 rounded-xl p-8 md:p-12 text-center border border-arista/30">
            <p className="text-2xl md:text-3xl font-bold text-white italic">
              "Arista Studio se paga solo con lo que ahorrás en desperdicio de material el primer mes."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;
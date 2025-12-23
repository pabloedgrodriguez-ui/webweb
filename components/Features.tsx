import React from 'react';
import { OptimizationMockup, BudgetMockup, MaterialsOrderMockup, ConfigMockup } from './FeatureMockups';

const featuresData = [
  {
    title: "Optimización de Planchas",
    desc: "Nuestro algoritmo inteligente acomoda los cortes para aprovechar al máximo cada plancha de vidrio. Reducí el desperdicio hasta un 30%.",
    icon: "fa-object-group",
    mockup: <OptimizationMockup />
  },
  {
    title: "Presupuestos Instantáneos",
    desc: "Generá presupuestos profesionales en PDF en segundos. Enviáselos a tus clientes por WhatsApp directamente desde la app.",
    icon: "fa-file-invoice-dollar",
    mockup: <BudgetMockup />
  },
  {
    title: "Pedido de Materiales",
    desc: "Controlá tu stock y generá órdenes de compra automáticas para tus proveedores cuando el material esté bajo.",
    icon: "fa-box-open",
    mockup: <MaterialsOrderMockup />
  },
  {
    title: "Totalmente Configurable",
    desc: "Ajustá precios de dólar, márgenes de ganancia, desperdicio base y costos de mano de obra a tu medida.",
    icon: "fa-cog",
    mockup: <ConfigMockup />
  }
];

const Features: React.FC = () => {
  return (
    <section id="solucion" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-arista font-bold tracking-widest uppercase mb-4 text-sm">La Solución Definitiva</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            El Futuro de tu Vidriería, Hoy.
          </h3>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Menos Errores, Más Ganancias. Simple.
          </p>
        </div>

        <div className="space-y-24">
          {featuresData.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-arista/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fa-solid ${feature.icon} text-3xl text-arista`}></i>
                </div>
                <h4 className="text-3xl font-black text-gray-900">{feature.title}</h4>
                <p className="text-lg text-gray-500 leading-relaxed">{feature.desc}</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <i className="fa-solid fa-check-circle text-green-500"></i> Ahorro inmediato de tiempo
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <i className="fa-solid fa-check-circle text-green-500"></i> Mayor profesionalismo
                  </li>
                </ul>
                <div className="pt-4">
                  <a href="#" className="text-arista font-bold uppercase tracking-wider text-sm hover:underline">Descubrir más <i className="fa-solid fa-arrow-right ml-1"></i></a>
                </div>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                {feature.mockup}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
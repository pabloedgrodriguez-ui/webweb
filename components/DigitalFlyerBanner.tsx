import React from 'react';
import { Globe, Share2, Megaphone, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface DigitalFlyerBannerProps {
  onNavigateToDigital: () => void;
}

const DigitalFlyerBanner: React.FC<DigitalFlyerBannerProps> = ({ onNavigateToDigital }) => {
  return (
    <section id="digital-flyer" className="py-16 bg-slate-900 relative overflow-hidden text-white my-12">
      {/* Subtle background glow decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-arista/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Column: Text & Features */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-arista/15 border border-arista/30 text-arista text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                NUEVO SERVICIO PARA CARPINTERÍAS
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Llevá tu carpintería al siguiente nivel con <span className="text-transparent bg-clip-text bg-gradient-to-r from-arista via-amber-400 to-orange-400">ARISTA DIGITAL</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                Además de nuestro software técnico, creamos tu <strong>Sitio Web profesional</strong>, gestionamos tus <strong>Redes Sociales</strong> y lanzamos <strong>Campañas de Anuncios</strong> para conseguir clientes diarios que buscan aberturas en tu zona.
              </p>

              {/* Service Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="p-2 rounded-lg bg-arista/20 text-arista">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Sitios Web & Catálogos</h4>
                    <p className="text-[11px] text-slate-400">Presencia profesional en Google</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Redes Sociales</h4>
                    <p className="text-[11px] text-slate-400">Instagram & Facebook activo</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Anuncios & Publicidad</h4>
                    <p className="text-[11px] text-slate-400">Consultas directas a WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onNavigateToDigital}
                  className="bg-arista hover:bg-arista/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-arista/25 group cursor-pointer"
                >
                  <span>Conocer Arista Digital</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Asesoramiento gratuito inicial
                </span>
              </div>
            </div>

            {/* Right Column: Visual Flyer Card */}
            <div className="w-full lg:w-80 flex-shrink-0 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 text-center relative shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-arista to-amber-500 text-slate-950 flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg">
                AD
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Agencia Digital Especializada
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Diseñada exclusivamente para talleres de aberturas, vidrierías y distribuidores de aluminio.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 text-left space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Posicionamiento:</span>
                  <span className="text-emerald-400 font-bold">100% Local</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Enfoque:</span>
                  <span className="text-arista font-bold">Aberturas de Aluminio</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Resultados:</span>
                  <span className="text-white font-bold">Presupuestos Diarios</span>
                </div>
              </div>

              <button
                onClick={onNavigateToDigital}
                className="w-full py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Ver Planes & Servicios
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalFlyerBanner;

import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, ShieldCheck, Award } from 'lucide-react';

interface PricingProps {
  onOpenDemo: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenDemo }) => {
  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-arista-dark tracking-tight mb-4">
            Planes que se pagan solos
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Inversión inteligente para potenciar tu producción. Elegí la opción perfecta para tu taller.
          </p>
        </div>

        {/* Banner de Prueba de 7 Días Gratis */}
        <div className="mb-16 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-sm">
          <div className="space-y-3 text-center md:text-left">
            <span className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              PRUEBA SIN CARGO
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-arista-dark tracking-tight">
              ¡Probá Arista Gratis por 7 Días!
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
              Acceso completo y 100% funcional a todas las herramientas: optimización de cortes de perfiles de 6m, presupuestador técnico, y generador de PDF. Sin compromisos ni pagos inmediatos.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-8 py-5 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
          >
            Comenzar Prueba Gratis
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mensual */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-arista-dark mb-2">Mensual</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-arista-dark">$36</span>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">USD / MES</span>
            </div>
            <p className="text-slate-500 text-sm mb-8 flex-1">
              Ideal para talleres que están empezando a digitalizarse.
            </p>
            <button 
              onClick={onOpenDemo}
              className="w-full py-3 px-6 rounded-lg border-2 border-slate-100 text-arista-dark font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors"
            >
              Elegir Mensual
            </button>
          </div>

          {/* Semestral */}
          <div className="bg-white p-8 rounded-2xl border-2 border-arista shadow-xl flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-arista text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Ahorro 5%
            </div>
            <h3 className="text-lg font-bold text-arista-dark mb-2">Semestral</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-arista-dark">$205</span>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">USD / 6 MESES</span>
            </div>
            <p className="text-slate-500 text-sm mb-8 flex-1">
              La opción más equilibrada para el crecimiento constante.
            </p>
            <button 
              onClick={onOpenDemo}
              className="w-full py-3 px-6 rounded-lg bg-arista text-white font-bold text-sm uppercase tracking-widest hover:bg-arista-dark transition-colors shadow-lg shadow-arista/20"
            >
              Elegir Semestral
            </button>
          </div>

          {/* Anual */}
          <div className="bg-arista-dark p-8 rounded-2xl shadow-sm flex flex-col relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Ahorro 10%
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Anual</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">$388</span>
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">USD / AÑO</span>
            </div>
            <p className="text-slate-300 text-sm mb-8 flex-1">
              Máximo compromiso con la eficiencia y el ahorro.
            </p>
            <button 
              onClick={onOpenDemo}
              className="w-full py-3 px-6 rounded-lg bg-white text-arista-dark font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-colors"
            >
              Elegir Anual
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
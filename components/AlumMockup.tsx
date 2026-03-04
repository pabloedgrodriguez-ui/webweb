import React from 'react';
import { Calculator, Briefcase, History, Hammer, Database, Settings, Cloud, Hash, Ruler, Layers, ChevronDown, Maximize2, Moon } from 'lucide-react';

const AlumMockup: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] overflow-hidden border border-slate-200 flex flex-col font-sans text-slate-800">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="flex items-baseline">
                <span className="text-arista-dark font-extrabold text-sm tracking-tighter drop-shadow-[0.5px_0.5px_0px_rgba(251,146,60,0.5)]">ARISTA</span>
                <span className="text-arista font-light text-sm tracking-tighter">ESTUDIO</span>
                <span className="text-arista-muted font-bold text-[8px] tracking-widest ml-1">ALUM</span>
             </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
              <Moon className="w-3 h-3" />
           </div>
           <div className="text-right">
              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">P. ALU</div>
              <div className="text-xs font-black text-arista">$12000.00</div>
           </div>
           <div className="text-right">
              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">MARGEN</div>
              <div className="text-xs font-black text-accent-blue">+15%</div>
           </div>
        </div>
      </div>

      <div className="flex h-[500px] bg-slate-50/50">
        {/* Sidebar */}
        <div className="w-16 bg-white border-r border-slate-100 flex flex-col items-center py-6 gap-6">
          <div className="w-10 h-10 bg-arista text-white rounded-xl shadow-lg shadow-arista/20 flex items-center justify-center cursor-pointer">
            <Calculator className="w-5 h-5" />
          </div>
          {[Briefcase, History, Hammer, Database, Settings].map((Icon, idx) => (
            <div key={idx} className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-arista transition-colors cursor-pointer">
              <Icon className="w-5 h-5" />
            </div>
          ))}
          <div className="mt-auto mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
              <Cloud className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="w-72 bg-white border-r border-slate-100 p-6 overflow-y-auto no-scrollbar">
           <div className="space-y-6">
              <div className="flex items-center gap-2 text-arista mb-4">
                <Maximize2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Parámetros de Conjunto</span>
              </div>

              <div>
                 <label className="text-[8px] font-black text-arista uppercase tracking-widest mb-2 block flex items-center gap-2">
                    <Hash className="w-3 h-3" /> Código de Abertura
                 </label>
                 <div className="w-full bg-[#f0f2ff] border border-arista/10 rounded-xl px-4 py-3 text-arista font-bold text-xs">
                    EJ: V1-ESTAR
                 </div>
              </div>

              <div className="bg-slate-50/50 border border-slate-100 rounded-xl p-4">
                <label className="text-[8px] font-black text-arista uppercase tracking-widest mb-3 block flex items-center gap-2">
                  <Settings className="w-3 h-3" /> Estilo de Contravidrio
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 bg-arista text-white text-[10px] font-black py-2 rounded-lg text-center">RECTO</div>
                  <div className="flex-1 bg-white border border-slate-100 text-slate-300 text-[10px] font-black py-2 rounded-lg text-center">CURVO</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="text-[8px] font-black text-arista uppercase tracking-widest mb-2 block flex items-center gap-2">
                       <Ruler className="w-3 h-3" /> Ancho Total
                    </label>
                    <div className="bg-[#f0f2ff] border border-arista/10 rounded-xl px-3 py-2.5 text-slate-800 font-bold text-xs">
                       1850
                    </div>
                 </div>
                 <div>
                    <label className="text-[8px] font-black text-arista uppercase tracking-widest mb-2 block flex items-center gap-2">
                       <Ruler className="w-3 h-3 rotate-90" /> Alto Total
                    </label>
                    <div className="bg-[#f0f2ff] border border-arista/10 rounded-xl px-3 py-2.5 text-slate-800 font-bold text-xs">
                       2200
                    </div>
                 </div>
              </div>

              <div className="pt-4 border-t border-slate-50">
                 <div className="flex items-center justify-between mb-4">
                    <span className="text-[8px] font-black text-arista uppercase tracking-widest">Ingeniería de Extras</span>
                 </div>
                 <div className="space-y-3">
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] font-black text-arista uppercase tracking-widest">Mosquitero Perimetral</span>
                       <div className="w-8 h-4 bg-slate-200 rounded-full relative">
                          <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-[8px] font-black text-arista uppercase tracking-widest">Sistema de Tapajuntas</span>
                       <div className="w-8 h-4 bg-arista-dark rounded-full relative border border-arista-dark">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Visualizer Area */}
        <div className="flex-1 bg-white flex items-center justify-center p-12">
           <div className="w-full max-w-lg aspect-video bg-white rounded-3xl border border-slate-100 shadow-inner flex items-center justify-center relative">
              {/* Window Drawing from Screenshot */}
              <div className="flex items-end gap-0">
                <div className="w-24 h-64 border-4 border-slate-700 bg-blue-50/40 relative">
                  <div className="absolute inset-2 border border-slate-300 bg-gradient-to-br from-blue-100/20 to-white/10"></div>
                </div>
                <div className="w-40 h-40 border-4 border-slate-700 bg-blue-50/40 relative">
                  <div className="absolute inset-2 border border-slate-300 bg-gradient-to-br from-blue-100/20 to-white/10 flex">
                    <div className="flex-1 border-r border-slate-200"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AlumMockup;

import React from 'react';

interface ProductMockupProps {
  customImage?: string;
  className?: string;
}

const ProductMockup: React.FC<ProductMockupProps> = ({ customImage, className = "" }) => {
  // Si hay una imagen generada por IA, la mostramos.
  if (customImage) {
    return (
      <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white ${className}`}>
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 flex-1 text-center font-mono">
            app.aristastudio.com/presupuestador
          </div>
        </div>
        <div className="relative aspect-video bg-gray-50 overflow-hidden">
          <img src={customImage} className="w-full h-full object-cover" alt="AI Generated" />
        </div>
      </div>
    );
  }

  // Si no, mostramos la recreación EXACTA de la interfaz en HTML/CSS
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white ${className}`}>
      {/* Barra del Navegador */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2 select-none">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 flex-1 text-center font-mono overflow-hidden text-ellipsis whitespace-nowrap">
          app.aristastudio.com/presupuestador
        </div>
      </div>

      {/* Contenido Principal (Recreación Pixel-Perfect) */}
      <div className="relative aspect-video bg-white overflow-hidden text-left flex font-sans">
        
        {/* Sidebar */}
        <div className="w-16 md:w-64 border-r border-gray-100 flex flex-col py-6 md:py-8 bg-white flex-shrink-0 hidden sm:flex">
            <div className="px-2 md:px-8 mb-8 md:mb-12 flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0090FF] rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                  <span className="text-white font-black text-lg md:text-xl">A</span>
              </div>
              <div className="leading-none flex-col justify-center hidden md:flex">
                  <span className="font-black text-gray-900 tracking-tight text-xl block">ARISTA</span>
                  <span className="text-[#0090FF] font-bold text-[10px] tracking-[0.25em] block uppercase">ESTUDIO</span>
              </div>
            </div>
            
            <div className="space-y-2 px-2 md:px-6">
              <div className="flex items-center gap-4 px-3 md:px-4 py-3 bg-blue-50 text-[#0090FF] rounded-xl font-bold text-sm">
                  <i className="fa-solid fa-border-all text-lg"></i>
                  <span className="hidden md:inline">Presupuestador</span>
              </div>
              <div className="flex items-center gap-4 px-3 md:px-4 py-3 text-gray-400 hover:text-gray-600 rounded-xl font-bold text-sm transition-colors cursor-pointer">
                  <i className="fa-solid fa-cog text-lg"></i>
                  <span className="hidden md:inline">Configuración</span>
              </div>
            </div>

            <div className="mt-auto px-2 md:px-6">
                <div className="flex items-center gap-4 px-3 md:px-4 py-3 text-gray-400 hover:text-gray-600 rounded-xl font-bold text-sm transition-colors cursor-pointer">
                <i className="fa-solid fa-arrow-right-from-bracket text-lg"></i>
                <span className="hidden md:inline">Salir</span>
            </div>
            </div>
        </div>

        {/* Main Canvas */}
        <div className="flex-1 bg-white p-6 md:p-8 lg:p-10 overflow-y-auto no-scrollbar">
            
            {/* Top Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Nuevo <br className="hidden md:block"/> Presupuesto</h2>
                    <p className="text-gray-400 text-xs md:text-sm font-medium">Generación de documentación técnica y <br className="hidden md:block"/> comercial</p>
                </div>
                
                <div className="flex flex-col items-end gap-3 w-full lg:w-auto">
                    <div className="flex gap-2 md:gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                        <button className="bg-[#0090FF] text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-[10px] md:text-xs font-bold shadow-xl shadow-blue-500/20 flex items-center gap-2 whitespace-nowrap">
                            <i className="fa-solid fa-file-invoice"></i> PRESUPUESTO
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-500 px-4 md:px-6 py-2 md:py-3 rounded-xl text-[10px] md:text-xs font-bold whitespace-nowrap">
                            <i className="fa-solid fa-clipboard-list"></i> PEDIDO
                        </button>
                        <button className="bg-white border border-gray-200 text-gray-500 px-4 md:px-6 py-2 md:py-3 rounded-xl text-[10px] md:text-xs font-bold whitespace-nowrap hidden xl:flex items-center gap-2">
                            <i className="fa-solid fa-ruler-combined"></i> PERFILES
                        </button>
                         <button className="bg-white border border-gray-200 text-gray-500 px-4 md:px-6 py-2 md:py-3 rounded-xl text-[10px] md:text-xs font-bold whitespace-nowrap hidden xl:flex items-center gap-2">
                            <i className="fa-solid fa-layer-group"></i> VIDRIOS
                        </button>
                    </div>
                    <button className="text-gray-300 hover:text-red-400 text-[10px] font-bold border border-gray-100 bg-white px-4 py-1.5 rounded-lg transition-colors hidden lg:block">
                        Limpiar
                    </button>
                </div>
            </div>

            {/* Content Columns */}
            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 h-full">
                
                {/* Left Column (Inputs) */}
                <div className="w-full xl:w-5/12 flex flex-col gap-6">
                    {/* Client Box */}
                    <div className="border border-gray-100 rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <label className="text-[10px] font-bold text-gray-300 tracking-[0.2em] uppercase mb-4 block">CLIENTE</label>
                        <div className="bg-gray-50/80 rounded-xl p-4 text-gray-800 font-bold text-base md:text-lg flex items-center justify-between border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                            Señor Cliente
                            <i className="fa-solid fa-chevron-down text-gray-300 text-xs"></i>
                        </div>
                    </div>

                     {/* Product Selection */}
                     <div className="border border-gray-100 rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 min-h-[200px]">
                        <label className="text-[10px] font-bold text-[#0090FF] tracking-[0.2em] uppercase mb-6 flex items-center gap-2 cursor-pointer">
                            <i className="fa-solid fa-circle-plus"></i> AGREGAR PRODUCTO
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                            {['MAMPARA', 'PUERTA', 'VIDRIERA', 'DVH', 'VIDRIO'].map(item => (
                                <button key={item} className="bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 font-bold text-[9px] md:text-[10px] py-3 md:py-4 rounded-xl transition-colors tracking-wide border border-transparent hover:border-gray-200">
                                    {item}
                                </button>
                            ))}
                             <button className="bg-white border-2 border-[#0090FF] text-[#0090FF] font-bold text-[9px] md:text-[10px] py-3 md:py-4 rounded-xl shadow-lg shadow-blue-500/10 tracking-wide">
                                ESPEJO
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column (Summary) */}
                <div className="w-full xl:w-7/12 border border-gray-100 rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <label className="text-[10px] font-bold text-gray-300 tracking-[0.2em] uppercase">RESUMEN DE PARTIDA</label>
                        <span className="bg-gray-50 border border-gray-100 text-gray-400 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">3 Items</span>
                    </div>

                    <div className="space-y-4">
                        {/* Item 1 */}
                        <div className="border border-gray-100 rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white relative z-10">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-50 text-gray-300 font-bold flex items-center justify-center text-xs md:text-sm">
                                01
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm md:text-base font-black text-gray-800 mb-0.5 truncate">Vidriera</div>
                                <div className="text-xs md:text-sm font-bold text-gray-500 truncate">Laminado 4+4</div>
                                <div className="text-[9px] md:text-[10px] text-gray-300 mt-1.5 font-mono tracking-wide uppercase truncate">3099X2300MM • QTY: 1</div>
                            </div>
                            <div className="text-right flex items-center gap-4 md:gap-6">
                                {/* BLURRED PRICE */}
                                <div className="text-base md:text-xl font-black text-gray-900 tracking-tight blur-[4px] select-none opacity-60">$947.845,03</div>
                                <button className="w-8 h-8 flex items-center justify-center text-gray-200 hover:text-red-400 transition-colors">
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>

                        {/* Item 2 (Cutoff effect) */}
                        <div className="border border-gray-100 rounded-2xl p-4 md:p-6 flex items-center gap-4 md:gap-6 opacity-40 blur-[1px]">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gray-50 text-gray-300 font-bold flex items-center justify-center text-xs md:text-sm">
                                02
                            </div>
                            <div className="flex-1">
                                <div className="text-sm md:text-base font-black text-gray-800 mb-1">Vidriera</div>
                                <div className="text-xs md:text-sm font-bold text-gray-500">DVH 4/9/4</div>
                            </div>
                            <div className="text-right">
                                 {/* BLURRED PRICE */}
                                <div className="text-base md:text-xl font-black text-gray-900 tracking-tight blur-[4px] select-none opacity-60">$420...</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Fade overlay bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductMockup;
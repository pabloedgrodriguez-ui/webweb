import React from 'react';

// Wrapper for consistent mockup styling
const MockupContainer: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
    <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
      </div>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
    </div>
    <div className="p-4 bg-gradient-to-br from-white to-gray-50 h-64 flex items-center justify-center relative overflow-hidden">
      {children}
    </div>
  </div>
);

export const OptimizationMockup: React.FC = () => (
  <MockupContainer title="Optimizador de Corte">
    <div className="w-full h-full bg-white flex flex-col p-3 text-[8px] sm:text-[10px] font-sans shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-end mb-2">
        <div>
           <h3 className="font-bold text-gray-900 text-xs sm:text-sm uppercase leading-tight">OPTIMIZACIÓN DE PLANCHAS (VIDRIOS)</h3>
           <p className="text-gray-500 text-[8px] mt-0.5">Cliente: Señor Cliente | Fecha: 21/12/2025</p>
        </div>
        <div className="flex gap-3">
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#3b82f6]"></div><span className="text-gray-600 text-[9px]">Corte</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-200 border border-gray-300"></div><span className="text-gray-600 text-[9px]">Sobrante</span></div>
        </div>
      </div>

      {/* Sheet Info Bar */}
      <div className="bg-white border border-gray-300 py-1.5 px-2 flex justify-between mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.05)] items-center">
         <span className="font-bold text-gray-800 text-[9px]">Laminado 4+4 - Plancha #1</span>
         <span className="text-gray-500 text-[8px] hidden sm:inline">Plancha: 2500x3600mm | Cortes: 1 | Desperdicio: 20.8%</span>
         <span className="text-gray-500 text-[8px] sm:hidden">Desp: 20.8%</span>
      </div>

      {/* Visualizer Area */}
      <div className="flex-1 flex justify-center items-start pt-1 relative min-h-0">
          
          {/* Top Label */}
          <div className="absolute -top-1 text-gray-500 text-[8px]">2500mm</div>
          
          {/* Side Label (Vertical) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-gray-500 text-[8px] origin-center whitespace-nowrap">3600mm</div>

          {/* The Sheet (Gray background represents 'Sobrante') */}
          <div className="relative bg-gray-200 border border-gray-400" style={{ height: '85%', aspectRatio: '2500/3600' }}>
             
             {/* The Cut (Blue background represents 'Corte') */}
             {/* Dimensions approximate: 2300/2500 width (~92%), 3099/3600 height (~86%) */}
             <div className="absolute top-0 left-0 bg-[#3b82f6] flex items-center justify-center text-white text-center leading-tight hover:bg-blue-500 transition-colors cursor-default" style={{ width: '92%', height: '86%' }}>
                <div>
                   <div className="font-bold text-[9px]">#01</div>
                   <div className="text-[7px] opacity-90">R: 2300x3099</div>
                </div>
             </div>
          </div>
      </div>
    </div>
  </MockupContainer>
);

export const BudgetMockup: React.FC = () => (
  <MockupContainer title="Presupuesto PDF">
    <div className="w-full h-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] mx-auto flex flex-col p-6 overflow-hidden relative text-gray-800 font-sans">
        
        {/* PDF Header */}
        <div className="flex justify-between items-start mb-6">
            {/* Logo area */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                     {/* Abstract Icon similar to image */}
                     <svg viewBox="0 0 40 40" className="w-full h-full text-[#0090FF]">
                        <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" fillOpacity="0.8"/>
                        <path d="M20 5L35 20L20 35L5 20Z" fill="white"/>
                        <path d="M20 12L28 20L20 28L12 20Z" fill="currentColor"/>
                     </svg>
                </div>
                <div className="leading-none">
                    <div className="font-black text-[#005c8f] text-[10px] tracking-wide">ARISTA</div>
                    <div className="font-bold text-[#0090FF] text-[8px] tracking-widest">ESTUDIO</div>
                </div>
            </div>

            {/* Center Title */}
            <div className="text-center absolute left-1/2 transform -translate-x-1/2 top-5">
                <div className="font-bold text-gray-900 text-sm tracking-tight mb-0.5">ARISTA STUDIO</div>
                <div className="text-gray-500 text-[6px] tracking-wide">Soluciones en Vidrio</div>
            </div>

            {/* Date */}
            <div className="text-[8px] font-bold text-gray-600 pt-1">21/12/2025</div>
        </div>

        {/* Client Info */}
        <div className="mb-4 text-[8px] flex items-center gap-6 pl-1">
            <span className="font-bold text-gray-800">Cliente:</span>
            <span className="text-gray-500">Señor Cliente</span>
        </div>

        {/* PDF Table */}
        <div className="w-full mb-2">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-[#60a5fa] text-white text-[7px] font-bold py-1.5 px-2">
                <div className="col-span-1">Cód.</div>
                <div className="col-span-5 text-center">Descripción</div>
                <div className="col-span-1 text-center">Cant.</div>
                <div className="col-span-3 text-center">Medidas</div>
                <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-12 text-[7px] border-b border-gray-100 py-1.5 px-2 items-center bg-gray-50/50">
                <div className="col-span-1 font-bold text-gray-700">#01</div>
                <div className="col-span-5 text-gray-700 leading-tight">
                    Vidriera Laminado 4+4 <br/>
                    <span className="text-gray-400 text-[6px]">Perfil Blanco (2 tiras de 6m)</span>
                </div>
                <div className="col-span-1 text-center text-gray-600">1</div>
                <div className="col-span-3 text-center text-gray-600">3099 x 2300 mm</div>
                <div className="col-span-2 text-right font-medium text-gray-800">$947.845,03</div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 text-[7px] border-b border-gray-100 py-1.5 px-2 items-center">
                <div className="col-span-1 font-bold text-gray-700">#02</div>
                <div className="col-span-5 text-gray-700 leading-tight">
                    Vidriera Laminado 4+4 <br/>
                    <span className="text-gray-400 text-[6px]">Perfil Blanco (2 tiras de 6m)</span>
                </div>
                <div className="col-span-1 text-center text-gray-600">1</div>
                <div className="col-span-3 text-center text-gray-600">3099 x 2300 mm</div>
                <div className="col-span-2 text-right font-medium text-gray-800">$947.845,03</div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 text-[7px] border-b border-gray-100 py-1.5 px-2 items-center bg-gray-50/50">
                <div className="col-span-1 font-bold text-gray-700">#03</div>
                <div className="col-span-5 text-gray-700 leading-tight">
                    Puerta con Zócalón <br/>
                    <span className="text-gray-400 text-[6px] block truncate">Incluye: Freno de Piso, Cerradura, Barrales...</span>
                </div>
                <div className="col-span-1 text-center text-gray-600">1</div>
                <div className="col-span-3 text-center text-gray-600">900 x 2300 mm</div>
                <div className="col-span-2 text-right font-medium text-gray-800">$908.730,76</div>
            </div>
        </div>

        {/* Total Block */}
        <div className="mt-auto flex justify-end">
            <div className="bg-[#60a5fa] text-white px-6 py-2 flex gap-8 items-center min-w-[180px] justify-between">
                <span className="font-bold text-[8px] uppercase">TOTAL:</span>
                <span className="font-bold text-[9px]">$2.804.420,82</span>
            </div>
        </div>

    </div>
  </MockupContainer>
);

export const MaterialsOrderMockup: React.FC = () => (
  <MockupContainer title="Orden de Materiales">
    <div className="w-full h-full bg-white flex flex-col p-4 overflow-y-auto font-sans text-gray-800 shadow-sm border border-gray-100 scrollbar-hide">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-2">
         {/* Logo Placeholder */}
         <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-arista rounded flex items-center justify-center">
                 <span className="text-white font-bold text-[8px]">A</span>
            </div>
            <div className="leading-none">
                 <div className="text-arista font-bold text-[8px]">ARISTA</div>
                 <div className="text-gray-400 text-[6px]">ESTUDIO</div>
            </div>
         </div>

         <div className="text-center">
            <h3 className="font-bold text-gray-900 text-xs uppercase tracking-tight">ORDEN DE MATERIALES</h3>
            <p className="text-gray-500 text-[8px]">Lista consolidada de compra y corte</p>
         </div>

         <div className="text-right">
            <p className="text-[8px] text-gray-600 font-medium">Fecha: 21/12/2025</p>
            <p className="text-[8px] text-gray-600">Ref: Señor Cliente</p>
         </div>
      </div>

      <div className="space-y-4">
        
        {/* Section 1: Vidrios */}
        <div>
            <div className="bg-gray-200 px-2 py-1 mb-0.5">
                <h4 className="font-bold text-gray-800 text-[9px]">1. VIDRIOS (Cortes)</h4>
            </div>
            <table className="w-full text-[8px]">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-2 py-1 text-left font-medium w-1/6">Cant</th>
                        <th className="px-2 py-1 text-left font-medium w-2/6">Medidas (mm)</th>
                        <th className="px-2 py-1 text-left font-medium w-3/6">Tipo de Vidrio</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr>
                        <td className="px-2 py-1.5">2</td>
                        <td className="px-2 py-1.5">3099 x 2300</td>
                        <td className="px-2 py-1.5">Laminado 4+4</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1.5">1</td>
                        <td className="px-2 py-1.5">890 x 2171</td>
                        <td className="px-2 py-1.5">Laminado 4+4</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Section 2: Perfiles */}
        <div>
            <div className="bg-gray-200 px-2 py-1 mb-0.5">
                <h4 className="font-bold text-gray-800 text-[9px]">2. PERFILES DE ALUMINIO</h4>
            </div>
            <table className="w-full text-[8px]">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-2 py-1 text-left font-medium w-2/6">Material</th>
                        <th className="px-2 py-1 text-left font-medium w-2/6">Consumo Total</th>
                        <th className="px-2 py-1 text-left font-medium w-2/6">Barras Comerciales</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr>
                        <td className="px-2 py-1.5">Perfil U Blanco</td>
                        <td className="px-2 py-1.5">21.60 m</td>
                        <td className="px-2 py-1.5">4 (6m)</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1.5">Perfil Zócalo (Puerta)</td>
                        <td className="px-2 py-1.5">1.78 m</td>
                        <td className="px-2 py-1.5">1 (6m)</td>
                    </tr>
                     <tr>
                        <td className="px-2 py-1.5">Tubo Barral (Puerta)</td>
                        <td className="px-2 py-1.5">4.60 m</td>
                        <td className="px-2 py-1.5">1 (6m)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Section 3: Herrajes */}
        <div>
            <div className="bg-gray-200 px-2 py-1 mb-0.5">
                <h4 className="font-bold text-gray-800 text-[9px]">3. HERRAJES E INSUMOS</h4>
            </div>
            <table className="w-full text-[8px]">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-2 py-1 text-left font-medium w-1/6">Cant.</th>
                        <th className="px-2 py-1 text-left font-medium w-5/6">Detalle</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr>
                        <td className="px-2 py-1.5">1</td>
                        <td className="px-2 py-1.5">Pivot Superior</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1.5">1</td>
                        <td className="px-2 py-1.5">Freno de Piso (Caja)</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-1.5">1</td>
                        <td className="px-2 py-1.5">Cerradura</td>
                    </tr>
                     <tr>
                        <td className="px-2 py-1.5">4</td>
                        <td className="px-2 py-1.5">Soportes Barral</td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
    </div>
  </MockupContainer>
);

export const ConfigMockup: React.FC = () => (
  <MockupContainer title="Panel Configuración">
    <div className="w-full h-full bg-white flex flex-col font-sans relative">
      <div className="flex h-full">
        {/* Sidebar Mini */}
        <div className="w-14 border-r border-gray-100 flex flex-col pt-4 gap-2 hidden sm:flex items-center">
             <div className="w-8 h-8 bg-arista rounded-lg flex items-center justify-center text-white font-black text-xs mb-2">A</div>
             <div className="w-8 h-8 text-gray-300 flex items-center justify-center"><i className="fa-solid fa-border-all text-[10px]"></i></div>
             <div className="w-full py-2 bg-blue-50 border-r-2 border-blue-500 flex justify-center text-blue-500"><i className="fa-solid fa-cog text-[10px]"></i></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-50/50 p-4 overflow-y-auto overflow-x-hidden no-scrollbar">
            
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-arista rounded flex items-center justify-center text-white font-bold text-[8px]">A</div>
                <span className="font-bold text-gray-800 text-xs tracking-tight">ARISTA<span className="text-arista">ESTUDIO</span></span>
            </div>

            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
                {/* Company Settings */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex gap-3">
                        <div className="w-16 h-16 border border-gray-100 rounded-lg flex items-center justify-center p-1 bg-white shadow-sm">
                             <div className="leading-none text-center">
                                 <div className="w-4 h-4 mx-auto bg-arista rounded-sm flex items-center justify-center mb-0.5"><span className="text-white text-[6px] font-bold">A</span></div>
                                 <div className="text-[5px] font-bold text-[#005c8f]">ARISTA<br/><span className="text-arista">ESTUDIO</span></div>
                             </div>
                        </div>
                        <div className="flex-1 space-y-2">
                             <button className="w-full bg-white border border-gray-200 rounded-lg py-1.5 text-[8px] font-bold text-gray-500 flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
                                 <i className="fa-solid fa-upload"></i> SUBIR LOGO
                             </button>
                             <div>
                                 <label className="text-[7px] font-bold text-gray-400 mb-0.5 flex items-center gap-1"><i className="fa-solid fa-font"></i> NOMBRE DE LA EMPRESA</label>
                                 <div className="border border-gray-200 rounded-lg px-2 py-1.5 text-[9px] font-bold text-gray-700 bg-white shadow-sm">ARISTA STUDIO</div>
                             </div>
                        </div>
                    </div>
                     <div className="mt-2 pt-2 border-t border-gray-50 flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-[#61b5ff] shadow-sm"></div>
                        <div>
                             <label className="text-[7px] font-bold text-gray-400 flex items-center gap-1"><i className="fa-solid fa-palette"></i> COLOR DE MARCA</label>
                             <div className="text-[8px] text-gray-500">#61b5ff <span className="text-gray-300 ml-1">Color para encabezados PDF</span></div>
                        </div>
                     </div>
                </div>

                {/* Glass Settings */}
                <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-[0_2px_8px_rgba(59,130,246,0.05)]">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-[9px] font-black text-blue-500 uppercase tracking-wide">VIDRIOS (BASE DE DATOS)</h4>
                        <span className="text-[7px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">8 TIPOS</span>
                    </div>
                    
                    <div className="space-y-2">
                        {/* Glass Item 1 */}
                        <div className="border border-gray-100 rounded-lg p-2 hover:border-blue-200 transition-colors">
                             <div className="flex justify-between mb-1.5">
                                 <span className="text-[9px] font-bold text-gray-800">Laminado 3+3</span>
                                 <i className="fa-regular fa-trash-can text-gray-300 hover:text-red-400 cursor-pointer text-[8px]"></i>
                             </div>
                             <div className="grid grid-cols-5 gap-2">
                                 <div className="col-span-2">
                                     <label className="text-[6px] text-gray-400 font-bold block mb-0.5">PRECIO ($/m2)</label>
                                     <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700 font-medium">$ 51000</div>
                                 </div>
                                 <div className="col-span-3 grid grid-cols-2 gap-2">
                                     <div>
                                         <label className="text-[6px] text-gray-400 font-bold block mb-0.5">ANCHO HOJA</label>
                                         <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700">2500</div>
                                     </div>
                                     <div>
                                         <label className="text-[6px] text-gray-400 font-bold block mb-0.5">ALTO HOJA</label>
                                         <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700">3600</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                         {/* Glass Item 2 */}
                        <div className="border border-gray-100 rounded-lg p-2 hover:border-blue-200 transition-colors">
                             <div className="flex justify-between mb-1.5">
                                 <span className="text-[9px] font-bold text-gray-800">Laminado 4+4</span>
                                 <i className="fa-regular fa-trash-can text-gray-300 hover:text-red-400 cursor-pointer text-[8px]"></i>
                             </div>
                             <div className="grid grid-cols-5 gap-2">
                                 <div className="col-span-2">
                                     <label className="text-[6px] text-gray-400 font-bold block mb-0.5">PRECIO ($/m2)</label>
                                     <div className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700 font-medium">$ 67000</div>
                                 </div>
                                 <div className="col-span-3 grid grid-cols-2 gap-2">
                                     <div>
                                         <label className="text-[6px] text-gray-400 font-bold block mb-0.5">ANCHO HOJA</label>
                                         <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700">2500</div>
                                     </div>
                                     <div>
                                         <label className="text-[6px] text-gray-400 font-bold block mb-0.5">ALTO HOJA</label>
                                         <div className="bg-white border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-700">3600</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Aluminium Settings */}
                 <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="text-[9px] font-bold text-gray-500 uppercase mb-3 tracking-wide">ALUMINIO (UNITARIO)</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                             <label className="text-[6px] text-gray-400 font-bold block mb-0.5">PERFIL U NEGRO</label>
                             <div className="bg-white border border-gray-200 rounded px-2 py-1.5 text-[8px] text-gray-700 flex items-center gap-1">
                                <span className="text-gray-400">$</span> 43000
                             </div>
                        </div>
                        <div>
                             <label className="text-[6px] text-gray-400 font-bold block mb-0.5">PERFIL U NATURAL</label>
                             <div className="bg-white border border-gray-200 rounded px-2 py-1.5 text-[8px] text-gray-700 flex items-center gap-1">
                                <span className="text-gray-400">$</span> 43000
                             </div>
                        </div>
                        <div>
                             <label className="text-[6px] text-gray-400 font-bold block mb-0.5">PERFIL U BLANCO</label>
                             <div className="bg-white border border-gray-200 rounded px-2 py-1.5 text-[8px] text-gray-700 flex items-center gap-1">
                                <span className="text-gray-400">$</span> 40000
                             </div>
                        </div>
                         <div>
                             <label className="text-[6px] text-gray-400 font-bold block mb-0.5">BISAGRA CONTINUA</label>
                             <div className="bg-white border border-gray-200 rounded px-2 py-1.5 text-[8px] text-gray-700 flex items-center gap-1">
                                <span className="text-gray-400">$</span> 40000
                             </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section Peek */}
                <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 opacity-80">
                    <h4 className="text-[9px] font-bold text-orange-600 uppercase flex items-center gap-1">
                        <i className="fa-solid fa-door-open"></i> HERRERÍA & PUERTAS
                    </h4>
                </div>

            </div>
        </div>
      </div>
    </div>
  </MockupContainer>
);
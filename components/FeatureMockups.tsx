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
    <div className="relative w-full h-full border-2 border-dashed border-gray-300 rounded-lg bg-white p-4 relative">
        <div className="absolute top-4 left-4 right-4 h-48 bg-blue-50 border border-blue-200 relative">
            {/* Simulation of cut pieces */}
            <div className="absolute top-0 left-0 w-[30%] h-[40%] bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs text-blue-700 font-bold">A1</div>
            <div className="absolute top-0 left-[30%] w-[50%] h-[40%] bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs text-blue-700 font-bold">A2</div>
            <div className="absolute top-[40%] left-0 w-[20%] h-[60%] bg-blue-500/20 border border-blue-500 flex items-center justify-center text-xs text-blue-700 font-bold">B1</div>
             <div className="absolute bottom-2 right-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">94% Aprovechado</div>
        </div>
    </div>
  </MockupContainer>
);

export const BudgetMockup: React.FC = () => (
  <MockupContainer title="Presupuesto PDF">
    <div className="w-3/4 h-full bg-white shadow-lg border border-gray-100 mx-auto flex flex-col p-4 text-[8px] text-gray-500">
        <div className="flex justify-between mb-4">
            <div className="w-10 h-10 bg-arista/20 rounded"></div>
            <div className="text-right">
                <div className="font-bold text-gray-900">PRESUPUESTO #1024</div>
                <div>Fecha: 24/10/2025</div>
            </div>
        </div>
        <div className="space-y-2 mb-4">
            <div className="w-full h-4 bg-gray-100 rounded"></div>
            <div className="w-full h-4 bg-gray-100 rounded"></div>
            <div className="w-full h-4 bg-gray-100 rounded"></div>
        </div>
        <div className="mt-auto flex justify-end">
            <div className="bg-arista text-white px-3 py-1 rounded font-bold text-xs">Total: $450.000</div>
        </div>
    </div>
  </MockupContainer>
);

export const MaterialsOrderMockup: React.FC = () => (
  <MockupContainer title="Orden de Compra">
    <div className="grid grid-cols-2 gap-3 w-full">
        <div className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center gap-2">
            <i className="fa-solid fa-check-circle text-green-500"></i>
            <div>
                <div className="font-bold text-gray-800 text-xs">Float 4mm</div>
                <div className="text-[10px]">3 Hojas - VASA</div>
            </div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center gap-2">
            <i className="fa-solid fa-circle-exclamation text-orange-500"></i>
            <div>
                <div className="font-bold text-gray-800 text-xs">Perfil Aluar</div>
                <div className="text-[10px]">Stock Bajo</div>
            </div>
        </div>
        <div className="col-span-2 bg-arista/5 p-2 rounded text-center text-arista font-bold text-xs cursor-pointer hover:bg-arista/10">
            Generar Pedido Automático
        </div>
    </div>
  </MockupContainer>
);

export const ConfigMockup: React.FC = () => (
  <MockupContainer title="Panel Configuración">
    <div className="w-full space-y-3">
        <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
            <span className="text-xs font-bold text-gray-700">Precio Dólar</span>
            <div className="w-8 h-4 bg-green-500 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow"></div></div>
        </div>
        <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
            <span className="text-xs font-bold text-gray-700">Margen Ganancia</span>
            <span className="text-xs font-mono bg-gray-100 px-1 rounded">35%</span>
        </div>
        <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
            <span className="text-xs font-bold text-gray-700">Desperdicio Base</span>
            <span className="text-xs font-mono bg-gray-100 px-1 rounded">10%</span>
        </div>
    </div>
  </MockupContainer>
);
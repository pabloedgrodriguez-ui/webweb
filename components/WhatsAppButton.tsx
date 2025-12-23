import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 w-48 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
        <p className="text-xs text-gray-600 font-medium">
          ¿Tenés dudas? <br/> <span className="font-bold text-arista">Chateá con un experto.</span>
        </p>
        {/* Triangle */}
        <div className="absolute top-full right-6 w-3 h-3 bg-white transform rotate-45 -translate-y-1.5 border-b border-r border-gray-100"></div>
      </div>

      {/* Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
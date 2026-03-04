import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-full right-0 mb-4 w-56 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100"
          >
            <p className="text-xs text-slate-600 font-bold leading-relaxed">
              ¿Dudas técnicas? <br/> 
              <span className="text-arista">Hablá con un especialista ahora.</span>
            </p>
            <div className="absolute top-full right-6 w-3 h-3 bg-white transform rotate-45 -translate-y-1.5 border-b border-r border-slate-100"></div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-slate-300 hover:text-slate-500"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-arista text-white rounded-full shadow-2xl shadow-arista/40"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
};

import { X } from 'lucide-react';
export default WhatsAppButton;
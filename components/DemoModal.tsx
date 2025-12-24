import React, { useState } from 'react';
import { DemoFormData } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    interest: 'Demo 7 Días',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest: DemoFormData['interest']) => {
    setFormData({ ...formData, interest });
  };

  const constructMailtoLink = () => {
    // ASUNTO: Claro y directo para identificar venta vs demo rápidamente
    const subject = encodeURIComponent(`NUEVO LEAD: ${formData.interest} - ${formData.company}`);
    
    // CUERPO: Estructurado tipo ficha de cliente
    const body = encodeURIComponent(
      `NUEVA SOLICITUD DESDE LA WEB\n` +
      `------------------------------------------------\n` +
      `INTERÉS SELECCIONADO: ${formData.interest.toUpperCase()}\n` +
      `(El usuario quiere: ${formData.interest})\n` +
      `------------------------------------------------\n\n` +
      `DATOS DEL CLIENTE:\n` +
      `• Nombre: ${formData.name}\n` +
      `• Empresa: ${formData.company}\n` +
      `• WhatsApp: ${formData.whatsapp}\n` +
      `• Email: ${formData.email}\n\n` +
      `------------------------------------------------\n` +
      `Responder a este correo para contactar al cliente.`
    );
    
    // Destinatarios
    const recipients = "aristastudiouno@gmail.com,pabloedgrodriguez@gmail.com";
    
    return `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use a temporary anchor link for better browser compatibility than window.location.href
    const link = document.createElement('a');
    link.href = constructMailtoLink();
    link.target = '_blank'; // Tries to open in new tab/window to avoid blocking
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setStep(2);
  };

  const handleFinalAccess = () => {
    window.open('https://aristastudio01.vercel.app/', '_blank');
    onClose();
    // Reset after closing
    setTimeout(() => setStep(1), 500); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up transition-all transform max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-arista px-8 py-6 text-white flex justify-between items-center sticky top-0 z-10">
          <h3 className="text-2xl font-black tracking-tight">
            {step === 1 ? 'Accedé a tu Demo Gratuita' : '¡Todo listo!'}
          </h3>
          <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                  <input 
                    required name="name" type="text" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-arista focus:ring-2 focus:ring-arista/20 outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre de la Vidriería / Empresa</label>
                  <input 
                    required name="company" type="text" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-arista focus:ring-2 focus:ring-arista/20 outline-none transition-all"
                    placeholder="Ej. Vidrios Sur"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp</label>
                    <input 
                      required name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-arista focus:ring-2 focus:ring-arista/20 outline-none transition-all"
                      placeholder="+54 9 11..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                    <input 
                      required name="email" type="email" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-arista focus:ring-2 focus:ring-arista/20 outline-none transition-all"
                      placeholder="juan@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Estoy interesado en:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Demo 7 Días', 'Pago Mensual', 'Pago Anual'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleInterestChange(opt)}
                      className={`py-2 px-2 text-sm font-bold rounded-lg border-2 transition-all ${
                        formData.interest === opt 
                          ? 'border-arista bg-arista/10 text-arista' 
                          : 'border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-500 text-center bg-gray-50 p-2 rounded-lg">
                <i className="fa-solid fa-info-circle mr-1"></i>
                Al enviar, se abrirá tu gestor de correo para confirmar la solicitud.
              </div>

              <button 
                type="submit"
                className="w-full bg-arista hover:bg-arista-dark text-white font-black py-4 rounded-xl shadow-lg hover:shadow-arista/40 hover:-translate-y-1 transition-all uppercase tracking-wide text-lg"
              >
                Enviar y Acceder
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Generada!</h4>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Tu aplicación de correo debería haberse abierto. <strong>Recuerda presionar "Enviar"</strong> para que recibamos tus datos.
              </p>
              
              <div className="mb-8">
                 <p className="text-xs text-gray-400 mb-2">¿No se abrió el correo?</p>
                 <a href={constructMailtoLink()} className="text-arista font-bold underline text-sm hover:text-arista-dark">
                   Click aquí para reintentar
                 </a>
              </div>

              <button 
                onClick={handleFinalAccess}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl shadow-lg shadow-green-500/30 hover:-translate-y-1 transition-all uppercase tracking-wide text-lg"
              >
                Acceder a la Demo <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
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
    const isAlum = formData.interest === 'ARISTASTUDIO ALUM (Premium)';
    const subject = encodeURIComponent(`NUEVO LEAD ${isAlum ? '🔥 ALUM' : '💎'}: ${formData.interest} - ${formData.company}`);
    
    const body = encodeURIComponent(
      `NUEVA SOLICITUD DESDE LA WEB\n` +
      `------------------------------------------------\n` +
      `PRODUCTO: ${formData.interest.toUpperCase()}\n` +
      `------------------------------------------------\n\n` +
      `DATOS DEL INTERESADO:\n` +
      `• Nombre: ${formData.name}\n` +
      `• Empresa: ${formData.company}\n` +
      `• WhatsApp: ${formData.whatsapp}\n` +
      `• Email: ${formData.email}\n\n` +
      `------------------------------------------------\n` +
      `Responder a este correo para coordinar acceso.`
    );
    
    const recipients = "aristastudiouno@gmail.com,pabloedgrodriguez@gmail.com";
    return `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = constructMailtoLink();
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setStep(2);
  };

  const handleFinalAccess = () => {
    window.open('https://aristastudio01.vercel.app/', '_blank');
    onClose();
    setTimeout(() => setStep(1), 500); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-arista-dark/40 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in-up transition-all transform max-h-[95vh] overflow-y-auto border border-slate-100">
        
        <div className="p-12">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-4xl font-black text-arista-dark tracking-tighter leading-none mb-2">
                {step === 1 ? 'SOLICITUD DE ACCESO' : '¡TODO LISTO!'}
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Arista Studio Professional</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-300" />
            </button>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-arista uppercase tracking-widest ml-1">Nombre</label>
                    <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-arista focus:ring-0 outline-none transition-all font-bold text-slate-700" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-arista uppercase tracking-widest ml-1">Empresa</label>
                    <input required name="company" type="text" value={formData.company} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-arista focus:ring-0 outline-none transition-all font-bold text-slate-700" placeholder="Nombre del taller" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-arista uppercase tracking-widest ml-1">WhatsApp</label>
                    <input required name="whatsapp" type="tel" value={formData.whatsapp} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-arista focus:ring-0 outline-none transition-all font-bold text-slate-700" placeholder="+54..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-arista uppercase tracking-widest ml-1">Email</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-arista focus:ring-0 outline-none transition-all font-bold text-slate-700" placeholder="correo@ejemplo.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-arista uppercase tracking-widest ml-1">Producto de Interés</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Demo 7 Días', 'Pago Mensual', 'Pago Anual', 'ARISTASTUDIO ALUM (Premium)'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleInterestChange(opt)}
                      className={`py-4 px-4 text-[10px] font-black rounded-2xl border-2 transition-all uppercase tracking-widest ${
                        formData.interest === opt 
                          ? 'border-arista bg-arista text-white shadow-lg shadow-arista/20' 
                          : 'border-slate-100 text-slate-400 hover:border-slate-200'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-arista-dark hover:bg-arista text-white font-black py-6 rounded-full shadow-2xl shadow-arista-dark/20 transition-all uppercase tracking-widest text-xs mt-4">
                SOLICITAR ACCESO AHORA
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-arista/10 text-arista rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-black text-arista-dark mb-4 uppercase tracking-tighter">¡SOLICITUD ENVIADA!</h4>
              <p className="text-slate-500 mb-12 leading-relaxed font-medium text-balance">
                Recuerda presionar "Enviar" en tu aplicación de correo para que recibamos los datos.
              </p>
              <button onClick={handleFinalAccess} className="w-full bg-arista-dark hover:bg-arista text-white font-black py-6 rounded-full shadow-2xl shadow-arista-dark/20 transition-all uppercase tracking-widest text-xs">
                INGRESAR A LA PLATAFORMA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { X, Check } from 'lucide-react';

export default DemoModal;
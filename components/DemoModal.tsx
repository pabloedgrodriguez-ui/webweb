import React, { useState } from 'react';
import { DemoFormData } from '../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset to first step when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      setStep(0);
    }
  }, [isOpen]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic frontend email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/demo-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is JSON before parsing
      const contentType = response.headers.get('content-type');
      let data: any = {};
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // If it's not JSON, it's likely an HTML error page or a network issue
        const text = await response.text();
        console.error('Server returned non-JSON response:', text);
        const preview = text.slice(0, 50).replace(/<[^>]*>?/gm, '');
        throw new Error(`Error del servidor (formato no válido). Respuesta: ${preview || 'HTML/Texto'}`);
      }

      if (!response.ok) {
        // Provide more specific error messages based on server response
        if (data.details && typeof data.details === 'string' && data.details.includes('verified')) {
          throw new Error('Error: Los destinatarios deben estar verificados en el Sandbox de Resend.');
        }
        throw new Error(data.error || 'Error al enviar la solicitud');
      }

      setStep(2);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(err.message || 'Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalAccess = () => {
    window.open('https://aristastudio01.vercel.app/', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-arista-dark/40 backdrop-blur-2xl" onClick={onClose} />
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in-up transition-all transform max-h-[95vh] overflow-y-auto border border-slate-100">
        
        <div className="p-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-4xl font-black text-arista-dark tracking-tighter leading-none mb-2">
                {step === 0 ? 'TÉRMINOS Y CONDICIONES' : step === 1 ? 'SOLICITUD DE ACCESO' : '¡TODO LISTO!'}
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Arista Studio Professional</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-300" />
            </button>
          </div>

          {step === 0 ? (
            <div className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-3xl h-96 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-6 border border-slate-100">
                <p className="font-bold text-arista-dark">Términos y Condiciones de Uso - Arista Studio Alum</p>
                
                <div>
                  <p className="font-bold text-slate-800 mb-1">1. Objeto del Servicio</p>
                  <p>Arista Studio Alum es una plataforma SaaS diseñada para la automatización de presupuestos, optimización de materiales y generación de hojas de taller para carpintería de aluminio. El software se entrega "tal cual", como una herramienta de apoyo a la gestión profesional.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">2. Modelo de Suscripción y Pagos</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li><span className="font-bold">Costo:</span> El acceso al servicio tiene un valor mensual de $35 USD.</li>
                    <li><span className="font-bold">Activación:</span> Las cuentas se activan manualmente tras la confirmación del pago vía WhatsApp.</li>
                    <li><span className="font-bold">Dispositivos:</span> El uso de la cuenta está limitado a un máximo de dos (2) dispositivos simultáneos por usuario.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">3. Responsabilidad sobre los Datos</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li><span className="font-bold">Uso Técnico:</span> El usuario es el único responsable de la exactitud de los datos ingresados en el sistema (medidas, tipos de perfiles y fórmulas de corte).</li>
                    <li><span className="font-bold">Resultados:</span> La aplicación no se responsabiliza por errores en la fabricación derivados de una carga de datos incorrecta o interpretaciones erróneas de las hojas de optimización.</li>
                    <li><span className="font-bold">Propiedad de los Datos:</span> El usuario mantiene la propiedad de sus bases de datos de materiales y recetas.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">4. Propiedad Intelectual</p>
                  <p>Todo el código fuente, diseño de interfaz ("Industrial Premium"), logotipos y algoritmos de optimización son propiedad exclusiva de Arista Studio Alum. Queda prohibida la ingeniería inversa o la copia parcial del sistema.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">5. Disponibilidad y Soporte</p>
                  <ul className="list-disc ml-4 space-y-1">
                    <li><span className="font-bold">Infraestructura:</span> El servicio depende de proveedores externos (Vercel, Supabase, GitHub). No se garantizan servicios ininterrumpidos en caso de fallas en dichos proveedores.</li>
                    <li><span className="font-bold">Mantenimiento:</span> Nos reservamos el derecho de realizar tareas de mantenimiento y reestructuración de bases de datos para garantizar el rendimiento del sistema.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">6. Terminación del Servicio</p>
                  <p>El incumplimiento de los pagos mensuales o el uso de la cuenta en más de dos dispositivos resultará en la suspensión inmediata del acceso sin previo aviso.</p>
                </div>

                <div>
                  <p className="font-bold text-slate-800 mb-1">7. Jurisdicción</p>
                  <p>Para cualquier controversia legal, las partes se someten a la jurisdicción de los tribunales correspondientes a la ciudad de Mendoza, Argentina.</p>
                </div>
              </div>

              <button 
                onClick={() => setStep(1)} 
                className="w-full bg-arista hover:bg-arista-dark text-white font-black py-6 rounded-full shadow-2xl shadow-arista/20 transition-all uppercase tracking-widest text-xs"
              >
                ACEPTO
              </button>
            </div>
          ) : step === 1 ? (
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

              {error && (
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">
                  {error}
                </p>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full bg-arista-dark hover:bg-arista text-white font-black py-6 rounded-full shadow-2xl shadow-arista-dark/20 transition-all uppercase tracking-widest text-xs mt-4 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    PROCESANDO...
                  </>
                ) : (
                  'SOLICITAR ACCESO AHORA'
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-arista/10 text-arista rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-black text-arista-dark mb-4 uppercase tracking-tighter">¡SOLICITUD ENVIADA!</h4>
              <p className="text-slate-500 mb-12 leading-relaxed font-medium text-balance">
                Hemos recibido tus datos con éxito. Un asesor de Arista Studio se pondrá en contacto contigo a la brevedad.
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

import { X, Check, Loader2 } from 'lucide-react';

export default DemoModal;
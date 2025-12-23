import React, { useState } from 'react';
import ProductMockup from './ProductMockup';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [aiImage, setAiImage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAI = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);

    const prompt = 'A sleek, modern software interface for a glass workshop, showing budget calculations and material optimization plans. The UI/UX design is clean, professional, and intuitive, with blue and white as primary colors. Photorealistic rendering.';

    try {
      // In a real Vercel deployment, this hits the API route.
      // For local development with Vite only (no Vercel CLI), this endpoint won't exist unless proxy is set up.
      // Assuming the user will run this in a Vercel-like environment or has set up the proxy.
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      if (data.imageUrl) {
        setAiImage(data.imageUrl);
      } else {
        throw new Error('No image returned');
      }
    } catch (err: any) {
      console.error(err);
      setError("Error al generar imagen. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-fade-in-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arista opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-arista"></span>
          </span>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Software líder en Argentina</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
          Transforma tu Vidriería: <br />
          Presupuestos al Instante y <br />
          <span className="text-arista relative">
             Cero Desperdicio
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-arista/30" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          El software diseñado para vidrieros argentinos que buscan eficiencia y rentabilidad. Dejá de perder plata en cortes mal calculados.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-arista hover:bg-arista-dark text-white font-black text-lg py-4 px-8 rounded-2xl shadow-xl shadow-arista/30 hover:shadow-2xl hover:shadow-arista/40 hover:-translate-y-1 transition-all uppercase tracking-wide"
          >
            Probar Demo Gratis
          </button>
          <a 
            href="https://wa.me/1234567890" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
            Contactar Ventas
          </a>
        </div>

        {/* AI Showcase */}
        <div className="relative max-w-5xl mx-auto">
          {/* AI Control */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
            <button 
              onClick={handleGenerateAI}
              disabled={loading}
              className="bg-gray-900 hover:bg-black text-white text-sm font-bold py-2.5 px-5 rounded-full shadow-lg flex items-center gap-2 border border-gray-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin text-arista"></i> Generando...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-wand-magic-sparkles text-yellow-400 group-hover:rotate-12 transition-transform"></i> Generar Vista de Producto con IA
                </>
              )}
            </button>
            {error && <div className="absolute top-full left-0 w-full mt-2 text-center text-xs text-red-500 font-bold bg-white p-1 rounded shadow">{error}</div>}
          </div>

          <ProductMockup 
            customImage={aiImage} 
            className="animate-float"
          />
        </div>

        {/* Footer Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 font-bold text-sm uppercase tracking-widest">
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> +500 Talleres</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> Soporte Local</span>
          <span className="flex items-center gap-2"><i className="fa-solid fa-check text-arista"></i> Actualizado 2025</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
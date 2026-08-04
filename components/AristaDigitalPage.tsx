import React, { useState } from 'react';
import { 
  Globe, 
  Share2, 
  Megaphone, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  ChevronDown, 
  Layout, 
  Star,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface AristaDigitalPageProps {
  onBackToSoftware: () => void;
  onOpenDemo: () => void;
}

const AristaDigitalPage: React.FC<AristaDigitalPageProps> = ({ onBackToSoftware, onOpenDemo }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const digitalFaqs = [
    {
      question: "¿Por qué contratar una agencia especializada en carpinterías y aberturas?",
      answer: "A diferencia de una agencia genérica, en Arista Digital conocemos de primera mano el rubro del aluminio, las líneas de perfiles (Módena, A30, Herrero, RPT), la terminología técnica y cómo buscan aberturas los arquitectos y particulares. Esto nos permite redactar contenidos exactos y diseñar anuncios de alto impacto sin perder tiempo en explicaciones."
    },
    {
      question: "¿En cuánto tiempo está listo el sitio web de mi carpintería?",
      answer: "El plazo habitual de entrega de la página web con catálogo de aberturas es de 7 a 14 días hábiles desde que nos brindás la información básica (logo, fotos de obras realizadas y líneas que trabajás)."
    },
    {
      question: "¿Cómo llegan las consultas de los clientes que ven los anuncios?",
      answer: "Configuramos todos los anuncios y botones de tu sitio web para que dirijan directamente a tu WhatsApp Business con un mensaje pre-armado (ej: 'Hola, vi su sitio web y quiero cotizar aberturas para mi obra'). De esta forma respondés inmediatamente desde tu teléfono."
    },
    {
      question: "¿Qué presupuesto debo invertir en publicidad de Instagram o Google?",
      answer: "El monto de inversión publicitaria se adapta a tu zona geográfica y capacidad de atención. Para una ciudad promedio, sugerimos iniciar con una pauta accesible diaria y ajustar a medida que recibas más presupuestos."
    },
    {
      question: "¿Ofrecen soporte y mantenimiento posterior?",
      answer: "Sí, todos nuestros planes incluyen soporte continuo, actualizaciones de fotos de obras, mantenimiento técnico y optimización mensual de campañas para garantizar que tu marca siga generando leads."
    }
  ];

  const handleWhatsAppContact = (planName?: string) => {
    const text = planName 
      ? `Hola! Me interesa información sobre el *${planName}* de Arista Digital.`
      : `Hola! Quiero asesoramiento para crear la Página Web y Redes Sociales de mi carpintería de aluminio.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5492610000000?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20 text-slate-900 font-sans">
      
      {/* Top Banner Navigation back to Software */}
      <div className="bg-arista-dark text-white py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-arista/30 text-arista px-2 py-0.5 rounded font-bold uppercase text-[10px]">Agencia Digital</span>
            <span>Soluciones de Marketing & Web para empresas de aberturas de aluminio y cristal.</span>
          </div>
          <button 
            onClick={onBackToSoftware}
            className="text-arista hover:underline font-bold flex items-center gap-1 cursor-pointer"
          >
            ← Volver al Software Arista ALUM
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-arista/10 border border-arista/30 text-arista font-bold text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            ARISTA DIGITAL — AGENCIA ESPECIALIZADA
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Multiplicá las consultas y ventas de tu <span className="text-arista">Carpintería de Aluminio</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
            Diseñamos tu <strong>Sitio Web profesional con catálogo de aberturas</strong>, gestionamos tus <strong>Redes Sociales</strong> y creamos <strong>Anuncios en Instagram, Facebook y Google</strong> para que recibas solicitudes de presupuesto directo en tu WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => handleWhatsAppContact('Asesoramiento Digital')}
              className="w-full sm:w-auto bg-arista hover:bg-arista/90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-arista/25 text-sm uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </button>
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-800 font-bold py-4 px-8 rounded-xl border border-slate-300 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Cotización Web</span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-arista-dark">+100%</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Enfocado en Aluminio</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-arista">7 a 14 Días</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Entrega de Sitio Web</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">Directo a WA</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Consultas en tu celular</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-blue-600">SEO Local</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Posicionamiento en Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-widest text-arista uppercase block mb-3">Nuestras Soluciones Digitales</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Todo lo que tu empresa necesita para destacar en internet
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base font-medium">
              Estrategias probadas específicamente para fabricantes de aberturas, vidrierías y talleres metalúrgicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Web Design */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 relative group">
              <div className="w-14 h-14 rounded-2xl bg-arista/10 text-arista flex items-center justify-center mb-6 group-hover:bg-arista group-hover:text-white transition-colors">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                1. Páginas Web & Catálogos Online
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Diseñamos tu sitio web institucional ultra veloz, optimizado para celulares y con un catálogo interactivo de aberturas de aluminio.
              </p>
              <ul className="space-y-3 mb-8 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Muestra de líneas (Módena, A30, RPT, Herrero)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Galería fotográfica de obras y proyectos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Botón flotante de WhatsApp e integración de mapa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Dominio propio (.com.ar) y correos corporativos
                </li>
              </ul>
            </div>

            {/* Service 2: Social Media */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 relative group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Share2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                2. Gestión de Redes Sociales
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Construimos una presencia impecable en Instagram y Facebook para transmitir seguridad a arquitectos y clientes particulares.
              </p>
              <ul className="space-y-3 mb-8 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Diseño de placas profesionales e historias
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Edición de Reels con muestras de taller e instalación
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Redacción técnica de textos atractivos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Atención inicial y filtrado de consultas
                </li>
              </ul>
            </div>

            {/* Service 3: Paid Ads */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 transition-all hover:shadow-xl hover:-translate-y-1 relative group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Megaphone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                3. Publicidad en Meta & Google Ads
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Activamos campañas de anuncios altamente dirigidas en tu ciudad o provincia para captar personas activamente interesadas en construir.
              </p>
              <ul className="space-y-3 mb-8 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Anuncios en Instagram, Facebook y Búsqueda de Google
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Segmentación geográfica exacta (tu localidad)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Generación de consultas directas a tu WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  Reporte mensual de rendimiento y métricas
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* MOCKUP SHOWCASE OF A CARPENTRY WEBSITE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arista/20 text-arista text-xs font-bold uppercase tracking-widest mb-4">
                <Laptop className="w-4 h-4" /> DEMOSTRACIÓN VISUAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Así se verá la web de tu carpintería
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Diseñamos interfaces limpias, modernas y pensadas para transmitir máxima confianza. Los clientes podrán explorar tus modelos de ventanas, puertas de aluminio y pedir cotizaciones con un solo clic desde su teléfono.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <div className="p-2.5 rounded-xl bg-arista/20 text-arista flex-shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">100% Adaptada a Celulares</h4>
                    <p className="text-xs text-slate-400 mt-1">El 85% de tus clientes navegará desde su teléfono. La velocidad y claridad están garantizadas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 flex-shrink-0">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Optimizada para Búsquedas Locales</h4>
                    <p className="text-xs text-slate-400 mt-1">Aparecé cuando busquen "ventanas de aluminio en Mendoza / San Juan / San Luis / Buenos Aires".</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Simulated Web Preview */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
              
              {/* Browser Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-slate-900 border border-slate-800 text-slate-400 text-[11px] px-4 py-1 rounded-full font-mono flex items-center gap-2">
                  <span className="text-emerald-400">https://</span>
                  <span>tucarpinteria.com.ar</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Website Mockup Preview Content */}
              <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 p-6 text-left space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="font-black text-sm text-white tracking-wider">
                    ALUM<span className="text-arista">PRO</span> FABRICA
                  </div>
                  <div className="flex gap-3 text-[10px] text-slate-400 font-bold uppercase">
                    <span>Líneas</span>
                    <span>Obras</span>
                    <span className="text-arista">Cotizar</span>
                  </div>
                </div>

                {/* Hero section inside mockup */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-850 p-6 rounded-xl border border-slate-700/60">
                  <span className="bg-arista/20 text-arista text-[9px] font-bold px-2 py-0.5 rounded uppercase">Módena • A30 • RPT</span>
                  <h3 className="text-lg font-black text-white mt-2 mb-1">Aberturas de Aluminio de Alta Gama</h3>
                  <p className="text-xs text-slate-300">Fabricación a medida, colocación en obra y garantía escrita.</p>
                  <div className="mt-4 inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold">
                    <MessageSquare className="w-3.5 h-3.5" /> Pedir Cotización Directa
                  </div>
                </div>

                {/* Grid of gallery preview */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                    <div className="h-16 bg-slate-700 rounded-lg mb-2 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase">
                      Ventana Corrediza A30
                    </div>
                    <div className="text-[11px] font-bold text-white">Línea A30 DVH</div>
                    <div className="text-[10px] text-slate-400">Cierre multipunto</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/50">
                    <div className="h-16 bg-slate-700 rounded-lg mb-2 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase">
                      Puerta Rebatible RPT
                    </div>
                    <div className="text-[11px] font-bold text-white">Puerta Doble Hoja</div>
                    <div className="text-[10px] text-slate-400">Aislamiento térmico</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PACKS & PRICING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-arista uppercase block mb-3">Planes & Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Elegí la solución ideal para tu carpintería
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base font-medium">
            Planes transparentes diseñados para adaptarse a la escala de tu taller o distribuidora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pack 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Opción 1</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">Pack Web Presencia</h3>
              <p className="text-xs text-slate-500 mb-6">Ideal para tener tu catálogo institucional y que te encuentren en Google.</p>
              
              <ul className="space-y-3 text-xs font-medium text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Sitio Web Profesional para Carpintería
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Catálogo con líneas Módena, A30, RPT, Herrero
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Galería de obras e imágenes de alta calidad
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Botón flotante directo a tu WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Optimización para celulares y Google Local
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppContact('Pack Web Presencia')}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
            >
              Consultar Pack Web
            </button>
          </div>

          {/* Pack 2 (Featured) */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-2 border-arista rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-arista text-slate-950 font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
              MÁS RECOMENDADO
            </div>

            <div>
              <span className="text-xs font-bold text-arista uppercase tracking-widest">Opción 2</span>
              <h3 className="text-2xl font-black text-white mt-1 mb-2">Pack Crecimiento Total</h3>
              <p className="text-xs text-slate-400 mb-6">Web + Redes Sociales + Campañas de Anuncios en Meta & Google Ads.</p>
              
              <ul className="space-y-3 text-xs font-medium text-slate-200 mb-8 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-arista" />
                  <strong>Todo lo incluido en el Pack Web Presencia</strong>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-arista" />
                  Manejo mensual de Instagram y Facebook
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-arista" />
                  Edición de Reels e historias con tus trabajos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-arista" />
                  Gestión de Anuncios Meta Ads & Google Ads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-arista" />
                  Generación constante de presupuestos por WA
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppContact('Pack Crecimiento Total')}
              className="w-full py-4 bg-arista hover:bg-arista/90 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center shadow-lg shadow-arista/30"
            >
              Solicitar Plan Crecimiento
            </button>
          </div>

          {/* Pack 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Opción 3</span>
              <h3 className="text-2xl font-black text-slate-900 mt-1 mb-2">Pack Redes & Contenido</h3>
              <p className="text-xs text-slate-500 mb-6">Diseñado para actualizar y dinamizar tus perfiles sociales.</p>
              
              <ul className="space-y-3 text-xs font-medium text-slate-700 mb-8 border-t border-slate-100 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Gestión continua de Instagram & Facebook
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Diseño gráfico especializado para el sector
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Publicación periódica de obras y montajes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Redacción técnica para atraer profesionales
                </li>
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppContact('Pack Redes & Contenido')}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer text-center"
            >
              Consultar Pack Redes
            </button>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS FOR DIGITAL */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-arista uppercase block mb-3">Preguntas Frecuentes</span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Dudas sobre Arista Digital
            </h2>
          </div>

          <div className="space-y-4">
            {digitalFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-arista' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            ¿Listo para hacer crecer la presencia digital de tu taller?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Hablá directamente con nuestro equipo de especialistas. Analizamos la presencia actual de tu empresa sin costo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleWhatsAppContact('Asesoramiento General')}
              className="bg-arista hover:bg-arista/90 text-white font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-arista/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </button>
            <button
              onClick={onBackToSoftware}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-4 px-8 rounded-xl text-xs uppercase tracking-wider cursor-pointer"
            >
              Ver Software Arista ALUM
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AristaDigitalPage;

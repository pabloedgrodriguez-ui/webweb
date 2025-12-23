import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Pricing from './components/Pricing';
import WhatsAppButton from './components/WhatsAppButton';
import DemoModal from './components/DemoModal';

const App: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-arista/30 selection:text-arista-dark">
      
      <Navbar onOpenDemo={openDemo} />
      
      <main>
        <Hero onOpenDemo={openDemo} />
        <Problem />
        <Features />
        <Pricing onOpenDemo={openDemo} />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-arista rounded flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-white font-bold text-lg tracking-wide">ARISTA</span>
          </div>
          <p>© 2025 Arista Studio. Hecho en Argentina 🇦🇷 para vidrieros exigentes.</p>
        </div>
      </footer>

      <WhatsAppButton />
      
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />

    </div>
  );
};

export default App;
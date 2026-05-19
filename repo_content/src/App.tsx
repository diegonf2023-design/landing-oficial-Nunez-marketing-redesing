import * as React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { LogoMarquee } from './components/sections/LogoMarquee';
import { Problem } from './components/sections/Problem';
import { Comparison } from './components/sections/Comparison';
import { Bio } from './components/sections/Bio';
import { Portfolio } from './components/sections/Portfolio';
import { Offer } from './components/sections/Offer';
import { WhoFor } from './components/sections/WhoFor';
import { Footer } from './components/sections/Footer';

function App() {
  React.useEffect(() => {
    const trackWhatsAppStartTrial = (event: MouseEvent) => {
      const target = event.target;
      const link = target instanceof Element
        ? target.closest<HTMLAnchorElement>('a[href*="wa.me"], a[href*="api.whatsapp.com"]')
        : null;

      if (!link) return;

      const metaPixel = (window as Window & {
        fbq?: (action: string, eventName: string, params?: Record<string, string>) => void;
      }).fbq;

      metaPixel?.('track', 'StartTrial', {
        value: '0.00',
        currency: 'USD',
        predicted_ltv: '0.00',
      });
    };

    document.addEventListener('click', trackWhatsAppStartTrial);

    return () => document.removeEventListener('click', trackWhatsAppStartTrial);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoMarquee />
        <Problem />
        <Comparison />
        <Bio />
        <Portfolio />
        <Offer />
        <WhoFor />
      </main>
      <Footer />
    </div>
  );
}

export default App;

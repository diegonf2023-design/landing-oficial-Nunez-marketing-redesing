import React, { useEffect } from 'react';
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

export default function App() {
  useEffect(() => {
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
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-text)] font-sans overflow-x-hidden selection:bg-brand-accent selection:text-white relative">
      {/* Noise texture overlay */}
      <div className="noise-bg" />
      
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--color-brand-accent-light))] opacity-70 pointer-events-none" />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-text focus:text-[var(--color-brand-bg)] focus:px-4 focus:py-2 focus:rounded-[4px] focus:font-semibold">
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

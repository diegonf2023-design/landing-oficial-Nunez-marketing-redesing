import React from 'react';
import { Reveal } from '../ui/Reveal';

export const LogoMarquee: React.FC = () => {
    const logos = [
        "Neumáticos Py Automaq",
        "The New Black",
        "Universo Electrodomésticos",
        "Gondwana",
        "Pérez Ramírez",
        "Studio Única",
        "Pani",
        "Silvia Romero",
        "Haverland",
        "Viruta",
        "Lipoesbelt",
        "Solanas",
        "DI+CAPRI",
        "El Beso",
        "HAT"
    ];

    return (
        <section className="py-24 bg-[var(--color-brand-bg)] border-y border-[var(--color-border-dark)] overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center px-4 mb-16">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] mb-4">
                    CLIENTES SATISFECHOS — HISTORIAL DE ÉXITO
                </p>
                <h2 className="font-display text-[28px] md:text-[44px] tracking-tight text-[var(--color-brand-text)] uppercase font-light">
                    MARCAS QUE YA CONFIARON EN <span className="font-serif italic font-light text-[var(--color-brand-accent)]">nuestros</span> SERVICIOS
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden py-4 border-y border-[var(--color-border-dark)]/50 bg-white/20 backdrop-blur-sm">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-2">
                    {logos.map((logo, i) => (
                        <span key={i} className="font-display font-medium text-lg md:text-xl text-[var(--color-brand-text)]/60 hover:text-[var(--color-brand-text)] uppercase tracking-[0.1em] transition-all duration-300 select-none cursor-default">
                            {logo} <span className="text-[var(--color-brand-accent)] font-serif italic ml-4">·</span>
                        </span>
                    ))}
                    {/* Duplicate for infinite effect */}
                    {logos.map((logo, i) => (
                        <span key={`dup-${i}`} className="font-display font-medium text-lg md:text-xl text-[var(--color-brand-text)]/60 hover:text-[var(--color-brand-text)] uppercase tracking-[0.1em] transition-all duration-300 select-none cursor-default">
                            {logo} <span className="text-[var(--color-brand-accent)] font-serif italic ml-4">·</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

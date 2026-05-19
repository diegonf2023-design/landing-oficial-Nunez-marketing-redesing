import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Logos: React.FC = () => {
    const clients = [
        "La Clika",
        "Solanas",
        "Viruta",
        "Hat / El Beso"
    ];

    return (
        <section className="py-14 bg-white border-b border-black/5" aria-label="Clientes y socios de confianza">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-500 font-medium text-sm mb-8">
                    Trusted by 2,000+ businesses & startups
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    {clients.map((client, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <span className="font-display text-xl md:text-2xl font-bold text-gray-800 cursor-default hover:text-brand-accent transition-colors duration-300 select-none">
                                {client}
                            </span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

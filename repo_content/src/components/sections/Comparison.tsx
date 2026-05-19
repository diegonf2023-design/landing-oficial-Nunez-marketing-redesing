import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Comparison: React.FC = () => {
    const rows = [
        {
            myth: "Las fotos son suficientes.",
            reality: "Los anuncios traen ventas."
        },
        {
            myth: "Necesito más seguidores",
            reality: "Necesitás más clientes"
        },
        {
            myth: "El marketing es un gasto",
            reality: "Es tu motor de ventas"
        }
    ];

    return (
        <section className="py-20 bg-white px-4 border-y border-black/5" aria-label="Mito vs Realidad">
            <div className="max-w-5xl mx-auto">
                <Reveal className="mb-12 text-center">
                    <h2 className="font-display tracking-tight text-3xl md:text-4xl font-bold text-brand-text">Mito vs. Realidad</h2>
                    <p className="text-gray-500 mt-3 text-lg">Cambiá tu mindset, cambiá tus resultados.</p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6">
                    {rows.map((row, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="premium-lift bg-brand-bg rounded-2xl p-6 border border-black/5 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2 text-red-500 mb-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        <span className="text-xs font-bold uppercase tracking-wider text-red-500/80">Mito</span>
                                    </div>
                                    <p className="text-gray-500 font-medium line-through decoration-red-300/50 decoration-2">{row.myth}</p>
                                </div>
                                <div className="pt-4 border-t border-black/5">
                                    <div className="flex items-center gap-2 text-green-600 mb-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-xs font-bold uppercase tracking-wider text-green-600/80">Realidad</span>
                                    </div>
                                    <p className="text-brand-text font-bold text-lg group-hover:text-brand-accent transition-colors duration-300">{row.reality}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

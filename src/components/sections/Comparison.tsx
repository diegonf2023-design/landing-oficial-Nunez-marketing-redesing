import React from 'react';
import { Reveal } from '../ui/Reveal';
import { X, Check } from 'lucide-react';

export const Comparison: React.FC = () => {
    const rows = [
        { myth: "Las fotos bonitas son suficientes.", reality: "Los anuncios con estrategia traen la facturación real." },
        { myth: "Necesito miles de seguidores para vender.", reality: "Necesitás la atención cualificada de compradores listos." },
        { myth: "El marketing de redes es solo un gasto.", reality: "Es la inversión número uno en valor patrimonial y ventas." }
    ];

    return (
        <section className="py-28 bg-[var(--color-brand-bg)] border-y border-[var(--color-border-dark)] relative">
            <div className="absolute inset-x-0 bottom-0 top-0 bg-brand-accent/[0.02] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <Reveal className="text-center mb-20">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] mb-4">MINDSET COMERCIAL</p>
                    <h2 className="font-display text-[40px] md:text-[52px] leading-[1.1] text-[var(--color-brand-text)] mb-4 uppercase font-light">
                        MITO VS. <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">realidad</span>
                    </h2>
                    <p className="text-[var(--color-brand-text)]/70 max-w-xl mx-auto text-[15px] md:text-[16px] font-medium leading-relaxed">
                        Cambiá tu marco de referencia estético para transformar los resultados netos de tu negocio.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {rows.map((row, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="bg-white rounded-[24px] p-8 border border-[var(--color-border-dark)] shadow-soft hover:border-[var(--color-brand-text)]/30 hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between h-full">
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-red-500 mb-4 bg-red-50 border border-red-100/50 w-fit px-3 py-1 rounded-full">
                                        <X size={12} strokeWidth={3} />
                                        <span className="text-[8px] font-extrabold uppercase tracking-[1.5px]">Mito</span>
                                    </div>
                                    <p className="text-[var(--color-brand-text)]/60 text-[14px] leading-relaxed line-through decoration-red-400/40 decoration-1">
                                        {row.myth}
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-[var(--color-border-dark)] relative">
                                    <div className="flex items-center gap-2 text-emerald-600 mb-4 bg-emerald-50 border border-emerald-100/50 w-fit px-3 py-1 rounded-full">
                                        <Check size={12} strokeWidth={3} />
                                        <span className="text-[8px] font-extrabold uppercase tracking-[1.5px]">Realidad</span>
                                    </div>
                                    <p className="font-display font-medium text-[16px] text-[var(--color-brand-text)] uppercase tracking-tight leading-snug group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
                                        {row.reality}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

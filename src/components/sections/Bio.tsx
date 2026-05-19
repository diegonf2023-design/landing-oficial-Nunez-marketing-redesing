import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Quote } from 'lucide-react';

export const Bio: React.FC = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 z-10 relative">
            <Reveal>
                <div className="bg-[var(--color-brand-text)] text-white rounded-[32px] p-8 md:p-16 shadow-card overflow-hidden relative border-2 border-[var(--color-brand-text)]">
                    {/* Golden accent highlights inspired by editorial MARIS */}
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[140px] pointer-events-none -z-10" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
                        <div className="flex-1">
                            <p className="text-[10px] font-bold uppercase tracking-[3px] text-brand-accent mb-4">COMPROMISO DE AUTOR</p>
                            <h2 className="font-display text-[42px] md:text-[64px] font-light leading-[1] uppercase mb-10 text-white">
                                NO SOY UNA <span className="font-serif italic font-light text-brand-accent">agencia.</span>
                            </h2>
                            <div className="space-y-6 text-white/75 text-[15px] sm:text-[16px] leading-[1.7] mb-12 font-medium">
                                <p>
                                    Soy el director de tu proyecto y asumo la responsabilidad integral: la dirección estética de las fotos, la arquitectura estratégica del feed, y el retorno de los anuncios. Detrás de mí cuento con el equipo de especialistas de <strong className="text-white font-extrabold uppercase tracking-[0.5px]">Agencia Zeta</strong>, pero tu canal de comunicación es uno solo: yo. Conozco tu marca íntimamente. Te doy respuestas en tiempo real.
                                </p>
                                <p>
                                    No vas a explicar tu propuesta de valor a ejecutivos de cuentas junior diferentes cada mes. No vas a tolerar demoras de tres días hábiles por un &ldquo;ticket interno de sistemas&rdquo;. Un mensaje directo por WhatsApp. Respuestas ágiles, soluciones inmediatas.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-[20px] p-6 sm:p-8 border-l-4 border-brand-accent relative flex gap-4 backdrop-blur-sm">
                                <Quote className="text-brand-accent opacity-75 flex-shrink-0" size={24} />
                                <p className="text-[14px] sm:text-[15px] text-white/90 italic font-semibold leading-[1.6]">
                                    &ldquo;La atención artesanal y meticulosa que te entrego es la misma de alta costura que yo exigiría para mi propia firma.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

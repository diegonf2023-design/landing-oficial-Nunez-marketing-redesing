import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Check, X } from 'lucide-react';

export const WhoFor: React.FC = () => {
    const yesItems = [
        { title: "Tenés un local físico con productos", desc: "Sabés que lo que vendés es excelente, pero tus redes no demuestran esa calidad ni atraen a los compradores premium correctos." },
        { title: "Tenés presupuesto para invertir", desc: "Entendés que la pauta publicitaria es el motor de prospección número uno y contás con capital mensual para escalar." },
        { title: "Querés delegar y enfocarte", desc: "Buscás a un partner de marca que diseñe y ejecute de punta a punta, sin micromanejo ni correcciones constantes." }
    ];

    const noItems = [
        { title: "No tenés un producto físico", desc: "Vendés servicios intangibles, cursos genéricos de marketing, o estás experimentando ideas sin tracción." },
        { title: "Tu negocio necesita ventas de emergencia", desc: "La construcción de una marca de lujo y sistemas robustos requiere tiempo de maduración y consistencia estratégica." },
        { title: "Buscás un community manager promedio", desc: "Si querés posteos genéricos solo para rellenar el feed, mis planes no son para vos. Aquí creamos sistemas comerciales de alto impacto estético." }
    ];

    return (
        <section className="py-28 bg-[var(--color-brand-bg)] px-4 border-t border-[var(--color-border-dark)] relative">
            <div className="absolute inset-0 bg-brand-accent/5 opacity-[0.1] -z-10" />
            
            <div className="max-w-6xl mx-auto space-y-16">
                <Reveal className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] mb-4">CRITERIO DE SELECCIÓN</p>
                    <h2 className="font-display text-[40px] md:text-[52px] leading-[1.1] text-[var(--color-brand-text)] mb-4 uppercase font-light">
                        ¿ES ESTO PARA <span className="font-serif italic font-light text-[var(--color-brand-accent)]">tu marca?</span>
                    </h2>
                </Reveal>
                
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <Reveal direction="left">
                        <div className="bg-white rounded-[24px] p-8 lg:p-12 border border-[var(--color-border-dark)] shadow-soft h-full relative overflow-hidden group hover:border-[var(--color-brand-text)]/30 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full transition-transform group-hover:scale-105" />
                            
                            <h3 className="font-display text-[22px] uppercase text-[var(--color-brand-text)] mb-10 flex items-center gap-4 border-b border-[var(--color-border-dark)] pb-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                                    <Check size={18} />
                                </div>
                                Trabajemos juntos si:
                            </h3>
                            <div className="space-y-8 relative z-10">
                                {yesItems.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-[14px] text-[var(--color-brand-text)] mb-1.5 tracking-[1px] uppercase">{item.title}</p>
                                            <p className="text-[13px] text-[var(--color-brand-text)]/70 leading-[1.6]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={100} direction="right">
                        <div className="bg-white rounded-[24px] p-8 lg:p-12 border border-[var(--color-border-dark)] shadow-soft h-full relative overflow-hidden group hover:border-[var(--color-brand-text)]/30 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full transition-transform group-hover:scale-105" />
                            
                            <h3 className="font-display text-[22px] uppercase text-[var(--color-brand-text)] mb-10 flex items-center gap-4 border-b border-[var(--color-border-dark)] pb-4">
                                <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
                                    <X size={18} />
                                </div>
                                No soy el indicado si:
                            </h3>
                            <div className="space-y-8 relative z-10">
                                {noItems.map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-[14px] text-[var(--color-brand-text)] mb-1.5 tracking-[1px] uppercase">{item.title}</p>
                                            <p className="text-[13px] text-[var(--color-brand-text)]/70 leading-[1.6]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

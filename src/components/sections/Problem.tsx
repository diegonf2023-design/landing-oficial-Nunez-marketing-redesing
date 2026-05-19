import React from 'react';
import { Reveal } from '../ui/Reveal';
import { CameraOff, Clock, SearchX, ArrowRight } from 'lucide-react';

export const Problem: React.FC = () => {
    const problems = [
        {
            icon: <CameraOff size={22} />,
            title: "Fotos que no venden",
            desc: "Sacás fotos con el celular. Se ven amateurs. Tu producto se ve peor de lo que es en realidad."
        },
        {
            icon: <Clock size={22} />,
            title: "Sin tiempo para gestionar",
            desc: "Sos dueño y gerente. No tenés 2 horas al día para pensar ideas de contenido o editar videos."
        },
        {
            icon: <SearchX size={22} />,
            title: "Pagaste y no funcionó",
            desc: "Agencias que suben fechas especiales irrelevantes y te cobran fortunas sin traerte un solo cliente."
        }
    ];

    return (
        <section id="problema" className="py-24 bg-[var(--color-brand-bg)] px-4 border-t border-[var(--color-border-dark)] relative">
            <div className="absolute inset-0 bg-brand-accent/5 opacity-[0.2] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 bg-white border border-[var(--color-border-dark)] rounded-full px-[18px] py-[8px] mb-8 shadow-soft text-[10px] font-bold text-[var(--color-brand-text)] tracking-[2.5px] uppercase">
                                EL DIAGNÓSTICO
                            </div>
                            <h2 className="font-display text-[42px] md:text-[56px] leading-[1] font-normal tracking-tight text-[var(--color-brand-text)] mb-8 uppercase">
                                Feed que le baja <br />
                                el precio <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">a tu producto.</span>
                            </h2>
                            <p className="text-[16px] sm:text-[18px] text-[var(--color-brand-text)]/70 leading-[1.65] max-w-[500px] mb-12 font-medium">
                                Fotos rápidas, mala luz y sin línea estética. El cliente abre tu perfil de Instagram, lo lee como un negocio chico o informal, y se va. Sin una imagen de alto nivel, estás forzando descuentos en vez de vender con autoridad.
                            </p>
                        </Reveal>

                        <div className="space-y-10">
                            {problems.map((prob, i) => (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="flex gap-5 group items-start">
                                        <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full shadow-soft border border-[var(--color-border-dark)] flex items-center justify-center text-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-text)] group-hover:text-white transition-all duration-300">
                                            {prob.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[14px] text-[var(--color-brand-text)] mb-2 tracking-[1.5px] uppercase">{prob.title}</h3>
                                            <p className="text-[13px] text-[var(--color-brand-text)]/70 leading-[1.6] max-w-sm">
                                                {prob.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual: Comparison Boxes */}
                    <div className="relative">
                        <Reveal delay={200} direction="left">
                            <div className="bg-white rounded-[24px] shadow-card p-6 sm:p-10 border border-[var(--color-border-dark)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-44 h-44 bg-[var(--color-brand-accent-light)] rounded-full blur-[80px] pointer-events-none -z-10" />
                                
                                <div className="flex justify-between items-center mb-8 border-b border-[var(--color-border-dark)] pb-4">
                                    <h4 className="font-display text-[20px] font-bold text-[var(--color-brand-text)] uppercase tracking-tight">Análisis de Retorno</h4>
                                    <span className="text-[9px] font-bold text-[var(--color-brand-accent)] uppercase tracking-[2px]">3 Modelos</span>
                                </div>

                                <div className="space-y-5">
                                    {/* Bad Scenario 1 */}
                                    <div className="bg-[var(--color-brand-bg)] border border-[var(--color-border-dark)] rounded-[16px] p-5 hover:border-[var(--color-brand-text)]/30 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="font-bold text-[13px] tracking-[1px] uppercase text-[var(--color-brand-text)]">Por tu cuenta</p>
                                                <p className="text-[11px] text-[var(--color-brand-text)]/60">Contenido sin pauta ni arte</p>
                                            </div>
                                            <span className="border border-[var(--color-border-dark)] text-[var(--color-brand-text)]/50 text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-[1px]">Casual</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/50 p-3 rounded-[8px] border border-[var(--color-border-dark)]/50">
                                            <div>
                                                <p className="text-[8px] text-[var(--color-brand-text)]/40 uppercase font-black tracking-[1px]">Inversión</p>
                                                <p className="font-bold text-[12px] text-[var(--color-brand-text)]">₲ 500k</p>
                                            </div>
                                            <ArrowRight size={12} className="text-[var(--color-brand-text)]/40" />
                                            <div className="text-right">
                                                <p className="text-[8px] text-red-500 uppercase font-bold tracking-[1.5px]">Retorno Estimado</p>
                                                <p className="font-black text-red-500 text-[13px]">+ ₲ 226k</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bad Scenario 2 */}
                                    <div className="bg-[var(--color-brand-bg)] border border-[var(--color-border-dark)] rounded-[16px] p-5 hover:border-[var(--color-brand-text)]/30 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="font-bold text-[13px] tracking-[1px] uppercase text-[var(--color-brand-text)]">Agencia Tradicional</p>
                                                <p className="text-[11px] text-[var(--color-brand-text)]/60">Posteos genéricos sin fotos reales</p>
                                            </div>
                                            <span className="border border-[var(--color-border-dark)] text-[var(--color-brand-text)]/50 text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-[1px]">Estándar</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/50 p-3 rounded-[8px] border border-[var(--color-border-dark)]/50">
                                            <div>
                                                <p className="text-[8px] text-[var(--color-brand-text)]/40 uppercase font-black tracking-[1px]">Inversión</p>
                                                <p className="font-bold text-[12px] text-[var(--color-brand-text)]">₲ 2.500k</p>
                                            </div>
                                            <ArrowRight size={12} className="text-[var(--color-brand-text)]/40" />
                                            <div className="text-right">
                                                <p className="text-[8px] text-orange-400 uppercase font-bold tracking-[1.5px]">Retorno Promedio</p>
                                                <p className="font-black text-orange-500 text-[13px]">+ ₲ 453k</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hero Scenario */}
                                    <div className="bg-gradient-to-br from-[var(--color-brand-text)] to-[var(--color-brand-text)]/95 border-2 border-[var(--color-brand-text)] rounded-[20px] p-6 text-white relative overflow-hidden shadow-card hover:scale-[1.01] transition-all duration-300">
                                        <div className="absolute top-0 right-0 bg-brand-accent text-[var(--color-brand-text)] text-[9px] font-black px-4 py-2 rounded-bl-[12px] z-10 uppercase tracking-[1.5px]">X17 MULTIPLICADO</div>
                                        <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-brand-accent/25 rounded-full blur-[40px] pointer-events-none" />

                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div>
                                                <span className="text-[9px] font-bold text-brand-accent uppercase tracking-[2px]">MÉTODO PREMIUM</span>
                                                <p className="font-display font-medium text-white text-[18px] uppercase tracking-wide">SISTEMA NÚÑEZ</p>
                                                <p className="text-[12px] text-white/70 font-mono">Electrodomésticos • 147 tickets</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center relative z-10 border-t border-white/15 pt-4 bg-black/10 -mx-6 px-6 -mb-6 pb-6">
                                            <div>
                                                <p className="text-[8px] text-white/50 uppercase tracking-[1.5px]">Inversión</p>
                                                <p className="font-bold text-white text-[13px]">₲ 8.050k</p>
                                            </div>
                                            <ArrowRight size={16} className="text-brand-accent" />
                                            <div className="text-right">
                                                <p className="text-[8px] text-brand-accent uppercase font-black tracking-[1.5px]">Ganancia Neta Extra</p>
                                                <p className="font-extrabold text-brand-accent text-[20px] tracking-tight">+ ₲ 134.950k</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Check, ArrowRight } from 'lucide-react';

export const Offer: React.FC = () => {
    return (
        <section id="oferta" className="py-28 px-4 bg-[var(--color-brand-bg)] relative overflow-hidden">
            {/* Background elegant circles */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto relative z-10">
                <Reveal className="text-center mb-20">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] mb-4">METODOLOGÍA TRANSPARENTE</p>
                    <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-[var(--color-brand-text)] mb-4 uppercase font-light">
                        DOS FASES. <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">sin</span> LETRA CHICA.
                    </h2>
                    <p className="text-[var(--color-brand-text)]/70 max-w-xl mx-auto text-[15px] md:text-[16px] font-medium leading-relaxed">
                        Escalamos la estética y los ingresos de tu negocio con máxima claridad y cero riesgos corporativos.
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Phase 1 */}
                    <Reveal delay={100} direction="up" className="h-full">
                        <div className="bg-white rounded-[24px] p-8 md:p-12 border border-[var(--color-border-dark)] shadow-soft flex flex-col h-full hover:border-[var(--color-brand-text)]/30 transition-all duration-300">
                            <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-text)]/10 text-[9px] font-extrabold px-[16px] py-[8px] rounded-full uppercase tracking-[2px] w-fit mb-8 text-[var(--color-brand-text)]/70">
                                FASE 1 — EL PLAN BASELINE (GRATIS)
                            </div>
                            
                            <h3 className="text-[44px] font-display font-light uppercase text-[var(--color-brand-text)] mb-8">
                                GRATIS
                            </h3>
                            
                            <div className="flex-1 space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-50 text-emerald-600 border border-emerald-100 p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                    <p className="font-bold text-[var(--color-brand-text)] text-[14px] uppercase tracking-[0.5px]">Diseño preliminar de feed nuevo</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-50 text-emerald-600 border border-emerald-100 p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                    <p className="font-bold text-[var(--color-brand-text)] text-[14px] uppercase tracking-[0.5px]">Alineación e identidad premium</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-50 text-emerald-600 border border-emerald-100 p-1 rounded-full"><Check size={12} strokeWidth={3} /></div>
                                    <p className="font-bold text-[var(--color-brand-text)] text-[14px] uppercase tracking-[0.5px]">Entrega rápida en 7 días hábiles</p>
                                </div>
                                <div className="mt-8 bg-[var(--color-brand-bg)] border-l-4 border-[var(--color-brand-accent)] p-5 rounded-[12px]">
                                    <p className="text-[var(--color-brand-text)]/70 text-[13px] italic font-medium leading-relaxed">
                                        &ldquo;Si el primer entregable no refleja tu estándar y no te deslumbra, no seguimos hacia pauta. Así de transparente.&rdquo;
                                    </p>
                                </div>
                            </div>
                            
                            <a
                                href="https://wa.me/595975190555"
                                className="group w-full flex items-center justify-center gap-2 bg-transparent border-2 border-[var(--color-brand-text)] hover:bg-[var(--color-brand-text)] hover:text-white py-[16px] rounded-full font-bold text-[10px] text-[var(--color-brand-text)] uppercase tracking-[2px] transition-all duration-300"
                            >
                                Iniciá la Fase 1 gratis
                                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </Reveal>

                    {/* Phase 2 */}
                    <Reveal delay={200} direction="up" className="h-full">
                        <div className="bg-[var(--color-brand-text)] rounded-[24px] p-8 md:p-12 border-2 border-[var(--color-brand-text)] shadow-card flex flex-col h-full hover:scale-[1.01] transition-all duration-300 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/15 rounded-full blur-[110px] pointer-events-none -z-10" />
                            
                            <div className="bg-brand-accent text-[var(--color-brand-text)] px-[16px] py-[8px] rounded-full text-[9px] font-black uppercase tracking-[2px] w-fit mb-8 shadow-none">
                                FASE 2 — SISTEMA EXECUTOR PREMIUM
                            </div>
                            
                            <div className="mb-8">
                                <h3 className="text-[40px] font-display font-light uppercase tracking-tight leading-[1] mb-2 text-brand-accent">
                                    CONSULTÁ <span className="font-serif italic text-white font-light">tu plan</span>
                                </h3>
                                <p className="text-white/60 text-[12px] font-mono">Ref: Plan premium completo ~ G. 2.500.000 + Pauta</p>
                            </div>
                            
                            <div className="flex-1 space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-accent-light/10 border border-brand-accent/50 p-1 rounded-full"><Check size={12} strokeWidth={3} className="text-brand-accent" /></div>
                                    <p className="font-bold text-white text-[14px] uppercase tracking-[0.5px]">Sesión de fotos y video mensual</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-accent-light/10 border border-brand-accent/50 p-1 rounded-full"><Check size={12} strokeWidth={3} className="text-brand-accent" /></div>
                                    <p className="font-bold text-white text-[14px] uppercase tracking-[0.5px]">Estrategia editorial y de pauta</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 bg-brand-accent-light/10 border border-brand-accent/50 p-1 rounded-full"><Check size={12} strokeWidth={3} className="text-brand-accent" /></div>
                                    <p className="font-bold text-white text-[14px] uppercase tracking-[0.5px]">Campañas en Meta Ads con retorno medible</p>
                                </div>
                                <div className="mt-8 bg-white/5 border border-white/10 p-5 rounded-[12px]">
                                    <p className="text-white/75 text-[13px] italic font-medium leading-relaxed">
                                        &ldquo;Mes a mes. Sin obligaciones de permanencia forzada. Trabajamos bajo la excelencia de metas tangibles.&rdquo;
                                    </p>
                                </div>
                            </div>
                            
                            <a
                                href="https://wa.me/595975190555"
                                className="group w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-white text-[var(--color-brand-text)] py-[16px] rounded-full font-bold text-[10px] uppercase tracking-[2px] transition-all duration-300 shadow-soft"
                            >
                                Activá la Fase de Pauta
                                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

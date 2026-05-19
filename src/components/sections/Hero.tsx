import React from 'react';
import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { TrendingUp, TrendingDown, Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
            {/* Rhythmic Vertical Strips for structural depth inspired by MARIS */}
            <div className="absolute inset-x-0 bottom-0 top-0 z-0 flex items-end justify-center gap-4 md:gap-8 px-4 md:px-12 pb-0 overflow-hidden pointer-events-none opacity-[0.06]">
                <div className="flex-1 h-[30vh] md:h-[45vh] bg-[var(--color-brand-text)]/5 rounded-t-[2rem] border-x border-t border-[var(--color-brand-text)]/10" />
                <div className="flex-1 h-[40vh] md:h-[65vh] bg-[var(--color-brand-text)]/5 rounded-t-[2rem] border-x border-t border-[var(--color-brand-text)]/10" />
                <div className="flex-1 h-[35vh] md:h-[55vh] bg-[var(--color-brand-text)]/5 rounded-t-[2rem] border-x border-t border-[var(--color-brand-text)]/10" />
                <div className="flex-1 h-[45vh] md:h-[75vh] bg-[var(--color-brand-text)]/5 rounded-t-[2rem] border-x border-t border-[var(--color-brand-text)]/10" />
                <div className="flex-1 h-[38vh] md:h-[50vh] bg-[var(--color-brand-text)]/5 rounded-t-[2rem] border-x border-t border-[var(--color-brand-text)]/10" />
            </div>

            {/* Glowing background highlights */}
            <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
                
                {/* Left: Text Content (Col span 7) */}
                <div className="lg:col-span-7 max-w-3xl flex flex-col items-start text-left">
                    <Reveal delay={100} direction="up">
                        <div className="inline-flex items-center gap-2 bg-[var(--color-brand-bg)] border border-[var(--color-brand-text)]/20 rounded-full px-[18px] py-[8px] mb-8 shadow-soft">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                            </span>
                            <span className="text-[10px] font-bold text-[var(--color-brand-text)] tracking-[2.5px] uppercase">
                                LUGARES DISPONIBLES: 2 EN PARAGUAY
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={200} direction="up">
                        <h1 className="font-display text-[52px] sm:text-[72px] lg:text-[84px] leading-[0.9] font-normal tracking-[0.01em] text-[var(--color-brand-text)] mb-8 uppercase">
                            ¿Tus redes <br />
                            <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">frenan</span> tu <br />
                            <span className="font-black text-stroke">facturación?</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={300} direction="up">
                        <p className="text-[16px] sm:text-[18px] text-[var(--color-brand-text)]/70 leading-[1.62] max-w-[540px] mb-10 font-medium">
                            Aplicá al <strong className="text-[var(--color-brand-text)] font-extrabold uppercase tracking-[0.5px]">Sistema de Adquisición Visual</strong> — El método de diseño editorial y pauta premium para convertir tu feed en tu mejor activo comercial.
                        </p>
                    </Reveal>

                    <Reveal delay={400} direction="up">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                            <a
                                href="https://wa.me/595975190555?text=Hola!%20Quiero%20vender%20m%C3%A1s%20con%20mis%20redes..."
                                className="bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-accent)] px-[32px] py-[16px] rounded-full text-[10px] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-soft text-center hover:scale-[1.03]"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Aplicar gratis a Fase 1
                            </a>
                            <a
                                href="#portafolio"
                                className="px-[32px] py-[16px] rounded-full text-[var(--color-brand-text)] hover:bg-[var(--color-brand-text)] hover:text-white font-bold text-[10px] uppercase tracking-[2px] transition-all duration-300 text-center border-2 border-[var(--color-brand-text)]"
                            >
                                Ver Trabajos Reales
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Right: Modern Visual Comparison (Col span 5) */}
                <div className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                    
                    {/* Behind glowing shadow */}
                    <div className="absolute inset-0 bg-brand-accent opacity-[0.14] rounded-full transform rotate-3 scale-95 -z-10 blur-[100px]"></div>

                    {/* BEFORE / AFTER Composition */}
                    <div className="relative w-full max-w-sm h-full flex items-center justify-center">
                        
                        {/* BEFORE Image Card - Behind and grayscaled */}
                        <motion.div 
                            initial={{ x: 50, y: 30, opacity: 0, rotate: 5 }}
                            animate={{ x: -20, y: 40, opacity: 1, rotate: -6 }}
                            transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
                            className="absolute -left-6 sm:left-0 top-12 w-44 sm:w-52 bg-[var(--color-brand-card)] p-3 rounded-[16px] border border-[var(--color-border-dark)]/80 shadow-soft grayscale z-10"
                        >
                            <div className="mb-2 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1 bg-red-500/10 text-red-500 text-[8px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border border-red-500/10">
                                    CASUAL
                                </span>
                                <span className="text-[9px] text-[var(--color-brand-text)]/40 font-bold uppercase">Antes</span>
                            </div>
                            <img src="/images/699fab189a0c18c7f4b2cbee.webp" alt="Antes" className="w-full h-auto aspect-[4/5] object-cover rounded-[10px]" />
                            
                            <div className="absolute -left-4 bottom-4 bg-[var(--color-brand-card)] p-2 rounded-[10px] shadow-soft border border-[var(--color-border-dark)] flex items-center gap-2 transform -rotate-3">
                                <div className="bg-red-500/10 p-1 rounded-full"><TrendingDown size={11} className="text-red-500" /></div>
                                <div>
                                    <p className="text-[8px] text-[var(--color-brand-text)]/60 font-bold uppercase tracking-[0.5px]">De cada 100</p>
                                    <p className="text-[11px] font-black text-red-500">6 compran</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* AFTER Image Card - Forefront and sparkling */}
                        <motion.div 
                            initial={{ x: -50, y: -20, opacity: 0 }}
                            animate={{ x: 30, y: -30, opacity: 1, rotate: 4 }}
                            transition={{ duration: 1.2, delay: 0.7, type: 'spring' }}
                            className="absolute right-0 sm:right-4 z-20 w-52 sm:w-64 bg-[var(--color-brand-card)] p-4 rounded-[20px] shadow-card border-2 border-[var(--color-brand-text)]"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 bg-brand-accent-light text-[var(--color-brand-text)] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-brand-text)]/10">
                                    <Sparkles size={10} className="text-[var(--color-brand-accent)]" /> 5 ESTRELLAS
                                </span>
                                <span className="text-[9px] text-[var(--color-brand-accent)] font-bold uppercase tracking-[1px]">Después</span>
                            </div>
                            <img src="/images/699e56b61001a51ae6540847.webp" alt="Después" className="w-full h-auto aspect-[4/5] object-cover rounded-[12px]" />
                            
                            <motion.div 
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -right-6 bottom-16 bg-[var(--color-brand-card)] p-2.5 rounded-[12px] shadow-card border border-[var(--color-border-dark)] flex items-center gap-3"
                            >
                                <div className="bg-green-500/10 p-1.5 rounded-full"><TrendingUp size={14} className="text-green-500" /></div>
                                <div>
                                    <p className="text-[8px] text-[var(--color-brand-text)]/50 font-bold uppercase tracking-[1px]">RETORNO X11</p>
                                    <p className="text-xs font-black text-green-600">+120 VENTAS</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

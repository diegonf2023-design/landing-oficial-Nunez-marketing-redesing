import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { Plus, X } from 'lucide-react';

export const Footer: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "¿Cuánto tengo que invertir en publicidad aparte del fee mensual?",
            a: "Para empezar, con ₲ 400.000 a ₲ 1.000.000 mensuales en pauta ya se ven resultados concretos. Esa plata va directo a Meta — vos la manejás desde tu propia cuenta comercial. Yo te asisto en configurar todo para que rinda al máximo."
        },
        {
            q: "¿Y si no me gustan las fotos o el resultado del feed?",
            a: "Por eso la Fase 1 es gratis. Si diseñamos la grilla preliminar y no te convence el refinamiento estético de las piezas, libremente cancelamos todo. Tu único riesgo es una tarde de tu tiempo."
        },
        {
            q: "Ya contraté agencias en el pasado y no funcionó. ¿Por qué esto es diferente?",
            a: "Porque las agencias operan en masa: te piden que vos produzcas el material o usan fotos genéricas de stock. Yo voy en persona a tu local comercial o estudio con equipamiento profesional de retrato, capturando el alma de tu marca para optimizarlas específicamente al anuncio publicitario que tengo diagramado."
        },
        {
            q: "¿En cuánto tiempo se ven los resultados comerciales?",
            a: "El rebranding integral y la estructura inicial del feed están listos en 7 días hábiles. En publicidad pagada, verás leads contactando a tu WhatsApp desde las primeras semanas, alcanzando la madurez optimizada entre el segundo y tercer mes."
        },
        {
            q: "¿Tengo que firmar algún plazo de permanencia obligatorio?",
            a: "No. La Fase 2 de pauta y producción mensual se renueva mes a mes. Si en algún momento decidís pausar, no asumís multas ni penalidades contractuales de permanencia."
        }
    ];

    return (
        <footer className="bg-[var(--color-brand-bg)] pt-28 pb-16 border-t border-[var(--color-border-dark)] relative">
            <div className="absolute inset-0 bg-brand-accent/5 opacity-[0.05] pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-4 mb-28">
                <Reveal className="text-center mb-16">
                    <span className="bg-white border border-[var(--color-border-dark)] px-[18px] py-[8px] rounded-full text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] shadow-soft">
                        FAQS
                    </span>
                    <h2 className="font-display text-[40px] md:text-[56px] leading-[1.1] text-[var(--color-brand-text)] mb-4 uppercase font-light mt-8">
                        PREGUNTAS <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">frecuentes</span>
                    </h2>
                </Reveal>

                <div className="space-y-5">
                    {faqs.map((item, i) => (
                        <Reveal key={i} delay={i * 50}>
                            <div className="bg-white rounded-[20px] border border-[var(--color-border-dark)] overflow-hidden shadow-soft transition-all duration-300 hover:border-[var(--color-brand-text)]/35">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-7 text-left transition-colors duration-300 hover:bg-[var(--color-brand-bg)]/30"
                                >
                                    <span className="font-display text-[16px] sm:text-[18px] font-medium text-[var(--color-brand-text)] pr-8 tracking-tight">{item.q}</span>
                                    <span
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
                                            openIndex === i 
                                                ? 'bg-[var(--color-brand-text)] border-[var(--color-brand-text)] text-white rotate-90' 
                                                : 'bg-white border-[var(--color-border-dark)] text-[var(--color-brand-text)]/60 hover:bg-black/5'
                                        }`}
                                    >
                                        {openIndex === i ? <X size={14} /> : <Plus size={14} />}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-7 pb-7 pt-4 text-[var(--color-brand-text)]/70 text-[14px] leading-[1.62] border-t border-[var(--color-border-dark)]/50 font-medium">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[var(--color-border-dark)] pt-12">
                <div className="flex items-center">
                    <span className="font-display text-[22px] font-normal uppercase tracking-[3px] text-[var(--color-brand-text)]">
                        NÚÑEZ <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-xs font-semibold tracking-normal lowercase">studio</span>
                    </span>
                </div>
                <p className="text-[var(--color-brand-text)]/50 font-medium text-[12px] leading-[1.6] text-center md:text-left tracking-[1.5px] uppercase">
                    © {new Date().getFullYear()} Diego Núñez — Full Stack Marketer | Asunción, Paraguay
                </p>
            </div>
        </footer>
    );
};

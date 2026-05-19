import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Offer: React.FC = () => {
    return (
        <section id="oferta" className="py-24 px-4 bg-white relative overflow-hidden" aria-label="Oferta de servicio">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-indigo-50/40 via-purple-50/20 to-white -z-10" aria-hidden="true"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <Reveal className="text-center mb-16">
                    <h2 className="font-display tracking-tight text-4xl md:text-5xl font-bold text-brand-text mb-4">Dos fases. Sin letra chica. Sin contratos anuales.</h2>
                    <p className="text-xl text-gray-500 font-normal">Escalamos tu negocio paso a paso.</p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Phase 1 */}
                    <Reveal delay={100} className="h-full">
                            <div className="premium-lift bg-white rounded-3xl p-6 md:p-10 border border-black/5 shadow-card relative hover:shadow-card-hover transition-all duration-500 h-full flex flex-col">
                            <div className="bg-brand-accentLight text-brand-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block w-fit mb-6">
                                Fase 1 — Gratis
                            </div>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl sm:text-5xl font-bold text-brand-text">Gratis</span>
                            </div>
                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex gap-3">
                                    <span className="text-green-500 font-bold" aria-hidden="true">✓</span>
                                    <p className="font-bold text-gray-800">Rebranding + fotos + feed nuevo</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-green-500 font-bold" aria-hidden="true">✓</span>
                                    <p className="font-bold text-gray-800">Entrega en 7 días hábiles</p>
                                </div>
                                <p className="text-gray-500 text-sm bg-gray-50 p-4 rounded-xl italic border-l-4 border-gray-200">
                                    "Si no te gusta el resultado, no seguimos."
                                </p>
                            </div>
                            <a
                                href="https://wa.me/595975190555?text=Hola!%20Ya%20le%C3%AD%20toda%20la%20propuesta%20en%20la%20landing.%20Me%20interesa%20avanzar%20y%20quiero%20que%20hablemos%20c%C3%B3mo%20adaptarla%20a%20mi%20empresa%3A%20%E2%80%A6."
                                className="shine-on-hover block w-full text-center bg-brand-text text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/10 hover:-translate-y-0.5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Iniciá la Fase 1
                            </a>
                        </div>
                    </Reveal>

                    {/* Phase 2 */}
                    <Reveal delay={200} className="h-full">
                            <div className="premium-lift bg-brand-text rounded-3xl p-6 md:p-10 border border-white/10 shadow-xl relative hover:shadow-card-hover transition-all duration-500 h-full flex flex-col text-white">
                            <div className="bg-brand-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block w-fit mb-6">
                                Fase 2 — Estrategia a medida
                            </div>
                            <div className="flex flex-col gap-2 mb-6">
                                <span className="text-3xl sm:text-5xl font-bold text-white leading-tight">Consultá tu precio</span>
                                <span className="opacity-50 text-sm">Lo armamos segun tu estrategia y objetivos</span>
                                <span className="text-white/60 text-sm">Referencia: un plan con todos los servicios ronda los G. 2.500.000</span>
                            </div>
                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex gap-3">
                                    <span className="text-brand-accent font-bold" aria-hidden="true">✓</span>
                                    <p className="font-bold">Sesión de Fotos mensual</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-brand-accent font-bold" aria-hidden="true">✓</span>
                                    <p className="font-bold">Estrategia de contenido personalizada</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-brand-accent font-bold" aria-hidden="true">✓</span>
                                    <p className="font-bold">Anuncios activos en Meta</p>
                                </div>
                                <div className="flex gap-3 text-white/60 text-sm">
                                    <span aria-hidden="true">+</span>
                                    <p>Tu inversión mensual en publicidad</p>
                                </div>
                                <p className="text-white/40 text-sm bg-white/5 p-4 rounded-xl italic border-l-4 border-white/10">
                                    "Mes a mes. Sin ataduras."
                                </p>
                            </div>
                            <a
                                href="https://wa.me/595975190555?text=Hola!%20Ya%20le%C3%AD%20toda%20la%20propuesta%20en%20la%20landing.%20Me%20interesa%20avanzar%20y%20quiero%20que%20hablemos%20c%C3%B3mo%20adaptarla%20a%20mi%20empresa%3A%20%E2%80%A6."
                                className="shine-on-hover block w-full text-center bg-brand-accent text-white py-4 rounded-2xl font-bold hover:bg-brand-accentHover transition-all duration-300 shadow-lg shadow-brand-accent/20 hover:-translate-y-0.5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Activá la Fase 2
                            </a>
                        </div>
                    </Reveal>
                </div>


            </div>
        </section>
    );
};

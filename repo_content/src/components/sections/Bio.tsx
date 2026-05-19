import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Bio: React.FC = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4" aria-label="Sobre Diego">
            <div className="premium-lift bg-brand-card rounded-3xl p-8 md:p-12 shadow-card border border-black/5 flex flex-col md:flex-row items-center gap-12 hover:shadow-card-hover transition-shadow duration-500">

                <Reveal className="flex-1 order-2 md:order-1">
                    <h2 className="font-display tracking-tight text-4xl font-bold text-brand-text mb-6">
                        No soy una agencia.
                    </h2>
                    <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                        <p>
                            Soy el jefe del proyecto y me hago cargo de todo: las fotos, la estrategia, los anuncios, los resultados. Tengo detrás el equipo de <span className="font-semibold text-brand-text">Agencia Zeta</span> — diseñadores y especialistas que ejecutan partes del proceso — pero vos hablás conmigo. Yo conozco tu marca de punta a punta. Yo te doy la cara.
                        </p>
                        <p>
                            No vas a explicarle tu negocio a cuatro personas distintas. No vas a esperar tres días para que "el equipo revise tu consulta".
                            Un mensaje de WhatsApp. Directo. Y avanzamos.
                        </p>
                    </div>

                    <blockquote className="shine-surface bg-gray-50 rounded-xl p-5 border-l-4 border-brand-accent relative">
                        <div className="absolute -top-2 -left-1 text-brand-accent/20 text-4xl font-serif" aria-hidden="true">"</div>
                        <p className="text-sm text-gray-500 italic pl-2">
                            La atención que te doy es la misma que me gustaría recibir si fuera el dueño del local.
                        </p>
                    </blockquote>
                </Reveal>

            </div>
        </section>
    );
};

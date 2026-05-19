import React, { useState } from 'react';

export const Footer: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "¿Cuánto tengo que invertir en publicidad aparte del fee mensual?",
            a: "Para empezar, con ₲ 400.000 a ₲ 1.000.000 mensuales en pauta ya se ven resultados concretos. Esa plata va directo a Meta — vos la manejás desde tu propia cuenta. Yo te digo cómo distribuirla para que rinda."
        },
        {
            q: "¿Y si no me gustan las fotos o el resultado?",
            a: "Por eso la Fase 1 ahora es gratis. Si terminamos y no te convence lo que ves, no seguimos. Tu unica inversion es una tarde de tu tiempo."
        },
        {
            q: "Ya contraté una agencia y no funcionó. ¿Por qué esto sería diferente?",
            a: "Porque las agencias te piden que vos les mandes el material. Acá soy yo el que va a tu local con la cámara, y hago las fotos sabiendo ya qué anuncio voy a correr con ellas."
        },
        {
            q: "¿En cuánto tiempo veo resultados?",
            a: "El branding y el feed lo tenés en 7 días. Los resultados de publicidad, entre 2 y 4 semanas de campaña activa ya hay datos concretos para evaluar. Aunque a partir de los 2 meses es que recién se pueden conseguir muy buenos resultados optimizados a tu cuenta."
        },
        {
            q: "¿Tengo que firmar algún contrato?",
            a: "No. La Fase 2 es mes a mes. Si sentís que no está funcionando, me avisás y cortamos. Sin penalidades."
        }
    ];

    return (
        <footer className="bg-brand-bg pt-20 pb-10 border-t border-black/5">

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto px-4 mb-20">
                <div className="text-center mb-10">
                    <span className="bg-brand-accentLight text-brand-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">FAQ</span>
                    <h2 className="font-display tracking-tight text-3xl md:text-4xl font-bold text-brand-text mt-5">Preguntas frecuentes</h2>
                </div>

                <div className="space-y-4" role="region" aria-label="Preguntas frecuentes">
                    {faqs.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-soft hover:shadow-card transition-shadow duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left focus:ring-2 focus:ring-brand-accent focus:ring-inset rounded-2xl transition-colors duration-300 hover:bg-gray-50/50"
                                aria-expanded={openIndex === i}
                                aria-controls={`faq-answer-${i}`}
                                id={`faq-question-${i}`}
                            >
                                <span className="font-semibold text-gray-800 pr-4">{item.q}</span>
                                <span
                                    className={`text-brand-accent text-xl flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-brand-accent text-white rotate-45' : 'bg-brand-accentLight'}`}
                                    aria-hidden="true"
                                >
                                    +
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${i}`}
                                role="region"
                                aria-labelledby={`faq-question-${i}`}
                                className={`accordion-content ${openIndex === i ? 'open' : ''}`}
                            >
                                <div className="accordion-inner">
                                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-black/5 pt-8">
                <div className="flex items-center gap-2.5">
                    <span className="font-display text-xl font-black text-brand-text tracking-tighter">
                        <span className="bg-gradient-to-br from-brand-text to-brand-accent bg-clip-text text-transparent">Nuñez</span>
                    </span>
                </div>

                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Diego Núñez — Full Stack Marketer | Asunción, Paraguay
                </p>

            </div>
        </footer>
    );
};

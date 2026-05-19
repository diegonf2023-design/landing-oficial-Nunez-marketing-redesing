import React from 'react';
import { Reveal } from '../ui/Reveal';

export const WhoFor: React.FC = () => {
    const yesItems = [
        {
            title: "Tenés un local físico con productos",
            desc: "Sabés que lo que vendés es bueno, pero tus redes sociales actuales no demuestran esa calidad ni atraen a la gente correcta."
        },
        {
            title: "Tenés presupuesto para invertir",
            desc: "Entendés que la publicidad es el motor para crecer y contás con capital mensual para atraer clientes nuevos de forma constante."
        },
        {
            title: "Querés delegar y enfocarte en tu negocio",
            desc: "Buscás a alguien que se encargue de todo el proceso (fotos, estrategia y anuncios) sin que tengas que estar controlando o corrigiendo cada publicación."
        }
    ];

    const noItems = [
        {
            title: "No tenés un producto físico para mostrar",
            desc: "Vendés servicios, cursos, o recién estás probando tu idea de negocio."
        },
        {
            title: "Tu negocio necesita ventas urgentes",
            desc: "Las estrategias sólidas toman un poco de tiempo en madurar."
        },
        {
            title: "Solo buscás \"alguien que te maneje las redes\"",
            desc: "Si lo único que querés es un diseñador que te suba tres fotos por semana para no tener el Instagram vacío, mi sistema te va a parecer innecesario. Yo construyo sistemas de venta."
        }
    ];

    return (
        <section className="py-24 bg-brand-bg px-4" aria-label="Para quién es y para quién no">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                <Reveal className="premium-lift bg-white rounded-3xl p-8 border border-green-500/10 shadow-soft relative overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-500 to-emerald-400 rounded-r-full" aria-hidden="true"></div>
                    <h3 className="font-display tracking-tight text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg" aria-hidden="true">✓</span>
                        Trabajemos juntos si:
                    </h3>
                    <ul className="space-y-5" aria-label="Lista de clientes ideales">
                        {yesItems.map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true"></span>
                                <div>
                                    <p className="font-bold text-gray-800 leading-snug mb-1">{item.title}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={100} className="premium-lift bg-white rounded-3xl p-8 border border-red-400/10 shadow-soft relative overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-400 to-rose-400 rounded-r-full" aria-hidden="true"></div>
                    <h3 className="font-display tracking-tight text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-lg" aria-hidden="true">✕</span>
                        No soy la persona indicada si:
                    </h3>
                    <ul className="space-y-5" aria-label="Lista de clientes no ideales">
                        {noItems.map((item, i) => (
                            <li key={i} className="flex gap-3">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" aria-hidden="true"></span>
                                <div>
                                    <p className="font-bold text-gray-800 leading-snug mb-1">{item.title}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Reveal>

            </div>
        </section>
    );
};

import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Problem: React.FC = () => {
    const problems = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
            ),
            title: "Fotos que no venden",
            desc: "Sacás fotos con el celular. Se ven amateurs. Tu producto se ve peor de lo que es en realidad."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Sin tiempo para gestionar",
            desc: "Sos dueño y gerente. No tenés 2 horas al día para pensar ideas de contenido o editar videos."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v16a2 2 0 0 0 2 2h16M7 16h6M7 11h8M7 6h12" />
                </svg>
            ),
            title: "Pagaste y no funcionó",
            desc: "Agencias que suben fechas especiales irrelevantes y te cobran fortunas sin traerte un solo cliente."
        }
    ];

    return (
        <section id="problema" className="py-24 bg-brand-bg px-4" aria-label="El problema">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <Reveal>
                        <div className="inline-block px-4 py-1.5 bg-brand-accentLight text-brand-accent rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                            El Problema
                        </div>
                        <h2 className="font-display tracking-tight text-4xl md:text-5xl font-bold text-brand-text mb-6 leading-tight">
                            Feed que le baja el ticket <br /><span className="text-gray-400">a tu producto</span>
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            Fotos de celular. Mala luz. Sin línea visual. El cliente potencial abre tu Instagram, lo lee como un negocio más chico, más informal, más barato — y cierra. El ticket promedio no entra.
                        </p>

                        <div className="space-y-6">
                            {problems.map((prob, i) => (
                                <div key={i} className="flex gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-soft flex items-center justify-center text-brand-accent border border-black/5 group-hover:shadow-card group-hover:-translate-y-0.5 group-hover:text-brand-accentHover transition-all duration-300">
                                        {prob.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-display tracking-tight text-xl font-bold text-brand-text mb-1.5 group-hover:text-brand-accent transition-colors duration-300">{prob.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {prob.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Right Visual */}
                    <div className="relative">
                        <Reveal delay={200} direction="right" className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/80 to-purple-50/60 rounded-3xl transform rotate-3 scale-95" aria-hidden="true"></div>
                            <div className="premium-lift bg-white rounded-3xl shadow-card p-8 relative border border-black/5 hover:shadow-card-hover transition-shadow duration-500">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="font-display tracking-tight text-lg font-bold text-gray-800">3 escenarios reales</h4>
                                    <span className="text-xs text-gray-500">Resultado neto</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="rounded-2xl border border-red-100 bg-red-50/70 p-5 backdrop-blur-sm">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-bold text-gray-800">Solo (sin ayuda)</p>
                                                <p className="text-xs text-gray-500">Solo pauta, sin estrategia visual</p>
                                            </div>
                                            <span className="text-[11px] bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">Margen muy bajo</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                                            <div className="rounded-xl bg-white/70 border border-white/80 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-gray-500">Pusiste</p>
                                                <p className="text-sm font-semibold text-gray-800">₲ 500.000</p>
                                            </div>
                                            <div className="rounded-xl bg-white/70 border border-white/80 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-gray-500">Facturaste</p>
                                                <p className="text-sm font-semibold text-gray-800">₲ 726.000</p>
                                            </div>
                                            <div className="rounded-xl bg-red-100/80 border border-red-200 p-3">
                                                <div className="flex items-center gap-1 text-red-700 text-[11px] font-semibold uppercase tracking-wide">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m4.5 10.5 7.5-7.5 7.5 7.5" />
                                                        <path d="M12 3v18" />
                                                    </svg>
                                                    Resultado neto
                                                </div>
                                                <p className="text-lg font-bold text-red-700">+ ₲ 226.000</p>
                                                <p className="text-[11px] text-red-600">Margen muy bajo</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-5 backdrop-blur-sm">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-bold text-gray-800">Agencia tradicional</p>
                                                <p className="text-xs text-gray-500">Honorarios altos + mala gestión</p>
                                            </div>
                                            <span className="text-[11px] bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-semibold">Margen bajo</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                                            <div className="rounded-xl bg-white/70 border border-white/80 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-gray-500">Pusiste</p>
                                                <p className="text-sm font-semibold text-gray-800">₲ 2.500.000</p>
                                            </div>
                                            <div className="rounded-xl bg-white/70 border border-white/80 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-gray-500">Facturaste</p>
                                                <p className="text-sm font-semibold text-gray-800">₲ 2.953.000</p>
                                            </div>
                                            <div className="rounded-xl bg-orange-100/80 border border-orange-200 p-3">
                                                <div className="flex items-center gap-1 text-orange-700 text-[11px] font-semibold uppercase tracking-wide">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m4.5 10.5 7.5-7.5 7.5 7.5" />
                                                        <path d="M12 3v18" />
                                                    </svg>
                                                    Resultado neto
                                                </div>
                                                <p className="text-lg font-bold text-orange-700">+ ₲ 453.000</p>
                                                <p className="text-[11px] text-orange-700">Ganancia mínima</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-lg shadow-emerald-200/40 backdrop-blur-sm ring-1 ring-emerald-200/60">
                                        <span className="absolute -top-3 right-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">× 17 de ganancia</span>
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-sm font-bold text-emerald-900">Con nosotros</p>
                                                <p className="text-xs text-emerald-700/80">Electrodomésticos · 147 ventas cerradas</p>
                                            </div>
                                            <span className="text-[11px] bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">Ganancia real</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                                            <div className="rounded-xl bg-white/80 border border-emerald-100 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-emerald-700/70">Invertiste</p>
                                                <p className="text-sm font-semibold text-emerald-900 leading-tight">
                                                    <span className="whitespace-nowrap">₲ 2.200.000</span> + <span className="whitespace-nowrap">₲ 5.850.000</span> <span className="text-[10px] opacity-80">pauta</span>
                                                </p>
                                            </div>
                                            <div className="rounded-xl bg-white/80 border border-emerald-100 p-3">
                                                <p className="text-[11px] uppercase tracking-wide text-emerald-700/70">Facturaste</p>
                                                <p className="text-sm font-semibold text-emerald-900 whitespace-nowrap">₲ 143.000.000+</p>
                                            </div>
                                            <div className="rounded-xl bg-emerald-100/80 border border-emerald-200 p-3">
                                                <div className="flex items-center gap-1 text-emerald-800 text-[11px] font-semibold uppercase tracking-wide">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                        <path d="m4.5 10.5 7.5-7.5 7.5 7.5" />
                                                        <path d="M12 3v18" />
                                                    </svg>
                                                    Ganancia neta
                                                </div>
                                                <p className="text-sm sm:text-base md:text-sm lg:text-base font-bold text-emerald-800 tracking-tight transition-all break-all">+₲ 134.950.000</p>
                                                <p className="text-[11px] text-emerald-700">Por cada guaraní invertido, recuperaron 17</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-[11px] text-emerald-700/70 text-center leading-relaxed">
                                            Basado en el caso real de <a href="#portafolio" className="font-semibold underline underline-offset-2 hover:text-emerald-800 transition-colors">Haverland Electrodomésticos</a> — Ver métricas reales abajo.
                                        </p>
                                        <p className="mt-2 text-[10px] text-emerald-600/60 text-center italic leading-relaxed">
                                            Estos resultados suceden cuando el producto es muy bueno y la estrategia es impecable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={400} direction="up">
                            <div className="shine-surface premium-lift bg-white rounded-3xl p-7 border border-indigo-100 shadow-2xl shadow-indigo-100/50 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/40 to-white/60 opacity-100"></div>
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                                    <p className="text-lg font-bold text-gray-900 text-center sm:text-left">
                                        Si no me crees, <span className="text-brand-accent">mira mis resultados</span>
                                    </p>
                                    <a
                                        href="#portafolio"
                                        className="shine-on-hover bg-brand-accent text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm group"
                                    >
                                        Ver métricas
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>


                </div>
            </div>
        </section>
    );
};

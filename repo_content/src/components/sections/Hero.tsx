import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-x-clip" aria-label="Sección principal">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-50/60 via-purple-50/30 to-transparent -z-10 rounded-full blur-3xl" aria-hidden="true"></div>
            <div className="ambient-spotlight -z-10" aria-hidden="true"></div>

            <div className="mb-10 max-w-4xl">
                <div className="hero-enter shine-surface inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-black/5 rounded-full px-5 py-2 mb-8 shadow-soft" style={{ animationDelay: '80ms' }}>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true"></span>
                    <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">LUGARES DISPONIBLES: 2</span>
                </div>

                <h1 className="hero-enter font-display tracking-tight text-5xl md:text-7xl font-bold leading-tight text-brand-text mb-6" style={{ animationDelay: '180ms' }}>
                    ¿Tus redes son la pieza que está frenando tu facturación?
                </h1>

                <p className="hero-enter text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed" style={{ animationDelay: '300ms' }}>
                    Aplicá al Sistema de Adquisición Visual — Sacá tu Instagram de la lista de cuellos de botella de tu negocio.
                </p>

                <div className="hero-enter flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '420ms' }}>
                    <a
                        href="https://wa.me/595975190555?text=Hola!%20Quiero%20vender%20m%C3%A1s%20con%20mis%20redes.%20Vi%20tu%20propuesta%20y%20me%20interesa%20saber%20c%C3%B3mo%20aplica%20a%20mi%20negocio."
                        className="shine-on-hover bg-brand-accent hover:bg-brand-accentHover text-white font-semibold text-lg px-8 py-4 rounded-full shadow-btn hover:shadow-btn-hover transition-all duration-300 transform hover:-translate-y-1 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 animate-glow-pulse"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Quiero vender más
                    </a>
                    <a
                        href="#portafolio"
                        className="px-8 py-4 rounded-full text-gray-600 font-semibold hover:bg-white hover:shadow-soft hover:text-brand-accent transition-all duration-300 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                    >
                        Mirá trabajos reales
                    </a>
                </div>
            </div>

            {/* Asymmetric Glassmorphism Cards */}
            <div className="hero-enter w-full max-w-6xl relative mt-8" style={{ animationDelay: '560ms' }}>

                {/* Decorative blobs — behind cards */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" aria-hidden="true"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" aria-hidden="true"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" aria-hidden="true"></div>

                <div className="relative flex items-center justify-center py-8 px-4">

                    {/* Red facts column — LEFT of BEFORE card, desktop only */}
                    <div className="hidden md:flex flex-col gap-3 items-end mr-5 self-center z-30 flex-shrink-0">
                        {[
                            { label: "De cada 100", value: "6 compran", path: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" },
                            { label: "Costo por cliente", value: "Muy alto", path: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" },
                            { label: "Retorno de la inversión", value: "Casi nulo", path: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
                        ].map((fact, i) => (
                            <div key={i} className="premium-lift bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] border border-red-100 flex items-center gap-3 whitespace-nowrap">
                                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={fact.path} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5">{fact.label}</p>
                                    <p className="text-[11px] font-bold text-red-600 leading-none">{fact.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* BEFORE card — relegada, desaturada, ligeramente detrás */}
                    <div className="relative z-10 flex-shrink-0 w-[42vw] max-w-[260px] md:w-[540px] -mr-[3vw] md:-mr-10 translate-y-4 -rotate-[2deg] scale-[0.93] saturate-50">
                        <div className="premium-lift bg-white/70 backdrop-blur-sm rounded-[2rem] p-4 md:p-5 border border-white/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]">
                            <div className="mb-3 md:mb-4">
                                <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white/90 text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full">
                                    📸 Foto Casual
                                </span>
                            </div>
                            <img
                                src="/images/699fab189a0c18c7f4b2cbee.webp"
                                alt="Estado antes: foto casual sin producción"
                                loading="lazy"
                                className="w-full rounded-2xl object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>

                    {/* OPTIMIZED card — en primer plano, radiante, con glow */}
                    <div className="relative z-20 flex-shrink-0 w-[52vw] max-w-[300px] md:w-[660px]">
                        {/* Glow lila detrás de la tarjeta */}
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-indigo-400/20 blur-2xl" aria-hidden="true"></div>

                        <div className="animate-float-soft relative bg-white/95 backdrop-blur-md rounded-[2rem] p-4 md:p-6 border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12),0_0_40px_-8px_rgba(99,102,241,0.12)]">
                            <div className="mb-3 md:mb-4">
                                <span className="inline-flex items-center gap-1.5 bg-white border border-indigo-100 text-indigo-500 text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full shadow-sm">
                                    ✨ Estándar 5 Estrellas
                                </span>
                            </div>
                            <img
                                src="/images/699e56b61001a51ae6540847.webp"
                                alt="Estado optimizado: producción profesional"
                                loading="lazy"
                                className="w-full rounded-2xl object-cover aspect-[4/5]"
                            />

                            {/* Floating Stats Tooltip */}
                            <div className="animate-float-soft absolute -bottom-4 -right-2 md:-right-12 bg-white rounded-2xl px-3 md:px-4 py-2.5 md:py-3 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] border border-black/5 flex items-center gap-2 md:gap-3" style={{ '--float-delay': '1.1s' } as React.CSSProperties} aria-label="Resultado: +320% de engagement">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[9px] md:text-[10px] text-gray-400 font-medium leading-none mb-1">Engagement</p>
                                    <p className="text-xs md:text-sm font-bold text-emerald-500 leading-none">+320%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Green facts column — RIGHT of OPTIMIZED card, desktop only */}
                    <div className="hidden md:flex flex-col gap-3 items-start ml-5 self-center z-30 flex-shrink-0">
                        {[
                            { label: "Mensajes recibidos", value: "297 Consultas", path: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" },
                            { label: "Pedidos concretados", value: "120 Ventas", path: "M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.286 5.963" },
                            { label: "Inversión multiplicada", value: "× 11 veces", path: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" },
                        ].map((fact, i) => (
                            <div key={i} className="premium-lift bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] border border-emerald-100 flex items-center gap-3 whitespace-nowrap">
                                <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={fact.path} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[9px] text-gray-400 font-medium leading-none mb-0.5">{fact.label}</p>
                                    <p className="text-[11px] font-bold text-emerald-600 leading-none">{fact.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

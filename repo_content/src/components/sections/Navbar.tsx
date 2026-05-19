import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Problema", href: "#problema" },
        { name: "Resultados", href: "#portafolio" },
        { name: "Oferta", href: "#oferta" },
    ];

    return (
        <nav
            id="navbar"
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-soft py-2' : 'bg-transparent py-4'}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2.5">
                        <a href="#" className="font-display text-2xl font-black text-brand-text tracking-tighter hover:text-brand-accent transition-colors duration-300 overflow-visible pr-1">
                            <span className="bg-gradient-to-br from-brand-text to-brand-accent bg-clip-text text-transparent inline-block pb-0.5 pr-2">Nuñez</span>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-brand-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-brand-accentLight/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/595975190555?text=Hola!%20Ya%20le%C3%AD%20toda%20la%20propuesta%20en%20la%20landing.%20Me%20interesa%20avanzar%20y%20quiero%20que%20hablemos%20c%C3%B3mo%20adaptarla%20a%20mi%20empresa%3A%20%E2%80%A6."
                                className="bg-brand-text text-white px-6 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-sm shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 ml-4"
                                aria-label="Cordinar el inicio del servicio por WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cordinar el inicio del servicio
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-500 hover:text-brand-accent hover:bg-brand-accentLight/50 transition-all duration-300 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                role="menu"
            >
                <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-xl border-t border-black/5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-brand-accent hover:bg-brand-accentLight/50 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300"
                            role="menuitem"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/595975190555?text=Hola!%20Ya%20le%C3%AD%20toda%20la%20propuesta%20en%20la%20landing.%20Me%20interesa%20avanzar%20y%20quiero%20que%20hablemos%20c%C3%B3mo%20adaptarla%20a%20mi%20empresa%3A%20%E2%80%A6."
                        className="w-full text-center block bg-brand-text text-white px-4 py-3 rounded-full font-bold mt-4 shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all duration-300 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                        role="menuitem"
                        aria-label="Cordinar el inicio del servicio por WhatsApp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cordinar el inicio del servicio
                    </a>
                </div>
            </div>
        </nav>
    );
};

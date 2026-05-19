import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'El problema', href: '#problema' },
        { label: 'Trabajos', href: '#portafolio' },
        { label: 'La Oferta', href: '#oferta' },
    ];

    return (
        <header 
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-[var(--color-brand-bg)]/90 backdrop-blur-md border-b border-[var(--color-border-dark)] py-4 shadow-sm" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="#" className="font-display text-lg md:text-2xl font-bold tracking-tight text-[var(--color-brand-text)] flex items-center gap-1.5 uppercase">
                    Nuñez<span className="text-[var(--color-brand-accent)] font-serif font-black">.</span>Marketing
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a 
                            key={link.label} 
                            href={link.href}
                            className="text-[11px] font-bold text-[var(--color-brand-text)]/70 hover:text-[var(--color-brand-text)] uppercase tracking-[0.2em] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="https://wa.me/595975190555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[var(--color-brand-text)] text-[var(--color-brand-text)] hover:bg-[var(--color-brand-text)] hover:text-[var(--color-brand-bg)] px-[18px] py-[8px] rounded-full text-[11px] font-bold uppercase tracking-[0.1em] transition-all"
                    >
                        Hablemos
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden p-2 text-[var(--color-brand-text)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[var(--color-brand-bg)] border-b border-[var(--color-border-dark)] shadow-lg md:hidden flex flex-col items-center py-8 gap-6"
                    >
                        {navLinks.map((link) => (
                            <a 
                                key={link.label} 
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[12px] font-bold text-[var(--color-brand-text)] uppercase tracking-[0.2em]"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a 
                            href="https://wa.me/595975190555"
                            onClick={() => setMobileMenuOpen(false)}
                            className="border-2 border-[var(--color-brand-text)] text-[var(--color-brand-text)] px-[20px] py-[10px] rounded-full text-[12px] font-bold uppercase tracking-[0.15em] transition-all"
                        >
                            Hablemos
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

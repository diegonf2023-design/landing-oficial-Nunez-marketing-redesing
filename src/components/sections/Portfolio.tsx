import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { Camera, Image as ImageIcon, LineChart, LayoutTemplate } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Portfolio: React.FC = () => {
    const tabs = [
        { id: 'branding', label: 'Marca & Feed', icon: <LayoutTemplate size={14} /> },
        { id: 'creativos', label: 'Anuncios', icon: <ImageIcon size={14} /> },
        { id: 'fotografias', label: 'Fotografías', icon: <Camera size={14} /> },
        { id: 'metrics', label: 'Métricas', icon: <LineChart size={14} /> },
    ] as const;

    type TabId = typeof tabs[number]['id'];
    const [activeTab, setActiveTab] = useState<TabId>('branding');

    const handleTabClick = (id: TabId) => {
        setActiveTab(id);
    };

    const brandingImages = [
        "/images/699e4c568ae9a1181746a6bc.webp",
        "/images/699e4c56456975f9ab317823.webp",
        "/images/699e4c56590acb0d9331f910.webp",
        "/images/699f086295735c79c9b08a4e.webp"
    ];

    const creativosImages = [
        "/images/699f9312c4ebfe80351213dc.webp",
        "/images/699f9713e3be1479e39bdc15.webp",
        "/images/699f93120867dd8704b79c16.webp"
    ];

    const fotografiaImages = [
        "/images/699e40634569756c832d89c8.webp",
        "/images/699e407a1001a5d5794d28d3.webp",
        "/images/699e408b1001a57d3f4d2ac8.webp",
        "/images/699e41f83730802a6dea8bdd.webp",
        "/images/699f805af074ea1082e21ade.webp",
        "/images/699e42ef590acb33a82ecd8f.webp",
        "/images/699e43032837e85374500857.webp",
        "/images/699f7ae69a0c1807cfa29f6f.webp"
    ];

    const ImageGrid = ({ images, columns = 2 }: { images: string[], columns?: number, key?: string }) => (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`grid gap-6 ${columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'} w-full`}
        >
            {images.map((src, i) => (
                <div key={i} className="group relative rounded-[20px] overflow-hidden shadow-soft border-2 border-[var(--color-brand-text)]/10 bg-white aspect-[4/5] p-2 hover:border-[var(--color-brand-text)]/30 transition-all duration-500">
                    <img 
                        src={src} 
                        alt="Portfolio item" 
                        loading="lazy" 
                        className="w-full h-full object-cover rounded-[14px] transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                    <div className="absolute inset-2 bg-gradient-to-t from-[var(--color-brand-text)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[14px]" />
                </div>
            ))}
        </motion.div>
    );

    return (
        <section id="portafolio" className="py-28 bg-[var(--color-brand-bg)] relative overflow-hidden border-t border-[var(--color-border-dark)]">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <Reveal className="text-center mb-16">
                    <p className="text-[10px] font-bold uppercase tracking-[3px] text-[var(--color-brand-accent)] mb-4">ALTA COSTURA DIGITAL</p>
                    <h2 className="font-display text-[42px] md:text-[56px] leading-[1] text-[var(--color-brand-text)] mb-4 uppercase font-light">
                        TRABAJOS <span className="font-serif italic font-light text-[var(--color-brand-accent)] text-stroke">reales</span>
                    </h2>
                    <p className="text-[var(--color-brand-text)]/75 max-w-xl mx-auto text-[15px] md:text-[16px] font-medium leading-relaxed">
                        Resultados tangibles para marcas líderes que decidieron no comprometer su prestigio visual.
                    </p>
                </Reveal>

                {/* Tabs with modern rounded badge look */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-2 rounded-full shadow-soft border border-[var(--color-border-dark)] flex flex-wrap justify-center gap-1.5 max-w-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab.id)}
                                className={cn(
                                    "px-[20px] py-[10px] rounded-full text-[9px] font-bold uppercase tracking-[2px] transition-all duration-300 flex items-center justify-center gap-2",
                                    activeTab === tab.id
                                        ? "bg-[var(--color-brand-text)] text-white shadow-soft"
                                        : "text-[var(--color-brand-text)]/60 hover:text-[var(--color-brand-text)] hover:bg-black/[0.03]"
                                )}
                            >
                                {tab.icon}
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[500px] flex justify-center">
                    <AnimatePresence mode="wait">
                        {activeTab === 'branding' && <ImageGrid key="branding" images={brandingImages} columns={4} />}
                        {activeTab === 'creativos' && <ImageGrid key="creativos" images={creativosImages} columns={3} />}
                        {activeTab === 'fotografias' && <ImageGrid key="fotografias" images={fotografiaImages} columns={4} />}
                        
                        {activeTab === 'metrics' && (
                            <motion.div 
                                key="metrics"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full grid md:grid-cols-2 gap-8"
                            >
                                {/* Metric 1 */}
                                <div className="bg-white rounded-[24px] overflow-hidden border border-[var(--color-border-dark)] shadow-soft group hover:-translate-y-1.5 transition-all duration-500">
                                    <div className="bg-[var(--color-brand-bg)] px-8 py-5 border-b border-[var(--color-border-dark)] flex items-center gap-3">
                                        <span className="border border-[var(--color-brand-text)]/20 text-[var(--color-brand-text)] text-[9px] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-[1px] bg-white">Haverland</span>
                                        <span className="text-[var(--color-brand-text)]/60 text-[10px] font-bold uppercase tracking-[1.5px] ml-auto">Electrodomésticos</span>
                                    </div>
                                    <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                                        <img src="/images/699f99f59a0c187565ad6ed5.webp" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" alt="Metrics Haverland" />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="font-display font-medium text-[20px] text-[var(--color-brand-text)] mb-3 tracking-tight uppercase">
                                            Invirtió <span className="font-serif italic text-[var(--color-brand-accent)]">₲ 5.85M</span> y facturó <span className="font-serif italic text-[var(--color-brand-accent)]">₲ 143M</span>
                                        </h4>
                                        <p className="text-[var(--color-brand-text)]/70 text-[13px] leading-[1.6] mb-6 font-medium">
                                            Se inyectaron ₲ 5.850.000 en pauta premium de Meta. Diseñamos artes editoriales refinados y estructuramos un flujo comercial para capturar más de 1.600 leads interesados de alta gama.
                                        </p>
                                        <div className="bg-emerald-50 rounded-full py-3 px-6 border border-emerald-500/10 flex items-center gap-3">
                                            <div className="bg-emerald-500/10 text-emerald-600 rounded-full p-1"><LineChart size={14} /></div>
                                            <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-[2px]">x24 RETORNO DE INVERSIÓN (ROAS)</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Metric 2 */}
                                <div className="bg-white rounded-[24px] overflow-hidden border border-[var(--color-border-dark)] shadow-soft group hover:-translate-y-1.5 transition-all duration-500">
                                    <div className="bg-[var(--color-brand-bg)] px-8 py-5 border-b border-[var(--color-border-dark)] flex items-center gap-3">
                                        <span className="border border-[var(--color-brand-text)]/20 text-[var(--color-brand-text)] text-[9px] font-bold px-[12px] py-[4px] rounded-full uppercase tracking-[1px] bg-white">Viruta</span>
                                        <span className="text-[var(--color-brand-text)]/60 text-[10px] font-bold uppercase tracking-[1.5px] ml-auto">Joyas & Accesorios</span>
                                    </div>
                                    <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                                        <img src="/images/699f99f3e3be14967d9d8d5d.webp" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" alt="Metrics Viruta" />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="font-display font-medium text-[20px] text-[var(--color-brand-text)] mb-3 tracking-tight uppercase">
                                            Invirtió <span className="font-serif italic text-[var(--color-brand-accent)]">₲ 2M</span> y facturó <span className="font-serif italic text-[var(--color-brand-accent)]">₲ 33M</span>
                                        </h4>
                                        <p className="text-[var(--color-brand-text)]/70 text-[13px] leading-[1.6] mb-6 font-medium">
                                            Campaña hiper-enfocada con anuncios elegantes de herencia artesanal. Más de 1.100 clientas de perfil premium interactuaron, logrando transacciones directas fluidas.
                                        </p>
                                        <div className="bg-emerald-50 rounded-full py-3 px-6 border border-emerald-500/10 flex items-center gap-3">
                                            <div className="bg-emerald-500/10 text-emerald-600 rounded-full p-1"><LineChart size={14} /></div>
                                            <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-[2px]">x16 RETORNO DE INVERSIÓN (ROAS)</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

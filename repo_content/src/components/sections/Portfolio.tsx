import React, { useState } from 'react';
import { Reveal } from '../ui/Reveal';

export const Portfolio: React.FC = () => {
    const tabs = [
        { id: 'branding', label: 'Marca & Feed' },
        { id: 'creativos', label: 'Anuncios' },
        { id: 'fotografias', label: 'Fotografías' },
        { id: 'metrics', label: 'Métricas' },
    ] as const;

    type TabId = typeof tabs[number]['id'];
    const [activeTab, setActiveTab] = useState<TabId>('branding');

    type PortfolioImage = {
        src: string;
        alt: string;
        aspect?: string;
        title?: string;
        url?: string;
    };

    type MetricCard = {
        src: string;
        alt: string;
        brandName: string;
        campaignType: string;
        title: string;
        description: string;
        highlight: string;
        crop?: string;
    };

    const pautaCards: MetricCard[] = [
        {
            src: "/images/699f99f59a0c187565ad6ed5.webp",
            alt: "Métricas Haverland — inversión 5.849.770 Gs., 147 ventas cerradas",
            brandName: "Haverland",
            campaignType: "Electrodomésticos · Clientes Potenciales",
            title: "Haverland — invirtió ₲ 5.850.000 y facturó ₲ 143.000.000",
            description: "Pusieron ₲ 5.850.000 en publicidad de Meta. Con eso cerramos 147 ventas de electrodomésticos y atrajimos a más de 1.600 personas interesadas. Cada guaraní que invirtieron les volvió 24 veces más.",
            highlight: "× 24 — por cada guaraní que pusieron en publicidad, recuperaron veinticuatro.",
            crop: "-translate-y-[11.5%]"
        },
        {
            src: "/images/699f99f3e3be14967d9d8d5d.webp",
            alt: "Métricas Viruta — inversión 2.000.000 Gs., 112 ventas concretadas",
            brandName: "Viruta",
            campaignType: "Joyas y Accesorios · Campañas de Mensajes",
            title: "Viruta — invirtió ₲ 2.000.000 y facturó ₲ 33.000.000",
            description: "Pusieron ₲ 2.000.000 en publicidad de Meta. Con eso logramos que más de 1.100 clientas potenciales escribieran a la marca y cerramos 112 ventas de joyas. Cada guaraní que invirtieron les volvió 16 veces más.",
            highlight: "× 16 — por cada guaraní que pusieron en publicidad, recuperaron dieciséis.",
            crop: "-translate-y-[14%]"
        }
    ];

    const brandingImages: PortfolioImage[] = [
        { src: "./images/699e4c568ae9a1181746a6bc.webp", alt: "Viruta joyas — Feed de marca", aspect: "aspect-[2/3]", title: "Viruta joyas", url: "https://www.instagram.com/viruta.py/" },
        { src: "./images/699e4c56456975f9ab317823.webp", alt: "La cocina de Sil — Feed de marca", aspect: "aspect-[2/3]", title: "La cocina de Sil", url: "https://www.instagram.com/lacocinadesilpy/?hl=es" },
        { src: "./images/699e4c56590acb0d9331f910.webp", alt: "Solanas Padel — Feed de marca", aspect: "aspect-[2/3]", title: "Solanas Padel", url: "https://www.instagram.com/solanaspadelpy/" },
        { src: "./images/699f086295735c79c9b08a4e.webp", alt: "La Clika bar — Feed de marca", aspect: "aspect-[2/3]", title: "La Clika bar", url: "https://www.instagram.com/laclikabar/" }
    ];

    const creativosImages: PortfolioImage[] = [
        { src: "./images/699f9312c4ebfe80351213dc.webp", alt: "Anuncio 2" },
        { src: "./images/699f9713e3be1479e39bdc15.webp", alt: "Anuncio 3" },
        { src: "./images/699f93120867dd8704b79c16.webp", alt: "Anuncio 1" }
    ];

    const fotografiaImages: PortfolioImage[] = [
        { src: "./images/699e40634569756c832d89c8.webp", alt: "Producto Gastronómico - Retrato", aspect: "aspect-[2/3]" },
        { src: "./images/699e407a1001a5d5794d28d3.webp", alt: "Sesión Exterior - Paisaje", aspect: "aspect-[3/2]" },
        { src: "./images/699e408b1001a57d3f4d2ac8.webp", alt: "Retrato Detalle", aspect: "aspect-[2/3]" },
        { src: "./images/699e41f83730802a6dea8bdd.webp", alt: "Social Media Lifestyle", aspect: "aspect-[3/2]" },
        { src: "./images/699f805af074ea1082e21ade.webp", alt: "Fotografía adicional 2", aspect: "aspect-[3/2]" },
        { src: "./images/699e42ef590acb33a82ecd8f.webp", alt: "Close-up Producto", aspect: "aspect-[2/3]" },
        { src: "./images/699e43032837e85374500857.webp", alt: "Composición Branding", aspect: "aspect-[3/2]" },
        { src: "./images/699f7ae69a0c1807cfa29f6f.webp", alt: "Fotografía adicional 1", aspect: "aspect-[2/3]" }
    ];

    const renderImageGrid = (
        images: PortfolioImage[],
        objectFitMode: 'cover' | 'contain' = 'cover',
        maxHeight?: string,
        fitToImage: boolean = false,
        gridClassName?: string,
        useFlexLayout: boolean = false,
        showOverlay: boolean = true
    ) => {
        const objectFitClass = objectFitMode === 'contain' ? 'object-contain' : 'object-cover';
        const maxHeightClass = maxHeight ? ` ${maxHeight}` : '';
        const baseGridClassName = gridClassName ?? 'grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6';
        const resolvedGridClassName = useFlexLayout
            ? `${baseGridClassName} items-start`
            : fitToImage
                ? `${baseGridClassName} justify-items-center`
                : baseGridClassName;

        return (
            <div className={resolvedGridClassName}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={
                            useFlexLayout
                                ? `premium-lift group relative rounded-3xl overflow-hidden shadow-sm`
                                : `premium-lift group relative rounded-3xl overflow-hidden bg-slate-100 shadow-sm${fitToImage ? ' w-fit max-w-full' : ''}`
                        }
                    >
                        <div
                            className={
                                useFlexLayout
                                    ? 'w-fit h-auto'
                                    : fitToImage
                                        ? 'relative inline-block'
                                        : `relative w-full ${img.aspect}${maxHeightClass}`
                            }
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className={
                                    useFlexLayout
                                        ? `w-full h-auto block ${objectFitClass} transition-transform duration-700 ease-out transform-gpu will-change-transform hover:scale-105`
                                        : fitToImage
                                            ? `block max-w-full h-auto${maxHeightClass} ${objectFitClass} transition-transform duration-700 ease-out transform-gpu will-change-transform hover:scale-105`
                                            : `w-full h-full ${objectFitClass} transition-transform duration-700 ease-out transform-gpu will-change-transform hover:scale-105`
                                }
                            />
                            {showOverlay ? (
                                <div
                                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    aria-hidden="true"
                                />
                            ) : null}
                            {showOverlay && img.url ? (
                                <a
                                    href={img.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between"
                                    aria-label={`Ver perfil de ${img.title ?? 'cliente'} en Instagram`}
                                >
                                    <span className="text-white text-sm font-semibold backdrop-blur-md bg-black/20 px-5 py-2.5 rounded-full border border-white/30 shadow-sm">
                                        {img.title ?? 'Ver trabajo'}
                                    </span>
                                    <svg className="w-5 h-5 text-white/80 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </a>
                            ) : showOverlay ? (
                                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-sm font-semibold backdrop-blur-md bg-black/20 px-5 py-2.5 rounded-full border border-white/30 shadow-sm">
                                        Ver trabajo
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="portafolio" className="py-24 bg-brand-bg" aria-label="Portafolio de trabajos reales">
            <div className="max-w-7xl mx-auto px-4">
                <Reveal className="text-center mb-12">
                    <h2 className="font-display tracking-tight text-4xl md:text-5xl font-bold text-brand-text mb-4">Trabajos Reales</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">Resultados tangibles para negocios que confían en mí.</p>
                </Reveal>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-12 px-2">
                    <div className="bg-white p-1.5 rounded-2xl md:rounded-full shadow-soft border border-black/5 grid grid-cols-2 md:inline-flex md:flex-nowrap gap-1 md:gap-0 w-full md:w-auto" role="tablist" aria-label="Categorías del portafolio">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                id={`tab-${tab.id}`}
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${tab.id}`}
                                className={`px-2 md:px-6 py-2.5 rounded-xl md:rounded-full text-[13px] md:text-sm font-semibold transition-all duration-300 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 ${activeTab === tab.id
                                    ? 'bg-brand-text text-white shadow-lg shadow-gray-900/20'
                                    : 'text-gray-500 hover:text-brand-accent hover:bg-brand-accentLight/50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'branding' && (
                        <div role="tabpanel" id="panel-branding" aria-labelledby="tab-branding">
                            <Reveal className="tab-panel-animate max-w-4xl mx-auto px-4 md:px-12">
                                {renderImageGrid(brandingImages, 'contain', 'max-h-[65vh]', true, 'grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-8')}
                            </Reveal>
                        </div>
                    )}

                    {activeTab === 'creativos' && (
                        <div role="tabpanel" id="panel-creativos" aria-labelledby="tab-creativos">
                            <Reveal className="tab-panel-animate max-w-6xl mx-auto px-4 md:px-6">
                                {renderImageGrid(
                                    creativosImages,
                                    'contain',
                                    undefined,
                                    false,
                                    'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
                                    true,
                                    false
                                )}
                            </Reveal>
                        </div>
                    )}

                    {activeTab === 'fotografias' && (
                        <div role="tabpanel" id="panel-fotografias" aria-labelledby="tab-fotografias">
                            <Reveal className="tab-panel-animate max-w-5xl mx-auto">
                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                                    {fotografiaImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className="premium-lift break-inside-avoid mb-8 sm:mb-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 isolate"
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                loading="eager"
                                                className="w-full h-auto block sm:max-h-[70vh] object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    )}

                    {activeTab === 'metrics' && (
                        <div role="tabpanel" id="panel-metrics" aria-labelledby="tab-metrics">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="premium-lift bg-white rounded-3xl p-6 border border-black/5 shadow-card hover:shadow-card-hover transition-shadow duration-500 md:col-span-2">
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-text">Pauta &amp; Ads</h3>
                                            <p className="text-gray-400 text-sm mt-1">Resultados Reales en Números</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {pautaCards.map((card, i) => (
                                            <div key={i} className="premium-lift rounded-2xl overflow-hidden border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                                                {/* Badge de marca y campaña */}
                                                <div className="bg-gray-50 px-6 pt-6">
                                                    <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-black/5">
                                                        <span className="inline-flex items-center bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">
                                                            {card.brandName}
                                                        </span>
                                                        <span className="text-gray-400 text-xs">{card.campaignType}</span>
                                                    </div>
                                                </div>
                                                {/* Imagen de métricas */}
                                                <div className="bg-white relative overflow-hidden flex items-start justify-center">
                                                    <div className="w-full overflow-hidden" style={{ minHeight: '280px' }}>
                                                        <img
                                                            src={card.src}
                                                            alt={card.alt}
                                                            loading="lazy"
                                                            className={`w-full h-auto block transform ${card.crop ?? '-translate-y-[14%]'} scale-[1.01]`}
                                                        />
                                                    </div>
                                                </div>
                                                {/* Bloque de caso de éxito */}
                                                <div className="bg-gray-50 p-6">
                                                    {/* Título */}
                                                    <h4 className="font-semibold text-gray-800 text-base mb-3 flex items-center gap-2">
                                                        <span aria-hidden="true">📈</span>
                                                        {card.title}
                                                    </h4>
                                                    {/* Descripción */}
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                        {card.description}
                                                    </p>
                                                    {/* Conclusión resaltada */}
                                                    <p className="text-green-600 font-semibold text-sm">
                                                        {card.highlight}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="premium-lift bg-white rounded-3xl p-8 border border-black/5 shadow-card hover:shadow-card-hover transition-shadow duration-500 md:col-span-2">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-text">Contenido Orgánico</h3>
                                            <p className="text-gray-400 text-sm mt-1">Alcance & Engagement</p>
                                        </div>
                                        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                                            +100k views
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-4 px-2 md:px-8">
                                        <div className="space-y-4 flex flex-col items-center">
                                            <span className="inline-flex items-center bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">
                                                Silvia Romero
                                            </span>
                                            <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-black/5 w-full max-w-[400px] md:max-w-none">
                                                <img
                                                    src="/images/699e4c56456975cd73317825.webp"
                                                    alt="Métricas contenido orgánico 1"
                                                    className="w-full h-auto md:max-h-[65vh] object-contain block"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4 flex flex-col items-center">
                                            <span className="inline-flex items-center bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full">
                                                Solanas padel
                                            </span>
                                            <div className="rounded-2xl overflow-hidden shadow-sm border border-black/5 bg-black/5 w-full max-w-[400px] md:max-w-none">
                                                <img
                                                    src="/images/699e4c564569759ed4317822.webp"
                                                    alt="Métricas contenido orgánico 2"
                                                    className="w-full h-auto md:max-h-[65vh] object-contain block"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

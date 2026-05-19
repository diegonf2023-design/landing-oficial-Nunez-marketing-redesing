import * as React from 'react';
import './LogoMarquee.css';

/* ─── Text-Only Minimalist Logos ───────────────────────────────────── */

const Neumaticos = () => (
    <div className="logo-text font-sans font-bold tracking-tight">
        Neumáticos Py <span className="font-normal">Automaq</span>
    </div>
);

const TheNewBlack = () => (
    <div className="logo-text font-sans font-medium uppercase tracking-[0.2em] text-sm">
        The New Black
    </div>
);

const UniversoElectrodomesticos = () => (
    <div className="logo-text font-display font-bold tracking-tight">
        Universo Electrodomésticos
    </div>
);

const Gondwana = () => (
    <div className="logo-text font-display font-black uppercase tracking-wider text-xl">
        Gondwana
    </div>
);

const PerezRamirez = () => (
    <div className="logo-text font-serif text-lg tracking-wide">
        Pérez Ramírez
    </div>
);

const StudioUnica = () => (
    <div className="logo-text font-sans font-light uppercase tracking-[0.3em] text-sm">
        Studio Única
    </div>
);

const Haverland = () => (
    <div className="logo-text font-display font-bold uppercase tracking-tight text-xl">
        Haverland
    </div>
);

const VirutaJewelryStore = () => (
    <div className="logo-text font-serif italic text-lg tracking-widest uppercase">
        Viruta <span className="font-sans font-normal text-xs tracking-widest opacity-60 ml-1">Jewelry Store</span>
    </div>
);

const Lipoesbelt = () => (
    <div className="logo-text font-serif italic text-xl">
        Lipoesbelt
    </div>
);

const Solanas = () => (
    <div className="logo-text font-sans font-bold uppercase tracking-[0.15em]">
        Solanas
    </div>
);

const DiCapri = () => (
    <div className="logo-text font-serif text-lg tracking-wide">
        DI <span className="font-sans font-bold text-sm mx-1">+</span> CAPRI
    </div>
);

/* ─── New Brands ────────────────────────────────────────────────── */

const Pani = () => (
    <div className="logo-text flex items-center gap-3">
        <span className="font-display font-black text-xl lowercase tracking-tighter">pani</span>
        <span className="font-sans text-[9px] uppercase tracking-[0.15em] opacity-50 mt-1">la vida es rica</span>
    </div>
);

const SilviaRomero = () => (
    <div className="logo-text font-serif italic text-lg tracking-tight">
        Silvia Romero
    </div>
);

const ElBeso = () => (
    <div className="logo-text font-display font-bold uppercase tracking-[0.4em] text-sm">
        El Beso
    </div>
);

const Hat = () => (
    <div className="logo-text font-sans font-black uppercase tracking-tighter text-2xl">
        HAT
    </div>
);

/* ─── Logo rows ────────────────────────────────────────────────────── */

const ROW_ONE: React.JSX.Element[] = [
    <Neumaticos />,
    <TheNewBlack />,
    <UniversoElectrodomesticos />,
    <Gondwana />,
    <PerezRamirez />,
    <StudioUnica />,
    <Pani />,
    <SilviaRomero />,
];

const ROW_TWO: React.JSX.Element[] = [
    <Haverland />,
    <VirutaJewelryStore />,
    <Lipoesbelt />,
    <Solanas />,
    <DiCapri />,
    <ElBeso />,
    <Hat />,
    <TheNewBlack />,
];

/* ─── Helper: one marquee row ──────────────────────────────────────── */

interface MarqueeRowProps {
    logos: React.ReactNode[];
    reverse?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ logos, reverse = false }) => {
    const cls = `marquee${reverse ? ' marquee--reverse' : ''}`;
    return (
        <div className={cls}>
            <div className="marquee__group" aria-hidden={reverse}>
                {logos.map((logo, i) => (
                    <React.Fragment key={i}>{logo}</React.Fragment>
                ))}
            </div>
            <div className="marquee__group" aria-hidden>
                {logos.map((logo, i) => (
                    <React.Fragment key={`dup-${i}`}>{logo}</React.Fragment>
                ))}
            </div>
        </div>
    );
};

/* ─── Main component ───────────────────────────────────────────────── */

export const LogoMarquee: React.FC = () => {
    return (
        <section
            className="py-20 bg-white border-y border-black/5 overflow-hidden"
            aria-label="Marcas que confían en Diego"
        >
            <div className="max-w-2xl mx-auto text-center px-4 mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
                    Clientes satisfechos
                </p>
                <h2
                    className="font-display tracking-tight text-3xl md:text-4xl font-bold text-brand-text"
                    style={{ fontVariantLigatures: 'none' }}
                >
                    Marcas que ya confiaron en nuestros servicios
                </h2>
            </div>

            <div className="marquee-wrapper">
                <MarqueeRow logos={ROW_ONE} />
                <MarqueeRow logos={ROW_TWO} reverse />
            </div>
        </section>
    );
};

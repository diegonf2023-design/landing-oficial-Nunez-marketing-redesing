import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'left' | 'right' | 'none';
}

const directionMap = {
    up: { hidden: 'translate-y-8', visible: 'translate-y-0' },
    left: { hidden: '-translate-x-8', visible: 'translate-x-0' },
    right: { hidden: 'translate-x-8', visible: 'translate-x-0' },
    none: { hidden: '', visible: '' },
};

export const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, direction = 'up' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const { hidden, visible } = directionMap[direction];

    return (
        <div
            ref={ref}
            className={`transition-all duration-[850ms] ease-out transform will-change-transform ${isVisible ? `opacity-100 blur-0 scale-100 ${visible}` : `opacity-0 blur-sm scale-[0.98] ${hidden}`
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

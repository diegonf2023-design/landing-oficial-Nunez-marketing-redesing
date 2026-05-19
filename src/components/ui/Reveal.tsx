import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'motion/react';
import { cn } from '../../lib/utils';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "100%", 
  className, 
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
    }
  };

  if (direction === 'none') {
    variants.hidden = { opacity: 0, y: 0, x: 0 };
  }

  return (
    <div ref={ref} style={{ width }} className={cn("relative", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay / 1000, ease: [0.25, 0.25, 0, 1] }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { type ReactNode } from 'react';
import type { Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

export const ScrollReveal = ({
  children,
  variants,
  className = '',
}: ScrollRevealProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

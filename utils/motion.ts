import { Variants } from 'framer-motion';

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  type: 'spring' | 'tween' = 'spring',
  delay: number,
  duration: number,
  offset: number = 50
): Variants => {
  const directionMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  };

  return {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: type === 'tween' ? 'easeOut' : undefined,
      },
    },
  };
};

export const textVariant = (delay: number = 0): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  type: 'spring' | 'tween',
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

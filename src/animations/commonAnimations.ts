import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export const floatLoop = {
  y: [0, -12, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const staggerItem = (delay: number) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
});

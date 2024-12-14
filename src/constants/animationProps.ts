export const slideInWithFade = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  viewport: { once: true, amount: 0.1 },
};

export const opacityFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 2, ease: "easeOut", delay: 0.1 },
  viewport: { once: true, amount: 0.1 },
};

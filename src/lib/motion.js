export const fadeUp = {
  offscreen: { opacity: 0, y: 24 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.7 },
  },
};

export const fadeUpReduced = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.4 } },
};

export const fadeIn = {
  offscreen: { opacity: 0 },
  onscreen: { opacity: 1, transition: { duration: 0.5 } },
};

export const defaultViewport = { once: true, amount: 0.2 };

export function getMotionVariant(reducedMotion, variant = fadeUp) {
  return reducedMotion ? fadeUpReduced : variant;
}

export function getHeroTransition(reducedMotion, delay = 0) {
  if (reducedMotion) {
    return { duration: 0.01, delay: 0 };
  }
  return { duration: 0.5, delay, ease: [0, 0.71, 0.2, 1.01] };
}

export function getHeroInitial(reducedMotion, withY = true) {
  if (reducedMotion) {
    return { opacity: 1, y: 0, x: 0, scale: 1 };
  }
  return withY ? { opacity: 0, y: 16 } : { opacity: 0, x: 0 };
}

export function getHeroAnimate(reducedMotion) {
  if (reducedMotion) {
    return { opacity: 1, y: 0, x: 0, scale: 1 };
  }
  return { opacity: 1, y: 0, x: 0, scale: 1 };
}

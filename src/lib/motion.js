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

export const worksGridVariant = {
  offscreen: { opacity: 0, y: 24 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.15, duration: 0.5 },
  },
};

export const defaultViewport = { once: true, amount: 0.2 };

const HERO_EASE = [0, 0.71, 0.2, 1.01];
const HERO_ANIMATE = { opacity: 1, y: 0, x: 0, scale: 1 };
const HERO_INITIAL_REDUCED = { opacity: 1, y: 0, x: 0, scale: 1 };
const HERO_INITIAL_WITH_Y = { opacity: 0, y: 16 };
const HERO_INITIAL_NO_Y = { opacity: 0, x: 0 };
const HERO_REDUCED_TRANSITION = { duration: 0.01, delay: 0 };

const heroTransitionCache = new Map();

export function getMotionVariant(reducedMotion, variant = fadeUp) {
  return reducedMotion ? fadeUpReduced : variant;
}

export function getHeroTransition(reducedMotion, delay = 0) {
  if (reducedMotion) {
    return HERO_REDUCED_TRANSITION;
  }
  if (!heroTransitionCache.has(delay)) {
    heroTransitionCache.set(delay, { duration: 0.5, delay, ease: HERO_EASE });
  }
  return heroTransitionCache.get(delay);
}

export function getHeroInitial(reducedMotion, withY = true) {
  if (reducedMotion) {
    return HERO_INITIAL_REDUCED;
  }
  return withY ? HERO_INITIAL_WITH_Y : HERO_INITIAL_NO_Y;
}

export function getHeroAnimate(reducedMotion) {
  return HERO_ANIMATE;
}

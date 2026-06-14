// Premium easing curves
const easeOutExpo = [0.16, 1, 0.3, 1]
const easeInOutCubic = [0.645, 0.045, 0.355, 1]
const springSoft = { type: 'spring', stiffness: 90, damping: 16, mass: 0.9 }

// Smooth fade up with a subtle scale for extra depth
export const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: easeOutExpo,
    },
  },
}

// Elegant reveal from left - with a touch of rotation for a less "typical" feel
export const revealLeft = {
  hidden: { opacity: 0, x: -70, rotate: -2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      x: { duration: 1.3, ease: easeOutExpo },
      rotate: { duration: 1.3, ease: easeOutExpo },
      opacity: { duration: 0.6, ease: 'easeOut' },
    },
  },
}

// Elegant reveal from right - mirrored rotation
export const revealRight = {
  hidden: { opacity: 0, x: 70, rotate: 2 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      x: { duration: 1.3, ease: easeOutExpo },
      rotate: { duration: 1.3, ease: easeOutExpo },
      opacity: { duration: 0.6, ease: 'easeOut' },
    },
  },
}

// Premium scale in - springy, with subtle overshoot
export const scaleInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springSoft,
  },
}

// Cinematic title entrance - layered scale + rise
export const titleReveal = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: easeOutExpo,
    },
  },
}

// Subtle parallax float with gentle rotation, springy settle
export const floatIn = {
  hidden: { opacity: 0, y: 70, rotate: -1.5, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: springSoft,
  },
}

// Stagger with longer delays for cinematic effect
export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
}

// Stagger with premium spacing and slight ease-in-out variety
export const premiumStagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      ease: easeInOutCubic,
    },
  },
}

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
}

// Menu animations
export const menuOpen = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
}

export const menuClose = {
  visible: { opacity: 1, x: 0 },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.35,
      ease: easeInOutCubic,
    },
  },
}

export const menuItemStagger = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

export const menuItem = {
  hidden: { opacity: 0, x: 24, rotate: 1 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: springSoft,
  },
}

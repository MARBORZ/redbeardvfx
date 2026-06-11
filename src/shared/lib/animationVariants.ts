// Smooth fade up - no jelly effect
export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOutCubic",
    },
  },
}

// Elegant reveal from left - ultra smooth
export const revealLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: "easeInOutCubic",
    },
  },
}

// Elegant reveal from right - ultra smooth
export const revealRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.4,
      ease: "easeInOutCubic",
    },
  },
}

// Premium scale in - subtle and smooth
export const scaleInUp = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: "easeInOutCubic",
    },
  },
}

// Cinematic title entrance - elegant and smooth
export const titleReveal = {
  hidden: { opacity: 0, y: 70, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: "easeInOutCubic",
    },
  },
}

// Subtle parallax float - smooth and elegant
export const floatIn = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOutCubic",
    },
  },
}

// Stagger with longer delays for cinematic effect
export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
}

// Stagger with premium spacing
export const premiumStagger = {
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.35,
    },
  },
}

export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
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
      ease: "easeInOutCubic",
    },
  },
}

export const menuClose = {
  visible: { opacity: 1, x: 0 },
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.4,
      ease: "easeInOutCubic",
    },
  },
}

export const menuItemStagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const menuItem = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOutCubic",
    },
  },
}

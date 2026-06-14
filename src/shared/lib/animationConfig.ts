/**
 * Готовые конфигурации для motion компонентов
 * Импортируй и используй эти объекты вместо создания переменных в компонентах
 */

const easeOutExpo = [0.16, 1, 0.3, 1]
const springSoft = { type: "spring", stiffness: 90, damping: 16, mass: 0.9 }

export const titleRevealAnimation = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  },
}

export const titleRevealViewAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOutExpo },
    },
  },
}

export const fadeUpAnimation = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutExpo },
    },
  },
}

export const fadeUpViewAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutExpo },
    },
  },
}

export const fadeUpWithDelayAnimation = (delay: number = 0.2) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutExpo, delay },
    },
  },
})

export const floatInAnimation = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springSoft,
    },
  },
}

export const successMessageAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: easeOutExpo },
}

export const errorMessageAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: easeOutExpo },
}

export const staggerContainerAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
}

export const staggerItemAnimation = {
  variants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOutExpo },
    },
  },
}

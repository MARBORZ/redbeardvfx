import { useConditionalAnimation } from './useConditionalAnimation'

// Shared "fade/slide in on mount, optionally delayed" setup
export const useEnterAnimation = (variants: any, delay?: number) =>
  useConditionalAnimation({
    initial: 'hidden',
    animate: 'visible',
    variants,
    ...(delay ? { transition: { delay } } : {}),
  })

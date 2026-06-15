import { useConditionalAnimation } from './useConditionalAnimation'
import { premiumStagger } from './animationVariants'

// Shared "container + staggered items" setup used by sections that
// reveal a grid/list of items on scroll.
export const useStaggerAnimation = (itemVariant: any, containerVariant: any = premiumStagger) => {
  const itemAnimation = useConditionalAnimation(itemVariant)
  const containerAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: containerVariant,
  })

  return { itemAnimation, containerAnimation }
}

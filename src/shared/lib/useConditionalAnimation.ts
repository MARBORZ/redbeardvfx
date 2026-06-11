import { useIsMobile } from './useIsMobile'

export const useConditionalAnimation = (config: any) => {
  const isMobile = useIsMobile()

  if (isMobile) return {} as any

  // If config has a 'variants' key, it's already the full animation object
  if (config.variants) return config

  // Otherwise, wrap it as variants
  return { variants: config }
}

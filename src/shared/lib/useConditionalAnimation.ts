import { useMediaQuery } from './useMediaQuery'

export const useConditionalAnimation = (config: any) => {
  const isMobile = useMediaQuery('(max-width: 767px)')

  if (isMobile) return {} as any

  // If config has a 'variants' key, it's already the full animation object
  if (config.variants) return config

  // Otherwise, wrap it as variants
  return { variants: config }
}

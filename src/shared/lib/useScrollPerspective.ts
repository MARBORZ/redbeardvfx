import { useState, useEffect, useRef } from 'react'

export const useScrollPerspective = () => {
  const [perspectiveValue, setPerspectiveValue] = useState(0)
  const elementRef = useRef<HTMLElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      // Отменяем предыдущий frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        const element = elementRef.current
        if (!element) return

        // Получаем позицию элемента относительно viewport
        const rect = element.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = window.innerHeight / 2

        // Вычисляем прогресс (-1 до 1, где 0 = в центре экрана)
        const progress = (elementCenter - viewportCenter) / viewportCenter

        // Ограничиваем значение от -1 до 1
        const clampedProgress = Math.max(-1, Math.min(1, progress))

        setPerspectiveValue(clampedProgress)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Вычисляем transform значения
  const getTransform = () => {
    // Если элемент выше экрана (progress < 0), он приближается
    // Если элемент ниже (progress > 0), он удаляется
    const scale = 1 - Math.abs(perspectiveValue) * 0.1 // scale от 0.9 до 1
    const rotateX = perspectiveValue * 12 // rotate от -12 до 12 deg
    const translateZ = Math.abs(perspectiveValue) * 60 // глубина эффекта

    return `perspective(1400px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`
  }

  return { elementRef, getTransform }
}

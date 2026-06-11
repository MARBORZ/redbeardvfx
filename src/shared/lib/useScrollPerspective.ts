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
    const scale = 1 - Math.abs(perspectiveValue) * 0.08 // scale от 0.92 до 1 (менее выразительно)
    const rotateX = perspectiveValue * 10 // rotate от -10 до 10 deg (более сдержанный)
    const translateZ = Math.abs(perspectiveValue) * 40 // глубина эффекта (менее выраженная)

    return `perspective(1200px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`
  }

  return { elementRef, getTransform }
}

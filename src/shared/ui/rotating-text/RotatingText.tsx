/**
 * Rotating Text Component
 *
 * EN: Cycles through a list of phrases one at a time with a soft opacity crossfade.
 *     All items are stacked in the same grid cell, so the box keeps the height of the
 *     tallest line and the layout never jumps. Switch delay is randomized in a range
 *     for an organic feel. Respects prefers-reduced-motion.
 *
 * RU: Поочерёдно показывает фразы из списка с плавным opacity-переходом.
 *     Все строки лежат в одной ячейке grid, поэтому блок держит высоту самой длинной
 *     строки и вёрстка не дёргается. Интервал смены — случайный в заданном диапазоне.
 *     Уважает prefers-reduced-motion.
 */

import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './RotatingText.module.scss'

interface RotatingTextProps {
  items: string[]
  /** Класс на обёртку — задаёт типографику (размер, цвет, ширину) текста. */
  className?: string
  /** Минимальная задержка между сменами, мс. */
  minInterval?: number
  /** Максимальная задержка между сменами, мс. */
  maxInterval?: number
}

export const RotatingText: FC<RotatingTextProps> = ({
  items,
  className,
  minInterval = 5000,
  maxInterval = 8000,
}) => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (items.length <= 1) return

    const tick = () => {
      const delay = minInterval + Math.random() * (maxInterval - minInterval)
      timerRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length)
        tick()
      }, delay)
    }

    tick()
    return () => clearTimeout(timerRef.current)
  }, [items.length, minInterval, maxInterval])

  return (
    <span className={clsx(styles.rotating, className)}>
      {items.map((item, i) => (
        <span
          key={item}
          aria-hidden={i !== index}
          className={clsx(styles.item, i === index && styles.active)}
        >
          {item}
        </span>
      ))}
    </span>
  )
}

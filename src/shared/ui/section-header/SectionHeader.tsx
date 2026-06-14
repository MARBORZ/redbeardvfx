/**
 * Section Header Component
 *
 * EN: Animated section header displaying label, title, and optional subtitle.
 *     Uses title reveal animation on desktop, static rendering on mobile for performance.
 *
 * RU: Анимированный заголовок секции, отображающий метку, заголовок и дополнительный подзаголовок.
 *     Использует анимацию раскрытия заголовка на рабочем столе, статичную отрисовку на мобильных для производительности.
 */

import { FC } from 'react'
import { motion } from 'motion/react'
import { titleReveal } from '@shared/lib/animationVariants'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ label, title, subtitle }) => {
  const sectionHeaderAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: titleReveal,
  })

  return (
    <motion.div className={styles.sectionHeader} {...sectionHeaderAnimation}>
      <p className={styles.sectionHeaderLabel}>{label}</p>
      <h2 className={styles.sectionHeaderTitle}>{title}</h2>
      {subtitle && <p className={styles.sectionHeaderSubtitle}>{subtitle}</p>}
    </motion.div>
  )
}

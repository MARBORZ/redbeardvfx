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
import { useIsMobile } from '@shared/lib/useIsMobile'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
}

export const SectionHeader: FC<SectionHeaderProps> = ({ label, title, subtitle }) => {
  const isMobile = useIsMobile()

  const sectionHeaderAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: titleReveal,
  })

  if (isMobile) {
    return (
      <div className={styles['section-header']}>
        <p className={styles['section-header__label']}>{label}</p>
        <h2 className={styles['section-header__title']}>{title}</h2>
        {subtitle && <p className={styles['section-header__subtitle']}>{subtitle}</p>}
      </div>
    )
  }

  return (
    <motion.div className={styles['section-header']} {...sectionHeaderAnimation}>
      <p className={styles['section-header__label']}>{label}</p>
      <h2 className={styles['section-header__title']}>{title}</h2>
      {subtitle && <p className={styles['section-header__subtitle']}>{subtitle}</p>}
    </motion.div>
  )
}

/**
 * Call To Action Section Component
 *
 * EN: Standalone closing section inviting visitors to get in touch.
 *
 * RU: Отдельная завершающая секция с призывом связаться.
 */

import { FC } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Button } from '@shared/ui/button/Button'
import { RotatingText } from '@shared/ui/rotating-text'
import { ctaTitle, ctaPunchlines } from '@shared/lib/data'
import { titleReveal } from '@shared/lib/animationVariants'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import styles from './Cta.module.scss'

export const Cta: FC = () => {
  const titleAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: titleReveal,
  })

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContainer}>
        <motion.div {...titleAnimation}>
          <p className={styles.ctaLabel}>Start a Project</p>
          <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
          <RotatingText items={ctaPunchlines} className={styles.ctaSubtitle} />
        </motion.div>
        <motion.div
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <Link to={'/contact'}>
            <Button variant="primary" size="xl">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

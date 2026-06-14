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
          <h2 className={styles.ctaTitle}>Let's create something incredible.</h2>
          <p className={styles.ctaSubtitle}>
            From blockbuster VFX sequences to indie passion projects — ready to bring your vision to life with industry-grade compositing and pipeline expertise.
          </p>
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

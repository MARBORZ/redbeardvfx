/**
 * Gallery Section Component
 *
 * EN: Showcases a grid of completed projects with staggered animations.
 *     Each project card animates in sequence with fade-up effect.
 *     Features scroll perspective effect on wide screens.
 *
 * RU: Демонстрирует сетку завершённых проектов с каскадными анимациями.
 *     Каждая карточка проекта анимируется по очереди с эффектом появления.
 *     На широких экранах используется эффект перспективы при прокрутке.
 */

import { motion } from 'motion/react'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { projects } from '@shared/lib/data'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import { useScrollPerspective } from '@shared/lib/useScrollPerspective'
import { fadeUpAnimation, staggerContainerAnimation, staggerItemAnimation } from '@shared/lib/animationConfig'
import { useState, useEffect, FC } from 'react'
import styles from './Gallery.module.scss'
import { useIsMobile } from '@shared/lib/useIsMobile'

export const Gallery: FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false)
  const isMobile = useIsMobile();
  const { elementRef, getTransform } = useScrollPerspective()
  const itemAnimation = useConditionalAnimation(staggerItemAnimation)
  const containerAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  })

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth >= 1440)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  const largeProjects = projects.filter(p => p.width === 2)
  const mediumProjects = projects.filter(p => p.width !== 2)

  if (isMobile) {
    return (
      <section className={styles.gallery} id="works">
        <div className={styles.gallery__header}>
          <SectionHeader label="Selected Works" title="VFX Breakdown" />
        </div>

        <div className={styles.gallery__container}>
          <div
            ref={elementRef as any}
            className={styles['gallery__grid']}
            style={{ transform: 'none' }}
          >
            {/* Row 1: Large projects (2 x 50%) */}
            <div className={styles['gallery__row']}>
              {largeProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className={styles['gallery__card']}
                >
                  <div className={styles['gallery__card-image']}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles['gallery__card-number']}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className={styles['gallery__card-label']}>
                    {project.title}
                  </div>
                </article>
              ))}
            </div>

            {/* Row 2: Medium projects (3 x 33%) */}
            <div className={styles['gallery__row']}>
              {mediumProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className={styles['gallery__card']}
                >
                  <div className={styles['gallery__card-image']}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles['gallery__card-number']}>
                    {String(largeProjects.length + idx + 1).padStart(2, '0')}
                  </div>
                  <div className={styles['gallery__card-label']}>
                    {project.title}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.gallery} id="works">
      <div className={styles.gallery__header}>
        <SectionHeader label="Selected Works" title="VFX Breakdown" />
      </div>

      <div className={styles.gallery__container}>
        <motion.div
          ref={elementRef as any}
          className={styles['gallery__grid']}
          style={{ transform: isWideScreen ? getTransform() : 'none' }}
          {...containerAnimation}
        >
          {/* Row 1: Large projects (2 x 50%) */}
          <div className={styles['gallery__row']}>
            {largeProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                className={styles['gallery__card']}
                {...itemAnimation}
              >
                <div className={styles['gallery__card-image']}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles['gallery__card-number']}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className={styles['gallery__card-label']}>
                  {project.title}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Row 2: Medium projects (3 x 33%) */}
          <div className={styles['gallery__row']}>
            {mediumProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                className={styles['gallery__card']}
                {...itemAnimation}
              >
                <div className={styles['gallery__card-image']}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles['gallery__card-number']}>
                  {String(largeProjects.length + idx + 1).padStart(2, '0')}
                </div>
                <div className={styles['gallery__card-label']}>
                  {project.title}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

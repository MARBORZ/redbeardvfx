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

import { motion, AnimatePresence } from 'motion/react'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { projects, IProject } from '@shared/lib/data'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import { useScrollPerspective } from '@shared/lib/useScrollPerspective'
import { useMediaQuery } from '@shared/lib/useMediaQuery'
import { staggerItemAnimation } from '@shared/lib/animationConfig'
import { FC, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Gallery.module.scss'

export const Gallery: FC = () => {
  const isWideScreen = useMediaQuery('(min-width: 1440px)')
  const isMobile = useMediaQuery('(max-width: 767px)')
  const { elementRef, getTransform } = useScrollPerspective()
  const itemAnimation = useConditionalAnimation(staggerItemAnimation)
  const containerAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [activeProject, setActiveProject] = useState<IProject | null>(null)

  const largeProjects = projects.filter(p => p.width === 2)
  const mediumProjects = projects.filter(p => p.width !== 2)

  return (
    <section className={styles.gallery} id="works">
      <div className={styles.galleryHeader}>
        <SectionHeader label="Selected Works" title="VFX Breakdown" />
      </div>

      <div className={styles.galleryContainer}>
        {isMobile ? (
          <div className={styles.galleryMobile}>
            <div className={styles.galleryViewport} ref={emblaRef}>
              <div className={styles.galleryEmblaContainer}>
                {projects.map((project, idx) => (
                  <motion.article
                    key={project.id}
                    className={styles.galleryCard}
                    onClick={() => setActiveProject(project)}
                  >
                    <div className={styles.galleryCardImage}>
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className={styles.galleryCardNumber}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className={styles.galleryCardLabel}>
                      {project.title}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div className={styles.galleryPagination}>
              <button
                type="button"
                aria-label="Previous project"
                className={`${styles.galleryArrow} ${styles.galleryArrowPrev}`}
                onClick={() => emblaApi?.scrollPrev()}
              />

              <button
                type="button"
                aria-label="Next project"
                className={`${styles.galleryArrow} ${styles.galleryArrowNext}`}
                onClick={() => emblaApi?.scrollNext()}
              />
            </div>
          </div>
        ) : (
          <motion.div
            ref={elementRef as any}
            className={styles.galleryGrid}
            style={{ transform: isWideScreen ? getTransform() : 'none' }}
            {...containerAnimation}
          >
            {/* Row 1: Large projects (2 x 50%) */}
            <div className={styles.galleryRow}>
              {largeProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className={styles.galleryCard}
                  onClick={() => setActiveProject(project)}
                  {...itemAnimation}
                >
                  <div className={styles.galleryCardImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles.galleryCardNumber}>
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.galleryCardLabel}>
                    {project.title}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Row 2: Medium projects (3 x 33%) */}
            <div className={styles.galleryRow}>
              {mediumProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className={styles.galleryCard}
                  onClick={() => setActiveProject(project)}
                  {...itemAnimation}
                >
                  <div className={styles.galleryCardImage}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className={styles.galleryCardNumber}>
                    {String(largeProjects.length + idx + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.galleryCardLabel}>
                    {project.title}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className={styles.galleryOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className={styles.galleryOverlayCard}
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.galleryOverlayImage}>
                <img src={activeProject.image} alt={activeProject.title} />
              </div>
              <div className={styles.galleryOverlayContent}>
                <h3 className={styles.galleryOverlayTitle}>{activeProject.title}</h3>
                <p className={styles.galleryOverlayDescription}>{activeProject.description}</p>
                <div className={styles.galleryOverlayTags}>
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className={styles.galleryOverlayTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                aria-label="Close"
                className={styles.galleryOverlayClose}
                onClick={() => setActiveProject(null)}
              >
                <span />
                <span />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

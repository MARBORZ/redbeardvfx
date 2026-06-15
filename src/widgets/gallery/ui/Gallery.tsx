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
import { Skeleton } from '@shared/ui/skeleton'
import { projects, IProject } from '@shared/lib/data'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import { useScrollPerspective } from '@shared/lib/useScrollPerspective'
import { useMediaQuery } from '@shared/lib/useMediaQuery'
import { staggerItemAnimation } from '@shared/lib/animationConfig'
import { FC, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Gallery.module.scss'

const GalleryCardMedia: FC<{ project: IProject; isHovered: boolean }> = ({ project, isHovered }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isHovered) {
      video.currentTime = 0
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isHovered])

  return (
    <div className={styles.galleryCardImage}>
      {!imageLoaded && <Skeleton />}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      <video
        ref={videoRef}
        className={`${styles.galleryCardVideo} ${isHovered ? styles.galleryCardVideoActive : ''}`}
        src={project.video}
        muted
        loop
        playsInline
        preload="none"
      />
    </div>
  )
}

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [activeProject, setActiveProject] = useState<IProject | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!emblaApi) return

    const updateCanScroll = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    updateCanScroll()
    emblaApi.on('select', updateCanScroll)
    emblaApi.on('reInit', updateCanScroll)

    return () => {
      emblaApi.off('select', updateCanScroll)
      emblaApi.off('reInit', updateCanScroll)
    }
  }, [emblaApi])

  // Sliding 3-column x 2-row window: each step advances by one column (2 cards).
  const WINDOW_SIZE = 6
  const STEP = 2
  const [start, setStart] = useState(0)
  const maxStart = Math.max(0, projects.length - WINDOW_SIZE)
  const visibleProjects = projects.slice(start, start + WINDOW_SIZE)
  const canGoPrev = start > 0
  const canGoNext = start < maxStart

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
                {projects.map((project) => (
                  <motion.article
                    key={project.id}
                    className={styles.galleryCard}
                    onClick={() => setActiveProject(project)}
                  >
                    <GalleryCardMedia project={project} isHovered={false} />
                    <div className={styles.galleryCardIcon}>
                      <img src={project.icon} alt={project.software} loading="lazy" />
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
                disabled={!canScrollPrev}
                className={`${styles.galleryPagerArrow} ${styles.galleryPagerArrowPrev}`}
                onClick={() => emblaApi?.scrollPrev()}
              />

              <button
                type="button"
                aria-label="Next project"
                disabled={!canScrollNext}
                className={`${styles.galleryPagerArrow} ${styles.galleryPagerArrowNext}`}
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
            <button
              type="button"
              aria-label="Previous projects"
              disabled={!canGoPrev}
              className={`${styles.galleryPagerArrow} ${styles.galleryPagerArrowPrev}`}
              onClick={() => setStart((s) => Math.max(0, s - STEP))}
            />

            <div className={styles.galleryPagedGrid}>
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    className={styles.galleryCardWrapper}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], layout: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
                    {...itemAnimation}
                  >
                    <article
                      className={styles.galleryCard}
                      onClick={() => setActiveProject(project)}
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <GalleryCardMedia project={project} isHovered={hoveredId === project.id} />
                      <div className={styles.galleryCardIcon}>
                        <img src={project.icon} alt={project.software} loading="lazy" />
                      </div>
                      <div className={styles.galleryCardLabel}>
                        {project.title}
                      </div>
                    </article>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <button
              type="button"
              aria-label="Next projects"
              disabled={!canGoNext}
              className={`${styles.galleryPagerArrow} ${styles.galleryPagerArrowNext}`}
              onClick={() => setStart((s) => Math.min(maxStart, s + STEP))}
            />
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
                <video
                  key={activeProject.id}
                  src={activeProject.video}
                  poster={activeProject.image}
                  controls
                  autoPlay
                  loop
                  playsInline
                />
              </div>
              <div className={styles.galleryOverlayContent}>
                <h3 className={styles.galleryOverlayTitle}>{activeProject.title}</h3>
                <p className={styles.galleryOverlayDescription}>{activeProject.description}</p>
                <div className={styles.galleryOverlayTags}>
                  <span className={styles.galleryOverlayTag}>{activeProject.software}</span>
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

/**
 * About Section Component
 *
 * EN: Displays professional biography with download CV option.
 *     Features scroll perspective effect on wide screens for immersive viewing.
 *
 * RU: Отображает профессиональную биографию с возможностью скачивания CV.
 *     На широких экранах использует эффект перспективы при прокрутке для погружающего опыта просмотра.
 */

import { FC, useState, useEffect } from 'react'
import { Button } from '@shared/ui/button/Button'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { bio } from '@shared/lib/data'
import { useScrollPerspective } from '@shared/lib/useScrollPerspective'
import styles from './About.module.scss'

export const About: FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false)
  const { elementRef, getTransform } = useScrollPerspective()

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth >= 1440)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  return (
    <section className={styles.about} id="about">
      <div className={styles.about__container} ref={elementRef as any} style={{ transform: isWideScreen ? getTransform() : 'none' }}>
        <SectionHeader label="About" title="Biography" />
        <div className={styles['about__content']}>
          <div className={styles['about__text']}>
            <p className={styles['about__bio']}>{bio}</p>
          </div>
          <div className={styles['about__cta']}>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

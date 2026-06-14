/**
 * About Section Component
 *
 * EN: Displays professional biography with download CV option.
 *
 * RU: Отображает профессиональную биографию с возможностью скачивания CV.
 */

import { FC } from 'react'
import { Button } from '@shared/ui/button/Button'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { bio } from '@shared/lib/data'
import styles from './About.module.scss'

export const About: FC = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <SectionHeader label="About" title="Biography" />
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.aboutBio}>{bio}</p>
          </div>
          <div className={styles.aboutCta}>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

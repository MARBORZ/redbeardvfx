/**
 * About Section Component
 *
 * EN: Displays professional biography with download CV option.
 *
 * RU: Отображает профессиональную биографию с возможностью скачивания CV.
 */

import { FC, Fragment, ReactNode } from 'react'
import { Button } from '@shared/ui/button/Button'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { bio, filmCards } from '@shared/lib/data'
import styles from './About.module.scss'

// Ключевые термины, которые подсвечиваются акцентом прямо в тексте
const HIGHLIGHTS = [
  'Mosfilm',
  'CGF',
  'Main Road Post',
  'Zoic Studios',
  'Amazon Prime',
  'RedBeardVFX',
  'Norway',
  'Moscow',
  '16 years',
]

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Оборачивает ключевые термины в акцентный <strong>, остальной текст оставляет как есть. */
const highlight = (text: string): ReactNode[] => {
  const pattern = new RegExp(`(${HIGHLIGHTS.map(escapeRegExp).join('|')})`, 'g')

  return text.split(pattern).map((part, i) =>
    HIGHLIGHTS.includes(part) ? (
      <strong key={i} className={styles.aboutHighlight}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}

export const About: FC = () => {
  return (
    <section className={styles.about} id="about">
      
      <div className={styles.aboutContainer}>
        <SectionHeader label="About" title="Biography" />

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            {bio
              .split('\n')
              .filter(Boolean)
              .map((paragraph, i) => (
                <p key={i} className={styles.aboutBio}>
                  {highlight(paragraph)}
                </p>
              ))}
          </div>

          <div className={styles.aboutCta}>
            <a
              href="/cv/Rustam_Masuev_CV_2025_august.pdf"
              download="Rustam_Masuev_CV_2025.pdf"
            >
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.aboutTicker}>
          <div className={styles.aboutTickerTrack}>
            {[...filmCards, ...filmCards].map((card, i) => (
              <img
                key={`${card.alt}-${i}`}
                src={card.src}
                alt={card.alt}
                loading="lazy"
                className={styles.aboutPoster}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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

import augustEighth from '@assets/film_cards/august-eighth.png'
import bremenMusicians from '@assets/film_cards/bremen-musicians.png'
import vysotsky from '@assets/film_cards/vysotsky-thank-god-im-alive.png'
import worldChampion from '@assets/film_cards/world-champion.png'
import theManInTheHighCastle from '@assets/film_cards/the-man-in-the-high-castle.png'
import emeraldTown from '@assets/film_cards/emerald-town.png'
import nightGuards from '@assets/film_cards/night-guards.png'
import theOptimists from '@assets/film_cards/the-optimists.png'
import viy3d from '@assets/film_cards/viy-3d.png'
import silverSkates from '@assets/film_cards/silver-skates.png'

const filmCards = [
  { src: worldChampion, alt: 'World Champion' },
  { src: bremenMusicians, alt: 'The Bremen Musicians' },
  { src: vysotsky, alt: 'Vysotsky. Thank God I\'m Alive' },
  { src: theManInTheHighCastle, alt: 'The Man in the High Castle'},
  { src: emeraldTown, alt: 'Emerald Town' },
  { src: silverSkates, alt: 'Silver Skates' },
  { src: nightGuards, alt: 'Night Guards' },
  { src: viy3d, alt: 'Viy 3D' },
  { src: theOptimists, alt: 'The Optimists' },
  { src: augustEighth, alt: 'August Eighth' },
]

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
      </div>
    </section>
  )
}

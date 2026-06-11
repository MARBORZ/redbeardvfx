/**
 * Clients Section Component
 *
 * EN: Showcases trusted client logos in a responsive grid with staggered animations.
 *     Includes call-to-action section encouraging contact. Mobile optimized with conditional animations.
 *
 * RU: Демонстрирует логотипы доверенных клиентов в адаптивной сетке с каскадными анимациями.
 *     Включает раздел призыва к действию для контакта. Оптимизирован для мобильных с условными анимациями.
 */

import { FC, useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { Button } from '@shared/ui/button/Button'
import { clients } from '@shared/lib/data'
import { floatIn, premiumStagger, titleReveal } from '@shared/lib/animationVariants'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import { useScrollPerspective } from '@shared/lib/useScrollPerspective'
import styles from './Clients.module.scss'
import { useIsMobile } from "@shared/lib/useIsMobile";

export const Clients: FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false)
  const isMobile = useIsMobile();
  const { elementRef, getTransform } = useScrollPerspective()
  const itemAnimation = useConditionalAnimation(floatIn)
  const containerAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: premiumStagger,
  })

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth >= 1440)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])

  
  

  if (isMobile) {
    return (
      <section className={styles.clients} id="clients">
        <div className={styles.clients__container}>
          <SectionHeader label="Trusted By" title="Client Cloud" />
          <div
            ref={elementRef as any}
            className={styles["clients__grid"]}
            style={{ transform: "none" }}
          >
            {clients.map((client) => (
              <div key={client.id} className={styles["clients__item"]}>
                <p className={styles["clients__logo"]}>{client.name}</p>
              </div>
            ))}
          </div>

          <div className={styles["clients__content"]}>
            <h2 className={styles["clients__title"]}>
              Let's create something incredible.
            </h2>
            <div className={styles["clients__cta"]}>
              <Link to={'/contact'}>
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const contentAnimation = !isMobile
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: titleReveal,
      }
    : ({} as any);

  return (
    <section className={styles.clients} id="clients">
      <div className={styles.clients__container}>
        <SectionHeader label="Trusted By" title="Client Cloud" />
        <motion.div
          ref={elementRef as any}
          className={styles["clients__grid"]}
          style={{ transform: isWideScreen ? getTransform() : "none" }}
          {...containerAnimation}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className={styles["clients__item"]}
              {...itemAnimation}
            >
              <p className={styles["clients__logo"]}>{client.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles["clients__content"]}>
          <motion.h2
            className={styles["clients__title"]}
            {...contentAnimation}
          >
            Let's create something incredible.
          </motion.h2>
          <div className={styles["clients__cta"]}>
            <Link to={'/contact'}>
              <Button variant="primary" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

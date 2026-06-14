/**
 * Clients Section Component
 *
 * EN: Showcases trusted client logos in a responsive grid with staggered animations.
 *     Includes call-to-action section encouraging contact. Mobile optimized with conditional animations.
 *
 * RU: Демонстрирует логотипы доверенных клиентов в адаптивной сетке с каскадными анимациями.
 *     Включает раздел призыва к действию для контакта. Оптимизирован для мобильных с условными анимациями.
 */

import { FC } from 'react'
import { motion } from 'motion/react'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { clients } from '@shared/lib/data'
import { floatIn, premiumStagger } from '@shared/lib/animationVariants'
import { useConditionalAnimation } from '@shared/lib/useConditionalAnimation'
import styles from './Clients.module.scss'

export const Clients: FC = () => {
  const itemAnimation = useConditionalAnimation(floatIn)
  const containerAnimation = useConditionalAnimation({
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true },
    variants: premiumStagger,
  })

  return (
    <section className={styles.clients} id="clients">
      <div className={styles.clientsContainer}>
        <SectionHeader label="Trusted By" title="Client Cloud" />
        <motion.div
          className={styles.clientsGrid}
          {...containerAnimation}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className={styles.clientsItem}
              {...itemAnimation}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className={styles.clientsIcon}
              />
              <p className={styles.clientsName}>{client.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

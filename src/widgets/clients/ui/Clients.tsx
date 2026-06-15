/**
 * Clients Section Component
 *
 * EN: Showcases trusted client logos in a responsive grid with staggered animations.
 *     Includes call-to-action section encouraging contact. Mobile optimized with conditional animations.
 *
 * RU: Демонстрирует логотипы доверенных клиентов в адаптивной сетке с каскадными анимациями.
 *     Включает раздел призыва к действию для контакта. Оптимизирован для мобильных с условными анимациями.
 */

import { FC, useState } from 'react'
import { motion } from 'motion/react'
import { SectionHeader } from '@shared/ui/section-header/SectionHeader'
import { Skeleton } from '@shared/ui/skeleton'
import { clients } from '@shared/lib/data'
import { floatIn } from '@shared/lib/animationVariants'
import { useStaggerAnimation } from '@shared/lib/useStaggerAnimation'
import styles from './Clients.module.scss'

const ClientLogo: FC<{ name: string; logo: string; invert?: boolean }> = ({ name, logo, invert }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles.clientsIconWrap}>
      {!loaded && <Skeleton />}
      <img
        src={logo}
        alt={name}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${styles.clientsIcon} ${invert ? styles.clientsIconInvert : ''}`}
      />
    </div>
  )
}

export const Clients: FC = () => {
  const { itemAnimation, containerAnimation } = useStaggerAnimation(floatIn)

  return (
    <section className={styles.clients} id="clients">
      <div className={styles.clientsContainer}>
        <SectionHeader label="Trusted By" title="Client Cloud" />
        <motion.div
          className={styles.clientsGrid}
          {...containerAnimation}
        >
          {clients.map((client) => (
            <motion.a
              key={client.id}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.clientsItem}
              {...itemAnimation}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <ClientLogo name={client.name} logo={client.logo} invert={client.invert} />
              <p className={styles.clientsName}>{client.name}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

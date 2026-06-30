/**
 * Expertise Section Component
 *
 * EN: Displays professional skills and expertise with animated reveal effects.
 *     Skills are grouped by category and revealed from left side on scroll.
 *
 * RU: Отображает профессиональные навыки и компетенции с анимированным раскрытием.
 *     Навыки сгруппированы по категориям и раскрываются слева при прокрутке.
 */

import { FC } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@shared/ui/section-header/SectionHeader";
import { skills } from "@shared/lib/data";
import { revealLeft } from "@shared/lib/animationVariants";
import { useStaggerAnimation } from "@shared/lib/useStaggerAnimation";
import { handleSectionClick } from "@shared/lib/scrollToSection";
import styles from "./Expertise.module.scss";

export const Expertise: FC = () => {
  const { itemAnimation, containerAnimation } = useStaggerAnimation(revealLeft);

  return (
    <section className={styles.expertise} id="services">
      <div className={styles.expertiseContainer}>
        <SectionHeader label="Technical Expertise" title="The Pipeline" />
        <motion.div
          className={styles.expertiseGrid}
          {...containerAnimation}
        >
          {skills.map((skill) => (
            <motion.a
              key={skill.id}
              id={`expertise-${skill.id}`}
              href="#works"
              onClick={handleSectionClick}
              className={styles.expertiseCard}
              {...itemAnimation}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.expertiseCardHeader}>
                <h3 className={styles.expertiseCardName}>{skill.name}</h3>
              </div>
              <h4 className={styles.expertiseCardTitle}>{skill.title}</h4>
              <p className={styles.expertiseCardDescription}>
                {skill.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

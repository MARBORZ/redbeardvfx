/**
 * Expertise Section Component
 *
 * EN: Displays professional skills and expertise with animated reveal effects.
 *     Skills are grouped by category and revealed from left side on scroll.
 *
 * RU: Отображает профессиональные навыки и компетенции с анимированным раскрытием.
 *     Навыки сгруппированы по категориям и раскрываются слева при прокрутке.
 */

import { FC, useState, useEffect } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@shared/ui/section-header/SectionHeader";
import { skills } from "@shared/lib/data";
import { revealLeft, premiumStagger } from "@shared/lib/animationVariants";
import { useConditionalAnimation } from "@shared/lib/useConditionalAnimation";
import { useScrollPerspective } from "@shared/lib/useScrollPerspective";
import { useIsMobile } from "@shared/lib/useIsMobile";
import styles from "./Expertise.module.scss";

export const Expertise: FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const isMobile = useIsMobile();
  const { elementRef, getTransform } = useScrollPerspective();
  const itemAnimation = useConditionalAnimation(revealLeft);
  const containerAnimation = useConditionalAnimation({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: premiumStagger,
  });

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth >= 1440);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isMobile) {
    return (
      <section className={styles.expertise} id="services">
        <div className={styles.expertise__container}>
          <SectionHeader label="Technical Expertise" title="The Pipeline" />
          <div
            ref={elementRef as any}
            className={styles["expertise__grid"]}
            style={{ transform: "none" }}
          >
            {skills.map((skill) => (
              <article key={skill.id} className={styles["expertise__card"]}>
                <div className={styles["expertise__card-header"]}>
                  <h3 className={styles["expertise__card-name"]}>
                    {skill.name}
                  </h3>
                </div>
                <h4 className={styles["expertise__card-title"]}>
                  {skill.title}
                </h4>
                <p className={styles["expertise__card-description"]}>
                  {skill.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.expertise} id="services">
      <div className={styles.expertise__container}>
        <SectionHeader label="Technical Expertise" title="The Pipeline" />
        <motion.div
          ref={elementRef as any}
          className={styles["expertise__grid"]}
          style={{ transform: isWideScreen ? getTransform() : "none" }}
          {...containerAnimation}
        >
          {skills.map((skill) => (
            <motion.article
              key={skill.id}
              className={styles["expertise__card"]}
              {...itemAnimation}
            >
              <div className={styles["expertise__card-header"]}>
                <h3 className={styles["expertise__card-name"]}>{skill.name}</h3>
              </div>
              <h4 className={styles["expertise__card-title"]}>{skill.title}</h4>
              <p className={styles["expertise__card-description"]}>
                {skill.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Hero Section Component
 *
 * EN: Main hero section with animated title, subtitle, and call-to-action button.
 *     Displays a background video with overlay. Animations are disabled on mobile for performance.
 *
 * RU: Главная героическая секция с анимированным заголовком, подзаголовком и кнопкой действия.
 *     Отображает видео в качестве фона с оверлеем. Анимации отключены на мобильных для производительности.
 * */

import { FC } from "react";
import { motion } from "motion/react";
import { Button } from "@shared/ui/button/Button";
import {
  fadeUpAnimation,
  titleRevealAnimation,
  floatInAnimation,
} from "@shared/lib/animationConfig";
import { useConditionalAnimation } from "@shared/lib/useConditionalAnimation";
import styles from "./Hero.module.scss";
import reelVideo from "@assets/video/redbeardvfx-reel.mp4";

export const Hero: FC = () => {
  const labelAnimation = useConditionalAnimation(fadeUpAnimation);
  const titleAnimation = useConditionalAnimation(titleRevealAnimation);
  const subtitleAnimation = useConditionalAnimation({
    initial: "hidden",
    animate: "visible",
    variants: fadeUpAnimation.variants,
    transition: { delay: 0.3 },
  });
  const ctaAnimation = useConditionalAnimation({
    initial: "hidden",
    animate: "visible",
    variants: floatInAnimation.variants,
    transition: { delay: 0.5 },
  });

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.p className={styles.heroLabel} {...labelAnimation}>
            VFX SUPERVISOR
          </motion.p>
          <motion.h1 className={styles.heroTitle} {...titleAnimation}>
            Rustam Masuev
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...subtitleAnimation}>
            VFX Supervisor | Compositing (Nuke) | 3D Artist (Blender)
          </motion.p>
          <motion.div className={styles.heroCta} {...ctaAnimation}>
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=Uqmv2b8Ruyw',
                  '_blank'
                )
              }
            >
              View Reel
            </Button>
          </motion.div>
        </div>
      </div>
      <div className={styles.heroBackground}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={reelVideo} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
      </div>
    </section>
  );
};

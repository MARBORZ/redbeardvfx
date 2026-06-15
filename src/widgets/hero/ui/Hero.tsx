/**
 * Hero Section Component
 *
 * EN: Main hero section with animated title, subtitle, and call-to-action button.
 *     Displays a background video with overlay. Animations are disabled on mobile for performance.
 *
 * RU: Главная героическая секция с анимированным заголовком, подзаголовком и кнопкой действия.
 *     Отображает видео в качестве фона с оверлеем. Анимации отключены на мобильных для производительности.
 * */

import { FC, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@shared/ui/button/Button";
import { Skeleton } from "@shared/ui/skeleton";
import {
  fadeUpAnimation,
  titleRevealAnimation,
  floatInAnimation,
} from "@shared/lib/animationConfig";
import { useConditionalAnimation } from "@shared/lib/useConditionalAnimation";
import { useEnterAnimation } from "@shared/lib/useEnterAnimation";
import { revealRight } from "@shared/lib/animationVariants";
import { heroSocials } from "@shared/lib/data";
import styles from "./Hero.module.scss";
import reelVideo from "@assets/hero_demo/redbeardvfx-reel.mp4";

export const Hero: FC = () => {
  const labelAnimation = useConditionalAnimation(fadeUpAnimation);
  const titleAnimation = useConditionalAnimation(titleRevealAnimation);
  const subtitleAnimation = useEnterAnimation(fadeUpAnimation.variants, 0.3);
  const ctaAnimation = useEnterAnimation(floatInAnimation.variants, 0.5);
  const socialsAnimation = useEnterAnimation(revealRight, 0.7);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className={styles.hero}>
      <motion.div className={styles.heroSocials} {...socialsAnimation}>
        {heroSocials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={styles.heroSocialLink}
          >
            <img src={social.icon} alt="" loading="lazy" />
          </a>
        ))}
      </motion.div>
      <div className={styles.heroContainer} >
        <div className={styles.heroContent} >
          <motion.h1 className={styles.heroTitle} {...titleAnimation}>
            Rustam Masuev
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...subtitleAnimation}>
            VFX Supervisor | Compositing | 3D Artist
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
      <div className={styles.heroBackground} >
        {!videoLoaded && <Skeleton className={styles.heroVideoSkeleton} />}
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={reelVideo} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
      </div>
    </section>
  );
};

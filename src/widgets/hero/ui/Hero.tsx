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
import { useIsMobile } from "@shared/lib/useIsMobile";
import styles from "./Hero.module.scss";
import reelVideo from "@assets/video/redbeardvfx-reel.mp4";

export const Hero: FC = () => {
  const isMobile = useIsMobile();
  const buttonSize = isMobile ? "md" : "lg";

  if (isMobile) {
    return (
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles["hero__content"]}>
            <p className={styles["hero__label"]}>VFX SUPERVISOR</p>
            <h1 className={styles["hero__title"]}>Rustam Masuev</h1>
            <p className={styles["hero__subtitle"]}>
              VFX Supervisor | Compositing (Nuke) | 3D Artist (Blender)
            </p>
            <div className={styles["hero__cta"]}>
              <Button
                variant="primary"
                size={buttonSize}
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/watch?v=Uqmv2b8Ruyw", "_blank"',
                  )
                }
              >
                View Reel
              </Button>
            </div>
          </div>
        </div>
        <div className={styles["hero__background"]}>
          <video
            className={styles["hero__video"]}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={reelVideo} type="video/mp4" />
          </video>
          <div className={styles["hero__overlay"]} />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles["hero__content"]}>
          {isMobile ? (
            <>
              <p className={styles["hero__label"]}>VFX SUPERVISOR</p>
              <h1 className={styles["hero__title"]}>Rustam Masuev</h1>
              <p className={styles["hero__subtitle"]}>
                VFX Supervisor | Compositing (Nuke) | 3D Artist (Blender)
              </p>
              <div className={styles["hero__cta"]}>
                <Button
                  variant="primary"
                  size={buttonSize}
                  onClick={() =>
                    window.open(
                      'https://www.youtube.com/watch?v=Uqmv2b8Ruyw',
                      '_blank'
                    )
                  }
                >
                  View Reel
                </Button>
              </div>
            </>
          ) : (
            <>
              <motion.p
                className={styles["hero__label"]}
                {...(fadeUpAnimation as any)}
              >
                VFX SUPERVISOR
              </motion.p>
              <motion.h1
                className={styles["hero__title"]}
                {...(titleRevealAnimation as any)}
              >
                Rustam Masuev
              </motion.h1>
              <motion.p
                className={styles["hero__subtitle"]}
                initial="hidden"
                animate="visible"
                variants={(fadeUpAnimation as any).variants}
                transition={{ delay: 0.3 }}
              >
                VFX Supervisor | Compositing (Nuke) | 3D Artist (Blender)
              </motion.p>
              <motion.div
                className={styles["hero__cta"]}
                initial="hidden"
                animate="visible"
                variants={(floatInAnimation as any).variants}
                transition={{ delay: 0.5 }}
              >
                <Button
                  variant="primary"
                  size={buttonSize}
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
            </>
          )}
        </div>
      </div>
      <div className={styles["hero__background"]}>
        <video
          className={styles["hero__video"]}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={reelVideo} type="video/mp4" />
        </video>
        <div className={styles["hero__overlay"]} />
      </div>
    </section>
  );
};

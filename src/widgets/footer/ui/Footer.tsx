/**
 * Footer Section Component
 *
 * EN: Displays social media links and copyright information.
 *     Features scroll perspective effect on wide screens for consistent visual hierarchy.
 *
 * RU: Отображает ссылки на социальные сети и информацию об авторских правах.
 *     На широких экранах использует эффект перспективы для консистентной визуальной иерархии.
 */

import { FC, useState, useEffect } from "react";
import { useIsMobile } from "@shared/lib/useIsMobile";
import { useScrollPerspective } from "@shared/lib/useScrollPerspective";
import { socials } from "@shared/lib/data";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  const isMobile = useIsMobile();
  const [isWideScreen, setIsWideScreen] = useState(false);
  const { elementRef, getTransform } = useScrollPerspective();

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth >= 1440);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isMobile) {
    return (
      <footer className={styles.footer} id="contact">
        <div
          className={styles.footer__container}
          ref={elementRef as any}
          style={{ transform: "none" }}
        >
          <div className={styles["footer__socials"]}>
            <div className={styles["footer__socials-title"]}>
              Follow & Connect
            </div>
            <div className={styles["footer__socials-links"]}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["footer__social-link"]}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles["footer__bottom"]}>
            <p className={styles["footer__copyright"]}>
              © 2026 Rustam Masuev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer} id="contact">
      <div
        className={styles.footer__container}
        ref={elementRef as any}
        style={{ transform: isWideScreen ? getTransform() : "none" }}
      >
        <div className={styles["footer__socials"]}>
          <div className={styles["footer__socials-title"]}>
            Follow & Connect
          </div>
          <div className={styles["footer__socials-links"]}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer__social-link"]}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles["footer__bottom"]}>
          <p className={styles["footer__copyright"]}>
            © 2026 Rustam Masuev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

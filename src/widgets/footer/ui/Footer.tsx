/**
 * Footer Section Component
 *
 * EN: Displays social media links and copyright information.
 *
 * RU: Отображает ссылки на социальные сети и информацию об авторских правах.
 */

import { FC } from "react";
import { heroSocials } from "@shared/lib/data";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        <div className={styles.footerSocialsLinks}>
          {heroSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
            >
              {social.name}
            </a>
          ))}
        </div>

        <p className={styles.footerCopyright}>
          © 2026 Rustam Masuev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

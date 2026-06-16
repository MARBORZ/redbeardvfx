import { FC } from "react";
import { footerSocials } from "@shared/lib/data";
import styles from "./Footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        <div className={styles.footerSocialsLinks}>
          {footerSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={styles.footerSocialLink}
            >
              <img src={social.icon} alt="" loading="lazy" />
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

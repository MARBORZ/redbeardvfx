/**
 * Header Navigation Component
 *
 * EN: Main header with responsive navigation supporting both anchor links and route navigation.
 *     Includes desktop nav menu and mobile hamburger menu with smooth scroll behavior.
 *
 * RU: Главный заголовок с адаптивной навигацией, поддерживающей якорные ссылки и маршруты.
 *     Включает меню навигации для рабочего стола и мобильное меню-бургер с плавной прокруткой.
 */

import { useState, useEffect, FC, MouseEvent } from "react";
import { BurgerMenu } from "@shared/ui/burger-menu";
import styles from "./Header.module.scss";
import { useNavigate, useLocation } from "react-router";

interface NavItem {
  href: string
  label: string
  isRoute?: boolean
}

const PORTFOLIO_NAV_ITEMS: NavItem[] = [
  { href: "#works", label: "Works" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const HOME_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", isRoute: true },
];

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMainPage =
    typeof window !== "undefined" && window.location.pathname === "/";

  const navItems = isMainPage ? PORTFOLIO_NAV_ITEMS : HOME_NAV_ITEMS;

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsMenuOpen(false);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles["header__logo"]}>
          <a href="/" onClick={handleLogoClick}>
            REDBEARDVFX
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className={styles["header__nav"]}>
          {navItems?.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={styles["header__nav-link"]}
              data-index={String(idx + 1).padStart(2, "0")}
              onClick={(e) => {
                if (item.isRoute) {
                  e.preventDefault();
                  navigate(item.href);
                } else {
                  handleAnchorClick(e);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger with menu */}
        <BurgerMenu
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          navItems={navItems}
          onNavClick={handleAnchorClick}
        />
      </div>
    </header>
  );
};

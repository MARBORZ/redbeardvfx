/**
 * Header Navigation Component
 *
 * EN: Main header with responsive navigation supporting both anchor links and route navigation.
 *     Includes desktop nav menu and mobile hamburger menu with smooth scroll behavior.
 *
 * RU: Главный заголовок с адаптивной навигацией, поддерживающей якорные ссылки и маршруты.
 *     Включает меню навигации для рабочего стола и мобильное меню-бургер с плавной прокруткой.
 */

import { useState, FC, MouseEvent } from "react";
import { BurgerMenu } from "@shared/ui/burger-menu";
import { handleSectionClick } from "@shared/lib/scrollToSection";
import styles from "./Header.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  href: string
  label: string
  isRoute?: boolean
}

const PORTFOLIO_NAV_ITEMS: NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const HOME_NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", isRoute: true },
];

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === "/";
  const navItems = isMainPage ? PORTFOLIO_NAV_ITEMS : HOME_NAV_ITEMS;

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
    setIsMenuOpen(false);
    handleSectionClick(e);
  };

  return (
    <header className="sticky top-0 z-[100] min-h-16 py-4 md:min-h-0 md:py-5 bg-[#111111]/75 backdrop-blur-lg border-b border-white/6">
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <a href="/" onClick={handleLogoClick}>
            REDBEARDVFX
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className={styles.headerNav}>
          {navItems?.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.headerNavLink}
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

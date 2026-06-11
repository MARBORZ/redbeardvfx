/**
 * Burger Menu Component
 *
 * EN: Mobile navigation menu component with hamburger toggle and smooth animations.
 *     Supports both anchor links and route navigation with automatic menu closing.
 *
 * RU: Мобильное меню навигации с переключателем бургера и плавными анимациями.
 *     Поддерживает якорные ссылки и навигацию по маршрутам с автоматическим закрытием меню.
 */

import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '@shared/lib/useIsMobile'
import styles from './BurgerMenu.module.scss'

interface INavItem {
  href: string
  label: string
  isRoute?: boolean
}

interface IBurgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: INavItem[];
  onNavClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({
  isOpen,
  onToggle,
  navItems,
  onNavClick,
}) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  if (!isMobile) {
    return null;
  }

  return (
    <div className={styles["burger-menu"]}>
      {/* Burger button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label="Toggle menu"
        className={styles["burger-menu__button"]}
      >
        <svg
          width="32" // Оптимальный размер: не мелкий, не огромный
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className={styles["burger-menu__icon"]}
          style={{ overflow: "visible" }}
        >
          {/* Верхняя линия */}
          <line
            x1="6"
            y1="9"
            x2="26"
            y2="9"
            stroke="white"
            strokeWidth="2.5" // Хорошая толщина для 32px
            strokeLinecap="round"
            style={{
              transformOrigin: "center",
              // Поворот + сдвиг к центру (16 - 9 = 7px)
              transform: isOpen
                ? "rotate(-45deg) translateY(7px)"
                : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* Средняя линия */}
          <line
            x1="6"
            y1="16"
            x2="26"
            y2="16"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scaleX(0)" : "scaleX(1)", // Плавное исчезновение к центру
              transition: "all 0.2s ease",
            }}
          />

          {/* Нижняя линия */}
          <line
            x1="6"
            y1="23"
            x2="26"
            y2="23"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{
              transformOrigin: "center",
              // Поворот + сдвиг к центру (23 - 16 = 7px)
              transform: isOpen
                ? "rotate(45deg) translateY(-7px)"
                : "rotate(0deg)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav className={styles["burger-menu__overlay"]}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles["burger-menu__link"]}
              onClick={(e: any) => {
                e.preventDefault();
                onToggle();

                if (item.isRoute) {
                  navigate(item.href);
                } else {
                  setTimeout(() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }, 50);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

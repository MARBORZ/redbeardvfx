/**
 * Button Component
 *
 * EN: Reusable button component with multiple variants (primary, outline) and sizes (sm, md, lg, xl).
 *     Supports all standard HTML button attributes with responsive styling.
 *
 * RU: Переиспользуемый компонент кнопки с несколькими вариантами (primary, outline) и размерами (sm, md, lg, xl).
 *     Поддерживает все стандартные атрибуты HTML-кнопки с адаптивным стилем.
 */

import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

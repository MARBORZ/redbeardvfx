/**
 * Scroll To Section Utility
 *
 * EN: Smoothly scrolls to a section by anchor (#id) and keeps the URL clean —
 *     no hash/id fragment is left behind after navigating to a section.
 *
 * RU: Плавно скроллит к секции по якорю (#id) и очищает URL —
 *     после перехода к секции в конце адреса не остаётся айдиника (#works и т.п.).
 */

import { MouseEvent } from 'react'

/** Removes the hash from the current URL without reloading the page. */
const clearHash = () => {
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search
  )
}

/**
 * Scrolls to the element matching the given anchor and clears the URL hash.
 * @param target - Anchor like "#works" or a bare id like "works".
 */
export const scrollToSection = (target: string) => {
  const selector = target.startsWith('#') ? target : `#${target}`
  const element = document.querySelector(selector)

  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  clearHash()
}

/**
 * Click handler for any anchor link with an `href="#..."`.
 * Prevents the default jump, scrolls smoothly, and keeps the URL clean.
 */
export const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>) => {
  const href = e.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return

  e.preventDefault()
  scrollToSection(href)
}

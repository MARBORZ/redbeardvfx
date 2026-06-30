/**
 * Behaviour tests for RotatingText.
 *
 * EN: Active line is identified by aria-hidden (independent of CSS), so the test
 *     works without a real layout. Timers are faked and the interval is pinned
 *     (min === max) for determinism.
 * RU: Активная строка определяется по aria-hidden (не зависит от CSS), поэтому
 *     тест работает без реального лэйаута. Таймеры подменены, интервал фиксирован
 *     (min === max) для детерминизма.
 */

import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { RotatingText } from './RotatingText'

const items = ['First line', 'Second line', 'Third line']

describe('RotatingText', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('renders every item', () => {
    render(<RotatingText items={items} />)
    for (const text of items) {
      expect(screen.getByText(text)).toBeInTheDocument()
    }
  })

  it('shows the first item as active initially', () => {
    render(<RotatingText items={items} />)
    expect(screen.getByText(items[0])).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByText(items[1])).toHaveAttribute('aria-hidden', 'true')
  })

  it('advances to the next item after the interval', () => {
    render(<RotatingText items={items} minInterval={1000} maxInterval={1000} />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText(items[1])).toHaveAttribute('aria-hidden', 'false')
    expect(screen.getByText(items[0])).toHaveAttribute('aria-hidden', 'true')
  })

  it('wraps back to the first item after the last', () => {
    render(<RotatingText items={items} minInterval={1000} maxInterval={1000} />)

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText(items[0])).toHaveAttribute('aria-hidden', 'false')
  })

  it('does not rotate when given a single item', () => {
    render(<RotatingText items={['Only one']} minInterval={1000} maxInterval={1000} />)

    act(() => {
      vi.advanceTimersByTime(60000)
    })

    expect(screen.getByText('Only one')).toHaveAttribute('aria-hidden', 'false')
  })
})

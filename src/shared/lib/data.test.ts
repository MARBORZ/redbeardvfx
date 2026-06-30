/**
 * Content invariants for the site data.
 *
 * EN: These guard against silent content regressions — a punchline disappearing,
 *     ZBrush sneaking back in, duplicate ids, a poster losing its alt text, etc.
 * RU: Страховка от тихих регрессий контента — пропал панчлайн, вернулся ZBrush,
 *     задублировались id, у постера пропал alt и т.д.
 */

import { describe, it, expect } from 'vitest'
import {
  projects,
  skills,
  clients,
  filmCards,
  ctaTitle,
  ctaPunchlines,
  bio,
} from './data'

const ids = <T extends { id: string }>(items: T[]) => items.map((i) => i.id)

describe('projects', () => {
  it('has unique ids', () => {
    expect(new Set(ids(projects)).size).toBe(projects.length)
  })

  it('every project has a title, description and video', () => {
    for (const p of projects) {
      expect(p.title.trim()).not.toBe('')
      expect(p.description.trim()).not.toBe('')
      expect(p.video).toBeTruthy()
    }
  })
})

describe('skills', () => {
  it('has unique ids', () => {
    expect(new Set(ids(skills)).size).toBe(skills.length)
  })

  it('uses Autodesk Mudbox and never ZBrush', () => {
    const text = skills.map((s) => s.description).join(' ')
    expect(text).toContain('Autodesk Mudbox')
    expect(text).not.toMatch(/zbrush/i)
  })
})

describe('clients', () => {
  it('has unique ids and valid urls', () => {
    expect(new Set(ids(clients)).size).toBe(clients.length)
    for (const c of clients) {
      expect(c.url).toMatch(/^https?:\/\//)
    }
  })
})

describe('filmCards', () => {
  it('every poster has a source and a non-empty, unique alt', () => {
    expect(filmCards.length).toBeGreaterThan(0)
    for (const card of filmCards) {
      expect(card.src).toBeTruthy()
      expect(card.alt.trim()).not.toBe('')
    }
    const alts = filmCards.map((c) => c.alt)
    expect(new Set(alts).size).toBe(alts.length)
  })
})

describe('CTA copy', () => {
  it('has a non-empty title', () => {
    expect(ctaTitle.trim()).not.toBe('')
  })

  it('has at least two punchlines, all non-empty', () => {
    expect(ctaPunchlines.length).toBeGreaterThanOrEqual(2)
    for (const line of ctaPunchlines) {
      expect(line.trim()).not.toBe('')
    }
  })

  it('keeps the punchlines unique', () => {
    expect(new Set(ctaPunchlines).size).toBe(ctaPunchlines.length)
  })
})

describe('bio', () => {
  it('mentions the key studios and current location', () => {
    for (const term of ['Mosfilm', 'Zoic Studios', 'RedBeardVFX', 'Norway']) {
      expect(bio).toContain(term)
    }
  })

  it('is structured as three paragraphs', () => {
    expect(bio.split('\n').filter(Boolean)).toHaveLength(3)
  })
})

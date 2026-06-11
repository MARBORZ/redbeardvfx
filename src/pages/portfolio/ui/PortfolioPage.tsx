/**
 * Portfolio Page
 *
 * EN: Main portfolio landing page displaying hero section, project gallery, expertise,
 *     professional biography, clients, and contact information through linked widgets.
 *
 * RU: Главная страница портфолио, отображающая героическую секцию, галерею проектов, опыт,
 *     профессиональную биографию, клиентов и контактную информацию через связанные виджеты.
 */

import { FC } from 'react'
import { Header } from '@widgets/header'
import { Hero } from '@widgets/hero'
import { Gallery } from '@widgets/gallery'
import { Expertise } from '@widgets/expertise'
import { About } from '@widgets/about'
import { Clients } from '@widgets/clients'
import { Footer } from '@widgets/footer'

export const PortfolioPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Expertise />
      <About />
      <Clients />
      <Footer />
    </>
  )
}

import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { PortfolioPage } from '@pages/portfolio'
import { FormPage } from '@pages/FormPage'

const RootLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
)

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PortfolioPage />,
      },
      {
        path: '/contact',
        element: <FormPage />,
      },
    ],
  },
])

import './styles/global.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './providers/Router'
import { LenisProvider } from './providers/LenisProvider'

function App() {
  return (
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  )
}

export default App

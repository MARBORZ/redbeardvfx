import './styles/tailwind.css'
import './styles/global.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './providers/Router'

function App() {
  return <RouterProvider router={router} />
}

export default App

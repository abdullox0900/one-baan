import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import PropertyDetail from './pages/PropertyDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/property/:id',
    element: <PropertyDetail />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

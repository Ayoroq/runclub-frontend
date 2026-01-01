import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import routers from '../src/routes/routes.jsx'
import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter(routers)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>,
)
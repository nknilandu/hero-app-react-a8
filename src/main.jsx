import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Pages/Root/Root.jsx'
import AppNotFound from './Pages/ErrorPages/AppNotFound.jsx'
import Home from './Pages/Home/Home.jsx'
import Apps from './Pages/Apps/Apps.jsx'
import Installation from './Pages/Installation/Installation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <AppNotFound></AppNotFound>,
    children: [
      { index: true, Component: Home },
      { path: '/apps', Component: Apps },
      { path: '/installation', Component: Installation }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

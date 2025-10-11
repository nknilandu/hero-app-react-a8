import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Pages/Root/Root.jsx'
import AppNotFound from './Pages/ErrorPages/AppNotFound.jsx'
import Home from './Pages/Home/Home.jsx'
import Apps from './Pages/Apps/Apps.jsx'
import Installation from './Pages/Installation/Installation.jsx'
import PageNotFound from './Pages/ErrorPages/PageNotFound.jsx'
import AppDetails from './Components/AppDetails/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/apps',
        Component: Apps
      },
      {
        path: '/installation',
        loader: () => fetch('/appdata.json'),
        Component: Installation
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/appdata.json'),
        Component: AppDetails
      },
      {
        path: '*',
        Component: AppNotFound
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

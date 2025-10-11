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
    errorElement: <AppNotFound></AppNotFound>,
    children: [
      { 
        index: true,
        errorElement:<PageNotFound></PageNotFound>,
        Component: Home 
      },
      { path: '/apps', Component: Apps },
      { path: '/installation', Component: Installation },
      { path: '/appDetails/:id', 
        loader:()=>fetch('/appdata.json'),
        Component: AppDetails 
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

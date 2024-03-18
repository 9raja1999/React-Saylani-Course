import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import About from './pages/About.jsx'
import RootLayout from './layout/RootLayout.jsx'
import Login from './pages/auth/Login.jsx'
import AuthLayout from './layout/AuthLayout.jsx'
import PrivateRoute from './components/navigation/PrivateRoute.jsx'
import Contact from './pages/Contact.jsx'
import MainLayout from './layouts/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

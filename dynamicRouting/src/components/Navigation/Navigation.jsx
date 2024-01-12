import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from '../../App'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Products from '../../pages/Products/Products'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/products',
        element: <Products />
    },
])


function Navigation() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigation
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import List from './list/List'
import './header.css'

function Header() {
  
    return (
        <nav>
           <h1>Header</h1>
           <ul>
            <li>Hoome</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </nav>
    )
}

export default Header
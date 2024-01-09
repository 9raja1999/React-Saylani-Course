import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import List from './list/List'
import './header.css'

function Header() {
    return (
        <nav>
            <List>
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => {
                            if (isActive) return "active"
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) => {
                            if (isActive) return "active"
                        }}
                    >
                        About
                    </NavLink>
                </li>
            </List>
        </nav>
    )
}

export default Header
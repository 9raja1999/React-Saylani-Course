import React from 'react'

function Header() {
  return (
    <nav className='headerNav'>
        <ul className='linksList'>
            <li>Home</li>
            <li>About</li>
            <li><button>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Header
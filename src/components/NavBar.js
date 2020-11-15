import React from 'react'
import '../assets/NavBar.css'

const navLinks = [
    { title: 'Home' },
    { title: 'About me' },
    { title: 'Portfolio' },
    { title: 'Contact' }
]

export default function NavBar(props) {
    return (
        <nav className={ props.menuColor }>
            <ul className='navbar-menu'>
                { navLinks.map((links, index) => (
                    <li className='navbar-menu-links' key={index}>
                        { links.title } 
                    </li>
                ))}
            </ul>    
        </nav> 
    )
}
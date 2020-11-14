import React from 'react'
import '../assets/NavBar.css'
import classNames from 'classnames'

const navLinks = [
    { title: 'Home' },
    { title: 'About me' },
    { title: 'Portfolio' },
    { title: 'Contact' }
]

// window.onscroll = function() {
//     let scrolled = window.pageYOffset;
//     return(+scrolled);
// };

export default function NavBar() {
    // let menuColor = classNames( 'navbar', {
    //     'navbar-darker': scrolled > 935
    // })
    return (
        <nav className='navbar'>
            <ul className='navbar-menu'>
                { navLinks.map((links, index) => (
                    <li className='navbar-menu-links' key={index}>
                        { links.title } 
                    </li>
                ))}
            </ul>
            <span className='navbar-line'></span>     
        </nav> 
    )
}
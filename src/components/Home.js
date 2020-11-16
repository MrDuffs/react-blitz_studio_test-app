import React from 'react'
import '../assets/Home.css'
import NavBar from './NavBar'
import { VscFoldDown } from 'react-icons/vsc'
import { FaInfinity } from 'react-icons/fa'

export default function Home()  {
    return (
        <div className='home-wrapper' >
            <div className='home'>
                <div className='home-sidebar'>      
                    <div className='home-sidebar-logo'> <FaInfinity size={'1.3em'}  strokeWidth={0.5} /> </div>
                    <p className='home-sidebar-text'>menu</p>
                </div>
                <div className='home-menu'>
                    <NavBar menuColor='navbar' />
                    <span className='home-line'></span>
                </div>
                <div className='home-scrolling-content'>
                    <p className='home-scroll-text'>scroll down to see more</p>
                    <div className='home-arrow'> <VscFoldDown size={'2em'}  strokeWidth={0.5} /> </div>
                </div> 
            </div>
        </div>
    )
}

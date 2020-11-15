import React from 'react'
import '../assets/Home.css'
import NavBar from './NavBar'
import { VscFoldDown } from 'react-icons/vsc'

export default function Home()  {
    return (
        <div className='home-wrapper' >
            <div className='home'>
                <div className='home-menu'>
                    <NavBar menuColor='navbar' />
                    <span className='home-line'></span>
                </div>
                <div className='home-scrolling-content'>
                    <p className='home-scroll-text'>scroll down to see more</p>
                    <p className='home-arrow'> <VscFoldDown size={'2em'}  strokeWidth={0.5} /> </p>
                </div> 
            </div>
        </div>
    )
}

import React from 'react'
import NavBar from './NavBar'
import '../assets/About.css'
import person from '../img/person.png'
import { VscFoldDown } from 'react-icons/vsc'

const textLine = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const content = [
    {
        title: 'About me',
        text: textLine,
        author: 'Jason Wood'
    }
]

export default function About() {

    return (
        <div className='about'>
            <NavBar menuColor='navbar-darker' />
            <span className='navbar-line'></span>
            <div className='about-container'>
                <img src={ person }  alt='' className='about-image' />
                    
                {content.map((content, index) => (
                <div className='about-content' key={index}>
                    <h2 className ='about-title'>{content.title} </h2>
                    <p className='about-text'>{content.text}</p>
                    <h3 className='about-author'>{content.author}</h3>
                </div>
                ))}
                
            </div>
            <div className='about-scrolling-content'>
                    <p className='about-scroll-text'>Keep scrolling, there is still more to come</p>
                    <p className='about-arrow'> <VscFoldDown size={'2em'}  strokeWidth={0.5} /> </p>
            </div>
        </div>
    )
}


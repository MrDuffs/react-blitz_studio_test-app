import React from 'react'
import '../assets/About.css'
import person from '../img/person.png'
// import Arrow from '../img/Arrow.png'

const textLine = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n \n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

const content = [
    {
        image: person,
        title: 'About me',
        text: textLine,
        author: 'Jason Wood'
    }
]

export default function About() {
    
    // console.log('Текущая прокрутка сверху: ' + window.innerHeight);
    return (
        <div className='about'>
            <div className='about-container'>
                { content.map((content, index) => (
                    <img src={ content.image } key={index} alt='' className='about-image'></img>
                ))}
                
                {content.map((content, index) => (
                    <div className='about-content' key={index}>
                        <h2 className ='about-title'>{content.title} </h2>
                        <p className='about-text'>{content.text}</p>
                        <h3 className='about-author'>{content.author}</h3>
                    </div>
                ))}
                
            </div>
            {/* <div className='about-scrolling'>
                    <p className='scrolling-text'>Keep scrolling, there is still more to come</p>
                    <img src={Arrow} alt='' className='scrolling-image' />
            </div>            */}
        </div>
    )
}


import React, { useEffect } from 'react'
import '../styles/Hero.css'

export const Hero = () => {

    // useEffect(() => {
    //   const changeBackground = () => {
    //     const images = [
    //         'url("../assets/hero1.jpg")',
    //         'url("../assets/hero2.jpg")',
    //         'url("../assets/hero3.jpg")',
    //         'url("../assets/hero4.jpg")',
    //         'url("../assets/hero5.jpg")',
    //         'url("../assets/hero6.jpg")',
    //     ]

    //     const hero = document.getElementsByClassName("hero")

    //     const background = images[Math.floor(Math.random() * images.length)]

    //     hero.style.backgroundImage = background
    //   }

    //   setInterval(changeBackground, 1000)
    // }, [])


    return (
        <div className='hero'>
            <div className="hero__content">
                <div className="info">
                    <h1>You deserve a job that loves you back</h1>
                    <p>Find a Job that fits your style and constraints.</p>
                </div>
                <div className="input__field">
                    <input type="text" />
                    <button>Find Job</button>
                </div>
            </div>
        </div>
    )
}

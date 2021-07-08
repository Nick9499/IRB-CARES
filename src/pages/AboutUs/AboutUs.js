import React from 'react'
import { aboutData } from './aboutData'
import './about.css'
import Hero from '../../components/Hero/Hero'
import { aboutUs } from '../../components/Hero/sliderData'

const AboutUs = () => {
    return (
        <>
            <Hero sliderData={aboutUs} />
            <div className="center About">
                <h1>About Us</h1>
                <div className="about_data">
                    {aboutData.map((item, index) => (
                        <p key={index}>{item.desc}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutUs

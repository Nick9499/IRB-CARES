import React from 'react'
import Hero from '../../components/Hero/Hero'
import './after.css'
import { after } from './AfterProgramData'
import Card from '../../components/Cards/Card'

const AfterSchoolProgram = ({ sliderData }) => {
    return (
        <>
            <Hero sliderData={sliderData} />
            <div className="After">
                <h1>After-School Programs</h1>

                <p>
                    Students with a lesser income household are most likely to
                    fall up to two years behind their expected grade level by
                    the end of fourth grade. The same section of kids is up to
                    four years behind their peers by the time they reach the
                    12th grade.
                </p>
                <p className="title" style={{ color: '#1888ff' }}>
                    IRB Cares Supplement and Support Kids’ Educational Scopes
                    Through:
                </p>
                <div className="Card__Container">
                    {after.map((item, index) => (
                        <Card key={index}>
                            <span className="icon">{item.icon}</span>
                            <h3>{item.p}</h3>
                            <p>{item.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AfterSchoolProgram

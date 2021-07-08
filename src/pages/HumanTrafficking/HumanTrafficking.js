import React from 'react'
import './human.css'
import { trafficking } from './humanTraffickngData'
import Card from '../../components/Cards/Card'
import Hero from '../../components/Hero/Hero'
import { humanTraffic } from '../../components/Hero/sliderData'

const HumanTrafficking = () => {
    return (
        <>
            <Hero sliderData={humanTraffic} />
            <div className="Human">
                <h1>Human Trafficking Solutions</h1>
                <h2>IRB Cares Help Fight the Horror of Human Trafficking:</h2>
                <div className="humanCard_Content">
                    {trafficking.map((item, index) => (
                        <Card key={index}>
                            <span className="icon">{item.icon}</span>
                            <h3>{item.p}</h3>
                            <p>{item.desc}</p>
                            <ul>
                                {item.sub && (
                                    <ul className="list-grid">
                                        {item.sub.map((item, index) => (
                                            <li key={index}>{item.p}</li>
                                        ))}
                                    </ul>
                                )}
                            </ul>
                        </Card>
                    ))}
                </div>

                <h3>Serving Without Discrimination</h3>
                <p>
                    IRB Cares, in contingent upon its programs and services to
                    the needy and underserved during the holidays is committed
                    to cooperating with all those that are impoverished without
                    nefarious discrimination or harassment based on age, race,
                    color, religion, sex, national origin, marital status,
                    disability, citizenship, sexual orientation, gender
                    identity, gender expression, or any other characteristic in
                    conformity with our capacity to help.
                </p>
            </div>
        </>
    )
}

export default HumanTrafficking

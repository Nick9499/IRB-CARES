import React from 'react'
import { initiative, key, means, services } from './lifeSkillData'
import './life.css'
import Hero from '../../components/Hero/Hero'
import { dealWithPoverty } from '../../components/Hero/sliderData'
import img1 from '../../Images/DealingwithPoverty1.png'
import img2 from '../../Images/DealingwithPoverty2.png'
import img3 from '../../Images/DealingWithPoverty3.png'
import img4 from '../../Images/DealingWithPoverty4.png'

const LifeSkills = () => {
    return (
        <>
            <Hero sliderData={dealWithPoverty} />
            <div className="Life">
                <h1>Life Skills to Escape Poverty</h1>
                <p>
                    IRB Cares launched a program to provide targeted services to
                    families wanting to surpass the generational cycle of
                    poverty and enable a path out of constant crisis. It is
                    rooted in a case management approach, focusing on the
                    client’s individual needs and mastery of different life
                    skills. This program is mapped out to have an impact on how
                    poverty affects multiple generations. By positively changing
                    the lives of parents, we can create better living conditions
                    for children. Educational and support programs for children
                    in their development years are crucial. Our program’s
                    initiative marks a remarkable shift into focusing on the
                    inner causes of poverty rather than treating the symptoms.
                    Lack of job opportunities, unstable housing, and an
                    underserved educational environment can all be major
                    challenges for someone looking to lead a self-sustainable
                    life.
                </p>
                <p>
                    With the help we’re extending, people living in poverty can
                    break the cycle of crisis and vulnerability and lead
                    families down a path toward increased stability for years to
                    come. It’s a pathway of hope for current and future
                    generations.
                </p>

                <div className="content">
                    <img src={img1} alt="poverty" className="image" />
                    <ul className="list">
                        <p className="title" style={{ color: '#1888ff' }}>
                            Key Life Skills include:
                        </p>
                        {key.map((item, index) => (
                            <li key={index}>{item.p}</li>
                        ))}
                    </ul>
                </div>

                <div className="content">
                    <img src={img2} alt="poverty" className="image" />
                    <ul className="list">
                        <p className="title" style={{ color: '#1888ff' }}>
                            Initiative involves:
                        </p>
                        {initiative.map((item, index) => (
                            <li key={index}>{item.p}</li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    <img src={img3} alt="poverty" className="image" />
                    <ul className="list">
                        <p className="title" style={{ color: '#1888ff' }}>
                            Means & Connections:
                        </p>
                        {means.map((item, index) => (
                            <li key={index}>{item.p}</li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    <img src={img4} alt="poverty" className="image" />
                    <ul className="list">
                        <p className="title" style={{ color: '#1888ff' }}>
                            Service connections to:
                        </p>
                        {services.map((item, index) => (
                            <li key={index}>{item.p}</li>
                        ))}
                    </ul>
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
                    conformity with our capacity to help.{' '}
                </p>
            </div>
        </>
    )
}

export default LifeSkills

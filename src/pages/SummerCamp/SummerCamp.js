import React from 'react'
import './summer.css'
import { summer } from './summerCampData'
import Hero from '../../components/Hero/Hero'
import { summerCamp } from '../../components/Hero/sliderData'
import Card from '../../components/Cards/Card'
const SummerCamp = () => {
    return (
        <>
            <Hero sliderData={summerCamp} />
            <div className="Summer">
                <h1>Summer Camps</h1>
                <p>
                    According to a study, children are more susceptible to
                    commit or experience criminal activity between 3 p.m. and 6
                    p.m. on weekdays. This behavior includes vandalism, sexual
                    misconduct, and cigarette, drug, and alcohol consumption.
                </p>
                <h2>Summer Camps for Kids</h2>
                <p>
                    Children from low-income families rarely experience life
                    outside their neighborhood. That’s why our annual summer
                    programs for kids are so important.
                </p>
                <p>
                    Every year, thousands of kids of all ages get a fresh look
                    at life as they meet new friends, come across new
                    activities, and get a taste of the great outdoors as their
                    trained counselors help them navigate the complex emotions
                    and struggles often associated with their lives back home.
                </p>
                <h2>
                    Kids and Their Families Thrive Through Summer Camps, Here’s
                    How
                </h2>
                <div className="SummerCampCard__content">
                    {summer.map((item, index) => (
                        <Card key={index}>
                            <span className="icon">{item.icon}</span>
                            <h3>{item.p}</h3>
                            <p>{item.desc}</p>
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

export default SummerCamp

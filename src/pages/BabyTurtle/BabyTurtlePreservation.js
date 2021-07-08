import React from 'react'
import './baby.css'
import { sponsor } from './babyTurtleData'
import Hero from '../../components/Hero/Hero'
import { babyTurtle } from '../../components/Hero/sliderData'
import img1 from '../../Images/babyTurtle3.jpg'
import img2 from '../../Images/babyTurtle4.png'

const BabyTurtlePreservation = () => {
    return (
        <>
            <Hero sliderData={babyTurtle} />
            <div className="Baby">
                <h1>Baby Turtles Preservation </h1>
                <div className="babyTurtle__Content">
                    <img src={img2} alt="baby turtle" className="image" />
                    <div className="babyTurtle__p">
                        <p>
                            Saving sea turtles through Education, advocacy,
                            recycling, beach clean ups, protection of nests and
                            rescuing injured turtles.
                        </p>
                        <p>
                            Save Baby Turtles relies on donations to fulfill its
                            mission to preserve and protect sea turtles while
                            educating the public of the Florida Keys, through
                            outreach programs and events, about what we can all
                            do to help these magnificent animals. We hope to
                            extend our public education globally through our
                            website and social media as well.{' '}
                        </p>
                        <p>Become a Sponsor of Our Baby Turtle Preservation</p>
                        <p>
                            You don't have to live in the Florida Keys to help.
                            Our supporters are worldwide! By becoming a sponsor,
                            you are supporting our mission of educating the
                            public and preserving sea turtles of the Florida
                            Keys.
                        </p>
                    </div>
                </div>
                <p className="title" style={{ color: '#1888ff' }}>
                    Your sponsorship is tax deductible, and 100% of all
                    sponsorship's go directly to our sea turtle conservation
                    efforts, which include, but are not limited to:
                </p>
                <div className="babyTurtle__Content">
                    <img src={img1} alt="baby turtle" className="image" />
                    <ul className="babyTurtle__list">
                        {sponsor.map((item, index) => (
                            <li key={index}>{item.p}</li>
                        ))}
                    </ul>
                </div>
                <h2>
                    HAVE YOU FOUND A DEAD OR INJURED SEA TURTLE IN FLORIDA?{' '}
                </h2>
                <p style={{ textAlign: 'center' }}>
                    <a href="tel:888-404-3922">
                        <span>
                            <i className="fas fa-phone-square-alt fa-2x"></i>
                        </span>
                        {'   '} PLEASE CALL FWCC AT 888-404-3922
                    </a>
                </p>
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

export default BabyTurtlePreservation

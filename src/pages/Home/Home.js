import React from 'react'
import Hero from '../../components/Hero/Hero'
import { sliderData } from '../../components/Hero/sliderData'
import './home.css'
const Home = () => {
    return (
        <>
            <Hero sliderData={sliderData} />
            <div className="Home">
                <div className="home__content">
                    <h2>Helping those in need is the heart of our mission. </h2>
                    <h3>Our Vision</h3>
                    <p>
                        IRB Cares is motivated by the love of people to meet
                        human and animal needs without hesitation. We welcome
                        people regardless of race, gender, ethnicity, sexual
                        orientation, or gender identity.{' '}
                    </p>
                    <h3>Our Mission</h3>
                    <p>
                        IRB Cares works to meet the needs within our community.
                        Driven by love, we present hope, healing and help to the
                        most vulnerable members of society: domestic violence
                        victims, foster children,veterans and widows; the
                        forgotten members of our community. We always seek to
                        partner up with local businesses in ways that will
                        enhance their communities as well. Since we believe
                        residents know best what is needed in their
                        neighborhood.
                    </p>
                    <h3>Serving Without Discrimination</h3>
                    <p>
                        IRB Cares, in contingent upon its programs and services
                        to the needy and underserved during the holidays is
                        committed to cooperating with all those that are
                        impoverished without nefarious discrimination or
                        harassment based on age, race, color, religion, sex,
                        national origin, marital status, disability,
                        citizenship, sexual orientation, gender identity, gender
                        expression, or any other characteristic in conformity
                        with our capacity to help.{' '}
                    </p>
                    <h2>Events</h2>
                </div>
            </div>
        </>
    )
}

export default Home

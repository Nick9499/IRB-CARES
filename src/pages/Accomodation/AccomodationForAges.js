import React from 'react'
import './accomodation.css'
import { accomodation } from './AccomodationData'
import Hero from '../../components/Hero/Hero'
import { old } from '../../components/Hero/sliderData'
import Card from '../../components/Cards/Card'

const AccomodationForAges = () => {
    return (
        <>
            <Hero sliderData={old} />
            <div className="Accomodation">
                <h1>Accommodations for the Aging</h1>
                <p
                    className="title"
                    style={{ color: '#1888ff', textAlign: 'center' }}
                >
                    IRB Cares is Devoted to Care and Serve Seniors and the
                    Elderly Through:
                </p>
                <div className="accomodationCard__content">
                    {accomodation.map((item, index) => (
                        <Card key={index}>
                            <span className="icon">{item.icon}</span>
                            <h3>{item.p}</h3>
                            <p>{item.desc} </p>
                        </Card>
                    ))}
                </div>

                <h3>Serving Without Discrimination</h3>
                <p>
                    Our organization, in contingent upon its programs and
                    services to the needy and underserved during the holidays is
                    committed to cooperating with all those that are
                    impoverished without nefarious discrimination or harassment
                    based on age, race, color, religion, sex, national origin,
                    marital status, disability, citizenship, sexual orientation,
                    gender identity, gender expression, or any other
                    characteristic in conformity with our capacity to help.
                </p>
            </div>
        </>
    )
}

export default AccomodationForAges

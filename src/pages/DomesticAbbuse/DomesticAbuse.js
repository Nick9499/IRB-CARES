import React from 'react'
import './domestic.css'
import { Domestic } from './DomesticData'
import Hero from '../../components/Hero/Hero'
import { domesticAbuse } from '../../components/Hero/sliderData'
import Card from '../../components/Cards/Card'

const DomesticAbuse = () => {
    return (
        <>
            <Hero sliderData={domesticAbuse} />
            <div className="Domestic">
                <h1>Domestic Abuse</h1>
                <p>
                    Every second, three people in the U.S. become a victim of
                    domestic violence. Each year, more than 10 million Americans
                    experience domestic abuse.
                </p>
                <p className="title">
                    IRB Cares Help Rescue Victims from Domestic Violence
                    Through:
                </p>
                <div className="domesticAbuseCard__Content">
                    {Domestic.map((item, index) => (
                        <Card className="card__content" key={index}>
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

export default DomesticAbuse

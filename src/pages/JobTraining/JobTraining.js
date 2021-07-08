import React from 'react'
import { employment } from './JobTrainingData'
import './job.css'
import Hero from '../../components/Hero/Hero'
import { jobTraining } from '../../components/Hero/sliderData'
import Card from '../../components/Cards/Card'

const JobTraining = () => {
    return (
        <>
            <Hero sliderData={jobTraining} />
            <div className="Job">
                <h1>Job Training</h1>
                <p>
                    Millions of people have experienced job losses in the past
                    few months due to the COVID-19 pandemic that has taken a
                    toll on the world’s economy. Many of our newly jobless
                    brothers and sisters were working paycheck to paycheck and
                    only a month away from losing their homes, utilities,
                    ability to feed their families, or all three. People are on
                    the brink of being homeless and jobless. Our “hand-up”
                    employment services programs help impart skills and
                    strengths evaluation, job-search counseling and support and
                    several programs that teach new job skills. These programs
                    are increasingly important, as many government assistance
                    programs – like SNAP and Medicaid – are adding work
                    essentials to their eligibility criteria.
                </p>
                <p className="title" style={{ color: '#1888ff' }}>
                    IRB Cares Help People Stabilize Profitable Employment
                    Through:
                </p>
                <div className="Card__Container">
                    {employment.map((item, index) => (
                        <Card key={index}>
                            <span className="icon">{item.icon}</span>
                            <h3>
                                {`  `} {item.p}
                            </h3>
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

export default JobTraining

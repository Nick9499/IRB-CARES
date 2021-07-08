import React from 'react'
import './ways.css'
import { Button } from '@material-ui/core'
import { waysToGive } from './WaysToGiveData'
import Card from '../../components/Cards/Card'
import Hero from '../../components/Hero/Hero'
import { donate } from '../../components/Hero/sliderData'

const WaysToGive = () => {
    return (
        <>
            <Hero sliderData={donate} />
            <div className="center Ways">
                <h1>Ways To Give</h1>
                <div className="Ways_Content">
                    {waysToGive.map((item, index) => {
                        return (
                            <Card key={index}>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <Button variant="contained" color="primary">
                                    {item.buttonText === 'Money' ||
                                    item.buttonText === 'Goods'
                                        ? `Donate ${item.buttonText}`
                                        : `${item.buttonText}`}
                                </Button>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WaysToGive

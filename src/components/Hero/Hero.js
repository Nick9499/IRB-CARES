import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(4),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.8;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 400px) {
        object-fit: contain;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100%-100px);
    color: #fff;

    h1 {
        font-weight: bolder;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: center;
        margin-bottom: 0.8rem;
    }
    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 400px) {
        h1 {
            font-size: 130%;
        }
        p {
            font-size: 100%;
            text-align: center;
            margin: 3%;
        }
    }
`

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`

const SliderButton = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: all 0.3s;

    &:hover {
        background: #cd853f;
        transform: scale(1.05);
    }
`

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`

const Hero = ({ sliderData }) => {
    const [current, setCurrent] = useState(0)
    const length = sliderData.length
    const timeout = useRef(null)
    let history = useHistory()
    const classes = useStyles()

    useEffect(() => {
        const nextSlide = () =>
            setCurrent((current) => (current === length - 1 ? 0 : current + 1))
        timeout.current = setTimeout(nextSlide, 5000)
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <HeroSection>
            <HeroWrapper>
                {sliderData.map((item, index) => (
                    <HeroSlide key={index}>
                        {index === current && (
                            <HeroSlider>
                                <HeroImage src={item.image} alt={item.title} />
                                <HeroContent>
                                    <h1>{item.title}</h1>
                                    <p>{item.desc}</p>
                                    {item.label && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            style={{ zIndex: '100' }}
                                            onClick={() =>
                                                history.push('/waystogive')
                                            }
                                            size="small"
                                            className={classes.margin}
                                        >
                                            {item.label}
                                        </Button>
                                    )}
                                </HeroContent>
                            </HeroSlider>
                        )}
                    </HeroSlide>
                ))}
                <SliderButton>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButton>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero

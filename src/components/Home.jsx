import React from 'react'
import styled from "styled-components"
import Button from './Button'
import {FaChevronCircleRight} from "react-icons/fa"
const Home = () => {
    const home=`https://raw.githubusercontent.com/koolkishan/react-coinbase-landing/master/src/assets/home.png`;
    const badgePercent = `https://raw.githubusercontent.com/koolkishan/react-coinbase-landing/master/src/assets/badge-percent.png`;
  return (
    <Section className='flex j-center a-center gap'>
        <div className="content flex gap-2 column">
            <div className="subtitle">
                <h3 className="flex a-center gap-1 blue">
                        <span>
                            <img src={badgePercent} alt="percentage" />
                        </span>
                        Investment Made Easy
                </h3>
            </div>
            <div className="title">
                <h1>The Easiest Way To Track Multiple Currencies</h1>
            </div>
            <div className="description">
                <p className="subdue">
                Market Watchman allow you tu monitor your balances, trade without,
            limits and earn rewards for specific coins.
                </p>
            </div>
            <div className="flex buttons gap-1">
                <Button text="Try Now" icon={<FaChevronCircleRight/>}/>
                <Button text="How it works ?" subdueButton/>
            </div>
        </div>
        <div className="image">
            <img src={home} alt="home" className='half-width-img' />
        </div>
    </Section>
  )
}
const Section = styled.section``
export default Home
import React from 'react'
import styled from "styled-components"
import {FaChevronCircleRight} from "react-icons/fa"
import Button from "./Button"
const AboutUs = () => {
    const about = `https://ik.imagekit.io/ksaehdhru/NFT/8_YI03NbnRjh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665285709990`;
  return (
    <Section className='flex a-center gap' id='About'>
        <div className="content flex column gap">
            <div className="title-container column flex j-center a-center gap-1">
                <div className="subtitle subdue">
                    <h3>About Us</h3>
                </div>
                <div className="title">
                         <h2>Why would You Choose Market Watchmen?</h2>
                </div>
            </div>
            <div className="flex gap">
                <div className="info flex column gap a-start j-center">
                        <p className="subdue">Easy To Learn Platform –</p>
                        <p className="subdue">
                        We won’t ask you to link to your bank accounts, we just want
                        everyone to have the opportunity to understand the potential of
                        saving and investing for retirement or short term goals. We simply
                        do data analytics and simplify the way you look at investment
                        assets
                        </p>
                        <Button text="Start Earning" icon={<FaChevronCircleRight />} />
                </div>
                <div className="image">
                    <img src={about} alt="about" className="half-width" />
                </div>
            </div>
        </div>
    </Section>
  )
}
const Section = styled.section``
export default AboutUs
import React from 'react'
import styled from "styled-components"
const card = `https://ik.imagekit.io/ksaehdhru/NFT/13_JSx8CQ4_q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665287036577`
const backGround = `https://ik.imagekit.io/ksaehdhru/NFT/12_sgAQjhn6i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665287036533`
const SignUp = () => {

  return (
    <Section className="flex gap j-between">
        <div className="content text-center">
            <h2>Sign up without any bank account linking and card</h2>
        </div>
        <div className="image">
            <img src={card} alt="card" />
        </div>
    </Section>
  )
}
const Section = styled.section`
background-image: url(${backGround});
background-size: contain;
margin: 0 5rem;
border-radius:20px;
margin-bottom: 8rem;
max-width: 100vw;
overflow: hidden;
.content {
  padding: 8rem;
  h2 {
    font-size: 2.4rem;
  }
}
.image {
  img {
    height: 100%;
  }
}
`
export default SignUp
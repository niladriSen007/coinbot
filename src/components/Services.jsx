import React from 'react'
import styled from "styled-components"
const Services = () => {
    const service1=`https://ik.imagekit.io/ksaehdhru/NFT/9_hBvt5Hggi1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665286362985`
    const service2 = `https://ik.imagekit.io/ksaehdhru/NFT/10_Alcqeo420.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665286363005`
    const service3 = `https://ik.imagekit.io/ksaehdhru/NFT/11_dBvX3Uy3q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665286363014`
    const servicesData = [
        {
          image: service1,
          title: "Manage your portfolio",
          description:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
        {
          image: service2,
          title: "Recurring buys",
          description:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
        {
          image: service3,
          title: "Mobile apps",
          description:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
      ];
  return (
    <Section className='flex column j-center a-center gap' id='Services'>
        <div className="title-container flex column gap-1">
            <div className="title text-center ">
                <h2>Start your trading with us</h2>
            </div>
                <div className="subtitle text-center subdue">
                    <h3>
                        Market Watchmen has a variety of features that make it the best
                        place to start trading
                    </h3>
                 </div>
        </div>
        <div className="services flex a-center j-center gap">
        {
            servicesData.map(({image,title,description})=>{
                return(
                        <div className="service text-center flex column gap-1" key={title}>
                            <div className="image">
                                <img src={image} alt="servive" />
                            </div>
                            <h3 className="title">{title}</h3>
                            <p className="description subdue">{description}</p>
                        </div>
                )
            })
        }
        </div>
    </Section>
  )
}
const Section = styled.section`
.services {
    padding: 0 5rem;
    gap: 10rem;
    .service {
      .title {
        font-size: 1.5rem;
      }
      .description {
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }
`
export default Services
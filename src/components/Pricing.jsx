import React from 'react'
import styled from "styled-components"
function Pricing() {
    const price1 = `https://ik.imagekit.io/ksaehdhru/NFT/1_RP9F70oPUM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250946984`
    const price2 = `https://ik.imagekit.io/ksaehdhru/NFT/2_7CC8ouk-21.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250946971`
    const price3 = `https://ik.imagekit.io/ksaehdhru/NFT/3_68-z8Ezc-H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250947002`
    const price4 = `https://ik.imagekit.io/ksaehdhru/NFT/4_RMPLMhgRU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250946985`
    const bitcoin = `https://ik.imagekit.io/ksaehdhru/NFT/5_y8L9XVd9y8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250947012`
    const ethereum = `https://ik.imagekit.io/ksaehdhru/NFT/6_SJHmRnE1w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250946980`
    const ggcoin = `https://ik.imagekit.io/ksaehdhru/NFT/7_jSRQrurPc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665250946988`

    const data = [
        {
            name:"Bitcoin",
            image:bitcoin,
            short:"BTC",
            price:"$33,592.99",
            change:"+4.3%",
            marketCap:"$635.148",
            chart:price1,
        },
        {
            name: "Ethereum",
            image: ethereum,
            short: "ETH",
            price: "$2,273.19",
            change: "+2.1%",
            marketCap: "$267.12B",
            chart: price2,
          },
          {
            name: "GGCoin",
            image: ggcoin,
            short: "GGC",
            price: "$349.47",
            change: "-7.9%",
            marketCap: "$57.16B",
            chart: price3,
          },
          {
            name: "Bitcoin",
            image: bitcoin,
            short: "BTC",
            price: "$0.9434",
            change: "0.0%",
            marketCap: "$27.12B",
            chart: price4,
          },
    ]

    const getPriceChangeClassName = (change) =>{
        const sign = change[0];
        if(sign === '-')
            return 'red'
        else 
            return 'green'
    }

  return (
    <Section className='flex gap-2 column'>
            <div className="container">
                <div className="header subdue">
                        <span>#</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Change</span>
                        <span>Market Cap</span>
                        <span>Chart</span>
                </div>
                <div className="data flex column gap-1">
                    {
                        data.map(({name,image,short,price,change,marketCap,chart},index)=>{
                            return(
                                <div className="row a-center" key={price}>
                                    <span>{index+1}</span>
                                    <div className="name flex gap-1 a-center">
                                        <span className="image">
                                            <img src={image} alt="name" />
                                        </span>
                                        <span>{name}</span>
                                        <span className='short subdue'>{short}</span>
                                    </div>
                                    <span>{price}</span>
                                    <span className={getPriceChangeClassName(change)}>{change}</span>
                                    <span>{marketCap}</span>
                                    <span className='chart'>
                                            <img src={chart} alt="chart" />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </Section>
  )
}
const Section = styled.section`
background-color: #ffffff10;
border-radius: 1rem;
.header {
  border-bottom: 1px solid #ffffff42;
  padding-bottom: 1rem;
  padding: 2rem;
  span {
  }
}
.header,
.data > .row {
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
}
.data {
  padding: 1rem 2rem 1rem 2rem;
  
}
span {
  display: block;
}
.green {
  color: var(--green);
}
.red {
  color: var(--red);
}
`
export default Pricing
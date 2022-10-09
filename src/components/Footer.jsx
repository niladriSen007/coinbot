import React from 'react'
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
const cards = `https://ik.imagekit.io/ksaehdhru/NFT/14_psAChaqjU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665287036545`
const spacemen = `https://ik.imagekit.io/ksaehdhru/NFT/15_W2DLjUHjx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665289271931`
const Footer = () => {
    const companyLinks = [
        "About",
        "Careers",
        "Affiliates",
        "Blog",
        "Press",
        "Investors",
        "Legal & Privacy",
        "Cookie policy",
        "Cookie preferences",
      ];
      const LearnLinks = [
        "Browse crypto prices",
        "Coinbase Bytes newsletter",
        "Crypto basics",
        "Tips & Turoials",
        "Market Updates",
        "What is Bitcoin?",
        "What is crypto?",
        "What is a blockchain?",
        "How to set up a crypto waller",
        "How to send crypto",
      ];
      const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
  return (
    <Foot className='flex column gap' id='Footer'>
      <div className="upper-footer">
        <div className="flex column gap-1">
           <div className="brand">
            <h2>CoinBot</h2>
          </div>
          <div className="address">
            <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
          </div>
          <div className="info">
            <span>T : +1-202-555-0184</span>
            <span>E : hello@cryptoz.com</span>
          </div>
          <div className="social-icons flex gap-2">
            {
              socialIcons.map((icon,index)=>{
                return(
                  <div className="icon" key={index}>{icon}</div>
                )
              })
            }
          </div>
        </div>
        <div className=" flex column gap-1">
            <div className="title">
                <h3>Company</h3>
            </div>
            <ul className="flex column gap-half">
              {companyLinks.map((link) => {
                return <li key={link}>{link}</li>;
              })}
            </ul>
        </div>


        <div className=" flex column gap-1">
          <div className="title">
            <h3>Learn</h3>
          </div>
          <ul className="flex column gap-half">
            {LearnLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className=" flex column gap-1">
          <div className="title">
            <h3>Company</h3>
          </div>
          <ul className="flex column gap-half">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="col spacemen">
          <div className="image">
            <img src={spacemen} alt="spacemen" />
          </div>
        </div>
        </div>

        <div className="lower-footer flex a-center j-between gap">
            <div className="col1">
              <span>&copy; Crypto project By Niladri Sen</span>
            </div>
            <div className="col2 flex a-center gap">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span className="cards">
                <img src={cards} alt="cards" />
              </span>
            </div>
    


      </div>
    </Foot>
  )
}
const Foot = styled.footer`
padding: 0rem 5rem;
padding-bottom: 3rem;
position: relative;
.upper-footer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .social-icons {
    margin-top: 2rem;
    svg {
      font-size: 2rem;
    }
  }
  .spacemen {
    position: absolute;
    right: 0rem;
    top: -23rem;
  }
}

`
export default Footer
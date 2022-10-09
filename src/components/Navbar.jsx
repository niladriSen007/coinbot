import React from 'react'
import Button from './Button';
import styled from "styled-components"
const Navbar = () => {
    // const links = ["Home","Dashboard","Learn","FAQ","Contact","About"];
    const links = [
        {
        name:"Home",
        link:"#Home"
         },
         {
            name:"About",
            link:"#About"
             }
             ,{
                name:"Roadmap",
                link:"#Roadmap"
                 },{
                    name:"Services",
                    link:"#Services"
                     },{
                        name:"Contact",
                        link:"#Contact"
                         }
]
  return (
    <Nav className='flex j-between a-center'>
        <div className="brand">
            <h2>CoinBot</h2>
        </div>
        <div className="toggle"></div>
        <div className="links">
            <ul className='flex gap-2'>
                {
                    links.map(({name,link})=>{
                        return(
                            <li key={link}>
                                <a href={link}>{name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className="auth flex gap-1">
            <Button text="Sign In" subdueButton/>
            <Button text="Sign Up" />
        </div>
    </Nav>
  )
}

const Nav = styled.div`
margin:3rem 5rem;
.brand
{
    h2 {
        font-size: 2.5rem;
      }
}
.toggle
{
    display:none;
}
.links
{
    ul{
        font-weight:bolder;
        li{
            cursor:pointer;
            &:first-child
            {
                a{
                    opacity:1;
                }
            }
            a
            {
                opacity:0.7;
                transition:0.5s ease-in-out;
                font-size:1.15rem;
                &:hover
                {
                    opacity:1;
                }
            }

        }
    }
}

`;
export default Navbar
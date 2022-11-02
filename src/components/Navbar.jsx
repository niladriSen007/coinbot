import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";

const Navbar = () => {

    const [isNavOpen,setIsNavOpen] = useState(false);
    const html = document.querySelector("html")
    html.addEventListener("click",()=>setIsNavOpen(false))

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
    <Nav state={isNavOpen ? 1 :0} className='flex j-between a-center sticky'>
        <div className="brand">
            <h2>CoinBot</h2>
        </div>
        <div className="toggle">
            {
                isNavOpen
                 ? 
                <MdClose onClick={()=>setIsNavOpen(false)} /> 
                :
                 <GiHamburgerMenu onClick={(e)=>{
                    e.stopPropagation();
                    setIsNavOpen(true)
                }}/>
            }
        </div>
        <div className={`links ${isNavOpen ? "show" : ""}`}>
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

const Nav = styled.nav`
margin: 3rem 5rem;
.brand {
  h2 {
    font-size: 2.5rem;
  }
}
.toggle {
  display: none;
}
.links {
  ul {
    font-weight: bolder;
    li {
      cursor: pointer;
      &:first-of-type {
        a {
          opacity: 1;
        }
      }
      a {
        opacity: 0.7;
        transition: 0.5s ease-in-out;
        &:hover {
          opacity: initial;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  padding: 3rem 1rem;
  margin: 0;
  position: relative;
  z-index: 5;
  flex-direction: row;
  .brand {
    h2 {
      font-size: 2rem;
    }
  }
  .toggle {
    padding-right: 1rem;
    display: block;
    z-index: 51;
    svg {
      color: #2d69fd;
    }
  }
  .show {
    opacity: 1 !important;
    // transform:translateX(-90rem);
    // z-index:100;
    visibility: visible !important;
  }
  .links {
    z-index: 10;
    position: fixed;
    overflow-x: hidden;
    top: 0;
    right: 0;
    width: ${({ state }) => (state ? "60%" : "0%")};
    height: 120vh;
    background-color: white;
    opacity: 0;
    visibility: hidden;
    transition: 0.7s ease-in-out;
    ul {
      flex-direction: column;
      display:flex;
      text-align: center;
      height: 100vh;
    //   align-items:center;
      justify-content: center;
      li {
        a {
          color: #2d69fd;
        }
      }
    }
  }
  .auth {
    display: none;
  }
}

`;
export default Navbar
import React from 'react'
import styled from "styled-components"
const Button = ({text,icon=false,subdueButton}) => {
  return (
    <Div className='flex j-center a-center'>
       { icon ? 
        <button className={`flex j-center a-center gap-1 ${subdueButton ? "subduedBtn" : ""}`}>
            {text}
            {icon}
        </button> :
        <button className={`${subdueButton ? "subdueBtn" : ""}`}>
            {text}
        </button>}
    </Div>
  )
}
const Div= styled.div`
button {
    padding: 0.7rem 1.3rem;
    background-color: var(--blue);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
  }
  .subdueBtn {
    background-color: var(--subdue-button);
  }
`
export default Button
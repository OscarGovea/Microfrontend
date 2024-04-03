import React from 'react'
import styled from "@emotion/styled"

//Styled component
const BtnStyle = styled.button`
    background-color:#317f95;
    color: white;
    padding:1rem;
    border-radius:10px;
    margin:5px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;

    &:hover{
        background-color:white;
        color: #317f95;
        padding:1rem;
    }
`



const Button = ({text, onClick}) => {
  return (
    <BtnStyle onClick={onClick}>
        {text}
    </BtnStyle>
  )
}

export default Button
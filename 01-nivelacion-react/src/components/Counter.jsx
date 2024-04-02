import { useState } from "react"
import styled from "@emotion/styled"
import "./Counter.css"
import {handleClick} from "../helpers/handleClick"

//Styled component
const BtnDimishid = styled.button`
    background-color:tomato;
    color: white;
    padding:1rem;

    &:hover{
        background-color:white;
        color: tomato;
        padding:1rem;
    }
`

const Counter = () => {
    const [counter, setCounter] = useState(1) //[estado, cambioEstado()]  

    // const handleClick=() =>{
    //     console.log("Handle click");
    //     setCounter(counter+1);
    // }

    // const handleDiminish=() =>{
    //     console.log("Handle diminish");
    //     setCounter(counter-1);
    // }

    return (
    <>
        <h2>Counter: {counter}</h2>
        <div>
            <button style={{padding:"1rem",backgroundColor:"#368297"}} onClick={()=>{setCounter(handleClick(counter,1))}}>Add</button>
            <BtnDimishid onClick={()=>{setCounter(handleClick(counter,-1))}}>Disminish</BtnDimishid>
        </div>
    </>
    )
}

export default Counter;
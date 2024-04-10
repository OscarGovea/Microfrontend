import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () =>{
    const [color, setColor] = useState(getLastColor());
    const [colorsList, setColorsList] = useState(getColorList()); 

    const handleChangeColor = (e)=>{
        setColor(e.target.value);
    }

    const handleSubmitSaveColor = (e)=>{
        e.preventDefault();
        const copyColor = [color,...colorsList];
        setColorsList(copyColor);
        console.log(colorsList);
    }

    const handleClickClearColors = () =>{
        setColor("#d3cece");
        setColorsList([]);
        localStorage.clear();
    }

    useEffect(() => {
        localStorage.setItem("colors",JSON.stringify(colorsList));
    }, [colorsList])
    

    return {
        color, colorsList, handleChangeColor, handleSubmitSaveColor, handleClickClearColors
    }

};
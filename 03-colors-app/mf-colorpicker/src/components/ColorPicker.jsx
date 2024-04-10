import React from 'react'
//import { useColors } from '../hooks/useColors'
//import { useState } from 'react'

const ColorPicker = ({color, colorsList, handleChangeColor, handleSubmitSaveColor}) => {

  // const [color, setColor] = useState("#d3caca");
  // const [colorList, setcolorList] = useState(["#5e5d5d", "#c01e1e","#0999bda9"]); 

  // const handleChangeColor = (e)=>{
  //   setColor(e.target.value);
  // }

  // const handleSubmitSaveColor = (e)=>{
  //   e.preventDefault();
  //   const copyColor = [color,...colorList];
  //   setcolorList(copyColor);
  //   console.log(colorList);
  // }

  //const {color, colorList, handleChangeColor, handleSubmitSaveColor} = useColors();

  return (
    <form onSubmit={handleSubmitSaveColor}>
      <input 
        type="color" 
        className='form-control' 
        style={{width:"100%", height:"300px"}}
        title="Selecciona un color"
        value={color}
        onChange={handleChangeColor}/>

      <div className='text-center'>
        <h2 className='mt-3 fw-bolder'>
          <div 
            style={{width:"20px", height:"20px",background:color,display:"inline-block",margin:"0 1rem", borderRadius:"100%"}}>
          </div>
          {color}
        </h2>
        <button type='sumbit' className='btn btn-success'>Save color</button>
      </div>
      {/* <pre>
        {colorsList}
      </pre> */}
    </form>
  )
}

export default ColorPicker
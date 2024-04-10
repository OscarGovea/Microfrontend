import React from 'react'
import Swal from "sweetalert2"

const ColorList = ({colorsList =[]}) => {

    //const colorsList = ["#5e5d5d", "#c01e1e","#0999bd"]

    const handleCopyColor = (color)=>{
        navigator.clipboard.writeText(color);

        Swal.fire({
            position:"top-end",
            icon: "success",
            title: "Good job!",
            text: `Color: ${color} copied!`,
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false
          });
    }
  
    return (
        <>
            <h3 className='text-center'>Color list</h3>
            <div className='list-group text-center'>
                {colorsList.length > 0 ? 
                    (
                        colorsList.map((color, index) =>(
                            <button 
                                key={index} 
                                type='button' 
                                className='list-group-item list-group-item-action text-white'
                                aria-current="true"
                                title='Copiar'
                                style={{
                                    background:color,
                                    fontWeight:"bolder"
                                }}
                                onClick={()=>{handleCopyColor(color)}}>
                                    {color}
                            </button>
                        )
                    ))
                    : 
                    (   
                        <div className='alert alert-danger' role="alert">
                            <b>No colors saved...</b>
                        </div>
                    )
                }
            </div>
        </>
    
  )
}

export default ColorList
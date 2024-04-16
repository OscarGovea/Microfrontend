import React from 'react'
import { useState } from 'react'

const Counter = ({initialCounter}) => {

  if(!initialCounter){
    throw new Error("Counter not ready.");
  }

  const [counter, setCounter] = useState(initialCounter)
    
  return (
    <div className='text-3xl'>
        <button onClick={() => setCounter(counter+1)} className='bg-green-400 text-center font-bold rounded-md p-2'>+1</button>
        <span className='mx-10'>{counter}</span>
        <button onClick={() => setCounter(counter-1)} className='bg-yellow-400 text-center font-bold rounded-md p-2'>-1</button>
    </div>
  )
}

export default Counter
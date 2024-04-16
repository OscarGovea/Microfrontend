import React, { useRef,useEffect } from 'react'
import placeCards from "mf_cards/placeCards"

const PersonajesPage = () => {

  const cardsRef = useRef(null);
  useEffect(() => {
    placeCards(cardsRef.current)
  }, [])
  

  return (
    <>
      <div ref ={cardsRef}>

      </div>
    </>
  )
}

export default PersonajesPage
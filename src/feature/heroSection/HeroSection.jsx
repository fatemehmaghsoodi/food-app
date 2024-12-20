import React from 'react'
import { useState } from 'react'

function HeroSection() {
    const [slide, setSlide] = useState(1)

    const renderSlide=()=>{
        switch (slide) {
            case 1:return <PizzaSlide/>
        
            default:
                break;
        }
    }
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection
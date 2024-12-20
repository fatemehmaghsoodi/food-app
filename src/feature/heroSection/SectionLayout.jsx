import React, { useEffect } from 'react'
import HeroSectionRight from './HeroSectionRight'
import HeroSectionLeft from './HeroSectionLeft'

function SectionLayout({image, name, setSlide, slide}) {
  
  return (
    <>
    <HeroSectionRight slide={slide}>
      <img src={image} alt="" />
    </HeroSectionRight>
    <HeroSectionLeft setSlide={setSlide}>
         {name}
    </HeroSectionLeft>
    </>
  )
}

export default SectionLayout

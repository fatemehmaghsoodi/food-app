import React, { useState } from 'react'
// import AppLayout from '../AppLayout'
import HeroSectionLeft from './HeroSectionLeft'
import SectionLayout from './SectionLayout';
import pizzaImg from '../../assets/images/pizza-img.png'
import pastaImg from '../../assets/images/home1-slide3-img.png'
import saladImg from '../../assets/images/slide2-img.png'


function HeroSectionLayout() {
  const [slide, setSlide] = useState(1);
  
  const renderSlide = () => {
    switch (slide) {
      case 1:
        return (
            <SectionLayout 
             image={pizzaImg}  
             name="pizza peperoni"
             setSlide={setSlide}
             slide={slide}/>);
        case 2:
          return (<SectionLayout image={pastaImg} name="cream pasta"/>);
          case 3:
            return (<SectionLayout image={saladImg} name="samond salad"/>);
      default:
        return null;
          }
      }
  return (
    <div className='overflow-hidden relative w-screen max-lg:h-2/3 max-md:top-0 max-sm:h-64 max-sm:top-20 sm:h-[600px]'>
       {/* <AppLayout/> */}
      {renderSlide()}
      {/* <PizzaSlide/> */}
    </div>
  )
}

export default HeroSectionLayout
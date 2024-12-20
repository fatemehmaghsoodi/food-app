import React from 'react'

function HeroSectionRight({children}) {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50" className='absolute max-md:-right-16 md:max-xl:w-4/6 sm:max-xl:-right-24 w-full max-sm:max-w-64 max-lg:w-96 h-full bg-[url("assets/images/home1-slide1-bg.png")] bg-right-top z-10 bg-contain bg-no-repeat'>
      <div  data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000" className='absolute animate-jumping md:max-2xl:right-64 max-md:right-28 max-sm:w-40 max-md:w-56 top-[12%] md:max-2xl:w-[390px] sm:max-md:w-80 sm:max-md:right-56'>
        {children}
      </div>
    </div>   
  )
}

export default HeroSectionRight
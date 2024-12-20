import React from 'react'
// import { Bounce, Flip, LightSpeed, Pop, Roll, Slide, Zoom } from 'react-swift-reveal'
import Button from '../../ui/Button'

function HeroSectionLeft({children, setSlide}) {
 
  return (
    <div className='absolute z-20 md:max-2xl:w-2/6 max-md:w-3/6 h-full pl-3 pt-8 sm:pt-32'>
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className='capitalize sm:text-5xl max-sm:text-2xl text-[#303030]'>
           {children}
        </h2>
      </div>

      <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500" className='text-balance max-sm:hidden mt-8 text-balance text-dark-200'> 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptas nihil consequatur modi omnis! Beatae eum perferendis fuga, id illum fugit aliquam, ea labore qui dicta ad laudantium possimus quidem.
      </p>
      <Button>
        find out more
      </Button>
      {/* <div className="mt-5 h-40">
          <button onClick={()=>setSlide(2)} className="w-24 bg-secondary-100 rounded-t-full rounded-b-[900px] h-full">
            <img src={saladImg} alt="" />
            <p className="text-center font-medium text-white text-lg "> cream pasta</p>
          </button>
      </div> */}
    </div>
  )
}

export default HeroSectionLeft
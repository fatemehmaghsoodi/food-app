import React from 'react'
// import { Slide } from 'react-swift-reveal'
import Button from '../../ui/Button'
function WelcomeRows({children,descriptionDir, imageDir, image}) {
  return (
    <>
      <div className="sm:row-span-2 max-sm:grid-rows-2 ">
        <div 
          className='bg-stone-100 overflow-hidden shadow-[0_1px_18px_0px_rgba(0,0,0,0.12)] border h-fit rounded-3xl'
          data-aos={imageDir}>
          <img src={image} className='rounded-3xl transition duration-1000 ease-in-out hover:scale-110 ' alt="" />
        </div>
      </div>
      <div className="sm:row-span-1 max-sm:grid-rows-1 h-fit mt-4" data-aos={descriptionDir}>
        {children}
        <Button>
          Explore
        </Button>
      </div>
    </>
  )
}

export default WelcomeRows
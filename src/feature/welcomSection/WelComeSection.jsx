import React, { Children } from 'react'
// import { Slide } from 'react-swift-reveal'
import berger from '../../assets/images/berger.jpg'
import stick from '../../assets/images/stick.jpg'
import WelcomeRows from './WelcomeRows'
import Button from '../../ui/Button'

function WelComeSection() {
  return (
    <section className="my-[30px] xl:mt-[100px] max-sm:mt-28"
    // data-aos="fade-up"
    // data-aos-delay="350"
  >
    <div className="container mx-auto">
    <div className="min-h-[560px] grid grid-cols-2 sm:grid-rows-3 mx-8 max-sm:grid-cols-1 gap-4">
      <WelcomeRows imageDir="slide-right" descriptionDir="slide-left" image={berger}>
          <h2 className='lg:text-5xl'>Pretty Big Burger</h2>  
          <p className='text-dark-200 lg:text-2xl mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis voluptatem explicabo, exercitationem asperiores vero officia eveniet assumenda repellat consectetur</p>
      </WelcomeRows>
      <WelcomeRows imageDir="slide-left" descriptionDir="slide-right" image={stick}>
          <h2 className='lg:text-5xl sm:-mt-[280px] md:-mt-[190px] lg:-mt-[120px] xl:mt-0 max-sm:mt-0'>Steak With Stick</h2>  
          <p className='text-dark-200 lg:text-2xl mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis voluptatem explicabo, exercitationem asperiores vero officia eveniet assumenda repellat consectetur</p>
      </WelcomeRows>
    </div>
    </div>
  </section>
  )
}

export default WelComeSection

import React from 'react'

function Offers() {
  return (
    <section>
        <div className='container mt-10 mx-auto ' >
                <div data-aos="flip-down">
            <div className="w-full h-96"  >
                <div  className="bg-[url('./assets/images/home1-bg-pizza.png')] bg-contain bg-no-repeat h-96 w-11/12 mx-auto bg-right-bottom">
                    <OfferInfo/>
                </div> 
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Offers

function OfferInfo(){
    return(
    <div className='pl-10'>
        <h1 className='w-3/6 max-md:w-full text-[70px] max-lg:text-5xl'>Our Special Good  Food Price</h1>
        <p className='mt-4'>Seafood and mushroom pizza size L</p>
        <p className='text-secondary-200 font-extrabold text-2xl mt-4'>$18.99
            <span className='line-through font-thin ml-2 text-dark-300 text-sm'>$25.99</span>
        </p>
    </div>
    )
}
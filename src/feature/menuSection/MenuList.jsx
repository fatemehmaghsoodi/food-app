import React from 'react'
import MenuListItem from './MenuListItem'

function MenuList({categories, categoryHandler}) {
  return (
    <div className='mt-5 w-full max-sm:overflow-x-scroll flex justify-center'>
        <ul className='flex lg:gap-x-10 w-fit justify-center items-center '>
           {categories.map((item, index)=>{
               return <MenuListItem categoryHandler={categoryHandler} index={index} item={item} key={index}/>   
           })}
        </ul>
    </div>
  )
}

export default MenuList
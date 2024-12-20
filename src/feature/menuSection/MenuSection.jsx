import React from 'react'
import { useState } from 'react'
import MenuItems from './MenuItems'
import MenuList from './MenuList'
const categories=[
  {
     name:"all",
     img:"All",
  },
  {
    name:"pizza",
    img:"Pizza",
  },
  {
    name:"burger",
    img:"burger",
  },
  {
    name:"Chicken",
    img:"stick",
  },
  {
     name:"salad",
     img:"salad",
  },
  {
     name:"drinks",
     img:"drinks",
  },
  {
     name:"cake",
     img:"cake",
  },
 ]

function MenuSection() {
  const [categorySelected, setCategorySelected]= useState("all")
  const categoryHandler= (category)=>{
    setCategorySelected(category)
  }
  
  return (
    <section>
      <div className='container mt-10 mx-auto' data-aos="zoom-in">
        <div className='flex justify-center'>
            <div className='w-36'>
              <h1 className='border-b-4 border-secondary-200'>menu</h1>
            </div>
        </div>
        <MenuList categories={categories} categoryHandler={categoryHandler}/>
        <MenuItems categorySelected={categorySelected}/>
    </div>
    </section>
  )
}

export default MenuSection
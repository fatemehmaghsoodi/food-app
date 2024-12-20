import React from 'react'
import Button from '../../ui/Button'
import MenuItem from './MenuItem'
import useMenu from './useMenu'

function MenuItems({categorySelected}) {
    const {categories, isLoading}= useMenu()
    const categoriesFiltered = categories && categories.filter((category)=> category.name === categorySelected )
    
    return (
    <div className='px-10'>
        <div className='flex flex-wrap'>
            {categoriesFiltered && categoriesFiltered.map((item)=>{
                return <MenuItem key={item.id} item={item.products}/>
            })}
        </div>
        <div className='text-center'>
            <Button> view full menu</Button>
        </div>
    </div>
   
  )
}

export default MenuItems
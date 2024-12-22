import React from 'react'
import { useState } from 'react'

function MenuListItem({item, index, categoryHandler}) {
  const [isHover, setIsHover] = useState(false)
  return (
    <li  className="p-5 w-24 h-fit text-center flex justify-center items-center" >
      <button onClick={()=>categoryHandler(item.name)} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
          <img className='mb-2 max-sm:w-12' src={isHover? `/images/${item.img}-icon-hover-menu${index+1}.png`:`/images/${item.img}-icon-menu${index+1}.png`} alt={item.name}/>
          <span className={isHover?`text-secondary-200`: `` }>{item.name}</span>
      </button>
    </li>
  )
}

export default MenuListItem
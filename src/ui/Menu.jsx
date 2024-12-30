import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo1.svg'
import {SlBasket, SlHeart, SlMenu } from 'react-icons/sl'
import {MdOutlineClose } from 'react-icons/md'
import FavoriteList from './FavoriteList'
import { useSelector } from 'react-redux'
import OrdersList from './OrdersList'
import Badge from './Badge'
function Menu() {
 const [isOpen, setIsOpen] = useState(false)
 const [stickyClass, setStickyClass] = useState('absolute');
 const [isFavoriteOpen, setIsFavoriteOpen]= useState(false)

 useEffect(() => {
  window.addEventListener('scroll', stickNavbar);

  return () => {
    window.removeEventListener('scroll', stickNavbar);
  };
}, []);

const stickNavbar = () => {
  if (window !== undefined) {
    let windowHeight = window.scrollY;
    windowHeight > 500 ? setStickyClass('fixed bg-white top-0 left-0 z-50') : setStickyClass('absolute');
  }
};
 const handleMenu=()=>{
    setIsOpen(pre=>!pre)
  }
  
  return (
    <div className='relative w-full '>
    <div className={`transition transition-all w-full z-50 ${stickyClass}`}>
    <div className='bg-stone-100/25 h-22 max-md:h-20 flex items-center justify-around px-5 transition-all'>
        <img src={logo} alt="pizall" className='max-w-[100px]'/>
      <div className='flex flex-row basis-3/4 h-full items-center justify-between max-md:justify-end'>
      <ul className='flex flex-row gap-x-4 justify-start max-md:hidden'>
        <MenuList/>
      </ul>
      <IconsList 
        handleMenu={handleMenu} 
        isOpen={isOpen}
        isFavoriteOpen={isFavoriteOpen}
        setIsFavoriteOpen={()=>setIsFavoriteOpen(is=>!is)}
        />
      </div>
    </div>
    <div className={`bg-blue-100 absolute transition-all duration-1000 ease-out w-full ${isOpen? 'top-[112px] max-md:top-20' : '-top-64'}` }>
      <ul className= 'flex flex-col gap-x-4 items-center md:hidden h-64' >
        <MenuList/>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Menu

function MenuList(){
  return(
      <>
        <li className='p-5'><NavLink className='hover:text-secondary-100 font-semibold'>HOME</NavLink></li>
        <li className='p-5'><NavLink className='hover:text-secondary-100 font-semibold'>SHOP</NavLink></li>
        <li className='p-5'><NavLink className='hover:text-secondary-100 font-semibold'>MENU</NavLink></li>
        <li className='p-5'><NavLink className='hover:text-secondary-100 font-semibold'>GALERY</NavLink></li>
      </>
  )
}

function IconsList({handleMenu, isOpen, setIsFavoriteOpen, isFavoriteOpen}) {
  const {favorite}= useSelector(state=>state.favorite)
  const {order}= useSelector(state=>state.order)

  const [isCartOpen, setIsCartOpen]= useState(false)
  return(
      <ul className='flex flex-row gap-x-3 justify-center items-center'>
          <li>
          <button onClick={setIsFavoriteOpen} className='relative hover:text-secondary-200 font-semibold h-12'>
            <SlHeart size={20} className=''/>
            <Badge count={favorite.length}/>
          </button>
        </li>
        {isFavoriteOpen && <FavoriteList closeFavorite={()=>setIsFavoriteOpen(false)}/> }
        <li>
          <button onClick={()=>setIsCartOpen(pre=>!pre)} className='relative hover:text-secondary-200 font-semibold h-12'>
            <SlBasket size={20}/>
            <Badge count={order.length}/>
          </button>
        </li>
        {isCartOpen && <OrdersList closeOrder={()=>setIsCartOpen(is=>!is)}/>}
        <li className='md:hidden'>
          <button className='hover:text-secondary-200 font-semibold self-item w-8 pt-2'
          onClick={handleMenu}>
            {isOpen?<MdOutlineClose size={25}/> : <SlMenu size={20}/> }
          </button>
        </li>
      </ul>
  )
}
import React, { useRef } from 'react'
import { SlHeart, SlTrash } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from '../feat/favoriteSlice';
import SubMenuLayout from './SubMenuLayout';

function FavoriteList({closeFavorite}) {
   const {favorite} = useSelector((state)=>state.favorite) 
  return (
    <SubMenuLayout closeItem={closeFavorite}>
        {favorite.length? favorite.map((item, index)=> <FavoriteItem item={item} key={index}/>)
        :<p>no items in favorite list</p>
        }
    </SubMenuLayout>
  )
}

export default FavoriteList

function FavoriteItem({item}){
    const dispatch= useDispatch()
    return(
        <li className='flex justify-start px-3 mt-2 gap-x-2'>
        <img className='w-20 rounded-full' src={item.img} alt="" />
        <div className='flex w-full justify-between' >
            <div className='flex flex-col gap-y-1 justify-center'>
                <p className='text-sm text-nowrap'>{item.name}</p>
                <span>$ {item.price}</span>
            </div>
            <button className='max-w-fit' onClick={()=> dispatch(deleteFavorite(item.name))}>
                <SlTrash className='text-secondary-200'/>
            </button>
        </div>
        </li>  
    )
}
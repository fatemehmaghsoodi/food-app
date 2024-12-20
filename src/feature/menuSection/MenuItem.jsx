import React, { useEffect, useState } from 'react'
import { SlBasket, SlCheck, SlHeart, SlMinus, SlPlus } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../feat/favoriteSlice/';
import { deleteFavorite } from '../../feat/favoriteSlice';
import toast from 'react-hot-toast';
import { addOrder } from '../../feat/cartSlice';

function MenuItem({item}) {
    if (!item.length > 0) return <p className='mx-auto py-5 text-dark-300'>sorry </p>
    const product= item.map((product, index)=> <Item product={product} key={index}/>)

    return product
}

export default MenuItem

function Item({product}){
    const [countOfOrder, setCountOfOrder]= useState(0)
    const {favorite} = useSelector(state=> state.favorite)
    const dispatch= useDispatch()
    const selectedItem = favorite.some(item=> item.name === product.name)
    const handleFavorite= ()=>{
        if(selectedItem){
            dispatch(deleteFavorite(product.name))
        }else{
            dispatch(addFavorite(product))
        }
    }
    useEffect(()=>{
        if(countOfOrder > 0){
            // toast.success(`'${product.name}' added to cart`)
            dispatch(addOrder({...product , count:countOfOrder }))
        }
    },[countOfOrder])
    
    return(
      <div className='basis-1/4 max-md:basis-1/2 max-sm:basis-full p-5 max-h-full min-h-[300px]' >
        <div className='relative border-4 rounded-2xl hover:border-secondary-200 overflow-hidden backdrop-blur-3xl'>
            <img src={product.img} alt={product.name} />
            <button 
            className={`absolute z-50 top-5 right-5 w-6 h-6 rounded-full ${selectedItem ?'bg-secondary-200 text-white' : 'bg-neutral-100 text-secondary-200'}`}
            onClick={handleFavorite}
            >
               <SlHeart className='m-auto '/>
            </button>
        </div>
        <div className='mt-3'>
            <h3 className='text-md font-bold'>{product.name}</h3>
            <p className="text-dark-300">description</p>
        </div>
        <div className='flex justify-between text-secondary-200 items-center mt-2'>
            <span className='font-bold'>$ 50</span>
            {countOfOrder < 1  
            ?<button onClick={()=> setCountOfOrder((pre) => pre+1)}>
                <SlBasket className="text-xl"/>
            </button>
            :<div className='flex gap-x-2 items-center justify-center'>
                <button className='max-w-fit' 
                    onClick={()=> setCountOfOrder((pre) => pre+1)}>
                    <SlPlus className="text-xl"/>
                </button>
                <span className="text-xl">{countOfOrder}</span>
                <button 
                onClick={()=> setCountOfOrder((pre)=>pre-1)}>
                    <SlMinus className="text-xl"/>
                </button>
            </div>
            }
            
        </div>
      </div>
    )
}
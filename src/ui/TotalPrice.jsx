import React from 'react'
import { useSelector } from 'react-redux'

function TotalPrice() {
    const {order}= useSelector(state=>state.order)
    const totalPrice = order.reduce(function(prev, current) {
        return prev +(Number(current.price) * current.count)
      }, 0);
  return (
    <div className='flex justify-between mt-2'>
      <span className='font-medium'>total:</span>
      <span className='text-secondary-200'>$ {totalPrice}</span>
    </div>
  )
}

export default TotalPrice
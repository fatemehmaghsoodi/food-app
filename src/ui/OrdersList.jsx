import SubMenuLayout from './SubMenuLayout'
import { useSelector } from 'react-redux'

function OrdersList({closeOrder}) {
   const {order}= useSelector(state=>state.order)
   
  return (
    <SubMenuLayout closeItem={closeOrder}>
       {order.length 
        ? order.map((item, index)=> <OrderItem item={item} key={index}/>)
        :<p>no items in order list</p>
        } 
    </SubMenuLayout>
  )
}

export default OrdersList

function OrderItem({item}){
  return(
      <li className='flex justify-start px-3 mt-2 gap-x-2'>
      <img className='w-20 rounded-full' src={item.img} alt="" />
      <div className='flex w-full justify-between' >
          <div className='flex flex-col gap-y-1 justify-center'>
              <p className='text-sm text-nowrap'>{item.name}</p>
              <span>{item.count} &#9747; $ {item.price}</span>
          </div>
      </div>
      </li>  
  )
}
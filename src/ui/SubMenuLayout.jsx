import React, { useRef } from 'react'
import useOutSideClick from '../hook/useOutSideClick'
import { CgClose } from 'react-icons/cg'
import TotalPrice from './TotalPrice'

function SubMenuLayout({closeItem, children, nameList}) {
const ref= useRef()
useOutSideClick(ref, closeItem)
 
return (
    <div ref={ref} className='absolute top-[80px] bg-white shadow-md shadow-gray-400 w-96 max-[400px]:max-w-screen-sm max-sm:right-0 right-[70px] px-3 py-3 rounded-md max-h-96 overflow-auto max-sm:right-2'>
        <div className='flex justify-end text-secondary-200'>
            <button onClick={closeItem}><CgClose/></button>
        </div>
        <span className='flex justify-center w-1/2 mx-auto border-b border-gary-400'>{nameList}</span>
        <ul>
           {children}
        </ul>
        <hr/>
        <TotalPrice/>
    </div>
  )
}

export default SubMenuLayout

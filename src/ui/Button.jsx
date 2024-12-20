import React from 'react'

function Button({children}) {
  return (
    <button className='uppercase text-white font-semibold btn mt-8 transition-all text-xs'>
        {children}   
    </button>
  )
}

export default Button
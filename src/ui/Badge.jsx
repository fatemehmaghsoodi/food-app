import React from 'react'

function Badge({count}) {
  return (
    <span className='badge'>
        <span class="relative flex h-5 w-5">
            
            {count? <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-100 opacity-75"></span> : ''}
            
            <span class="relative inline-flex rounded-full justify-center items-center m-auto h-4 w-4 font-thin bg-secondary-200">
                {count}
            </span>
        </span>
    </span>
  )
}

export default Badge

import React from 'react'

const prop = (pro) => {

  return (
    
    <div className='lg:transition-transform lg:duration-300 lg:transition-all hover:lg:scale-105 hover:lg:rotate-2 hover:lg:bg-gradient-to-r hover:lg:from-red-100 hover:lg:to-white  lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src={pro.image} />
            <h1 className='text-xl'>{pro.title}</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
    </div>
  )
}

export default prop

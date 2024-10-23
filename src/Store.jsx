import React from 'react'
import Header from './Header'

export default function Store() {
  return (
    <>
    <Header/>
    <div>
          <h1 className="flex justify-center items-center p-4 font-serif font-bold text-4xl">Future ready setups</h1>
      <div className='flex justify-center items-center gap-4'>
          <div>
            <img className='w-80 rounded-4xl' src=".\src\assets\p-2.jpg" alt="" />
            <p>Small space, big profits</p>
          </div>

          <div className=''>
            <img className='w-40  rounded-4xl' src=".\src\assets\p-1.jpg" alt="" />
            <p>Large area, lasting profits</p>
          </div>
      </div>
    </div>
    </>
  )

}

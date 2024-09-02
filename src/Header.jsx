import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-green-400 align-baseline'>
      <img className='h-[90px] w-[110px] rounded-full size-48 ' src=".\src\assets\logo123-removebg-preview.png" alt="" />
        <ul className='flex space-x-4 py-8 text-black '>
            <li className='font-serif font-semibold  hover:text-black'>Home</li>
            <li className='font-serif font-semibold  hover:text-black'>Farmer_Section</li>
            <li className='font-serif font-semibold  hover:text-black'>consultencies</li>
            <li className='font-serif font-semibold  hover:text-black'>About Us</li>
        </ul>
        <div className='py-5'>
            <a href="#" className='pr-4'>Login</a>
            <button className='bg-green-400 px-4 py-2 rounded-xl hover:bg-green-500'>Join Us</button>
        </div>
    </div>
  )
}

export default Header


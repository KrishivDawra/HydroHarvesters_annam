import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-16 '>
      <img className='h-[90px] w-[110px]' src="./src/assets/logo.png" alt="" />
        <ul className='flex space-x-4 py-3 text-black '>
            <li>Home</li>
            <li>Farmer_Section</li>
            <li>consultencies</li>
            <li>About Us</li>
        </ul>
        <div className='py-1'>
            <a href="#" className='pr-4'>Login</a>
            <button className='bg-green-400 px-4 py-2 rounded-xl hover:bg-green-500'>Join Us</button>
        </div>
    </div>
  )
}

export default Header


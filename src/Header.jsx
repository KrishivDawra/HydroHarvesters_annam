import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [modelstatus,setModelstatus] = useState(false)
  return (
    <>
    <div className={`modeloverlay ${modelstatus?'modelshow':''}`} onClick={()=> setModelstatus(false)}></div>
    <div className={`modeldiv ${modelstatus?'showmodeldiv':''} `}>
      <div className='fixed right-3 z-500 top-2'>
      <span className='cursor-pointer p-1' onClick={()=> setModelstatus(false)}>&times;</span>
      </div>
      <div className='container relative mt-8 '>
        <h1 className='font-serif subpixel-antialiased tracking-wide line-clamp-1 text-center text-2xl '> Login</h1>
        <div className='m-2'>
        <form action="/" method='post'>
          <div>
          <input type="text" className=" rounded w-full my-3 h-10 border-slate-900/400 border-2" name="uname" id="name" placeholder="Username" required=""/>
          </div>

         
          <div>
                    <input className='w-full h-10 w-full border-slate-900/400 border-2 rounded mb-3' type="password"  name="psw" placeholder="Password" required=""/>
          </div>
          
                           
          
          <div className='mt-2 text-center'>
                <button className='bg-green-300  mr-auto rounded p-2'>Submit</button>
          </div>
         
        </form>
        </div>
      </div>
      
    </div>
    <div className='lg:flex lg:justify-between lg:bg-transparent lg:align-baseline hidden'>
      <img className='h-[90px] w-[110px] rounded-full size-48 ' src=".\src\assets\logo123-removebg-preview.png" alt="" />
        <ul className='lg:flex lg:space-x-4 lg:py-8 lg:text-black '>
            <li className='font-serif font-semibold  hover:text-black'><Link to = {'/'}> Home</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/store'}>Products</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/consult'}>consultencies</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/About-us'}> About Us</Link></li>
        </ul>
        <div className='py-5'>
            <a className='pr-2 cursor-pointer ' onClick={()=> setModelstatus(true)}>Login </a>
            <button className='bg-gradient-to-r from-orange-400 to-red-500 px-4 py-2 rounded-xl mr-2'>Join Us</button>
        </div>
    </div>
    <div className="w-full px-6 py-3 flex justify-between items-center bg-transparent  top-0 lg:hidden">
        <div className="flex items-center space-x-2">
        <div className="relative">
      {/* Navbar */}
      <div className=" p-4 flex justify-between items-center">
        
        {/* Menu Button for Mobile */}
        <div >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 25 25"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        
        
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-950 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 `}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none mb-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to = {'/'}>Home</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/store'}>Products</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/consult'}>consultencies</Link>
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-lg block">
              <Link to={'/About-us'}> About Us</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
          <div className="text-lg font-bold"><Link to={'/'}>
          Farmtalk</Link></div>
        </div>
        {/* Profile Icon */}
        <div className="w-10 h-10 rounded-full bg-white  flex items-center justify-center">
          {/* Placeholder for Profile Icon */}
          <div className="text-white text-xl">👤</div>
          
        </div>
      </div>
    </>
  )
}

export default Header


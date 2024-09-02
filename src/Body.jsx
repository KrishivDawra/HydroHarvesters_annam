import React from 'react'

const Body = () => {
  return (
    <div className='pt-8 px-16'>
      <div className='flex'>
        <div className='pt-24 pr-10 space-y-6'>
        <h1 className='font-serif text-6xl'>Hydro Harvesters: Cultivating Tomorrow’s Harvests, Today’s Savings!</h1>
        <p className='text-gray-600 text-md'>Hydro Harvesters transforms farming with soil-free hydroponics, delivering 7x higher yields, top-notch quality, and affordable fresh produce—revolutionizing harvests, one plant at a time.</p>
        <button className='bg-green-400 px-5 py-3 rounded-full'>Order Now!</button>
      </div>
      
      <img className='h-[500px]' src=".\src\assets\home_page.jpg" alt="" />
      
      </div>
      

      <div className='pt-16 '>
        <h1 className='font-bold font-sans justify-center items-center flex text-6xl'>Get set, connect</h1>
        <div className='flex justify-center items-center gap-9 pt-6'>
          <div className='flex'>
            <img className='h-[25px] pr-2' src=".\src\assets\setup.svg" alt="" />
            <span>Grow Yourself</span>
          </div>

          <div className='flex'>
            <img className='h-[25px] pr-2' src=".\src\assets\vchat.svg" alt="" />
            <span>Ask Nutritionist</span>
          </div>
        </div>

        <div className='pt-16'>
          <h1 className='justify-center items-center flex text-6xl font-serif font-bold pb-8'>Our working areas!</h1>
          <div className='flex justify-center space-x-8'>

          
            <div className=" "> 
              <img src=".\src\assets\work-1.jpg" className='h-80 rounded-lg   ' alt="" />
              <h2 className='font-semibold font-serif text-lg flex justify-center space-x-8'>Commercial Setups</h2>
            </div>

            <div className=" "> 
              <img src=".\src\assets\work-2.jpg" className='h-80 rounded-lg ' alt="" />
              <h2 className='font-semibold font-serif text-lg flex justify-center space-x-8'>Home Setups</h2>
            </div>

            <div className=" "> 
              <img src=".\src\assets\work-3.jpg" className='h-80 rounded-lg ' alt="" />
              <h2 className='font-semibold font-serif text-lg flex justify-center space-x-8'>Conceltencies</h2>
            </div>

            <div className=" "> 
              <img src=".\src\assets\work-4.jpg" className='h-80 rounded-lg ' alt="" />
              <h2 className='font-semibold font-serif text-lg flex justify-center space-x-8'>Retail Section</h2>
            </div>
          </div>
        </div>
      </div>


      


      </div>
  )
}

export default Body

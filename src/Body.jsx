import React from 'react'

const Body = () => {
  return (
    <div className='pt-8 '>
      <div className='flex px-16'>
        <div className='pt-24 pr-10 space-y-6'>
        <h1 className='font-serif text-6xl'>Hydro Harvesters: Cultivating Tomorrow’s Harvests, Today’s Savings!</h1>
        <p className='text-gray-600 text-md'>Hydro Harvesters transforms farming with soil-free hydroponics, delivering 7x higher yields, top-notch quality, and affordable fresh produce—revolutionizing harvests, one plant at a time.</p>
        <button className='bg-green-400 px-5 py-3 rounded-full hover:bg-green-600'>Order Now!</button>
      </div>
      
      <img className='h-[500px] rounded-xl' src=".\src\assets\home_page.jpg" alt="" />
      
      </div>
      

      <div className=' py-16 '>
        <h1 className='font-bold font-sans justify-center items-center flex text-6xl'>Get set, connect</h1>
        <div className="flex justify-center mb-6">
                    <button className="px-4 py-2 border-b-4 border-blue-500 text-blue-500 font-semibold">Mobile</button>
                    <button className="px-4 py-2 text-gray-600 hover:text-blue-500 hover:border-blue-500">AirFiber/Fiber</button>
                </div>
                <div  className='w-2/5 h-40 bg-blue-500 pt-5  space-x-4 mb-6  mx-auto rounded-[30px]'>
                {/* Prepaid/Postpaid Toggle */}
                <div className="flex ml-14 bg-blue-800 w-60 h-12 rounded-full">
                    <button className="px-6 py-2 mx-1 my-1 bg-blue-500 text-white rounded-full font-medium">Prepaid</button>
                    <button className="px-6 py-2  text-grey-900 rounded-full font-medium hover:bg-blue-500 hover:text-white ">Postpaid</button>
                
                </div>
                
                {/* Input Field */}
                <div className="my-6 flex mx-auto justify-center">
                    <input 
                        type="text" 
                        placeholder="+91 Jio Number" 
                        className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                    />
                    <button className=" ml-2 px-6 py-2  text-black font-medium rounded-full bg-white hover:bg-blue-600 hover:text-white">
                    Proceed
                </button>
      
                </div>
                
                
                </div>
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

      </div>

      <div className='pb-16'>
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



        <div className='py-10 bg-green-400 space-y-4 pb-16'>
          <h1 className='text-5xl font-bold flex justify-center items-center'>Need guidance?</h1>
          <h2 className='text-lg flex justify-center items-center'>We would like to help you.</h2>

          <div className='flex justify-center items-center gap-10'>
            <div className='flex gap-1 bg-green-500 px-3 py-2 border-solid border-black  rounded-xl hover:border-white'>
              <img src=".\src\assets\chat.png" alt="" />
              <button>Chat with us!</button>
            </div>

            <div className='flex gap-1 bg-green-500 px-3 py-2  border-green-500 rounded-xl hover:border-white'>
              <img src=".\src\assets\call.png" alt="" />
              <button>Contact Us!</button>
            </div>

          </div>
        </div>


        

      


      


    </div>
  )
}

export default Body

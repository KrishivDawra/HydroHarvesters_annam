import React, { useEffect } from 'react';
import Header from './Header';


export default function Store() {
  return (
    <>
    <div className='bg-green-400'>
      <Header/>
    </div>
    
    <div className='flex justify-center items-center flex-col pt-5'>
      
      <div className=' lg:box-border lg:border-1 lg:w-[1000px] lg:flex lg:justify-center lg:items-center lg:gap-x-5 lg:font-serif lg:p-6 lg:rounded-lg lg:border-collapse lg:border-black lg:shadow-lg lg:bg-slate-100 lg:text-md'>
      <span className='cursor-pointer'>Calculator</span>
        <span><a href="#setup">Setups</a></span>
        <span><a href="#automation">Automation</a></span>
        <span><a href="#organic">Fresh Vegetables</a></span>
        <span className='cursor-pointer'>Nutirents</span>
        
      </div>

      <div className='lg:flex lg:flex-col lg:border-2 lg:w-[1000px] lg:gap-2 lg:p-2 lg:pt-3'>
  <h1 className='lg:flex lg:justify-center lg:items-center lg:text-4xl lg:font-bold lg:font-serif'>Munafa Meter</h1>
  
  <form onSubmit="handleSubmit(event)" className='lg:flex lg:flex-col lg:gap-2 lg:p-2'>
    <div className='lg:flex lg:gap-x-2'>
      <label htmlFor="area" className='lg:px-1 lg:py-2'>Select Area in</label>
      <select name="area" id="area" className='bg-slate-100 lg:w-[850px] lg:px-1 lg:py-2 lg:rounded-md font-serif'>
        <option value="Select">Select</option>
        <option value="Sq/Feet">Sq-Feet</option>
        <option value="Acre">Acres</option>
        <option value="Beegha">Beeghe</option>
      </select>
    </div>
    
    <input type="number" name="areaValue" id="areaValue" className='bg-slate-100 lg:px-1 lg:py-2 lg:rounded-md font-serif' placeholder='Enter Area'/>
    <input type="text" className='bg-slate-100 lg:px-1 lg:py-2 lg:rounded-md font-serif' placeholder='Enter State' />
    
    <div className='lg:flex lg:gap-x-2'>
      <label htmlFor="type" className='lg:px-1 lg:py-2'>Select type:</label>
      <select name="type" id="type" className='bg-slate-100 lg:w-[865px] lg:px-1 lg:py-2 lg:rounded-md font-serif'>
        <option value="Select">Select</option>
        <option value="Horizontal">Horizontal Farming</option>
        <option value="Vertical">Vertical Farming</option>
        <option value="A-Shape">A-Shape Farming</option>
        <option value="Hydro Harvesters Special">Hydro Harvesters Special</option>
      </select>
    </div>
    
    
    <button type="submit" className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-md lg:mt-3'>Calculate Profit</button>

 
    <p id="result" className='text-xl font-serif lg:mt-4'></p>
  </form>
</div>


      <h1 className='lg:text-4xl lg:font-serif lg:font-bold lg:pt-8 lg:pb-6' id='setup'>HydroPonic Setups</h1>

      <div className='lg:flex lg:flex-col lg:gap-8'>

        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-12 '>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\Vertical.jpeg" alt="Vertical Farming" />
            <h1 className='text-lg'>Vertical Farming</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\A shape.jpeg" alt="A-Shape Farming" />
            <h1 className='text-lg'>A-Shape Farming</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\H shape.jpeg" alt="H-Shape Farming" />
            <h1 className='text-lg'>H-Shape Farming</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

        </div>


        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-12'>
          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\DFT.jpeg" alt="Vertical Farming" />
            <h1 className='text-lg'>DWC Farming</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\NFT.jpeg" alt="A-Shape Farming" />
            <h1 className='text-lg'>NFT Farming</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\H shape.jpeg" alt="H-Shape Farming" />
            <h1 className='text-lg'>H-H Special</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>
        </div>
        
      </div>



      <h1 className='lg:text-4xl lg:font-serif lg:font-bold lg:pt-8 lg:pb-6' id='automation'>Automation Services</h1>

      <div className='lg:flex lg:flex-col lg:gap-8'>

        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-12'>

          <div className='lg:transition-transform lg:duration-300 lg:transition-all hover:lg:scale-105 hover:lg:rotate-2 hover:lg:bg-gradient-to-r hover:lg:from-red-100 hover:lg:to-white  lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-64' src=".\src\assets\Farmtalk.jpeg" alt="Vertical Farming" />
            <h1 className='text-xl'>Farm Talk</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:transition-transform lg:duration-300 lg:transition-all hover:lg:scale-105 hover:lg:rotate-2 hover:lg:bg-gradient-to-r hover:lg:from-red-100 hover:lg:to-white hover:lg:shadow-[0px_10px_20px_rgba(255,0,0,0.4)] lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2'>
            <img className='lg:w-64' src=".\src\assets\iot.jpg" alt="A-Shape Farming" />
            <h1 className='text-xl'>FarmTalk with IOT</h1>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>
        </div>
      </div>




      <h1 className='lg:text-4xl lg:font-serif lg:font-bold lg:pt-8 lg:pb-6' id='organic'>Organic Vegetables</h1>

      <div className='lg:flex lg:flex-col lg:gap-8'>

        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-6 '>

          <div className='lg:duration-300 hover:lg:scale-105 lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\tomato.jpg" alt="Vertical Farming" />
            <h1 className='text-xl'>Tomato</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\brocali.jpg" alt="A-Shape Farming" />
            <h1 className='text-xl'>Brocoli</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\carrot.jpg" alt="H-Shape Farming" />
            <h1 className='text-xl'>Carrot</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\eggplant.jpg" alt="A-Shape Farming" />
            <h1 className='text-xl'>Spinach</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

        </div>


        <div className='lg:flex lg:justify-center lg:items-center lg:gap-x-6'>
          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-xl lg:box-border lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\cucumber.jpg" alt="Vertical Farming" />
            <h1 className='text-xl'>Cucumber</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\chilli.jpg" alt="A-Shape Farming" />
            <h1 className='text-xl'>Chillies</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\basil.jpg" alt="A-Shape Farming" />
            <h1 className='text-xl'>Basil</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>

          <div className='lg:pb-3 lg:rounded-md lg:border-2 lg:border-black lg:shadow-md lg:flex-col lg:flex lg:justify-center lg:items-center lg:transition-transform lg:duration-300 lg:transition-shadow hover:lg:-translate-y-2 hover:lg:shadow-[0px_4px_15px_rgba(255,0,0,0.3)]'>
            <img className='lg:w-52' src=".\src\assets\spinach.jpg" alt="H-Shape Farming" />
            <h1 className='text-xl'>EGG Plant</h1>
            <p>Rs. /-</p>
            <button className='lg:bg-green-500 lg:text-white lg:px-4 lg:py-2 lg:rounded-2xl'>Order Now</button>
          </div>
        </div>
        
      </div>



    </div>
    <script src="scriptstore.js"></script>
    </>
  )

}

import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import  { useState } from 'react'
import { useEffect } from 'react'

const Body = () => {
  let [btnstatus, setBTNstatus] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  }, [stickyHeader]);

  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide

  const slides = [
    // { src: './src/assets/slide-1.jpeg', alt: 'Description of Image 1' },
    // {src: './src/assets/slide-4.jpeg', alt: 'Description of Image 4' },
    // {src: './src/assets/h1.jpeg', alt: 'Description of Image 4' },
    // { src: './src/assets/slide-2.jpeg', alt: 'Description of Image 2' },
    // { src: './src/assets/slide-3.jpeg', alt: 'Description of Image 3' },
    {src: './src/assets/v3.mp4', alt:'something'},
    {src: './src/assets/v4.mp4', alt:'something'},
    {src: './src/assets/v1.mp4', alt:'something'},
    {src: './src/assets/v2.mp4', alt:'something'},
    {src: './src/assets/v5.mp4', alt:'something'},
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide; loop back to the start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Move to the previous slide; loop back to the end
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1750); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(0); // Set back to the first slide for a smoother transition
      }, 1750); // Delay for half a second
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);


  return (
    <>
    <div className='bg-green-400'>

    <div className={` w-full fixed  ${
        stickyHeader
          ? " lg:bg-green-400 text-black"
          : "bg-transparent bg-blend-normal  z-50 text-pale_Green "
      }`}><Header /></div>
      
      <div className="relative w-full   mx-auto overflow-hidden ">
        {/* Slider Wrapper */}
        <div
          id="slider"
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }} // Slide transition
        >
          {slides.map((slide, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              {/* <img src={slide.src} alt={slide.alt} className="w-full" /> */}
              <video src={slide.src} autoPlay loop muted></video>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 h-1/5 top-1/3 ml-3 transform -translate-y-1/2  text-white p-2"
        >
           {/* &#9664; */}
           <img src="./src/assets/backword.png" alt="" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 h-1/5 top-1/3  transform -translate-y-1/2   text-white p-2"
        >
          <img  src="./src/assets/forward.png" alt="" />
        </button>
      </div>




    </div>


    <div className='pt-28	'>
      <div className='flex px-16'>
        <div className='pt-24 pr-10 space-y-6'>
        <h1 className='font-serif text-6xl'>Hydro Harvesters: Cultivating Tomorrow’s Harvests, Today’s Savings!</h1>
        <p className='text-gray-600 text-md'>Hydro Harvesters transforms farming with soil-free hydroponics, delivering 7x higher yields, top-notch quality, and affordable fresh produce—revolutionizing harvests, one plant at a time.</p>
        <button className='bg-green-400 px-5 py-3 rounded-full hover:bg-green-600'><Link to={'/store'} >Order Now!</Link> </button>
      </div>
      
      <img className='h-[500px] rounded-xl' src=".\src\assets\home_page.jpg" alt="" />
      
      </div>
      

      <div className=' py-16 '>
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
        
        <div className="flex justify-center mb-6">
                    
                </div>
                <div  className='w-2/5 h-40 bg-green-500 pt-5  space-x-4 mb-6  mx-auto rounded-[30px]'>
                {/* Prepaid/Postpaid Toggle */}
                <div className="flex ml-14 bg-green-800 w-56 h-12 rounded-full">
                    <button className= {` px-6 py-2 mx-1 my-1  text-white rounded-full font-medium ${btnstatus?'  hover:text-green-200':'bg-green-500'}`} onClick={()=> setBTNstatus(false)} >Existing</button>
                    <button className={`px-8 py-2  my-1 text-white rounded-full font-medium  hover:text-green-200 ${btnstatus?'bg-green-500 ':'hover:text-green-200'} `} onClick={()=> setBTNstatus(true)}> New </button>
                
                </div>
                
                {/* Input Field */}
                <div className="my-6 flex mx-auto justify-center">
                    <input 
                        type="text" 
                        placeholder="+91 Enter Number" 
                        className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                    />
                    <button className=" ml-2 px-6 py-2  text-black font-medium rounded-full bg-white hover:bg-green-900 hover:text-white">
                    Proceed
                </button>
      
                </div>
                
      </div>
        

      </div>

      <div className='pb-16'>
          <h1 className='justify-center items-center flex text-4xl lg:text-6xl font-serif font-bold pb-8'>Our working areas!</h1>
          <div className='flex flex-wrap justify-center space-x-8'>
            <div >
              <img src="./src/assets/work-1.jpg" className='h-80 rounded-lg   ' alt="" />
              <h2 className='font-semibold font-serif text-xl text-center'>Commercial Setups</h2>
            </div>

            <div className="">
              <img src="./src/assets/work-2.jpg" className='h-80 rounded-lg  ' alt="" />
              <h2 className='font-semibold font-serif text-xl text-center'>Home Setups</h2>
            </div>

            <div className="">
              <img src="./src/assets/work-3.jpg" className='h-80 rounded-lg  ' alt="" />
              <h2 className='font-semibold font-serif text-xl text-center'>Consultancies</h2>
            </div>

            <div className="">
              <img src="./src/assets/work-4.jpg" className='h-80 rounded-lg  ' alt="" />
              <h2 className='font-semibold font-serif text-xl text-center'>Retail Section</h2>
            </div>
          </div>
        </div>



        <div className='py-10 bg-green-400 space-y-4 pb-16'>
          <h1 className='text-5xl font-bold flex justify-center items-center'>Need guidance?</h1>
          <h2 className='text-lg flex justify-center items-center'>We would like to help you.</h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10">
            <div className="flex gap-1 bg-green-500 px-3 py-2 border-solid border-black rounded-xl hover:border-white">
              <img src="./src/assets/chat.png" alt="" />
              <button>Chat with us!</button>
            </div>

            <div className="flex gap-1 bg-green-500 px-3 py-2 border-green-500 rounded-xl hover:border-white">
              <img src="./src/assets/call.png" alt="" />
              <button>Contact Us!</button>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default Body;

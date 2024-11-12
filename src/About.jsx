import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


export default function About() {
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
    <div className='dark:bg-gray-900 dark:text-white'>
    <div className={` w-full fixed  ${
        stickyHeader
          ? " lg:bg-green-400 text-black dark:text-white  dark:bg-transparent dark:bg-blend-normal"
          : "bg-transparent bg-blend-normal  z-50 text-pale_Green "
      }`}><Header /></div>
      
      <div className="relative w-full   mx-auto overflow-hidden  ">
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

      <div className='p-4 space-y-8 lg:pt-20'>
        <h1 className='text-5xl flex font-bold font-serif justify-center items-center md:text-7xl'>Working Areas</h1>
        <div className='space-y-3 lg:flex lg:justify-center lg:items-center lg:space-x-8'>

          <div className='md:flex md:justify-center md:items-center md:space-x-8'>
            <div className='flex flex-col justify-center items-center'>
              <img className='h-[250px] w-[250px] flex rounded-full' src=".\src\assets\mahrashtra.jpeg" alt="" />
              <h1 className='text-2xl font-serif'>Mahrashta</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img className='h-[250px] w-[250px] flex rounded-full' src=".\src\assets\gujrat.jpeg" alt="" />
              <h1 className='text-2xl font-serif'>Gujrat</h1>
            </div>
          </div>

          <div  className='md:flex md:justify-center md:items-center md:space-x-8'>
            <div className='flex flex-col justify-center items-center'>
              <img className='h-[250px] w-[250px] flex rounded-full' src=".\src\assets\punjab.jpeg" alt="" />
              <h1 className='text-2xl font-serif'>Punjab</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img className='h-[250px] w-[250px] flex rounded-full' src=".\src\assets\haryana.jpeg" alt="" />
              <h1 className='text-2xl font-serif'>Haryana</h1>
            </div>
          </div>

        </div>
      </div>

      <div className='p-4 space-y-2 flex flex-col justify-center items-center lg:pt-14'>
        <h1 className='text-3xl flex justify-center items-center font-serif font-bold md:text-6xl'>Our Dedicated Team!</h1>
        <img className='flex rounded-xl lg:h-[500px] ' src=".\src\assets\team.jpg" alt="" />
      </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to keep track of the current slide

  const slides = [
    { src: './src/assets/slide-1.jpeg', alt: 'Description of Image 1' },
    { src: './src/assets/slide-2.jpeg', alt: 'Description of Image 2' },
    { src: './src/assets/slide-3.jpeg', alt: 'Description of Image 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Move to the next slide; loop back to the start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Move to the previous slide; loop back to the end
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(0); // Set back to the first slide for a smoother transition
      }, 500); // Delay for half a second
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  return (
    <>
      <Header />
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
              <img src={slide.src} alt={slide.alt} className="w-full" />
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2"
        >
           &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  bg-black text-white p-2"
        >
          &#9654;
        </button>
      </div>

      <div className='p-4 space-y-8 lg:pt-14'>
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
    </>
  );
}

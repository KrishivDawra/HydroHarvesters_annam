import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Body = () => {
  let [btnstatus, setBTNstatus] = useState(false);

  return (
    <>
      <Header />
      <div className="pt-8">
        <div className="flex flex-col lg:flex-row px-6 lg:px-16">
          <div className="pt-12 lg:pt-24 pr-0 lg:pr-10 space-y-6 ">
            <h1 className="font-serif text-4xl lg:text-6xl">
              Hydro Harvesters: Cultivating Tomorrow’s Harvests, Today’s Savings!
            </h1>
            <p className="text-gray-600 text-sm lg:text-md">
              Hydro Harvesters transforms farming with soil-free hydroponics, delivering 7x higher yields, top-notch quality, and affordable fresh produce—revolutionizing harvests, one plant at a time.
            </p>
            <button className="bg-green-400 px-4 py-2 lg:px-5 lg:py-3 rounded-full hover:bg-green-600">
              <Link to={'/store'}>Order Now!</Link>
            </button>
          </div>

          <img
            className="h-[300px] lg:h-[500px] rounded-xl mt-6 lg:mt-0   "
            src="./src/assets/home_page.jpg"
            alt=""
          />
        </div>

        <div className="py-16">
          <h1 className="font-bold font-sans text-4xl lg:text-6xl flex justify-center">
            Get set, connect
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-9 pt-6">
            <div className="flex items-center">
              <img className="h-[25px] pr-2" src="./src/assets/setup.svg" alt="" />
              <span>Grow Yourself</span>
            </div>

            <div className="flex items-center">
              <img className="h-[25px] pr-2" src="./src/assets/vchat.svg" alt="" />
              <span>Ask Nutritionist</span>
            </div>
          </div>

          <div className="flex justify-center mb-6"></div>

          <div className="w-full lg:w-2/5 h-40 bg-green-500 pt-5 space-x-4 mb-6 mx-auto rounded-[30px]">
            {/* Prepaid/Postpaid Toggle */}
            <div className="flex justify-center bg-green-800 w-56 h-12 rounded-full mx-auto">
              <button
                className={`px-6 py-2 mx-1 my-1 text-white rounded-full font-medium ${
                  btnstatus ? 'hover:text-green-200' : 'bg-green-500'
                }`}
                onClick={() => setBTNstatus(false)}
              >
                Existing
              </button>
              <button
                className={`px-8 py-2 my-1 text-white rounded-full font-medium hover:text-green-200 ${
                  btnstatus ? 'bg-green-500 ' : ''
                }`}
                onClick={() => setBTNstatus(true)}
              >
                New
              </button>
            </div>

            {/* Input Field */}
            <div className="my-6 flex mx-auto justify-center">
              <input
                type="text"
                placeholder="+91 Enter Number"
                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <button className="ml-2 px-6 py-2 text-black font-medium rounded-full bg-white hover:bg-green-900 hover:text-white">
                Proceed
              </button>
            </div>
          </div>
        </div>

        <div className="pb-16">
          <h1 className="text-4xl lg:text-6xl font-serif font-bold pb-8 text-center">
            Our working areas!
          </h1>
          <div className="flex flex-wrap justify-center gap-6 lg:space-x-8">
            <div>
              <img
                src="./src/assets/work-1.jpg"
                className="h-60 lg:h-80 rounded-lg"
                alt=""
              />
              <h2 className="font-semibold font-serif text-lg text-center">
                Commercial Setups
              </h2>
            </div>

            <div>
              <img
                src="./src/assets/work-2.jpg"
                className="h-60 lg:h-80 rounded-lg"
                alt=""
              />
              <h2 className="font-semibold font-serif text-lg text-center">
                Home Setups
              </h2>
            </div>

            <div>
              <img
                src="./src/assets/work-3.jpg"
                className="h-60 lg:h-80 rounded-lg"
                alt=""
              />
              <h2 className="font-semibold font-serif text-lg text-center">
                Consultancies
              </h2>
            </div>

            <div>
              <img
                src="./src/assets/work-4.jpg"
                className="h-60 lg:h-80 rounded-lg"
                alt=""
              />
              <h2 className="font-semibold font-serif text-lg text-center">
                Retail Section
              </h2>
            </div>
          </div>
        </div>

        <div className="py-10 bg-green-400 space-y-4 pb-16">
          <h1 className="text-3xl lg:text-5xl font-bold flex justify-center">
            Need guidance?
          </h1>
          <h2 className="text-md lg:text-lg flex justify-center">We would like to help you.</h2>

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

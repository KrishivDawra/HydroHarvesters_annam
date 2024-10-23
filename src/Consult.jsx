import React from 'react'
import Header from './Header'
import { IoIosMenu } from "react-icons/io";

import { Link } from 'react-router-dom'
export default function Consult() {
  return (
    <>
    
    <div>
    <div className="h-screen bg-white text-black flex flex-col items-center justify-center">
      {/* Top bar */}
      <div className="w-full px-6 py-3 flex justify-between items-center bg-green-400 fixed top-0">
        <div className="flex items-center space-x-2">
          <span className='cursor-pointer'><IoIosMenu /></span>
          <div className="text-lg font-bold"><Link to={'/store'}>
          Farmtalk</Link></div>
        </div>
        {/* Profile Icon */}
        <div className="w-10 h-10 rounded-full bg-white  flex items-center justify-center">
          {/* Placeholder for Profile Icon */}
          <div className="text-white text-xl">👤</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center  space-y-6">
        <h1 className="text-3xl font-semibold text-green">What can I help with? <span className="animate-ping">●</span></h1>

        {/* Input Section */}
        <div className="w-full max-w-lg">
          <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Ask your Question"
              className="bg-gray-800 text-white w-full outline-none"
            />
            <button className="text-gray-400 hover:text-white ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            About us
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            Summarize text
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            Help me write
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            Get advice
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            Code
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
            More
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-12 text-gray-500 text-sm fixed bottom-2">
      © 2024 HydroHarvesters, Inc. all rights are reserved & protected
      </div>
    </div>

      </div>
    
  
    </>
  )
}

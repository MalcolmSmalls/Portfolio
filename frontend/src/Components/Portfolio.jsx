import React, { useState } from 'react'
import { beatStore } from '../assets/'

export default function Portfolio() {
  // const [state, setState] = useState(false)

  return (
    <div className='h-full bg-[#1e1e1e] pb-20' id='portfolio'>
      <h2 className='text-white font-BebasNeue text-5xl text-center py-20 underline underline-offset-8 decoration-red-500 decoration-double'>
        Portfolio
      </h2>
      <div className='flex w-full justify-center '>
        <div className='lg:w-3/4 flex  flex-col items-center w-full lg:flex-row gap-10 '>
          <div className='group rounded lg:w-1/2 w-[90%] relative overflow-hidden bg-black '>
            <a
              href='https://producedbymalcolmsmallsapp.herokuapp.com/'
              target='_blank'
            >
              <img
                className='object-cover w-full h-80 rounded-lg transition-all ease-in-out group-hover:scale-125 group-hover:blur-sm duration-500 group-hover:opacity-20 z-10'
                src={beatStore}
                // onMouseEnter={() => setState(true)}
                // onMouseLeave={() => setState(false)}
              />
              <div
                className={`invisible group-hover:visible  text-white absolute top-0 bottom-0 flex items-center justify-center flex-col w-full
                `}
              >
                <h2 className='font-BebasNeue text-3xl delay-75  transition-all ease-in-out'>
                  Beatstore
                </h2>
                <div className='font-Raleway text-base  delay-75  transition-all ease-in-out'>
                  A full stack e-commerce site for music production
                </div>
              </div>{' '}
            </a>
          </div>

          <div className='rounded lg:w-1/2 w-[90%]'>
            <img
              className='object-cover h-80 w-full rounded-lg'
              src={beatStore}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

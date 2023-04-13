import React from 'react'
import { bg1 } from '../assets/'
import useState from 'react'
import Typewriter from 'typewriter-effect'

export default function Header() {
  return (
    <>
      <div
        className='lg:h-screen h-[90vh] w-full lg:bg-fill bg-fill lg:bg-top bg-[20%_20%]'
        style={{ backgroundImage: `url(${bg1})` }}
        id='home'
      >
        <div className='flex bg-[#1e1e1e] lg:h-screen h-full w-full lg:bg-opacity-80 bg-opacity-90 justify-center  lg:pt-0 pt-14 items-center flex-col lg:gap-10 gap-2'>
          <h1 className='text-white lg:text-9xl text-6xl font-BebasNeue'>
            Malcolm Smalls
          </h1>
          <h3 className='text-white font-BebasNeue lg:text-5xl text-xl'>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Software Engineer',
                  'JavaScript Web Developer',
                  'Computer Science Major',
                ],
                autoStart: true,
                delay: 90,
                deleteSpeed: 55,
                pauseFor: 1700,
                loop: true,
              }}
            />
          </h3>
          <button className='text-red-500 lg:text-xl text-base font-Barlow border border-red-500 py-2 px-6 rounded-2xl hover:bg-red-500 hover:text-white tracking-wide transition-colors duration-500'>
            <a href='#contact'>Let's Work</a>
          </button>
        </div>
      </div>
    </>
  )
}

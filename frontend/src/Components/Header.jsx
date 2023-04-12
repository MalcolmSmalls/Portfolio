import React from 'react'
import { bg1 } from '../assets/'
import useState from 'react'
import Typewriter from 'typewriter-effect'

export default function Header() {
  return (
    <>
      <div
        className='lg:h-screen h-[80vh] w-full lg:bg-fill bg-fill lg:bg-top bg-[14%_15%]'
        style={{ backgroundImage: `url(${bg1})` }}
        id='home'
      >
        <div className='flex bg-[#1e1e1e] lg:h-screen h-full w-full bg-opacity-80 justify-center items-center flex-col lg:gap-10 gap-6'>
          <h1 className='text-white lg:text-9xl text-7xl font-BebasNeue'>
            Malcolm Smalls
          </h1>
          <h3 className='text-white font-BebasNeue lg:text-5xl text-3xl'>
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
          <button className='text-red-500 text-xl font-Barlow border border-red-500 py-2 px-6 rounded-2xl hover:bg-red-500 hover:text-white tracking-wide transition-colors duration-500'>
            <a href='#contact'>Let's Work</a>
          </button>
        </div>
      </div>
    </>
  )
}

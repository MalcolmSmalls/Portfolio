import React from 'react'
import { bg1 } from '../assets/'
import useState from 'react'
import Typewriter from 'typewriter-effect'

export default function Header() {
  return (
    <>
      <div
        className='container h-screen w-screen bg-cover bg-left-top'
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className='flex bg-black h-screen w-screen bg-opacity-60 justify-center items-center flex-col gap-10'>
          <h1 className='text-white lg:text-9xl text-7xl sm:text-7xl font-BebasNeue'>
            Malcolm Smalls
          </h1>
          <h3 className='text-white font-BebasNeue text-5xl'>
            <Typewriter
              options={{
                strings: [
                  'Full Stack Software Engineer',
                  'JavaScript Web Developer',
                  'HTML/CSS, Node.JS, React, MongooseDB',
                ],
                autoStart: true,
                delay: 90,
                deleteSpeed: 60,
                pauseFor: 1700,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
    </>
  )
}

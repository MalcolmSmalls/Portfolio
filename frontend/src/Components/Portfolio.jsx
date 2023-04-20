import React, { useState } from 'react'
import { beatStore, whoRapped } from '../assets/'
import PortfolioProjects from './PortfolioProjects'

export default function Portfolio() {
  return (
    <div className='h-full bg-[#1e1e1e] pb-20' id='portfolio'>
      <h2 className='text-white font-BebasNeue text-5xl text-center lg:pt-20 pt-10 underline underline-offset-8 decoration-red-500 decoration-double'>
        Portfolio
      </h2>
      <div className=' z-12 relative bg-[#1e1e1e] mt-6 lg:pt-20 pt-10'>
        <div className='flex w-full justify-center '>
          <div className='lg:w-3/4 flex  flex-col items-center w-full lg:flex-row gap-10 pb-1 '>
            <PortfolioProjects
              link='https://producedbymalcolmsmallsapp.herokuapp.com/'
              image={beatStore}
              title='Beatstore'
              subtitle='A full stack e-commerce site for music production'
            />

            <PortfolioProjects
              link='#'
              image={whoRapped}
              title='Who Rapped *UNDER CONSTRUCTION*'
              subtitle='An interactive rap lyrics trivia game'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { beatStore } from '../assets/'
import PortfolioProjects from './PortfolioProjects'

export default function Portfolio() {
  return (
    <div className='h-full bg-[#1e1e1e] pb-20' id='portfolio'>
      <h2 className='text-white font-BebasNeue text-5xl text-center py-20 underline underline-offset-8 decoration-red-500 decoration-double'>
        Portfolio
      </h2>
      <div className='flex w-full justify-center '>
        <div className='lg:w-3/4 flex  flex-col items-center w-full lg:flex-row gap-10 '>
          <PortfolioProjects
            link='https://producedbymalcolmsmallsapp.herokuapp.com/'
            image={beatStore}
            title='Beatstore'
            subtitle='A full stack e-commerce site for music production'
          />

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

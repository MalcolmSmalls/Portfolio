import React from 'react'

export default function PortfolioProjects({ link, image, title, subtitle }) {
  return (
    <>
      <div className='group rounded lg:w-1/2 w-[90%] relative overflow-hidden bg-black '>
        <a href={link} target='_blank'>
          <img
            className='object-cover w-full h-80 rounded-lg transition-all ease-in-out group-hover:scale-125 group-hover:blur-sm duration-500 group-hover:opacity-20 z-10'
            src={image}
          />
          <div
            className={`invisible group-hover:visible  text-white absolute top-0 bottom-0 flex items-center justify-center flex-col w-full
                `}
          >
            <h2 className='font-BebasNeue text-3xl delay-100  transition-all ease-in-out'>
              {title}
            </h2>
            <div className='font-Raleway text-base  delay-100  transition-all ease-in-out'>
              {subtitle}
            </div>
          </div>{' '}
        </a>
      </div>
    </>
  )
}

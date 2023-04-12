import React from 'react'
import useScrollPosition from '../hooks/useScrollPosition'

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  return (
    <nav
      className={classNames(
        scrollPosition > 0
          ? 'bg-red-500/0 text-red-500'
          : 'bg-red-500 text-white',
        ' fixed w-full h-14 flex lg:justify-end shadow-lg z-10'
      )}
    >
      <div className='flex justify-center lg:justify-end w-full'>
        <ul className='flex lg:gap-6 gap-4 font-Raleway font-bold lg:text-xl sm:text-sm text-xs self-center tracking-tighter lg:pr-10 uppercase'>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#home'>Home</a>
          </li>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#about'>About Me</a>
          </li>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#skillset'>Skillset</a>
          </li>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#resume'>Resume</a>
          </li>
          <li
            className={classNames(
              scrollPosition > 0 ? 'hover:text-white' : 'hover:text-[#292929]',
              'transition-colors duration-300'
            )}
          >
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

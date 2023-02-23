import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-red-500 fixed w-full h-14 flex justify-end shadow-lg'>
      <ul className='flex gap-6 font-Raleway font-bold text-xl text-white self-center tracking-tighter pr-10 uppercase '>
        <li className='hover:text-[#292929]'>
          <a href='#home'>Home</a>
        </li>
        <li className='hover:text-[#292929]'>
          <a href='#about'>About Me</a>
        </li>
        <li className='hover:text-[#292929]'>
          <a href='#skillset'>Skillset</a>
        </li>
        <li className='hover:text-[#292929]'>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li className='hover:text-[#292929]'>
          <a href='#resume'>Resume</a>
        </li>
        <li className='hover:text-[#292929]'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

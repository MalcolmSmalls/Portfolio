import React from 'react'

export default function About() {
  return (
    <div className='h-full bg-[#1e1e1e] pb-40' id='about'>
      <h2 className='text-white font-BebasNeue text-5xl text-center py-20 underline underline-offset-8 decoration-red-500 decoration-double'>
        A Little About Me
      </h2>
      <div className='container font-Raleway flex p-5 mx-auto w-2/3 gap-10'>
        <div className='container flex flex-col w-2/3'>
          <h3 className='text-white font-sans text-xl w-2/3'>
            Meet Your
            <span className='font-bold text-red-500 animate-pulse'>
              {' '}
              Next
            </span>{' '}
            Web Developer
          </h3>
          <p className='text-[#747474] block font-semibold py-2'>
            I'm a self-taught musician turned software developer with a deep
            interest in machine learning. While a music career didn't foster the
            baller lifestyle, it did ingrain a strict practice regime, an
            intense passion, boundless creativity and an unwavering discipline
            that translates perfectly into software development (180+
            Consecutive Days on GitHub, Let's Goooo!).
          </p>
          <p className='text-[#747474] block font-semibold py-2'>
            Even though I've started late, I'm devoted to making up for time
            missed by learning daily, building projects and obsessing over all
            things programming. It's a blessing at 33 to find a new passion to
            succeed for.{' '}
            <span className='text-[10px] '>
              And one that actually pays the bills.
            </span>
          </p>
        </div>

        <div className='text-white font-sans self-center text-sm'>
          <ul>
            <li className='py-1 border-[#747474] border-b border-opacity-25'>
              <span className='font-bold'>Name:</span> Malcolm Smalls
            </li>
            <li className='py-1 border-b border-[#747474] border-opacity-25'>
              <span className='font-bold'>Email: </span>
              malcolmsmalls.dev@gmail.com
            </li>
            <li className='py-1 border-b border-[#747474] border-opacity-25'>
              <span className='font-bold'>Age: </span>33
            </li>
            <li className='py-1'>
              {' '}
              <span className='font-bold'>Location: </span>Los Angeles, CA
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Contact() {
  return (
    <div className='h-full bg-[#1e1e1e] pb-40'>
      <h2 className='text-white font-BebasNeue text-5xl text-center py-20 underline underline-offset-8 decoration-red-500 decoration-double '>
        Contact
      </h2>
      <div className='container flex w-3/4 mx-auto'>
        <div className='container flex flex-col w-1/3 flex-none'>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>
            Reach Me At
          </h4>
          <ul className='text-white font-Raleway'>
            <li className='mb-2 text-[#747474]'>
              <i className='fas fa-phone text-lg text-red-500 pr-2 align-middle'></i>
              (626)-727-4584
            </li>
            <li className='mb-3 text-[#747474]'>
              <i className='fas fa-envelope text-lg text-red-500 pr-2 align-middle '></i>
              malcolmsmalls.dev@gmail.com
            </li>
          </ul>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>Follow Me</h4>
          <div className='text-xl text-[#747474] flex gap-5'>
            <i className='fab fa-github'></i>
            <i className='fab fa-twitter'></i>
            <i class='fab fa-linkedin'></i>
          </div>
        </div>
        <div className='container flex flex-col w-full font-Raleway text-white'>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>
            Send Me A Message
          </h4>
          <form>
            <div className='container flex font-Raleway text-white gap-5'>
              <input
                className='bg-[#121212] rounded-lg w-1/2 h-15 p-3 placeholder-[#747474] shadow-md'
                placeholder='Name'
              />
              <input
                className='bg-[#121212] rounded-lg w-1/2 h-15 p-3 placeholder-[#747474] shadow-md'
                placeholder='Email'
              />
            </div>
            <div className='flex flex-col'>
              <textArea
                className='bg-[#121212] rounded-lg w-full h-48 p-3 mt-5 placeholder-[#747474] shadow-md mb-8'
                placeholder="What's up?"
              />
              <button className='self-center font-bold bg-red-500 rounded-full p-3 w-48'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

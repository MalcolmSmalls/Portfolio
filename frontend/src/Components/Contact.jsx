import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [warning, setWarning] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (!name) {
      setWarning('Name required')
    } else if (!email) {
      setWarning('Email required')
    } else if (!message) {
      setWarning('Message required')
    } else {
      axios.post('/api/form', { name, email, message }).then((response) => {
        console.log(response)
      })
    }
  }
  return (
    <div className='h-full bg-[#1e1e1e] pb-40' id='contact'>
      <h2 className='text-white font-BebasNeue text-5xl text-center pt-10 lg:py-20 underline underline-offset-8 decoration-red-500 decoration-double '>
        Contact
      </h2>
      <div className='container flex lg:w-3/4 lg:flex-row flex-col p-10 lg:p-0 w-full mx-auto'>
        <div className='container flex flex-col lg:w-1/3 w-full flex-none items-center lg:items-start'>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>
            Reach Me At
          </h4>
          <ul className='text-white font-Raleway'>
            <li className='mb-2 text-[#747474]'>
              <i className='fas fa-phone text-lg text-red-500 pr-2 align-middle'></i>
              <a href='tel:626-727-4584'>(626)-727-4584</a>
            </li>
            <li className='mb-3 text-[#747474]'>
              <i className='fas fa-envelope text-lg text-red-500 pr-2 align-middle '></i>
              <a href='mailto:malcolmsmalls.dev@gmail.com'>
                malcolmsmalls.dev@gmail.com
              </a>
            </li>
          </ul>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>Follow Me</h4>
          <div className='text-xl text-[#747474] flex gap-5'>
            <a href='https://github.com/MalcolmSmalls' target='_blank'>
              <i className='fab fa-github hover:text-white'></i>
            </a>
            <a href='https://twitter.com/bigchopdev' target='_blank'>
              <i className='fab fa-twitter hover:text-white'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/malcolmsmalls/'
              target='_blank'
            >
              <i className='fab fa-linkedin hover:text-white'></i>
            </a>
          </div>
        </div>
        <div className='flex flex-col w-full font-Raleway text-white mt-3 items-center lg:items-start lg:mt-0'>
          <h4 className='text-white font-BebasNeue text-2xl mb-3'>
            Send Me A Message{' '}
            {warning ? <span className='text-red-500'>/ {warning}</span> : null}
          </h4>

          <form className='w-full' onSubmit={submitHandler}>
            <div className='container flex font-Raleway text-white gap-5 w-full'>
              <input
                className='bg-[#121212] rounded-lg w-1/2 h-15 p-3 placeholder-[#747474] shadow-md'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className='bg-[#121212] rounded-lg w-1/2 h-15 p-3 placeholder-[#747474] shadow-md'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <textarea
                className='bg-[#121212] rounded-lg w-full h-48 p-3 mt-5 placeholder-[#747474] shadow-md mb-8'
                placeholder="What's up?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className='self-center font-bold bg-red-500 rounded-full p-3 w-48 hover:bg-red-600 transition-colors duration-1000'>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

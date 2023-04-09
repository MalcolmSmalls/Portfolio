import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skillset() {
  return (
    <div className='h-full bg-[#292929]' id='skillset'>
      <h2 className='text-white font-BebasNeue text-5xl text-center underline underline-offset-8 decoration-red-500 decoration-double py-20'>
        Skillset
      </h2>
      <div className='container font-Raleway flex p-5 mx-auto lg:w-2/3 w-full gap-10 lg:flex-row flex-col'>
        <div className='container flex flex-col'>
          <div className='container flex  gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none '>
              <i className='fab fa-html5 text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>HTML/CSS</h3>
              <p className='text-[#747474] font-semibold lg:pb-14 pb-8'>
                Learning from The Odin Project and #100Devs, I'm able to build
                websites from scratch using semantically correct HTML tags with
                mobile-first, responsive CSS.
              </p>
            </div>
          </div>

          <div className='container flex gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none'>
              <i className='fab fa-square-js text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>JavaScript</h3>
              <p className='text-[#747474] font-semibold lg:pb-14 pb-8'>
                After completing multiple JavaScript projects which included
                building 'Battleship' and 'Tic-Tac-Toe', I've learned a lot of
                vanilla JS for DOM manipulation in order to provide an
                interactive experience for users.
              </p>
            </div>
          </div>

          <div className='container flex gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none'>
              <i className='fab fa-react text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>React.JS</h3>
              <p className='text-[#747474] font-semibold lg:pb-14'>
                Adding even more complex interactivity, React.JS complements my
                vanilla JS knowledge with the power of JSX. I am able to build
                scalable games and web apps that interact with APIs.
              </p>
            </div>
          </div>
        </div>

        <div className='container flex flex-col'>
          <div className='container flex gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none'>
              <i className='fas fa-file-code text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>
                Tailwind CSS
              </h3>
              <p className='text-[#747474] font-semibold pb-8'>
                New to the toolbelt, Tailwind has helped me design faster and
                more efficiently. Though not a replacement to CSS, Tailwind
                allows me to focus more on the logic and functionality while
                still producing a beautiful, responsive web application.
              </p>
            </div>
          </div>

          <div className='container flex gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none'>
              <i className='fab fa-node-js text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>Node.JS</h3>
              <p className='text-[#747474] font-semibold lg:pb-14 pb-8'>
                Leveraging both Node.JS and Express.JS, I am able to build
                RESTful APIs in order to create full stack web applications.
                Authentication, encryption, database creation and deployment are
                all areas of proficiency.
              </p>
            </div>
          </div>

          <div className='container flex gap-5'>
            <div className='bg-[#1e1e1e] rounded h-14 w-14 flex justify-center items-center shadow-lg flex-none'>
              <i className='fas fa-database text-red-500 text-3xl'></i>
            </div>
            <div className='container flex flex-col'>
              <h3 className='text-white font-bold text-2xl pb-2'>Mongoose</h3>
              <p className='text-[#747474] font-semibold pb-8'>
                As the final icing on the cake, Mongoose allows to me to
                integrate a database (MongoDB) into the equation for a full MERN
                stack web application, handling product and user schemas,
                purchase orders, inventory management and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

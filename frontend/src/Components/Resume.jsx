import React from 'react'

export default function Resume() {
  return (
    <div className='h-full bg-[#292929]' id='resume'>
      <h2 className='text-white font-BebasNeue text-5xl text-center underline underline-offset-8 decoration-red-500 decoration-double py-20'>
        Resume
      </h2>
      <div className='container flex p-8 mx-auto w-3/4 gap-10'>
        <div className='container flex flex-col flex-none w-1/2'>
          <h3 className='text-white font-BebasNeue text-3xl pb-5 w-fit self-center'>
            Education
          </h3>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2022 - Present
            </div>

            <h4 className='text-2xl text-white font-bold'>Bachelor's Degree</h4>
            <h4 className='text-lg text-red-500 pb-5'>
              Western Governors University
            </h4>
            <p className='font-semibold text-[#747474]'>
              Computer Science major with plans to graduate 2024. WGU is a
              self-paced online university paid for by my current employer which
              allows me to work fulltime while earning my degree fulltime.
            </p>
          </div>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2022 - 2022
            </div>

            <h4 className='text-2xl text-white font-bold'>Bootcamp</h4>
            <h4 className='text-lg text-red-500 pb-5'>The Odin Project</h4>
            <p className='font-semibold text-[#747474]'>
              The Odin Project is a free online bootcamp featuring comprehensive
              reading, video tutorials and extensive projects for full stack
              software developers. Picking the JavaScript path, I've further
              increased my skills in frontend design, backend architectures,
              sorting algorithms and data structures.
            </p>
          </div>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2022 - 2022
            </div>

            <h4 className='text-2xl text-white font-bold'>Bootcamp</h4>
            <h4 className='text-lg text-red-500 pb-5'>#100Devs</h4>
            <p className='font-semibold text-[#747474]'>
              #100Devs is a completely free online bootcamp created by Leon Noel
              to help those financially affected by Covid-19. As my music
              production business dwindled from the effects of covid, #100Devs
              prepared me to switch careers by busying me with projects,
              teaching me modern web techniques and also by offering community
              with likeminded budding software engineers.
            </p>
          </div>
        </div>

        <div className='container flex flex-col flex-none w-1/2'>
          <h3 className='text-white font-BebasNeue text-3xl pb-5 self-center'>
            Work Experience
          </h3>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2023 - Present
            </div>

            <h4 className='text-2xl text-white font-bold'>Codetta</h4>
            <h4 className='text-lg text-red-500 pb-5'>
              Freelance Web Developer
            </h4>
            <p className='font-semibold text-[#747474]'>
              As a freelancer I've built e-commerce web applications for my own
              music production as well as for other upcoming musicians. I intend
              on going further by creating digital audio workstations, virtual
              instruments and other musical apps to empower creatives.
            </p>
          </div>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2021 - Present
            </div>

            <h4 className='text-2xl text-white font-bold'>Amazon</h4>
            <h4 className='text-lg text-red-500 pb-5'>Warehouse Worker</h4>
            <p className='font-semibold text-[#747474]'>
              Consistently top 1% Universal Receive of 300+ employees In LGB8
              fulfillment center. Taking advantage of their Career Choice
              program, I am able to go pursue my Bachelor's Degree for free as a
              fulltime employee.
            </p>
          </div>

          <div className='container flex flex-col bg-[#121212] font-Raleway text-white w-full h-50 rounded-lg p-6 mb-8'>
            <div className='container text-white bg-red-500 rounded-lg w-fit px-2 py-1 text-sm font-semibold mb-4'>
              2008 - Present
            </div>

            <h4 className='text-2xl text-white font-bold'>
              A-List Entertaiment
            </h4>
            <h4 className='text-lg text-red-500 pb-5'>
              Musician, Music Producer, Recording Engineer
            </h4>
            <p className='font-semibold text-[#747474]'>
              As a freelance musician I've released 10+ albums produced,
              written, performed, recorded and engineered by myself. Wearing
              multiple hats, I've ventured into making my own music videos and
              music production vlogs, tutorials and content that have exceeded
              well over 100k views. Beyond myself, I've extended my services to
              other local musicians by means of music production, collaboration,
              graphic design, mixing and mastering, songwriting and coaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

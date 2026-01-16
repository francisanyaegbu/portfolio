import React from 'react'

export const About = () => {
  return (
    <div className='bg-linear-to-r from-purple-500 to-gray-100'>
      <div className='flex flex-col justify-center p-15 gap-8'>
        <h1 className='text-6xl font-extrabold'>
          About Me<span className='fullstop'>.</span>
        </h1>
        <p className='border-l-10 border-purple-600 px-2 text-justify'>
          Frontend Developer with about 2 years 
          of hands-on experience building responsive,
          user-friendly web applications. Strong expertise 
          in JavaScript, React, Next.js and Vue.js, with 
          solid grounding in HTML, CSS, and Tailwind CSS. 
          Experienced in replicating designs, improving UI/UX, 
          and adding functional interactivity to web products. 
        </p>
      </div>
      <div className='flex flex-col justify-center p-15 gap-8'>
        <h1 className='text-4xl font-extrabold'>
          Experience<span className='fullstop'>.</span>
        </h1>
      </div>
    </div>
  )
}

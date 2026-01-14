import React from 'react'

export const HomePage = () => {
  return (
    <div>
      <div className='w-full flex flex-row justify-between items-center px-15'>
        <div>
          <h1 className='text-2xl mb-2'>
            Hey I&apos;m Francis
          </h1>
          <p className='text-7xl font-extrabold'>
            <span className='text-purple-700'>Front</span>
            end
          </p>
          <p className='text-7xl font-extrabold mb-5'>
            Developer
          </p>
          <p className='text-lg mb-5'>
            I&apos;m a Frontend developer based in Nigeria. 
            I transform designs into <br /> well-structured, scalable and 
            responsive websites
          </p>
          <div className='flex gap-5'>
            <button
            className='bg-gray-800 text-white rounded-md shadow-lg p-2 text-sm font-semibold'>
              Get In Touch
            </button>
            <button
            className='bg-gray-100 rounded-md shadow-lg shadow-gray-200 font-semibold p-2 text-sm '>
              Browse Projects
            </button>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='border border-neutral-500 rounded-full p-10'>
            <div 
              className='w-100 h-100 bg-center bg-cover rounded-full'
              style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(https://res.cloudinary.com/drpu2ycu6/image/upload/Francis.Anyaegbu/Me_swykii.jpg)'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

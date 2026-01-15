'use client'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between px-15 py-8 mb-10'>
        <h1 className='text-xl'>DevFrancis.</h1>
        <div className='flex flex-row items-center gap-5'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          {/* <button>Light Mode</button>
          <button>Dark Mode</button>
          <button>Message me</button> */}
        </div>
      </div>
    </div>
  )
}

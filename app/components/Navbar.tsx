'use client'
import Link from 'next/link'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between px-15 py-7 bg-linear-to-r from-purple-500 to-gray-100'>
        <h1 className='text-xl'>DevFrancis.</h1>
        <div className='flex flex-row items-center gap-5'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <LinkedinLogo size={25} weight="regular" className='cursor-pointer' />
          <GithubLogo size={25} weight="regular" className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

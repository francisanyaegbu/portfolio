import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div>
        <div>
            <h1>Dev Francis</h1>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Project</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

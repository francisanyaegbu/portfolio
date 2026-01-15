'use client'
import React from 'react'
import { AboutContainer } from '../components/AboutContainer'
import { Navbar } from '../components/Navbar'

export const page = () => {
  return (
    <div>
      <Navbar />
      <AboutContainer />
    </div>
  )
}

export default page
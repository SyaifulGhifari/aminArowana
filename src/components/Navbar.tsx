"use client"

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-10 sticky bg-black content-center'>
      <div className='w-full h-5 flex items-center justify-around px-5'>
        <div className='flex text-sm md:text-base items-center gap-10 text-slate-400'>
          <div className='cursor-pointer underline hover:underline-offset-4'>
            About Us
          </div>
          <div className='cursor-pointer underline hover:underline-offset-4'>
            Arowana
          </div>
          <div className='cursor-pointer underline hover:underline-offset-4'>
            Service
          </div>
        </div>
        <div className='hidden md:flex items-center gap-2 text-slate-400 font-mono'>
          Amin Arowana Fish
        </div>
        <div className='flex text-sm md:text-base items-center gap-2'>
          <div className=' text-slate-100 font-mono bg-gradient-to-r from-red-700 via-pink-700 to-purple-700 p-1 rounded-md text-sm cursor-pointer'>
            Hubungi Saya
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Navbar
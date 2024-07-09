"use client"
import React from 'react'
import Image from 'next/image'
import logo from '@/public/image/logo.png'
import { ScrollToSection } from "@/src/hook/ScrollToSection"
import { Options } from '@/src/data/optionNavbar'
import NavigationOption from '@/src/components/NavbarOption'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-10 sticky bg-black content-center'>
      <div className='w-full pt-2 flex items-center justify-around px-5'>
        <div>
          <Image src={logo} alt='logo' width={70} height={70} />
        </div>
        <div className='flex text-sm md:text-base items-center gap-10 text-slate-400'>
          <NavigationOption options={Options} action={ScrollToSection} />
        </div>
      </div> 
    </div>
  )
}

export default Navbar
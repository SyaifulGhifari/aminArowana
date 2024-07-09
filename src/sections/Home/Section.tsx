"use client"
import React from 'react'
import Image from 'next/image'
import arwana from '@/public/image/GoldenRedbg.png'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <div className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-[100%] bg-gradient-to-r from-red-700 to-purple-700 absolute z-1 top-[10%] left-[15%] translate-x-[-10%] translate-y-[20%] blur-[200px]'></div>
      <div className='text-slate-50flex justify-center items-center py-10 mb-10'>
        <div className='container mx-auto px-4 md:px-10'>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 px-4 md:hidden flex justify-end'>
              <Image src={arwana} alt='arwana' width={600} height={500}/>
            </div>
            <div className='w-full md:w-1/2 px-4 flex flex-col justify-center text-slate-200'>
              <h1 className='text-5xl'>Happy Fish.</h1>
              <h1 className='text-5xl'>Happy Life.</h1>
              <br />
              <span className='text-sm md:text-base'>Selamat datang di toko online kami, destinasi utama Anda untuk mendapatkan ikan Arwana Super Red dan Silver terbaik. Kami juga menawarkan layanan desain akuarium dari kecil hingga besar, serta operasi mata ikan untuk memastikan kesehatan dan kecantikan arwana Anda tetap terjaga. Nikmati kemudahan berbelanja dengan kami dan temukan layanan yang memenuhi semua kebutuhan akuatik Anda.</span>
              <div className='w-fit my-4 text-slate-100 font-mono bg-gradient-to-r from-red-700 via-pink-700 to-purple-700 p-1 rounded-md text-sm cursor-pointer'>
                Hubungi Saya
              </div>
            </div>
            <div className='w-full md:w-1/2 px-4 hidden md:flex justify-end'>
              <Image className='brightness-75' src={arwana} alt='arwana' width={600} height={500}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
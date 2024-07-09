"use client"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import arwana from '@/public/image/arwana3.jpg'

type Props = {}

const About = (props: Props) => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className='w-[400px] h-[400px] rounded-[100%] bg-gradient-to-r from-blue-500 to-pink-500 absolute z-1 top-[100%] right-[10%] translate-x-[-10%] translate-y-[30%] blur-[200px]'></div>
      <div className='w-full h-full'>
        <div className='container mx-auto my-4 md:my-10 text-slate-300' data-aos='fade-up' data-aos-duration="1000" id='Tentang'>
          <div className='grid md:grid-cols-12 gap-4'>
            <div className='hidden md:flex justify-center items-center md:col-span-4'>
              <div className='h-2/3 w-80 p-1 rounded-xl bg-gradient-to-br from-red-700 to-purple-700'>
                <Image className='rounded-xl h-full' src={arwana} alt='arwana' />
              </div>
            </div>
            <div className='col-span-8 flex-col px-4 justify-center items-center'>
                <div className='text-center text-4xl sm:text-md font-bold'>Tentang Kami</div>
                <br />
                <div className='text-center text-sm md:text-lg'>Selamat datang di toko online kami, tujuan utama Anda untuk mendapatkan ikan Arwana Super Red dan Silver terbaik. Kami berdedikasi untuk menyediakan ikan arwana berkualitas tinggi yang dikenal karena keanggunan dan keindahannya. Komitmen kami terhadap keunggulan tidak hanya berhenti pada penjualan ikan, kami juga menawarkan layanan desain akuarium khusus, melayani berbagai ukuran dari tangki kecil hingga tampilan besar yang rumit.</div>
                <br />
                <div className='text-center text-sm md:text-lg'>Selain layanan ikan dan akuarium, kami juga berspesialisasi dalam operasi mata ikan arwana yang rumit, memastikan hewan peliharaan kesayangan Anda tetap sehat dan bersemangat. Dengan cinta yang mendalam terhadap arwana dan dedikasi terhadap kepuasan pelanggan, kami berusaha untuk menjadi yang terbaik dalam bisnis ini. Jelajahi penawaran kami dan temukan tambahan yang sempurna untuk keluarga akuatik Anda.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
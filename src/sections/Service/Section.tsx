import React from 'react'
import Image from 'next/image'
import aquarium from '@/public/image/aquarium.jpeg'
import operasi from '@/public/image/arwana drop eye.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

type Props = {}

const Service = (props: Props) => {
    return (
        <div className='bg-gradient-to-b from-black to-purple-950 py-8 bg-opacity-50'>
        <div className='container mx-auto px-4 md:px-10'>
          <h2 className='text-slate-300 text-3xl font-bold text-center mb-6'>Layanan Kami</h2>
          <div className='w-4/5 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-10' data-aos="fade-up-right">
            <div className='flex justify-center'>
              <div className='p-1 rounded-xl bg-gradient-to-br from-red-700 to-purple-700'>
                <Image className='rounded-xl' src={aquarium} alt='aquarium' width={200} height={200} />
              </div>
            </div>
            <div className='md:col-span-2 text-slate-300 text-center md:text-left px-4'>
                <h1 className='text-xl font-bold'>Aquarium</h1>
                <p>Kami menyediakan jasa pembuatan akuarium berbagai ukuran, mulai dari yang kecil hingga yang besar. Dengan desain khusus dan material berkualitas tinggi, kami memastikan akuarium Anda akan menjadi pusat perhatian dan memberikan lingkungan yang ideal bagi ikan arwana Anda.</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
            <div className='flex justify-center'>
              <div className='p-1 rounded-xl bg-gradient-to-br from-red-700 to-purple-700'>
                <Image className='rounded-xl' src={operasi} alt='aquarium' width={200} height={200} />
              </div>
            </div>
            <div className='md:col-span-2 text-slate-300 text-center md:text-left px-4'>
                <h1 className='text-lg md:text-xl font-bold'>Operasi Mata Arwana</h1>
                <p className=''>Selain layanan ikan dan akuarium, kami juga berspesialisasi dalam operasi mata ikan arwana yang rumit, memastikan hewan peliharaan kesayangan Anda tetap sehat.</p>
            </div>
          </div>
          </div>
        </div>
      </div>

    )
}

export default Service
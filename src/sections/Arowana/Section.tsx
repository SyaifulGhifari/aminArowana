'use client'
import { useState } from 'react'
import Card from '@/src/components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image, { StaticImageData } from 'next/image'
import arwana1 from '@/public/image/arwana4.jpg'
import arwana2 from '@/public/image/Silver.jpeg'

type Props = {}

const Arowana = (props: Props) => {
  const [arowana, setArowana] = useState([
    {
      jenis: 'Super Red',
      deskripsi : 'Arwana Super Red, asli dari Indonesia, terkenal karena warna merah cerah dan penampilannya yang megah. Ikan eksotis ini melambangkan kemakmuran dan keberuntungan, menjadikannya harta yang sangat dihargai di kalangan pecinta akuarium.',
      image: arwana1
    },
    {
      jenis: 'Silver',
      deskripsi : 'Arwana Silver, berasal dari Amerika Selatan, dikenal dengan tubuhnya yang panjang dan warna perak yang berkilau. Ikan ini memiliki sifat yang anggun dan elegan, menjadikannya favorit di kalangan penggemar akuarium.',
      image: arwana2
    }
  ])


  return (
    <>
      <div className='flex justify-center items-center text-slate-300 text-center text-4xl sm:text-md font-bold md:mb-10 mb-4'>Arowana</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4' data-aos='fade-down' data-aos-duration="1000">
        {arowana.map((value: { jenis: string, image : StaticImageData, deskripsi: string }, index: number) =>
          <Card key={index} jenis={value.jenis} image={value.image} deskripsi={value.deskripsi}/>
        )}
      </div>
    </>
  )
}

export default Arowana
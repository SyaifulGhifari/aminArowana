import React from 'react'
import Image, { StaticImageData } from 'next/image'
import arwana from '@/public/image/arwana3.jpg'

type Props = {
  jenis: string,
  deskripsi : string,
  image: StaticImageData
}

const Card = (props: Props) => {
  return (
    <>
      <div className='px-4 flex justify-center content-center'>
        <div className="max-w-md p-1 bg-gradient-to-br from-red-700 to-purple-700 rounded-lg shadow">
          <div className='bg-opacity-0  rounded-lg h-full'>
            <Image className="rounded-lg h-80 w-full" height={200} width={400} src={props.image} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-slate-100">{props.jenis}</h5>
              <p className="mb-3 font-normal text-slate-100" >{props.deskripsi}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
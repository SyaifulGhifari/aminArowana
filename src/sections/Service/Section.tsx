"use client"
import React from 'react'
import Image from 'next/image'
import aquarium from '@/public/image/aquarium.jpeg'
import operasi from '@/public/image/arwana drop eye.jpeg'
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

type Props = {}

const Service = (props: Props) => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <div className='bg-gradient-to-b from-black to-purple-950 py-8 bg-opacity-50'>
            <div className='container mx-auto px-4 md:px-10 md:mt-10' id='Layanan'>
                <h2 className='text-slate-300 text-3xl font-bold text-center mb-6'>Layanan Kami</h2>
                <div className='w-4/5 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-10'>
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
            <div
                id='footer'
                className='flex flex-col sm:flex-row sm:flex-wrap items-center justify-between md:p-10 p-2 text-slate-300 mt-10'
            >
                <div>
                    <div className="lg:flex-none md:max-w-xs w-full text-center">Nikmati kemudahan berbelanja dengan kami dan temukan layanan yang memenuhi semua kebutuhan akuatik Anda.</div>
                </div>
                <div className='flex items-center justify-around sm:w-1/3 w-full my-4 sm:mt-0'>
                    <FaWhatsapp
                        fontSize='2em'
                        color='green'
                        role='link'
                        onClick={() => openInNewTab('https://wa.me/6289603528991?text=')}
                        className='cursor-pointer'
                    />
                    <FaFacebook
                        fontSize='2em'
                        color='blue'
                        role='link'
                        onClick={() => openInNewTab('https://www.facebook.com/share/ebUdxz9WLxoq3hz3/?mibextid=qi2Omg')}
                        className='cursor-pointer'
                    />
                    <FaInstagram
                        fontSize='2em'
                        color='purple'
                        role='link'
                        onClick={() => openInNewTab('https://wa.me/6288235910706?text=Apakah%20stoknya%20masih')}
                        className='cursor-pointer'
                    />
                </div>
                <div className='sm:w-full mt-4 sm:mt-0 md:w-auto flex justify-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.987768130367!2d112.02559237500833!3d-8.102726791926171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e575c9f1c521%3A0xad3e51d18634d83!2sAmin%20Arwana%20Tulungagung!5e0!3m2!1sid!2sid!4v1720429590056!5m2!1sid!2sid" style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }}></iframe>
                </div>
            </div>
        </div>
    )
}

export default Service
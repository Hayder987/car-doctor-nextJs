import React from 'react'
import image from '@/assets/images/checkout/checkout.png'
import Image from 'next/image'

const SectionBanner = ({title}) => {
  return (
    <div className='py-6 flex justify-center'>
      <figure className='relative w-full'>
        <Image src={image} alt={'imageBanner'} className='w-full'></Image>
        <div 
        className="absolute bannerBg flex  items-center w-full border-2 top-0 h-full">
         <h1 className="text-3xl lg:text-4xl text-white px-2 lg:px-10 font-bold">{title}</h1>
        </div>
      </figure>
    </div>
  )
}

export default SectionBanner
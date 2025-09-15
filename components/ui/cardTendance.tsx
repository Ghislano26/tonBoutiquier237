import React from 'react'
import Image from 'next/image'

type Props = {
    image: string,
    name: string
}

export default function CardTendance({image, name}: Props) {
  return (
    <div className='w-[80%] md:w-[30%] p-2 flex flex-col gap-4 items-center h-auto shadow-2xl hover:scale-90 transition-transform cursor-pointer'>
        <div>
            <Image src={image} alt='habits tendances' width={300} height={100} className=''/>
        </div>
        <div>
            <span className='font-extralight'>{name}</span>
        </div>

    </div>
  )
}
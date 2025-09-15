"use client"
import React from 'react'
import CardTendance from '@/components/ui/cardTendance'
import { AuroraText } from '@/components/magicui/aurora-text'
import Image from 'next/image'

type Props = {}

export default function TendanceShoes({}: Props) {
  return (
    <section className='flex flex-col-reverse md:flex-row-reverse gap-4 mt-[4rem]'>
    
            <div className='flex-1 p-4 flex justify-center  md:p-0 md:flex-col md:justify-start'>
                {/* <CarouselTendance/> */}
                <Image src={'/article/choes15.jpg'} alt='shousbalmain' width={500} height={500} className='w-[80%] md:w-[95%]'/>
            </div>
    
            <div className='flex-2 flex flex-col gap-8 bg-white'>
                <div className='w-full p-4 px-8'>
                    <h1 className='text-[2.5rem] md:text-[3.5rem]'><AuroraText>Decouvrez</AuroraText> notre collection exclusive de sandales mixte</h1>
                    <p className='text-gray-500'>Découvrez notre collection exclusive de sandales, inspirées des plus grandes marques du monde. Alliez style et passion avec des modèles élégants, conçus pour vous...</p>
                </div>
                
                <div className='w-full flex flex-col items-center justify-center md:flex-row md:items-start  gap-4'>
                    <CardTendance name='Luxe & confort ' image='/article/shoes11.jpg' />
                    <CardTendance name="Marcher avec style" image='/article/shoes12.jpg' />
                    <CardTendance name='Charme discret' image='/article/shoes13.jpg' />
                </div>
            </div>
    
    
        </section>
  )
}
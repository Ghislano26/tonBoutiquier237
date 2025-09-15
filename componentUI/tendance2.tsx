"use client"
import React from 'react'
import CardTendance from '@/components/ui/cardTendance'
import { AuroraText } from '@/components/magicui/aurora-text'
import { CarouselTendance2 } from '@/components/ui/carouselTendance2'

type Props = {}

export default function Tendance2({}: Props) {
  return (
    <section className='flex flex-col md:flex-row gap-4 mt-[3rem]'>

        <div className='flex-1 p-4 flex justify-center md:p-0 md:flex-col md:justify-start'>
            <CarouselTendance2/>
        </div>

        <div className='flex-2 flex flex-col gap-8 bg-white'>
            <div className='w-full p-4 px-8'>
                <h1 className='text-[2.5rem] md:text-[3.5rem]'><AuroraText>Decouvrez</AuroraText> les maillots de vos equipes favorites</h1>
                <p className='text-gray-500'>Affichez votre style et votre amour du football en une seule paire. Retrouver des maillot dernier tri des plus grands clubs du monde et c'est cadeau..</p>
            </div>
            
            <div className='w-full flex flex-col items-center justify-center md:flex-row md:items-start  gap-4'>
                <CardTendance name='T-shirt lourd Metalic ' image='/article/coton/coton1.jpg' />
                <CardTendance name="T-shirt lourd Diesel" image='/article/coton/coton5.jpg' />
                <CardTendance name='T-shirt lourd Diesel deux paires' image='/article/coton/coton3.jpg' />
            </div>
        </div>


    </section>
  )
}
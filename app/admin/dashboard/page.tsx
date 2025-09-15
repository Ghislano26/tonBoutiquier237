"use client"

import React from 'react'
import Card from '@/componentUI/adminComponent/card'
import { AuroraText } from '@/components/magicui/aurora-text'
import Image from 'next/image'

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <section className='flex flex-col  gap-[4rem] items-center justify-center mt-8'>
        <Image src={'/logo.png'} alt='adminLogo' width={90} height={90} className='md:w-[8%]'/>
        <AuroraText className='text-[2rem] md:text-[3rem]'>Tâches administrateur</AuroraText>

            <div className='w-full flex gap-8 p-3 flex-col md:flex-row md:gap-5 md:justify-center md:items-center md:p-0'>
            <Card title='Utilsateurs connéctés' src='/admin/dashboard/users'/>
            <Card title='Ajouter un produit' src='/admin/dashboard/products'/>
            </div>
    </section>
  )
}
"use client"
import { AuroraText } from '@/components/magicui/aurora-text'
import React from 'react'
import Image from 'next/image'
import LoginAdmin from '@/componentUI/adminComponent/loginAdmin'

type Props = {}

export default function AdminLogin({}: Props) {
  return (
    <main className='w-screen h-screen flex items-start justify-center '>
      <div className='w-full h-auto flex flex-col gap-8 items-center justify-center'>
        <Image src={'/article/logo.png'} alt='tonboutiquierIcon' width={150} height={80}/>
        <AuroraText className='text-[1.3rem] md:text-2xl font-extrabold'>ADMINISTRATEUR</AuroraText>
        <LoginAdmin/>
        <div className='flex p-6 md:p-0'>
          <h1 className=''>@2025 <span className='text-orange-500'>TonBoutiquier.com</span> | Developpé par <span className='font-bold'>Ghislain Ateba Chouacha</span></h1>
        </div>
      </div>

    </main>
    
  )
}
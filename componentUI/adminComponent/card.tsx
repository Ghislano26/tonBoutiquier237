import React from 'react'
import Link from 'next/link'

type Props = {
    title: string;
    src: string
}

export default function Card({title, src}: Props) {
  return (
    <div className='w-full md:w-[30%] flex justify-center rounded-2xl shadow-2xl p-[2rem] hover:scale-90 transition-transform cursor-pointer'>

        <Link href={src} className='font-bold text-xl'>{title}</Link>

    </div>
  )
}
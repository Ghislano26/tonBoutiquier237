import React from 'react'
import { TemoignageMarque } from './TemoignageMarque'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { AuroraText } from '@/components/magicui/aurora-text'

type Props = {}

export default function NumberClient({}: Props) {
  return (
    <div className='flex flex-col gap-[3rem] md:mt-[8rem] '>
      <div className='flex-1 p-4 md:p-0 flex justify-center bg-violet-950 shadow-2xl rounded-2xl'>
        <AuroraText className='md:text-[4rem]'>+ de <NumberTicker value={150}/> utilisateurs satisfaits</AuroraText>
      </div>
      <div className='flex-1 flex flex-col items-center'>
        <span className='text-[1.8rem] md:text-[2rem] text-orange-500 font-extralight'>Temognages qui font plaisirs</span>
        <h3 className='text-gray-500 text-center'>"Nos clients sont contents, ça se voit, écoute leurs temognages"</h3>
      </div>

        <div className='flex-1'>
        <TemoignageMarque/>
        </div>
    </div>
  )
}
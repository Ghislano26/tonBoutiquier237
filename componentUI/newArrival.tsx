import React from 'react'
import CardTendance from '@/components/ui/cardTendance'
import { AuroraText } from '@/components/magicui/aurora-text'
import { ConfettiFireworks } from '@/components/ui/firework'


type Props = {}

export default function NewArrival({}: Props) {
  return (
    
      <section className='p-4 flex flex-col md:p-0 gap-8 mt-[5rem]'>
        
                <div className='flex-1 flex flex-col gap-3 md:flex-row md:justify-between items-center bg-violet-950 rounded-2xl shadow-2xl p-4 '>
                    <span className='text-white'><AuroraText className='text-[2.5rem] md:text-[4rem]'>Nouveau arrivage oooh!!!! </AuroraText><br />Inscris-toi ooh pour ne rien manquer sur les nouveautes qui arrivent...!!</span>
                     <span><ConfettiFireworks/></span>
                </div>
        
                <div className='flex-2 flex flex-col items-center md:flex-row gap-5'>
                    <CardTendance image='/article/nike/nike1.jpg' name='Nike air zoom '/>
                    <CardTendance image='/article/ensemble2.jpg' name='Ensemble Balmain'/>
                    <CardTendance image='/article/nike/nike2.jpg' name='Nike air zoom noir'/>
                    <CardTendance image='/article/ensemble4.jpg' name='Ensemble LV'/>
                </div>
        
        
            </section>





  )
}
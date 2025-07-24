"use client"

import React, {useRef} from 'react'
import { ConfettiFireworks } from '@/components/ui/firework'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { avatars } from '@/components/ui/avatars'
import { AvatarCircles } from '@/components/magicui/avatar-circles'
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'
import { AnimatedListHero } from '@/components/ui/animateList'
import { SparklesText } from '@/components/magicui/sparkles-text'

type Props = {

}

export default function HeroSection({}: Props) {

const audioRef = useRef<HTMLAudioElement>(null);
const audioPlay = ()=>{
  if (audioRef.current) {
    audioRef.current.play().catch((err)=>{
      console.log('Erreur de lecture', err)
    })
  }
}



  return (
    <div className='flex gap-8 flex-col  px-5 md:flex-row md:px-0' >

        <div className='flex-1  flex flex-col gap-8 p-2 '>

                <span><ConfettiFireworks/></span>
                <h1 className='text-4xl'>Exprimez <br /> <TypingAnimation className='text-orange-500'>Votre style,</TypingAnimation> Vivez la tendance</h1>
                <h1><span><SparklesText className='text-orange-500 font-light italic text-[2rem] md:text-[4rem]'>Ton Boutiquier.com,</SparklesText></span>la boutique qui <span className='text-orange-700 font-bold'>dechire</span> à yaounde ! Mode, Style... et a tres bas prix !</h1>
                <AvatarCircles numPeople={5} avatarUrls={avatars}/>
                <AnimatedSubscribeButton onClick={audioPlay}>
                  <span>Voir les produits chauds !! </span>
                  <span>Okay c'est partie</span>
                </AnimatedSubscribeButton>
                <audio ref={audioRef} src={'/preloader.mp3'} preload='auto'></audio>
        </div>




        <div className='flex-1'>
          <AnimatedListHero/>
        </div>


    </div>
  )
}
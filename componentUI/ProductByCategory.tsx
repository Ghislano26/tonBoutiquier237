"use client"

import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import { AuroraText } from '@/components/magicui/aurora-text'
import { Loader, ShoppingCart, TagsIcon } from 'lucide-react'
import Image from 'next/image'
import MagicButton from '@/components/magicui/MagicButton'
import confetti from 'canvas-confetti'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fetcher = (url: string)=>
    axios.get(url).then(res => res.data)

type Products = {
    id: string,
    name: string,
    category: string,
    price: number,
    stock: number,
    description: string,
    image: string
}
const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

export default function ProductByCategory({category}: {category: string}) {
    const {data: products, error, isLoading} = useSWR<Products[]>(`http://localhost:3000/api/produits?category=${category}`, fetcher)
    if(isLoading) return<Loader size={40} className='animate-spin text-muted-foreground'/>
    if(error) return <p className='text-center text-red-600'>Erreur lors du chargement des produits.</p>;

  return (
    <>
      <header className='bg-gray-300 p-10 flex justify-center'> 
         <h1 className='text-[1.5rem] font-extralight'>Suivez la tendandes avec nos articles</h1>
       </header>
    <section className='w-full p-[2rem] md:p-[4rem] flex flex-col gap-3 md:gap-0 items-stsrt'>
       




            <div className='flex-1 flex justify-start bg-violet-900 p-4 rounded-2xl shadow-2xl' onMouseOver={handleClick}><TagsIcon size={50} color='orange'/><AuroraText className='text-[2rem]'>{category}</AuroraText></div>
            
         <div className='flex-2 md:gap-1 md:flex-row flex flex-wrap gap-5 flex-col justify-evenly w-full p-3 h-auto '>
            {products?.map((p, index)=>
                <div key={index} className='bg-white md:w-[20%] md:h-[20%] rounded-2xl shadow-2xl flex p-5 flex-col gap-5 hover:scale-90 transition-transform'>
                        <Image src={`${p.image}`} alt='yo' width={110} height={50} className='rounded-2xl'/>
                   

                    <div className=' flex flex-1 flex-col gap-3'>
                        <AuroraText className='text-xl font-bold'>{p.name}</AuroraText>
                        <h1 className='text-gray-500'>{p.description}</h1>
                        <h1 className='text-orange-500 font-bold'>{p.price} FCFA</h1>
                        <h1>Stock : {p.stock}</h1>
                        {/* <StarIcon color='orange'/>
                          <StarIcon color='orange'/>
                          <StarIcon color='orange'/> */}
                    </div>
                    
                    <div className='flex flex-1 justify-between items-center gap-3'>
                        <div className='flex gap-3'>
                          <ShoppingCart className='text-orange-400'/>
                          <MagicButton otherClasses='p-2' tittle='Ajouter'/>
                        </div>

                        <div className='flex'>
                          
                          <Link href={`/articles/vetementHomme/${p.id}`}><Button className='bg-blue-500 cursor-pointer'>Details</Button></Link>

                        </div>
                    </div>
                </div>
            )}
            <div>
      </div>
         </div>

    </section>
    </>
  )
}
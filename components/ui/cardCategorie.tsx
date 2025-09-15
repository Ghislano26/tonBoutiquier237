import React from 'react'
import MagicButton from '../magicui/MagicButton'
import { AuroraText } from '../magicui/aurora-text'
import {ArrowLeftIcon} from 'lucide-react'

type Props = {
    name: string,
    price: string,
    quantity: string,
    description: string,
    link: string
}

export default function CardCategorie({name, price, quantity, description, link}: Props) {
  return (
    <div className='p-6 md:w-[48%] flex flex-col md:p-5 gap-3 h-auto bg-white rounded-2xl shadow-2xl hover:scale-90 transition-transform'>

        <span className='font-bold text-[1.2rem] text-orange-300'>{quantity} produits</span>
        <AuroraText className='text-[1.5rem]'>{name}</AuroraText>
        <h2 className='text-gray-600'>{description}</h2>
        <h3>A partir de <span className='text-orange-500 font-bold'>{price}FCFA</span> </h3>

        <MagicButton href={link} otherClasses="p-3" tittle="Visiter"/>

    </div>
  )
}
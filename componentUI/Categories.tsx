import React from 'react'
import { ConfettiFireworks } from '@/components/ui/firework'
import { AuroraText } from '@/components/magicui/aurora-text'
import CardCategorie from '@/components/ui/cardCategorie'

type Props = {}

export default function Categories({}: Props) {
  return (
    <section className='flex flex-col gap-10'>
        <div className='flex-1 flex-col gap-8 p-4 flex items-center justify-center '>
            <span><ConfettiFireworks/></span>
            <h1 className='text-[2.5rem] font-bold'>Decouvrez nos <AuroraText>Produits</AuroraText> adaptes à vos besoins</h1>
            <span className='text-gray-600'>Honte aux clients qui promettent de revenir mais ne reviennent jamais... Passe ta commande</span>
        </div>





        <div className='flex-2 flex flex-col md:flex-row md:flex-wrap justify-around gap-5'>
            <CardCategorie name='Vetement Homme' quantity='12' description='T-shirts, debardeurs, pantalons de marque adaptes pour vous...' price='5000' link='/articles/vetementHomme'/>
            <CardCategorie name='Chaussures Mixte' quantity='8' description='Nike, Air-zoom, Jordan, Tete de cochon, Amiri que des marques de qualite...' price='13000' link='/articles/vetementFemme'/>
            <CardCategorie name='Chaines & Coliers' quantity='22' description='Decouvrez des accessoires a vous couper le soufle...' price='2000' link='/articles/vetementHomme'/>
            <CardCategorie name='Vetement enfants' quantity='5' description='Venez decouvrir les meilleurs articles pour vos enfants ooh...' price='8000' link='/articles/vetementHomme'/>

        </div>







    </section>
  )
}
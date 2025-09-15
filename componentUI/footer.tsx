import React from 'react'
import { Mail, Home, Box, PhoneCall, MessageCircleCodeIcon, HeadphonesIcon, Navigation, LocationEdit, TagIcon, Contact } from 'lucide-react'
import { AuroraText } from '@/components/magicui/aurora-text'
import MagicButton from '@/components/magicui/MagicButton'
import Image from 'next/image'

type Props = {}

export default function Footer({}: Props) {
  return (
    <section className='min-h-[70vh] w-full mt-8 flex flex-col bg-black'>

            <div className='flex-[2] flex flex-col items-center gap-4 p-8 '>

                    <Mail size={50} color='violet'/>
                    <AuroraText className='text-[2rem]'>Restez Connecté</AuroraText>
                    <p className='text-white'>Recevez nos offres exclusives, nouveautés et conseil mode directement dans votre boîte mail</p>
                    <div className='text-white flex gap-2'>
                    <input type="email" placeholder='Votre adresse mail...' className='border-1 rounded-xl p-3'/><MagicButton tittle="S'abonner"></MagicButton>
                    </div>
            
            </div>


            <div className='flex-[2] flex flex-col gap-5 p-8 md:flex-row md:gap-10   md:pl-[5rem] border-b-1'>

                <div className='flex-1'>
                    <div>
                        <Image src={'/logo.png'} alt='logo' width={90} height={90}></Image>
                        <AuroraText className='text-[1.8rem] font-bold'>TonBoutiquier.com</AuroraText>
                    </div>
                    <p className='font-extralight text-white'>
                        Votre destination premuim pour la mode, les chaussures, le sport au Cameroun.
                        Nous offrons une experience d'achat exceptionnelle avec des produits de qualité 
                        et un service client irréprochable.
                    </p>
                    

                </div>



                <div className='flex-1 font-light flex gap-7 flex-col text-white'>
                    <div>
                        <span className='flex gap-2 font-bold text-orange-600'><Navigation/>Navigation</span>
                    </div>

                    <div className='flex gap-3 flex-col'>
                    <span className='flex gap-2'><Home/>Accueil</span>
                    <span className='flex gap-2'><Box/>Catalogue</span>
                    <span className='flex gap-2'><TagIcon/>Vêtements Hommes</span>
                    <span className='flex gap-2'><TagIcon/>Vêtements Femmes</span>
                    <span className='flex gap-2'><TagIcon/>Chaussures</span>
                    <span className='flex gap-2'><Contact/>Contact</span>
                    </div>
                

                </div>


                <div className='flex-1 font-light flex gap-7 flex-col text-white'>
                        <div>
                            <span className='flex gap-2 font-bold text-orange-600'><HeadphonesIcon/>Contact</span>
                        </div>

                        <div className='flex gap-3 flex-col'>
                        <span className='flex gap-2'><LocationEdit/>Mokolo, Cameroun</span>
                        <span className='flex gap-2'><PhoneCall/>6586 690 31</span>
                        <span className='flex gap-2'><MessageCircleCodeIcon/>Chat Whatsapp</span>
                        <span className='flex gap-2 text-blue-500'><Mail/>tonboutiquier237@gmail.com</span>
                        </div>
                       

                </div>


            </div>


            <div className='flex-1 flex flex-col md:flex-row justify-between text-white p-4 md:pl-[5rem] md:pr-[5rem]'>
                <div>@2025 <span className='text-orange-500'>TonBoutiquier.com</span>. Tous droits réservés</div>
                <div className='flex flex-col md:flex-row md:gap-3'>
                    <span>Politique de confidentialité</span>
                    <span>Condition d'utilisation</span>
                    <span>Cookies</span>
                </div>
            </div>

    

   </section>



  )
}
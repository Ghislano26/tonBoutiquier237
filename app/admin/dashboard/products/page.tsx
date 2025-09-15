import React from 'react'
import ProductAdmin from '@/componentUI/adminComponent/addProductAdmin'
import Link from 'next/link'

type Props = {}

export default function addProductAdmin ({}: Props) {
  return (
    <section className='flex justify-center flex-col items-center gap-8 p-8'>
        <ProductAdmin/>
                <Link href={'/admin/dashboard'} className='shadow-2xl rounded-xl font-bold text-orange-300 p-3 hover:scale-90 transition-transform cursor-pointer'>Retour au dashboard</Link>
    </section>
  )
}
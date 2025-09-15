"use client"

import React from 'react'
import ProductByCategory from '@/componentUI/ProductByCategory'

type Props = {}

export default function page({}: Props) {
  return (
    <section>
      <ProductByCategory category='chaussures'/>
      <ProductByCategory category='vetements'/>
      <ProductByCategory category='accessoires'/>
    </section>
    

    
  )
}
"use-client"

import React from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'

type Props = {
    params: {
        id: number,
    }
}
type Products = {
    id: string,
    name: string,
    category: string,
    price: number,
    stock: number,
    description: string,
    image: string
}



 async function ProductPage({params}: {params: {id: string}}) {
    // const {id} = useParams()
    // const [product, setProduct] = useState<any>(null);
    // useEffect(()=>{
    //     if (id) {
    //         axios.get(`http://localhost:3000/api/produits/${id}`).then(res => setProduct(res.data)).catch(err => console.log("erreur de recuperation: ", err))
            
    //     }
    // }, 
    
    
    
    // [id])
    // const res = await axios.get(`http://localhost:3000/api/produits/${params.id}`)
    // const product: Products = res.data;
     

  return (
   <>
   
   <div>Vous etes sur l'article {params.id} </div> 
    {/* <p>{product.description}</p> */}
   
   </>
  )
}

export default ProductPage
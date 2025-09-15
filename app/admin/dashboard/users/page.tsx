"use client"

import React from 'react'
import {User2, Trash2} from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { AuroraText } from '@/components/magicui/aurora-text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type User = {
  id: string;
  name: string;
  email: string;
}

export default function UsersConnected({}: User) {

  const [users, setUsers] = useState<User[]>([])
  const [userCount, setUserCount] = useState(0)

  const fetchUser = async () => {
    const res = await axios.get('http://localhost:3000/api/users/')
    if (res.status === 200) {
      console.log(res.data);
      setUsers(res.data);
      setUserCount(res.data.length);
    }
  }

  const deleteUser = async (id: string)=>{
      try {
        await axios.delete(`http://localhost:3000/api/users/${id}`)
        toast.success("Utilisateur supprimé avec succès")
        fetchUser();
      } catch (error) {
        toast.error("Une erreur s'est produite")
      }
  }

  useEffect(()=>{
    fetchUser();
  }, [])




  return (
    <section className='flex flex-col p-4 gap-12 w-full items-center'>
      <AuroraText className='text-2xl text-center md:text-[2rem]'>Liste des users connectés sur votre Boutique</AuroraText>
      <h1 className='font-extrabold text-xl'>Nombre Total : {userCount}</h1>

        <div className='w-full flex flex-col md:flex-row p-5 justify-center flex-wrap gap-5'>
            {users.map((user, id) =>(
              <div key={id} className='w-full md:w-[20%] flex flex-col gap-3 shadow-2xl rounded-2xl p-3 hover:scale-90 transition-transform cursor-pointer'>
                <User2 className='text-blue-500'/>
                <p><span className='font-bold'>Identifiant :</span> {user.id}</p>
                <p className='font-extralight'>Nom : {user.name}</p>
                <p className='font-extralight'>Email: {user.email}</p>
                <Button className='cursor-pointer' onClick={()=> {
                  if (confirm("Voulez-vous supprimer cette utilisateur ?")) {
                    deleteUser(user.id)
                  }
                }}><Trash2/></Button>
              </div>
            ))}
           
        </div>
        <Link href={'/admin/dashboard'} className='shadow-2xl rounded-xl font-bold text-orange-300 p-3 hover:scale-90 transition-transform cursor-pointer'>Retour au dashboard</Link>

    </section>
  )
}
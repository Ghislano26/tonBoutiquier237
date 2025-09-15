'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";




export default function Signup() {
  const { theme } = useTheme();
  const router = useRouter();

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleName = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const handleEmail = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const dataPost = {
    name: name,
    email: email,
    password: password
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoading(true)
    setError(null)

    try {
        const res = await axios.post('http://localhost:3000/api/auth/signup', dataPost)
           console.log(res.data);
        if (res.status === 201) {

            toast.success("Votre compte à été créer avec succès !");


            setTimeout(()=>{
                router.push('login')
            },4000)
        }
       
      } catch (error:any) {
       console.log('voila une erreur pour toi', error);
       setError(error.response?.data?.message || "erreur lors de l'inscription")
       toast.error("erreur lors de l'inscription")
      }finally{
        setLoading(false)
        setName('')
        setEmail('')
        setPassword('')
        
    }
 

  }


  return (
        
<>
    
    <Card className="p-0 max-w-sm md:max-w-lg w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-6 pt-5"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>TonBoutiquier237</CardTitle>
          <CardDescription>
            Entrez vos informations pour creer votre compte
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 md:p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2 p-4">
                <Label htmlFor="email">Nom complet</Label>
                <Input id="name" type="name" name="name" value={name} onChange={handleName} required placeholder="Choupo henri legrand" />
              </div>
              <div className="grid gap-2 p-4">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" value={email} onChange={handleEmail} required placeholder="tonboutiquier@gmail.com" />
              </div>
              <div className="grid gap-2 p-4">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" name="password" value={password} onChange={handlePassword} required />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
             <Link href={'/login'} className="ml-[9rem] text-blue-500">Déjà un compte ?</Link>
            <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
            <Button className="w-full hover:cursor-pointer" type="submit" disabled={loading}>{loading? "Creation du compte en cours...":"Creer un compte"}</Button>
            </CardFooter>
            
          </form>
        </CardContent>
        
      </MagicCard>
    </Card>
    </>
  );
  
}

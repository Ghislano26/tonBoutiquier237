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




export default function Login() {
  const { theme } = useTheme();
  const router = useRouter();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmail = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const dataPost = {
    email: email,
    password: password
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoading(true)
    setError(null)

    try {
        const res = await axios.post('http://localhost:3000/api/auth/login', dataPost)
           console.log(res.data);
        if (res.status === 200) {

            toast.success("Connexion reussie !");


            setTimeout(()=>{
                router.push('/')
            },2000)
        }
       
      } catch (error:any) {
       console.log('voila une erreur pour toi', error);
       setError(error.response?.data?.message || "erreur lors de l'inscription")
       toast.error("erreur lors de l'inscription")
      }finally{
        setLoading(false)
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
            Entrez les informations de votre compte pour vous connecter
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 md:p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
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
            <Link href={'/signup'} className="ml-[5rem] md:ml-[9rem] text-blue-500">Pas de compte ?</Link>
            <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
              
            <Button className="w-full hover:cursor-pointer" type="submit" disabled={loading}>{loading? "Connexion en cours...":"Se connecter"}</Button>
            
            </CardFooter>
            
          </form>
        </CardContent>
        
      </MagicCard>
        
    </Card>
    
    </>
  );
  
}

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
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Textarea } from "@headlessui/react";




export default function ProductAdmin() {

  const { theme } = useTheme();
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null)
  const [form, setForm] = useState({
    name: '', category:'vetements', price:'', stock:'', description:''
  })

  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = async (e:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleChangeImage =(e:React.ChangeEvent<HTMLInputElement>)=>{
    if (e.target.files && e.target.files.length > 0) {
        setImage(e.target.files[0])
    }
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setLoading(true)
    setError(null)
  

    try {
        let imagePath = ""
        if (image) {
            const imgForm = new FormData();
            imgForm.append("image", image)
            const uploadRes = await axios.post('http://localhost:3000/api/upload', imgForm);
            imagePath = uploadRes.data.filePath;
        }
        
        

        const res = await axios.post('http://localhost:3000/api/produits', {...form, image: imagePath})
           console.log(res.data);
        if ( res.status === 200) {

            toast.success("Le produit a été corretement ajouté !");
        
            setTimeout(()=>{
                router.push('/admin/dashboard')
            },3000)
        }
        else{
            toast.error("Quelques chose s'est mal passé")
            setTimeout(()=>{
                router.push('/admin/dashboard')
            },2000)
        }
       
      } catch (error:any) {
       console.log('voila une erreur pour toi', error);
       setError(error.response?.data?.message || "erreur lors de l'inscription")
       toast.error("erreur lors de l'inscription")
      }finally{
        setLoading(false)
        
        
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
          <CardTitle>TonBoutiquier2347</CardTitle>
          <CardDescription>
            Administrateur
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 md:p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">

              <div className="grid gap-2 p-4">
                <Label htmlFor="name">Nom de l'article : </Label>
                <Input id="name" type="name" name="name" onChange={handleChange} required placeholder="Nike air zoom" />
              </div>
              
              <div className="grid gap-2 p-4">
                <Label htmlFor="category">Category : </Label>
                <select name="category" onChange={handleChange}>
                    <option value="vetements">vetement</option>
                    <option value="chaussures">chaussures</option>
                    <option value="Accessoires">accessoires</option>
                </select>
              </div>

              <div className="grid gap-2 p-4">
                <Label htmlFor="prix">Prix: </Label>
                <Input id="prix" type="number" name="price" onChange={handleChange} required />
              </div>

              <div className="grid gap-2 p-4">
                <Label htmlFor="stock">Stock: </Label>
                <Input id="stock" type="number" name="stock" onChange={handleChange} required />
              </div>

              <div className="grid gap-2 p-4">
                <Label htmlFor="description">Description :</Label>
                <Textarea id="description" name="description" onChange={handleChange} required placeholder="Description de l'article" />
              </div>

              <div className="grid gap-2 p-4">
                <Label htmlFor="image">Image : </Label>
                <Input id="image" type="file" name="image"  accept="image/*" onChange={handleChangeImage} required />
              </div>

            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
              
            <Button className="w-full hover:cursor-pointer" type="submit" disabled={loading}>{loading? "Ajout du produit en cours...":"Ajouter"}</Button>
            
            </CardFooter>
            
          </form>
        </CardContent>
        
      </MagicCard>
        
    </Card>
    
    </>
  );
  
}

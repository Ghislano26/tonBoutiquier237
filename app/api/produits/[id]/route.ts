import { NextRequest, NextResponse } from "next/server";
import { VerifyToken } from "@/lib/middleware/verifyToken";
import { Product } from "@/models";





export async function GET(req:Request, {params}:{params: {id: string}}){
        try {
            const product = await Product.findByPk(params.id)
            if(!product){
                return NextResponse.json({error: "Produit introuvable"}, {status: 404})
            }
            return NextResponse.json(product)
        } catch (error) {
            console.error("erreur lors de la recherche de l'article", error);
            return NextResponse.json({error: 'research failed', message: (error as Error).message}, {status: 500})
        }
}


export async function DELETE(req:NextRequest, {params}:{params: {id: string}}) {
    const user = await VerifyToken(req);
    if (user instanceof Response) {
        return user
    }

    try {
        const deleteProduct = await Product.destroy({
            where: {
                id : params.id,
            }
        })
        if (deleteProduct === 0) {
            return NextResponse.json({message: "Cette article est introuvale ou n'existe pas"}, {status: 404})
        }
        return NextResponse.json({message: 'Suppression reussie'})
    } catch (error) {
        console.error("erreur lors de la suppression de l'article", error);
        return NextResponse.json({error: 'deleting failed', message: (error as Error).message}, {status: 500})
    }
   
}


export async function PUT(req:NextRequest, {params}:{params: {id: string}}) {
    const productId = parseInt(params.id);
    const body = await req.json();

    try {
        const product = await Product.findByPk(productId);
        if(!product){
            return NextResponse.json({message: 'produit introuvable'}, {status: 404})
        }
         await product.update(body);
         return NextResponse.json({message: 'produit modifie correctement', product})
    } catch (error) {
        console.error("erreur lors de la modification de l'article", error);
        return NextResponse.json({error: 'modification failed', message: (error as Error).message}, {status: 500})
    }
   
}



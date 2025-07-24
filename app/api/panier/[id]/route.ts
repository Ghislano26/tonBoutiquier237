import { NextRequest, NextResponse } from "next/server";
import { VerifyToken } from "@/lib/middleware/verifyToken";
import { Panier } from "@/models";



export async function DELETE(req:NextRequest, {params}:{params: {id: string}}) {
    const user = await VerifyToken(req);
    if (user instanceof Response) {
        return user
    }

    try {
        const deletedItem = await Panier.destroy({
            where: {
                id : params.id,
                user_id : user.id             
            }
        })
        if (deletedItem === 0) {
            return NextResponse.json({message: "Cette article est introuvale ou n'existe pas"}, {status: 404})
        }
        return NextResponse.json({message: 'Suppression reussie'})
    } catch (error) {
        console.error("erreur lors de la suppression de l'article", error);
        return NextResponse.json({error: 'deleting failed', message: (error as Error).message}, {status: 500})
    }
   
}


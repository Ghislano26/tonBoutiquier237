import { NextResponse, NextRequest } from "next/server";
import User from "@/models/User";

export async function DELETE(req:NextRequest, {params}:{params: {id: string}}) {
    const userId = parseInt(params.id);

    try {
        const user = await User.findByPk(userId)
            
        if (!user) {
            return NextResponse.json({message: "utilisateur non trouve"}, {status: 404})
        }
         await user.destroy();
        return NextResponse.json({message: 'Utilisateur supprime avec succes'})
    } catch (error) {
        console.error("erreur lors de la suppression de l'article", error);
        return NextResponse.json({error: 'deleting failed', message: (error as Error).message}, {status: 500})
    }
   
}
import { NextRequest, NextResponse } from "next/server";
import { VerifyToken } from "@/lib/middleware/verifyToken";
import { Panier, Product } from "@/models";

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {

    const user = await VerifyToken(req);
    if (user instanceof Response) {
        return user
    }

    const body = await req.json();
    const {product_id, quantity} = body;
        try {
                const existinItem = await Panier.findOne({
                    where:{
                        user_id: user.id,
                        product_id,
                    }
                })
            if (existinItem) {
                existinItem.quantity += quantity;
                await existinItem.save();
                return NextResponse.json({message: 'Quantite mise a jour', panier: existinItem})
            }else{
                const newItem = await Panier.create({
                    user_id: user.id,
                    product_id,
                    quantity
                });

                return NextResponse.json({message: 'Article ajoute au panier', Panier: newItem}, {status: 201});
            }

        } catch (error) {
            console.error('erreur:', error)
            return NextResponse.json({error: 'add to card failed', message: (error as Error).message}, {status: 500})
        }

} 

export async function GET(req:NextRequest) {
    const user = await VerifyToken(req);
    if (user instanceof Response) {
        return user
    }

    const items = await Panier.findAll({
        where: {user_id: user.id},
        include: [{
            model: Product, 
            attributes:['name', 'price', 'description', 'image'],
            as: 'product'
        }]
    })
    return NextResponse.json(items);
}


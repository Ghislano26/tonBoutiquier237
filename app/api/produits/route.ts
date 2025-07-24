import { NextResponse } from "next/server";
import { Product } from "@/models/Product";
import sequelize from "@/lib/sequelize";
import { error } from "console";


export async function POST(req:Request){

        try {
            await sequelize.authenticate();
            const body = await req.json();
            const {name, price, description, image, stock } = body;

            const newProduct = await Product.create({
                name, price, description, image, stock
            })
            if (!newProduct) {
                return NextResponse.json({error: error});
            }
            return NextResponse.json({message: 'produit ajoutes', newProduct}, {status: 200})
            
        } catch (error) {
            return NextResponse.json({error: 'Erreur de connexion', message: (error as Error).message}, {status: 500})
        }

}
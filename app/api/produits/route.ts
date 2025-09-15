import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/models/Product";
import sequelize from "@/lib/sequelize";
import { error } from "console";


export async function POST(req:Request){

        try {
            await sequelize.authenticate();
            const body = await req.json();
            const {name, price, description, image, stock, category } = body;

            const newProduct = await Product.create({
                name, price, description, image, stock, category
            })
            if (!newProduct) {
                return NextResponse.json({error: error});
            }
            return NextResponse.json({message: 'produit ajoutes', newProduct}, {status: 200})
            
        } catch (error) {
            return NextResponse.json({error: 'Erreur de connexion', message: (error as Error).message}, {status: 500})
        }

}

export async function GET(req:NextRequest) {
    
    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category')

    try {
        if (!category) {
            return NextResponse.json({error: 'category manquante'}, {status: 400})
        }
        const products = await Product.findAll({
            where:{category}
        })

        return NextResponse.json(products, {status: 200})
    } catch (error) {
        return NextResponse.json({error: 'Erreur de connexion', message: (error as Error).message}, {status: 500})
    }

}


import { NextResponse } from "next/server";
import User from "@/models/User";
import sequelize from "@/lib/sequelize";
import bcrypt from 'bcrypt'



export const runtime = 'nodejs';


export async function POST(req:Request) {
    try {
        sequelize.authenticate();
        const body = await req.json();
        const {name, email, password} = body;

        // losqu'il veut creer un compte on verifie si l'email qu'il entre exite deja
        const existing = await User.findOne({
            where: {
                email
            }
        })
        if (existing) {
            return NextResponse.json({erreur:'cette addresse est deja utilise'}, {status: 400});
        }
        // sinon s'il nexite pas, on encripte son mot de passe

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({name, email, password: hashPassword});

        return NextResponse.json({message: 'enregistrement reussi' ,newUser}, {status: 201});
        
    } catch (error) {
        NextResponse.json({error: 'Signup failed', message: (error as Error).message}, {status: 500})
    }
}


export async function GET() {
        try {
            await sequelize.authenticate();
            const users = await User.findAll();
            return NextResponse.json(users);           
        } catch (error) {
            NextResponse.json({error: 'Erreur de connexion', message: (error as Error).message}, {status: 500})
        }


}
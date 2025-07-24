import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcrypt';
import jwt  from "jsonwebtoken";
import sequelize from "@/lib/sequelize";


export async function POST(req: Request) {
    
    try {
        sequelize.authenticate();
        
        const body = await req.json();
        const {email, password} = body;

        const user = await User.findOne({
            where:{email}
        })
        if (!user) {
            return NextResponse.json({error: 'Utilisateur introuvable'}, {status: 404});
        }
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return NextResponse.json({erreur: 'password incorrecte'}, {status: 401});
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email
        },process.env.JWT_SECRET!, {expiresIn: '48h'});

        return NextResponse.json({message: 'connexion reussi', token}, {status: 200});
        
    } catch (error) {
        NextResponse.json({error: 'Login failed', message: (error as Error).message}, {status: 500})
    }



}
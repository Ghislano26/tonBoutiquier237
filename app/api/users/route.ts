import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email']
        })

        return NextResponse.json(users);
    } catch (error) {
        console.error("erreur lors de la l'affichage des utilisateurs", error);
        return NextResponse.json({error: 'print user failed', message: (error as Error).message}, {status: 500})
    }
}
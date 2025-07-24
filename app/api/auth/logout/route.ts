import { NextResponse } from "next/server";


export async function POST() {
    const res = NextResponse.json({message:'Utilisateur deconnecte avec succes'});
    res.cookies.set('token', '', {
        httpOnly: true,
        expires: new Date(0),
        path: '/'
    })

    return res;
}
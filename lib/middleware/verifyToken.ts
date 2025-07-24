import { NextResponse } from "next/server";
import jwt, {JwtPayload} from 'jsonwebtoken'

export async function VerifyToken(req: Request): Promise<JwtPayload | Response> {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({erreur: 'Token manquant'}, {status: 401});
    }
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        return decoded as JwtPayload;
    } catch (error) {
        return NextResponse.json({erreur: 'Token invalide ou expire'}, {status: 401});
    }


}
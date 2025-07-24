import { VerifyToken } from "@/lib/middleware/verifyToken";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    
    const verified = await VerifyToken(req);
    if(verified instanceof Response)
        return verified
    
    return NextResponse.json({
        message: 'Acces autorise',
        user: verified
    })


}
// import { NextResponse, NextRequest } from "next/server";
// import jwt, {JwtPayload} from 'jsonwebtoken'

// export async function IsAdmin(req: NextRequest):Promise<JwtPayload | Response>{
    
//     const token = req.cookies.get('token')?.value;
//     if (!token) {
//         return NextResponse.redirect(new URL('/login', req.url))
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//         if (decoded.role !== 'admin') {
//             return NextResponse.redirect(new URL('/login', req.url))
//         }
        
//     } catch (error) {
        
//     }


// }
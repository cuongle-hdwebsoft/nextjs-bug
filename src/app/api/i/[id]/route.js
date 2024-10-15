import { NextResponse } from "next/server"

export const GET = () => {
    console.log('==> This route is called');
    return NextResponse.json({ message: 'ok' },{status:200})
}
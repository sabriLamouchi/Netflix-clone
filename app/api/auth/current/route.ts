
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
import { NextApiResponse } from "next";


 async function  hundler(req:Request){


    try {
        const {currentUser}=await serverAuth();


        return NextResponse.json(currentUser);
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}

export {hundler as GET, hundler as POST};
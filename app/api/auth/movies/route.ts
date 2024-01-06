import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
import { NextApiResponse } from "next";


export async function  GET(req:Request){


    try {
        const session=await serverAuth();
        const movies= await prismadb.movie.findMany();


        return NextResponse.json(movies);
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}
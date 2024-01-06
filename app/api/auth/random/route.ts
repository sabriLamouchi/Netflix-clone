import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
import { NextApiResponse } from "next";


export async function  GET(req:Request){

    try {
        const session=await serverAuth();
        
        const movieCount = await prismadb.movie.count();
        const randomIndex=Math.floor(Math.random()* movieCount);
        const randomMovies= await prismadb.movie.findMany({
            take:1,
            skip:randomIndex,
        });
        console.log(session.currentUser);
        return NextResponse.json(randomMovies[0]);
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}
import serverAuth from "@/lib/serverAuth";
import { NextRequest, NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
import { NextApiResponse } from "next";
import { useSearchParams } from "next/navigation";
import { url } from "inspector";

export async function  GET(req:Request,{params}:any){


    try {
        const session=await serverAuth();
        const movieId=params.movieId;
        console.log(movieId)
        const movie= await prismadb.movie.findUnique({
            where:{
                id:movieId || "",
            }
        })

        if(!movie){
            throw new Error('Invalid Movie ID');
        }

        return NextResponse.json(movie);
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}
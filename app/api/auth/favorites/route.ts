import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server"
import prismadb from '@/lib/prismadb'
import { NextApiResponse } from "next";


export async function  GET(req:Request){

    try {
        const {currentUser}=await serverAuth();
        
        const favoriteMovies=await prismadb.movie.findMany({
            where:{
                id:{
                    in:currentUser?.favoritIds,
                }
            }
        });

        return NextResponse.json(favoriteMovies);
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}
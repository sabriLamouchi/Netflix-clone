import serverAuth from "@/lib/serverAuth";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { without } from "lodash";
import prismadb from '@/lib/prismadb'

export  async function  hundler(req:Request){

    try {
        if(req.method==="POST"){
            const {currentUser}=await serverAuth();
            

            const {movieId}=await req.json()
            
            const existingMovie=await prismadb.movie.findUnique({
                where:{
                    id: movieId,
                }
            })

            if(!existingMovie){
                throw new Error('Invalid ID');
            }

            const user =await prismadb.user.update({
                where:{
                    email:currentUser.email ||'',
                },
                data:{
                    favoritIds:{
                        push:movieId,
                    }
                }
            })

            return NextResponse.json(user);
        }

        if(req.method==="DELETE"){
            const {currentUser}=await serverAuth();
            
            const {movieId}=await req.json();
            const existingMovie=await prismadb.movie.findUnique({
                where:{
                    id: movieId,
                }
            })

            if(!existingMovie){
                throw new Error('Invalid ID');
            }

            const updatedFavoriteIds=without(currentUser.favoritIds,movieId);
            console.log(updatedFavoriteIds+""+currentUser.email)
            const updateduser =await prismadb.user.update({
                where:{
                    email:currentUser.email ||'',
                },
                data:{
                    favoritIds:updatedFavoriteIds
                }
            })

            return NextResponse.json(updateduser);
        }

        return NextResponse.error();

    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message:'success'});
    
}

export {hundler as POST, hundler as DELETE}


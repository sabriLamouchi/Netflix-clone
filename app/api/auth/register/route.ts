import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'

export  async function POST(req:Request,res:NextApiResponse) {

    try {
        const {name,email,password}=await req.json();
        
         const existingUser=await prismadb.user.findUnique({
            where:{
                email,
            }
        });
        if(existingUser){
            return res.status(422).json({error:"Email taken"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
        console.log({email,name,hashedPassword});
        const user = await prismadb.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image:'',
                emailVerified:new Date(),
            }
        })


    } catch (error) {
        console.log({error});
    }
    
    //     if(req.method !=='POST'){
    //     return res.status(405).end();
    // }

    // try{
    //     const {email,name,password}=req.body;


        

    // }catch(error){
    //     console.log(error);
        // return res.status(400).end();
    // }
    return NextResponse.json({message:'success'});
    
}
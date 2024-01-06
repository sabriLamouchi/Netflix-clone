import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import prismadb from '@/lib/prismadb'
import { getServerSession } from "next-auth";
import { options } from "@/app/utils/options";

const serverAuth= async ()=>{
    const session = await getServerSession(options);

    if(!session?.user?.email){
        throw new Error('Not signed In');
    }

    const currentUser= await prismadb.user.findUnique({
        where:{
            email:session.user.email,
        }
    });

    if(!currentUser){
        throw new Error('Not signed In');
    }

    return{currentUser};
}

export default serverAuth;
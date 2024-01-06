
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from '@/lib/prismadb'
import {compare} from 'bcrypt'
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";

export const options={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID as string || '',
            clientSecret:process.env.GITHUB_SECRET as string || '',
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID || '',
            clientSecret:process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        EmailProvider({
            server: {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              auth: {
                user: process.env.EMAIL_SERVER_USER,
                pass: process.env.EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
          }),
          CredentialsProvider({
            id:'credentials',
            name:'credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text',
                },
                password:{
                    label:'Password',
                    type:'password',
                }
            },
            async authorize(credentials){
                console.log({credentials,})
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email and Password required');
                }
                const user =await prismadb.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                });

                if(!user || !user.hashedPassword){
                    throw new Error('Email does not exist');
                }

                const isCorrectPassword =await compare(credentials.password,user.hashedPassword);

                if(!isCorrectPassword)
                    throw new Error('Incorrect password ');

                return user; 
                
            }
        })
    ],
    pages:{
        signIn:'/auth',
    },
    
    adapter:PrismaAdapter(prismadb),
    session:{
        strategy:'jwt',
    },
    // jwt:{
    //     secret:process.env.NEXTAUTH_JWT_SECRET,
    // },
    secret:process.env.NEXTAUTH_SECRET,
    debug:process.env.NODE_ENV==="development",
}satisfies NextAuthOptions;
import bcrypt from 'bcrypt'
import  {NextApiRequest,NextApiResponse} from 'next'
import prismadb from '@/lib/prismadb'
import NextAuth from 'next-auth/next';
import {options} from '@/app/utils/options';


const hundler=NextAuth(options);

export {hundler as GET, hundler as POST};

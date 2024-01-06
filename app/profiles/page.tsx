
import Image from 'next/image';
import React from 'react';
import { options } from '../utils/options';
import { getServerSession } from 'next-auth';
import Profile from '@/app/components/Profile'

async function Profiles(){
    const session =await getServerSession(options);
    return (
        <div className='flex items-center h-full justify-center'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
                <div className='flex justify-center items-center gap-8 mt-10'>
                    <Profile userName={session?.user?.name}/>
                </div>
            </div>
        </div>
    );
};

export  default  Profiles;
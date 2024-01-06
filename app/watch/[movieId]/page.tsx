"use client"

import React from 'react';
import { useSearchParams,useRouter } from 'next/navigation';
import useMovie from '@/hooks/useMovie';
import { useParams } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const Watch = ({params}:any) => {
    const router=useRouter();
    const {data}=useMovie(params.movieId as string);
    console.log(data)
    return (
        <div className='h-screen w-screen bg-black'>
            <nav className='
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row 
            items-center
            gap-8
            bg-black
            bg-opacity-70
            '>
                <AiOutlineArrowLeft onClick={()=>router.push('/')} className='text-white cursor-pointer' size={30}/>
                <p className='text-white text-1xl md:text-3xl font-bold'>
                    <span className='font-light'>
                        watching: 
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video src={data?.videoUrl} className='h-full w-full' autoPlay controls  />
        </div>
    );
};

export default Watch;
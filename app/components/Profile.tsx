"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface profileSession{
    userName:any;
}

const Profile:React.FC<profileSession> = ({userName}) => {
    const router=useRouter();

    return (
        <div onClick={()=>router.push('/')} >

        <div className='group flex-row w-44 mx-auto'>

                <div className='
                w-44
                h-44
                rounded-md
                flex
                items-center
                justify-center
                border-2
                border-transparent
                group-hover:cursor-pointer
                group-hover:border-white
                overflow-hidden
                '>
                    <img src="/images/default-slate.png" alt=""  />
                </div>

                <div className='
                mt-4
                text-gray-400
                text-2xl
                text-center
                group-hover:text-white
                '>
                    {userName}
                </div>

        </div>


    </div>
    );
};

export default Profile;
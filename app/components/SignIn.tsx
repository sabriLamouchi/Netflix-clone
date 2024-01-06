"use client"
import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    return (
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
        <div
        onClick={()=>signIn('google',{callbackUrl:`${window.location.origin}`})}
         className="w-10 h-10 bg-white rounded-full flex justify-center items-center hover:opacity-80 transition cursor-pointer">
            <FcGoogle size="30"/>
        </div>
        <div
        onClick={()=>signIn('github',{callbackUrl:`${window.location.origin}`})} 
        className="w-10 h-10 bg-white rounded-full flex justify-center items-center hover:opacity-80 transition cursor-pointer">
            <FaGithub size="30"/>
        </div>
    </div>
    );
};

export default SignIn;
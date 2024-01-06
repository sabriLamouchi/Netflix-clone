"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutButton = () => {
    return (
        <button onClick={()=>signOut({callbackUrl:`${window.location.origin}/auth`})} className="w-full bg-white h-10 ">logout!</button>

    );
};

export default LogOutButton;
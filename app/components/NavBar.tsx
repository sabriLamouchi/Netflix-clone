"use client"

import React, { useCallback, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import { BsChevronDown,BsSearch,BsBell} from 'react-icons/bs'
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET=66;

const NavBar = () => {

    const [showMobileMenu,setShowMobileMenu]=useState(false);
    const [showAccountMenu,setshowAccountMenu]=useState(false);
    const [showbackground,setShowbackground]=useState(false);

    const toggleMobileMenu=useCallback(()=>{
        setShowMobileMenu((current)=>!current);
    },[])

    const toggleAccountMenu=useCallback(()=>{
        setshowAccountMenu((current)=>!current);
    },[])
    

    useEffect(()=>{
        const hundleScroll=()=>{
            if(window.scrollY>TOP_OFFSET)
                setShowbackground(true);
            else
                setShowbackground(false);
        }

        window.addEventListener('scroll',hundleScroll);

        return()=>{
            window.removeEventListener('scroll',hundleScroll);
        }
    },[])

    return (
        <nav className='w-full fixed z-40'>
            <div
            className={`
            ${showbackground ? 'bg-zinc-900 bg-opacity-90': ''}
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90`}

            >
            <img className='h-4 lg:h-7' src='/images/logo.png' alt='logo'/>

            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label='Home'/>
                <NavbarItem label='Series'/>
                <NavbarItem label='Films'/>
                <NavbarItem label='New & Popular '/>
                <NavbarItem label='My List  '/>
                <NavbarItem label='Browser by languages'/>
            </div>

                <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                    <p className='text-white'>Home</p>
                    <BsChevronDown className={`text-white w-5 transition ${showMobileMenu ?'rotate-180':'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                
                <div className='flex flex-row ml-auto gap-7 items-center'>

                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer transioton'>
                        <BsSearch/>
                    </div>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer transioton'>
                        <BsBell/>
                    </div>
                    <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-7 cursor-pointer relative '>
                        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                            <img src="/images/default-slate.png" alt="" />
                        </div>
                        <BsChevronDown className={`text-white w-5 transition ${showAccountMenu ? 'rotate-180':'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>

            </div>
            
        </nav>
    );
};

export default NavBar;
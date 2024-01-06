"use client"
import Image from 'next/image';
import React, { FormEvent, useCallback, useState } from 'react';
import Input from './input';
import SignIn from './SignIn';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { redirect, useRouter } from 'next/navigation';
const Register = () => {
    const router=useRouter();
    const[email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const [variant,setVariant]=useState('login');

    // Router
    

    const toggleVariant=useCallback(()=>{
        setVariant((currentVariant)=>currentVariant==='login' ?'register':'login')
    },[])

    // async function SignInWithEmail(){
    //     const signInEmail=await signIn("email",{
    //         email: email,
    //         callbackUrl:`${window.location.origin}`,
    //         redirect:false,
    //     });

    //     if(!signInEmail?.ok){
    //         return toast({
    //             title:"well this did no work...",
    //             description:"Something went wrong, please  try again",
    //             variant:"destructive",
    //         });
    //     }

    //     return toast({
    //         title:"check your email",
    //         description:"A magic link has been sent to you"
    //     });
    // }

    // const register= useCallback(async ()=>{
    //     try {
    //         await axios.post("/api/register",{
    //                 name,
    //                 email,
    //                 password
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     };
    // },[email, name, password]);

         async function register (){
            // e.preventDefault();

            const response= await fetch('/api/auth/register',{
                method:'POST',
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password,

                }),

            });
            if(response.ok){
                console.log({response})
                setVariant('login');
                router.push('/profiles')
                router.refresh();
            }

            

        }
// Login hundler:
        async function login(){
            const response=await signIn('credentials',{
                email:email,
                password:password,
                
            });
            
                console.log({response});
                router.push("/profiles");
                router.refresh();
            

        }


    return (
            <div className=" relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src="/images/logo.png" alt="Logo" width={150} height={75} className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant==='login'?'sign in':'Register'}
                        </h2>
                            <form  action={variant==='login'?login:register} method='POST' className="flex flex-col gap-4">
                                {
                                    variant==='register' &&(
                                        <Input label="UserName"
                                        id="name"
                                        onChange={(env:any)=>{setName(env.target.value)}}
                                        value={name}
                                        type="Text"/>
                                    )
                                }

                                <Input label="Email"
                                    id="email"
                                    onChange={(env:any)=>{setEmail(env.target.value)}}
                                    value={email}
                                    type="email"/>
                                <Input label="Password"
                                    id="password"
                                    onChange={(env:any)=>{setPassword(env.target.value)}}
                                    value={password}
                                    type="password"/>
                
                                <button type='submit'  className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                                {variant==='login'?'Login':'Sign up'}
                                </button>
                            </form>

                            <SignIn/>
                        <p className="text-neutral-500 mt-12">
                            {variant==='login'?'First time using Netflix?':'Already have an account'}
                            <span onClick={toggleVariant}  className="text-white ml-1 hover:underline cursor-pointer">
                                {variant==='login'?'Create an account':'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
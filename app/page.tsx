import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { options } from "./utils/options";
import LogOutButton from "./components/LogOutButton";
import NavBar from "./components/NavBar";
import BillBoard from "./components/BillBoard";
import { redirect } from "next/navigation";
import MovieList from "./components/MovieList";
import useFavorites from "@/hooks/useFavorites";
import MovieFavoriteList from "./components/MovieFavoriteList";
import { useEffect } from "react";
import serverAuth from "@/lib/serverAuth";
import InfoModel from "./components/InfoModel";
import seInfoModel from'@/hooks/useInfoModel'
import useInfoModal from "@/hooks/useInfoModel";
import HomeCmp from "./components/HomeCmp";

// export async function getServerSideProps(context:NextPageContext){
//   const session=await getSession(context);

//   if(!session){
//     return{
//       redirect:{
//         distination:'/auth',
//         permanent:false,
//       }
//     }
//   }

//   return{
//     props:{}
//   }
// }


export default async function Home() {
  // const {currentUser}=await serverAuth();
  return (
    <>
      <HomeCmp/>
    {/* <h1 className='text-2xl text-green-500'>
      Netflix clone
    </h1>
    {session?
    <>
      <h1 className="text-white">you logged in!!</h1>
      <h1 className="text-white">{session.user?.name}</h1>
      <LogOutButton/>
    </>
    :
    <h1 className="text-green-500">please loged in to see something speciale</h1>
    } */}
    </>
  )
}

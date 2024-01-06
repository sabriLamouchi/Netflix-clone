"use client"

import useInfoModal from "@/hooks/useInfoModel";
import InfoModel from "./InfoModel";
import NavBar from "./NavBar";
import BillBoard from "./BillBoard";
import MovieList from "./MovieList";
import MovieFavoriteList from "./MovieFavoriteList";





export default  function HomeCmp() {
    const{isOpen,closeModal}=  useInfoModal();
    return (
      <>
          <InfoModel visible={isOpen}  onClose={closeModal}/>
          <NavBar/>
          <BillBoard/>
          <div className="pb-40">
            <MovieList title="Trending Now"/>
            <MovieFavoriteList title="My List"/>
          </div>
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
  
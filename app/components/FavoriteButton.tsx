"use client"

import useFavorites from '@/hooks/useFavorites';
import React, { useCallback } from 'react';
import {AiOutlinePlus,AiOutlineCheck}from 'react-icons/ai'
import useCurrentUser from '@/hooks/useCurrentUser'
import { useMemo } from 'react';
import axios from 'axios';
import { method } from 'lodash';

interface FavoriteButtonProps{
    movieId:string;
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate:mutateFavorites}=useFavorites();
    const {data:currentUser,mutate}=useCurrentUser();
    const  isFavorite=useMemo(()=>{
        const list =currentUser?.favoritIds || [];
        return list.includes(movieId);
    },[currentUser,movieId])
    console.log(isFavorite)
    const toggleFavorites=useCallback(async()=>{
        let response;
        if(isFavorite){
            response=await axios.delete('/api/auth/favorite',{
                data:{movieId}
            })
        }
        else{
            response=await axios.post('/api/auth/favorite',{movieId});
        }

        const updatedFavoriteIds=response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds:updatedFavoriteIds
        });

        mutateFavorites();
    },[movieId,currentUser,mutate,mutateFavorites,isFavorite])

    const Icon =isFavorite ?AiOutlineCheck:AiOutlinePlus;
    return (
        <div onClick={toggleFavorites} className="
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-white
        border-2
        
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
        ">
            <Icon className="text-white"/>
        </div>
    );
};

export default FavoriteButton;
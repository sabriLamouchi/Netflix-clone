"use client"

import useMovieList from '@/hooks/useMovieList';
import React from 'react';

import { isEmpty } from 'lodash';
import MovieCard from './MovieCard';
import useFavorites from '@/hooks/useFavorites';

interface MovieFavoriteListProps{
    title:string;
}

const MovieFavoriteList:React.FC<MovieFavoriteListProps> = ({title}) => {
    const {data:favorites=[]}=useFavorites();
    console.log(favorites)
    if(isEmpty(favorites)){
        return null;
    }
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div>
                <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                    {title}
                </p>
                <div className='grid grid-cols-4 gap-2'>
                    {favorites.map((movie:any)=>
                    
                         (<MovieCard key={movie.id} data={movie}/>)
                    
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieFavoriteList;
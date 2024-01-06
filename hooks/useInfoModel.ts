
import React from 'react';
import {create} from'zustand';

 interface ModelStoreInterface{
    movieId?:string;
    isOpen:boolean;
    openModal:(movied:string)=>void;
    closeModal:()=>void;
};



const useInfoModal= create<ModelStoreInterface>()((set)=>({
    movieId: undefined,
    isOpen: false,
    openModal:(movieId:string)=>set({isOpen:true, movieId}),
    closeModal:()=>set({isOpen:false, movieId:undefined}),
}))
export default useInfoModal;

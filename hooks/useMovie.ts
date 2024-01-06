import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useMovie=(id?:string)=>{

    const {data,isLoading,error,mutate}=useSWR(id ?`/api/auth/movies/${id}`: null,fetcher);
    
    return {
        data,
        isLoading,
        error,
        mutate
    }
}
export default useMovie;
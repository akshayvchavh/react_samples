import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data ,setData ] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [ error , setError] = useState(null);
    
    const fetchDatas = async () =>{
        const response = await fetch(url);
        const dat = await response.json();
        setData(dat);
        setIsLoading(false);
    }

    useEffect(()=>{
        const abortCont = new AbortController();

        fetchDatas();

        return () => {
            abortCont.abort();
            console.log("cleanup executed");
        };
    } , [] );

    return {data , isLoading , error };
}

export default useFetch ; 
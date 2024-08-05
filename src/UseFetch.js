import { useEffect, useState } from "react";
function useFetch(url)  // custom Hook
{
    let[data,setdata]=useState([])
    useEffect(
        ()=>
        {
            Fetching()
        },[]
    )
    async function Fetching()
    {
        let raw=await fetch(url)
        let out = await raw.json()
        setdata(out)
    }
    return data

}
export default useFetch
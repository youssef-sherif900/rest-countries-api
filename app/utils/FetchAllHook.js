'use client'
import { useState , useEffect } from "react";
import axios from "axios";

export const useFetchAll = () =>{

    const [ data , setData ] = useState(null)
    useEffect(  ()=> {
        const info = async () =>{
            try{
                let res =  await axios.get('https://restcountries.com/v3.1/all')
                setData(res.data)
            } catch(e){
                setData(e)
            }
        }
        info()
    }
    ,[])

    return {data}
}
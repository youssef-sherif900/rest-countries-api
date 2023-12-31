'use client'
import { useState , useEffect } from "react";
import axios from "axios";

export const useFilterRegion = (region) => {
    const [regionData , setRegionData] = useState(region)
    useEffect(()=>{
        const filter = async (region) => {
            try {
                if(region){
                    let  {data}  = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
                        setRegionData(data)
                }
                
              } catch (e) {
                console.log(e)
              }
        }

        filter(region)

    } , [region])

    return { regionData }

 
};

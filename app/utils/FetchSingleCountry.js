'use client'
import {useEffect , useState} from 'react'
import axios from 'axios'
const useFetchSingleCountry = (country) =>{
    const [countryData , setCountryData] = useState(null)
    useEffect(()=>{
        const fetch = async (country)=>{
            try{
                let {data} = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
                setCountryData(data)
            } catch(e){
                console.log(e)
            }
        }
        fetch(country)
        return
    },[country])

    return countryData
}

export default useFetchSingleCountry;
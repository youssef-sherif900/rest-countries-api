 'use client'
import axios from 'axios'
import {useState , useEffect , useRef }  from 'react'

 const  useSearchHook = (search) =>{
    const [ searchData , setSearchData ] = useState(null)
    const abortControllerRef = useRef()
    useEffect(()=>{
        abortControllerRef.current?.abort()
        abortControllerRef.current = new AbortController()

        const fetchData = async (search) =>{
            try{
                let { data } = await axios.get(`https://restcountries.com/v3.1/name/${search}`,{
                    signal:abortControllerRef.current?.signal
                })
                setSearchData(data)
            } catch(e){
                setSearchData(e)
            }
        }
        fetchData(search)
    },[search])

    return searchData
 }

 export default useSearchHook
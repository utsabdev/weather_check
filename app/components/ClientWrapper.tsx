"use client"

import { useState } from "react"
import LandingPage from "./Landing"
import Navbar from "./NavBar"

export default function ClientWrapper({initialState}:{initialState:any}){
    const [data, setData]= useState(initialState)
    const [loading, setLoading]=useState(false);
   const   handleSearch = async (city :string)=>{
    if(!city) return;
    setLoading(true);
    try{
        const res = await fetch(`/api/weather?city=${city}`)
        const newData = await res.json();
        setData(newData);

    }
    catch(error){
        console.error("Error fetching weather data:", error);
    }
    finally{
        setLoading(false);
    }
    }
    return(
        <>
        <Navbar city ={data?.name} onSearch={handleSearch }/>
        <LandingPage data ={data} loading ={loading} />
        </>
    )
}
"use client"

import { useState, useEffect } from "react"

/**
 *   
 * 
 * 
 * 
 * 
 * 
 */
export default function page() {
    const [data, setData]= useState([])

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
            let response =  await fetch('https://official-joke-api.appspot.com/random_joke')
            response =  await response.json()
            setData(response)
    }
      

      if(data == ""){
        return(
            <h1>Loading jokes</h1>
        )
      }
      return (
        <div>
            <div>{data.setup}</div>
            <div>{data.punchline}</div>
            <button onClick={fetchData}>Next Joke</button>
        </div>
  );
}

'use client'

import React, { useEffect } from 'react'

export default function Fetch() {
    useEffect(()=>{
    async function dataFun(){
        let data= await fetch('https://jsonplaceholder.typicode.com/todos')
        data = await data.json()
        console.log(data)
      }
      dataFun()
    },[])
  return (
    <div>Fetch</div>
  )
}

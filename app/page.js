// import Fetch from "./Fetch";
"use client"
import { useEffect, useState } from "react";
import Card from "./components/Card"
import Form from "./components/Form";
import "./components/card.css"

const URL = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

export default function Home() {
  

  const [data, setData]=useState([]);
  

  useEffect(()=>{
    async function fetchData(){
      let response = await fetch(URL)
      response = await response.json()
      setData(response)
      console.log(response)
    }
    
    fetchData();
  },[])
  
  if(data == ""){
    return(
      <p>Loading...</p>
    )
  }

  function deleteCard(id){
    const newData=[];
    data.forEach((item)=>{
          if(item.id!==id){
               newData.push(item)
          }
         
    })
    setData(newData)
}
 
 
  return (
  <div className="container">
  
    <Form/>
  
  
    {
      data.map((item)=>{
          return(
            <Card 
                key={item.id}
               deleteCard={deleteCard}
                id={item.id}
                firstName = {item.firstName}
                lastName = {item.lastName} 
                email = {item.email}
                imageUrl = {item.imageUrl}
              />
          )
      })
    }
  </div>
  
  )
}

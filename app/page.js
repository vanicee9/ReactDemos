// import Fetch from "./Fetch";
"use client"
import { useEffect, useState } from "react";
import Card from "./components/Card"
import Form from "./components/Form";
import "./components/card.css"

const URL = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

export default function Home() {
 

 const [data, setData]=useState([]);
 const [updateId, setUpdateId]= useState(undefined);
 const [card,setCard] = useState({});

debugger;
  function findCardWithUpdateId(updateId) {

    if(updateId === undefined) return updateId;


    data.forEach((item) => {
      if(item.id === updateId) {
        setCard({...item})
      }
    })
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


  function updateChanges(updatedCard) {
    
    const newData = data.filter((item) => {
      return card.id !== item.id
    })

    setData((prev) => {
          return [
            ...newData,
            updatedCard
          ]
    })

  }

useEffect(() =>{
  console.log(updateId)
  findCardWithUpdateId(updateId); 
},[updateId])



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


  return (
  <div className="container">
  
    <Form 
    card = {card}
    updateChanges = {updateChanges}
    />
  
  
    {
      data.map((item)=>{
          return(
            <Card 
                key={item.id}

               deleteCard={deleteCard}
              //  updateCard = {updateCard}
              
                setUpdateId={setUpdateId}
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

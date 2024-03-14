"use client"
import { employeeData } from "./Data";
import React, { Fragment, useEffect, useState } from 'react';

export default function page() {
  const [data, setData] = useState([]);
  const [firstName, setfirstName]= useState('');
  const [lastName, setlastName]= useState('');
  const [age, setage]= useState('');
  const [id, setId]= useState('');



  useEffect(() => {
    setData(employeeData);
  }, []);

  const handleEdit = (id) => {
    console.log(id)
   let edit;
   data.forEach((item)=>{
    if(item.id === id ){
        edit ={
            ...item
            
        } 
        console.log(edit)
        if ( edit!=undefined){
            setId(id);
            setfirstName(edit.fName);
            setlastName(edit.lName);
            setage(edit.age)
        }
    }
   })
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Do you really want to delete?")) {
        let newData = data.filter((item) => item.id !== id)
        setData(newData);
      }
    }
  };

  const handleSave = () => {
    console.log("")
  };
  const handleClear = () => {
        setId('');
        setfirstName('');
        setlastName('');
        setage('')
  };


  const  handleUpdate =(idToUpdate)=>{
    const entry ={
       "id" : id, 
       "fName" : firstName,
       "lName" : lastName,
       "age"   : age
    }
    setData((prev)=>{
       return [
         ...prev, 
         entry
       ]
    })
    handleClear()
}


  return (
    <div className="container">

      <div>
        <label>Id:
        <input type="text" value={id}  onChange={(e)=>{setId(e.target.value)}}  />
        </label>
      </div>
      <div>
        <label>FirstName:
        <input type="text" value = {firstName} onChange={(e)=>{setfirstName(e.target.value)}} />
        </label>
      </div>
      <div>
        <label>LastName:
        <input type="text"  value = {lastName} onChange={(e)=>{setlastName(e.target.value)}} />
        </label>
      </div>
      <div>
        <label>Age:
        <input type="text" value = {age} onChange={(e)=>{setage(e.target.value)}}  />   
        </label>
      </div>

      <button onClick={() => handleUpdate()}>Update</button>&nbsp;
      <button onClick={() => handleSave()}>Save</button>&nbsp;
      <button onClick={() => handleClear()}>Clear</button>

    
      <table>
        <thead>
          <tr>
            
            <td>Id</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{item.id}</td>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
  );
}

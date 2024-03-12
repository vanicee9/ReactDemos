"use client"
import React, { Fragment, useState } from 'react'

export default function Task() {
  const [text, setText]=useState("");
  function upper(){
    setText(text.toUpperCase())
  }
  function lower() {
    setText(text.toLowerCase())
  }
  return (
    
    <Fragment>
    <textarea name="text" id="" cols="30" rows="10" value={text} onChange={(event)=>{
      setText(event.target.value)
    }}></textarea>
<br></br>

     <button onClick={upper}>UPPERCASE</button>
     <button onClick={lower}>lowercases</button>

    </Fragment>
  )
}

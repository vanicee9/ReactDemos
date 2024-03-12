import React from 'react'



export default function Form() {
  return (
    <div className="form-div" style={{ display: "flex", flexDirection: "column", margin: "5% 20%" , justifyContent:"center", textAlign:"center", backgroundColor:"grey", width:"fit-content", padding:"20px"}}>
    <div>
    Id: <input type="number" id="id" />
  </div>
  <div>
    FirstName: <input type="text" id="firstName" />
  </div>
  <div>
    LastName: <input type="text" id="lastName" />
  </div>
  <div>
    Email: <input type="email" name="" id="" />
  </div>
  <div>
    <button>Submit</button>
    
  </div>
  
</div>

   
   
  )
}

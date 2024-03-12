// import Form from "./Form"


export default function Card({
  deleteCard, id , firstName, lastName, email, imageUrl, 
}) {
 
  return (
   
    
  <div className="Card"> 
    
    <div id="id">id:{id}</div>
    <div id="firstName">FirstName:  {firstName}</div> 
    <div id="lastName">lastName: {lastName}</div> 
    <div id="email">email: {email}</div> 
    <div id="image"><img src={imageUrl} alt="" /></div>
   <button id="update" onClick={()=>{}}>Update</button>
   <button id="Delete" onClick={()=>{deleteCard(id)}}>Delete</button>
   
  </div> 


  )
}

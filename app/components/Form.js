import React, { useEffect, useState } from "react";

export default function Form({card, updateChanges}) {

  // this has nothing to do with form element in html, form component, it just i gave an intituive name
  const [formObject, setFormObject] = useState({
    id: '',
    firstName : '',
    lastName: '',
    email: '',
  })


  useEffect(() => {
    if(card != undefined) {
      setFormObject({
        ...card
      })
    }
  },[card])


  function handler(event) {

    console.log(event.target);

    setFormObject((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }





  return (
    <div
      className="form-div"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5% 20%",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "grey",
        width: "fit-content",
        padding: "20px",
      }}
    >
      <div>
        Id:{" "}
        <input
          type="text"
          id="id"
          value={formObject.id}
          name = "id"
          onChange={handler}
        />
      </div>
      <div>
        FirstName:{" "}
        <input
          type="text"
          id="firstName"
          value={formObject.firstName}
          name = "firstName"
          onChange={handler}
        />
      </div>
      <div>
        LastName:{" "}
        <input
          type="text"
          id="lastName"
          value={formObject.lastName}
          name = "lastName"
          onChange={handler}
        />
      </div>
      <div>
        Email:{" "}
        <input
          type="email"
          id=""
          value={formObject.email}
          name = "email"
          onChange={handler}
        />
      </div>
      <div>
        <button
          onClick={() => {
            updateChanges(formObject)
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

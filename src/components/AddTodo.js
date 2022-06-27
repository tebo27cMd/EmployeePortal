import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddEmployee() {
  const [title, setTitle] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail]= React.useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== ""||lastName !==""||email !=="") {
      await addDoc(collection(db, "todos"), {
        title,
        lastName,
        email,
        completed: false,
      });
      setTitle("");
      setLastName("");
      setEmail("")
    }
  };
  return (
    
    <form onSubmit={handleSubmit}>
      
      <div className="input_container">
      <h1 className="title">employee</h1>
        <input
          type="text"
          placeholder="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <button className="btnAdd">Add</button>
      </div>
      <div >
      
      </div>
    </form>
  );
}

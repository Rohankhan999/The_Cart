import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
const Signup = () => {

  const navigate = useNavigate();
  const [Username, SetUsername] = useState("Enter your Name!")


  return (
    <div>
      <h1>Sign up </h1>
      <input type="text" value={Username} placeholder='Enter your username' onChange={(e) => SetUsername(e.target.value)}></input>
      <button onClick={() => { navigate("/login") , {state: { username}} }}>Navigate</button>
    </div>
  )
}

export default Signup

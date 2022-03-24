import React from 'react';

import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Login({ authenticate }) {

     const navigate = useNavigate();
     const { user } = useSelector((state) => state.todos);
console.log(user)
    const handleClick = () =>{
        console.log("hiuiyfuidh")
        authenticate()
        navigate("/addtodo");
        console.log("hiuiyfuidh")
    }
  return (
    <div>     
    <input type="text" placeholder="Enter name" />
    <button type="button" onClick={handleClick}>Login</button>
    </div>
  )
}

import React from "react";

import { useNavigate } from "react-router-dom";

export default function Login({ authenticate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    authenticate();
    navigate("/todolist");
  };
  return (
    <div>
      <input type="text" placeholder="Enter name" />
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}

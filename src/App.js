import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login'
import AddTodo from './components/AddTodo'

import {  LOGGEDIN } from './Reducer/todoSlice'

export default function App() {
   // const [user, setUser] =useState(null);
   const { logged_in } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
  <BrowserRouter>
  <Routes>
        {!logged_in && (<Route  path="/" element={<Login authenticate={() => {
           dispatch(LOGGEDIN({
             logged_in: true}));
         }}/>} />)}
         {logged_in&& (
         <Route  path="/addtodo" element={<AddTodo />} />)}
      
      <Route  path="*" element={<Navigate to= {logged_in ? "/addtodo" : "/"} />} />
  </Routes>
  </BrowserRouter>
  )
}

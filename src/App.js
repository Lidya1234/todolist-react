import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/Login'
import TodoApp from './components/TodoApp'

import {  LOGGEDIN } from './Reducer/todoSlice'

export default function App() {
   const { logged_in } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
  <BrowserRouter>
  <Routes>
        {!logged_in && (<Route  path="/" element={<Login authenticate={() => {
           dispatch(LOGGEDIN({
             logged_in: true}));
         }}/>} />)}
         {logged_in && (
         <Route  path="/todoapp" element={<TodoApp />} />)}
      
      <Route  path="*" element={<Navigate to= { logged_in ? "/todoapp" : "/"} />} />
  </Routes>
  </BrowserRouter>
  )
}

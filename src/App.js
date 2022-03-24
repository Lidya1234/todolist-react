import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login'
import AddTodo from './components/AddTodo'
import Denied from './components/Denied'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
         <Route  path="/" element={<Login />} />
      <Route  path="/denied" element={<Denied />} />
       
       <Route  path="/addtodo" element={<AddTodo />} />
      
     
  </Routes>
  </BrowserRouter>
  )
}

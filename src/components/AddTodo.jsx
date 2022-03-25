import React from 'react'
import {  useDispatch } from 'react-redux';
import { ADD_TODO } from '../Reducer/todoSlice';
import TodoList from './TodoList';

export default function AddTodo() {
    
    const dispatch = useDispatch();
//     let todo = "";
//  const handleChange = (e) =>{
//      todo = e.target.value
//  }
    const handleClick = (e) => {
      e.preventDefault();
    dispatch(ADD_TODO("todo"))
    }
  return (
    <div>     
    <input type="text" placeholder="Enter todo"  />
    <button type="button" onClick={handleClick}>Add Todo</button>
    <TodoList />
    </div>
  )
}
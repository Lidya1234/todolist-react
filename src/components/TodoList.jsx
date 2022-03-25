import React from 'react'
import { useSelector  } from 'react-redux';

 import TodoItem from './TodoItem';
 import '../style/style.css'
export default function TodoList() {
     const { todoList ,logged_in } = useSelector((state) => state.todos)
    console.log(todoList);
    console.log(logged_in);
  return (
    <div>
      
       <ul className='list'>
        {todoList.map((todo)=>(
        <TodoItem id= {todo.id} title={todo.title} completed={todo.completed}/>
        ))}</ul>
        {/* <AddTodo /> */}
        </div>
  )
}

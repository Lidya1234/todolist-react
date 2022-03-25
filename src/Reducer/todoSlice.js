import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList: [
  {
  id: 1,
  title: "shopping",
  completed: false
},
{
  id: 2,
  title: "shipping",
  completed: false
}
],
logged_in: false,
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
      ADD_TODO: (state, action) =>{
        const newtodo ={
          id: Date.now(),
          title: action.payload,
          completed: false
        }
        state.todoList.push(newtodo)  
      },
      LOGGEDIN: (state, action) =>{
        state.logged_in = action.payload  
    }
  }
});

export const {ADD_TODO,  LOGGEDIN} = todoSlice.actions

export default todoSlice.reducer
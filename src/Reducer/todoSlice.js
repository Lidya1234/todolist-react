import { createSlice } from '@reduxjs/toolkit'

const initialState = {
todoList: [],
logged_in: false,
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
      ADD_TODO: (state, action) =>{
          state.todoList.push(action.payload)  
      },
      LOGGEDIN: (state, action) =>{
        state.logged_in = action.payload  
    }
  }
});

export const {ADD_TODO,  LOGGEDIN} = todoSlice.actions

export default todoSlice.reducer
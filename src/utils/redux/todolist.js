import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const updatedItem = action.payload;
      const index = state.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state[index] = updatedItem;
      }
    },
    removeTask: (state, action) => {
      const todoId = action.payload;
      return state.filter((item) => item.id !== todoId);
    },
  },
});

export const { addTask, removeTask, updateTask } = todoListSlice.actions;

export default todoListSlice.reducer;

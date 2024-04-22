
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

import todoListReducer from "./todolist";
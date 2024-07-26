"use client"
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./Reducers/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

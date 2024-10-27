import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import counterReducer from '../redux/counterSlice';


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    user:userReducer
  },
})
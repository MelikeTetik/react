import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slice/appSlice'
import productReducer from '../redux/slice/productSlice'


export const store = configureStore({
  reducer: {
    app:appReducer,
    product:productReducer
  },
})


import { configureStore } from '@reduxjs/toolkit'
import doctors from './redux/doctors'

export const store = configureStore({
  reducer: {doctor:doctors},
})
import { configureStore } from '@reduxjs/toolkit'
import doctors from './redux/doctors'
import user from './redux/user'

export const store = configureStore({
  reducer: {doctor:doctors,user:user},
})
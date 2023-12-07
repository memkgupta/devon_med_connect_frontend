import { configureStore } from '@reduxjs/toolkit'
import doctors from './redux/doctors'
import user from './redux/user'
import appointment from './redux/appointment'

export const store = configureStore({
  reducer: {doctor:doctors,user:user,appointment:appointment},
})
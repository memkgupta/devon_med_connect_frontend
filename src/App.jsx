import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Doctors from './pages/Doctors'
import Doctor from './pages/Doctor'
import BookAppointment from './pages/BookAppointment'
import AppointmentForm from './components/forms/AppointmentForm'

import PatientReview from './components/forms/Review'
import Confirm from './components/Confirm'

function App() {


  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route element={<Home></Home>} path='/'></Route>
    <Route element={<Doctors></Doctors>} path='/doctors'></Route>
    <Route element={<Doctor></Doctor>} path='/doctor/:id'></Route>
    <Route element={<BookAppointment></BookAppointment>} path='/appointment/schedule/:id'>
      <Route path='form' element={<AppointmentForm/>}/>
      <Route path='review' element={<PatientReview/>}/>
      <Route path='confirm' element={<Confirm/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App

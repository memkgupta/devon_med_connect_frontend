import { useEffect, useState } from 'react'
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
import PatientWindow from './pages/PatientWindow'
import Room from './pages/Room'
import CreateRoom from './pages/CreateRoom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import DoctorRegistration from './components/forms/DoctorRegistration'
import { useDispatch } from 'react-redux'
import { loadUser, loadUserThunk } from './redux/user'
import Account from './pages/Account'
import { useToken } from './context/TokenProvider'
import Dashboard from './pages/Dashboard'

function App() {
const dispatch = useDispatch();

const [token,setToken]=useToken()
useEffect(()=>{
  console.log("Setting User")
if(token!=null){
  dispatch(loadUserThunk(token));
}

},[token]);
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route element={<Account/>} path='/me'></Route>
    <Route element={<Dashboard/>} path='/dashboard'></Route>
    <Route element={<Home></Home>} path='/'></Route>
    <Route element={<Doctors></Doctors>} path='/doctors'></Route>
    <Route element={<Doctor></Doctor>} path='/doctor/:id'></Route>
    <Route element={<BookAppointment></BookAppointment>} path='/appointment/schedule/:id'>
      <Route path='form' element={<AppointmentForm/>}/>
      <Route path='review' element={<PatientReview/>}/>
      <Route path='confirm' element={<Confirm/>}/>
    </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route element={<BookAppointment></BookAppointment>} path='/online-meeting/schedule/:id'>
      <Route path='form' element={<AppointmentForm/>}/>
      <Route path='review' element={<PatientReview/>}/>
      <Route path='confirm' element={<Confirm/>}/>
    </Route>
    <Route path='/window/:id' element={<PatientWindow/>}/>
    <Route path='/room/:id' element={<Room/>}/>
    <Route path='/create-room/' element={<CreateRoom/>}/>
    <Route path='/register/doctor' element={<DoctorRegistration/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App

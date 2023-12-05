import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useToken } from '../context/TokenProvider';
import { BASE_URL } from '../constants/global';
import axios from 'axios';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';

function Account() {
  const {user} = useSelector(state=>state.user);
  const [token,setToken]=useToken();
  const [appointments,setAppointments]=useState([]);
  const [patientWindows,setpatientWindows]=useState([{patient:{_id:"",name:""},window:{_id:"",doctor:""}}]);
  const navigate= useNavigate()
  const loadData = useCallback(async()=>{
    const [resAppointments,respatientWindows] = await Promise.all(
[axios.get(`${BASE_URL}/user/appointments`,{headers:{"Authorization":`${token}`}}),

axios.get(`${BASE_URL}/user/windows`,{headers:{"Authorization":token}})]

    )
    if(resAppointments.status!==200||respatientWindows.status!==200){
      toast("Some Error Occured While Loading the data");
    }
    else{
      setAppointments(resAppointments.data.appointments);
      setpatientWindows(respatientWindows.data.windows);
    }
  },[token]);

  useEffect(()=>{
    
   if(token){
loadData().then(()=>{
console.log(patientWindows)
});

   }
   else{
    navigate('/login')
   }
  },[token]);
  useEffect(()=>{
    if(user.isDoctor){
      navigate('/dashboard',{replace:true})
    }
  },[user])
  return (
    <div>
        <div className="container mx-auto my-8 p-8 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-semibold mb-4">User Account</h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-lg font-semibold">User Information</p>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
        </div>
       
      </div>
      <hr className="my-4" />
      <div className="flex justify-around">
      <div className='grid grid-cols-1 gap-y-3'>
        <p className="text-lg font-semibold mb-2">Your Appointments</p>
        {/* Display user's appointment history */}
        {appointments.map((appointment,index)=>{return(
 <Link to={`/appointment/${appointment._id}`} key={index} className="shadow-md rounded-md p-5 bg-white">
 <p className="text-xl font-bold text-black">{dayjs(appointment.date).toDate().toDateString()}</p>
</Link>
        )})}
       
      </div>
      {/* patientWindows */}
      <div className='grid grid-cols-1 gap-y-3'>
        <p className="text-lg font-semibold mb-2">Your Windows</p>
        {/* Display user's appointment history */}
        {patientWindows&&patientWindows.map((window_,index)=>{return(
 <div key={index} className="shadow-md rounded-md p-5 bg-white">
 <p className="text-xl font-bold text-black">{`Patient : ${window_.patient.name}`}</p>
 <p className="text-xl font-bold text-black">{`Doctor : ${window_.window.doctor.name}`}</p>
</div>
        )})}
       
      </div>
      </div>
     
    </div>
    </div>
  )
}

export default Account
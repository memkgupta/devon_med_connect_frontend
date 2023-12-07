import React, { useEffect, useState } from 'react'
import ProcessSteps from '../components/ProcessSteps'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function BookAppointment() {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [formData,setFormData] = useState();
    const [currentStep,setCurrentStep]=useState(1);
  const user = useSelector(state=>state.user);
    useEffect(()=>{
      if(user=={}){
navigate('/login');
      }
    },[user])
  return (
    <div>
        <ProcessSteps currentStep={currentStep}/>
        <Outlet context={{form:[formData,setFormData],step:[currentStep,setCurrentStep]}}/>
    </div>
  )
}

export default BookAppointment
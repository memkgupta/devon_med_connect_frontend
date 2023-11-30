import React, { useState } from 'react'
import ProcessSteps from '../components/ProcessSteps'
import { Outlet, useParams } from 'react-router-dom'

function BookAppointment() {
    const {id} = useParams();
    const [formData,setFormData] = useState();
    const [currentStep,setCurrentStep]=useState(1);
  return (
    <div>
        <ProcessSteps currentStep={currentStep}/>
        <Outlet context={{form:[formData,setFormData],step:[currentStep,setCurrentStep]}}/>
    </div>
  )
}

export default BookAppointment
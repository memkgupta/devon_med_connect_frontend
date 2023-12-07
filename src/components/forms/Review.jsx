import React, { useCallback, useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import appointment from '../../redux/appointment';
import { useSelector } from 'react-redux';

function PatientReview() {
  const [formData,setFormData] = useOutletContext().form;
  const [currentStep,setCurrentStep] = useOutletContext().step;
  const appointmentData = useSelector(state=>state.appointment) 
  const handleUpdateStep = useCallback(()=>{
  
    setCurrentStep(2);
  },[currentStep]);
  const timeSlotString = (string)=>{
    const obj = JSON.parse(string)
    return `${obj.startTime}-${obj.endTime}`
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(appointmentData.formData===null){
     
      navigate('../form',{replace:true});
    }
    else{
      setFormData(appointmentData.formData)
    }

handleUpdateStep();

  },[appointmentData])
  return (
    <>
    {formData&&<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6">Review Patient Information</h2>
    <div className="mb-4">
      <strong>Patient Name:</strong> {formData.patientName}
    </div>
    <div className="mb-4">
      <strong>Age:</strong> {formData.age}
    </div>
    <div className="mb-4">
      <strong>Contact:</strong> {formData.contact}
    </div>
    <div className="mb-4">
      <strong>ID Proof Type:</strong> {formData.idProofType}
    </div>
    <div className="mb-4">
      <strong>ID Proof No.:</strong> {formData.idProofNo}
    </div>
    <div className="mb-4">
      <strong>Date:</strong> {formData.date}
    </div>
    <div className="mb-4">
      <strong>Time Slot:</strong> {timeSlotString(formData.timeSlot)}
    </div>
    <div className="mb-4">
      <strong>Problem Description:</strong> {formData.problemDescription}
    </div>
    {formData.reports && (
      <div className="mb-4">
        <strong>Reports:</strong> {formData.reports.name}
      </div>
    )}
    <button className='ml-auto mr-auto bg-blue-500 text-white p-2' onClick={(e)=>{navigate('../confirm')}}>Next</button>
  </div>}
    </>

  )
}

export default PatientReview
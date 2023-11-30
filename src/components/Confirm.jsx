import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

function Confirm() {
    const [currentStep,setCurrentStep] = useOutletContext().step;
    useEffect(()=>{
setCurrentStep(4)
    },[])
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <h2 className="text-2xl font-bold mb-6">Appointment Confirmed</h2>
   
    <div className="text-center mt-6">
      <p className="text-green-500 font-semibold">Your Appointment has been confirmed</p>
      <p>Your order has been confirmed and invoice will be sent to registered email.Please Be At time</p>
    </div>
  </div>
  )
}

export default Confirm
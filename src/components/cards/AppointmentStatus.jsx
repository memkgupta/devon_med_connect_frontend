import React from 'react'

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons from react-icons
function AppointmentStatus({isSlotAvailable}) {
  console.log("slot",isSlotAvailable)
  return (
    <div className="flex items-center justify-center space-x-2">
      {isSlotAvailable ? (
        <>
          <FaCheckCircle className="text-green-500 text-2xl" />
          <p className="text-green-500">Yay! Slot is available.</p>
        </>
      ) : (
        <>
        {isSlotAvailable!=null?
    <>
      <FaTimesCircle className="text-red-500 text-2xl" />
          <p className="text-red-500">Sorry, doctor is busy. Try another slot.</p>
    </>    :  <p className="text-gray-500">Please Select An Slot</p>
    }
        </>
      )}
    </div>
  )
}

export default AppointmentStatus
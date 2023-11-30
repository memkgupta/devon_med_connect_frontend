import React, { useEffect, useState } from 'react'

function TimeSlotCard({id,setSlotAvailable,date}) {
    const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM']; // Add your time slots

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };
  useEffect(()=>{
    console.log(selectedTime);
    console.log(date);
    if(date!==null){
        setSlotAvailable((prev)=>(!prev));
    }
   
  },[selectedTime])
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
    <h2 className="text-xl font-bold mb-4">Select a Time Slot</h2>
    <div className="grid grid-cols-2 gap-4">
      {timeSlots.map((time) => (
        <div
          key={time}
          className={`p-2 border rounded-md cursor-pointer ${
            selectedTime === time ? 'bg-green-100  text-green-800' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleTimeSelection(time)}
        >
          {time}
        </div>
      ))}
    </div>
    <p className="mt-4">
      {selectedTime ? `Selected Time: ${selectedTime}` : 'No time selected'}
    </p>
  </div>
  )
}

export default TimeSlotCard
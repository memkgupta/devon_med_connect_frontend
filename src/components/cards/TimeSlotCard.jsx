import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/global';
import { toast } from 'react-toastify';
import { setTimeSlot } from '../../redux/appointment';
import { useDispatch } from 'react-redux';
function TimeSlotCard({id,setSlotAvailable,date,timeSlots}) {
    const [selectedTime, setSelectedTime] = useState(null);
  // const timeSlots = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM']; // Add your time slots
   const dispatch = useDispatch();
  const handleTimeSelection = (time) => {
    setSelectedTime(JSON.stringify(time));

  };
const isSlotAvailable = useCallback(async()=>{
  if(selectedTime!=null){
    const res = await axios.get(`${BASE_URL}/doctor/slot-availaible?`,{params:{
      date:date,
      slot:JSON.parse(selectedTime)._id,
      doctor:id
  
    }});
    console.log(res.data)
    if(res.status===200){
  return true;
    }
    else{
      toast("Some Error occured");
      return false;
    }
  }

},[selectedTime])

  useEffect(()=>{
    console.log(selectedTime);
    console.log(date);
    if(date!==null){
      
        isSlotAvailable().then((data)=>{
          if(data===true){
            dispatch(setTimeSlot(selectedTime));
          }
          setSlotAvailable(data)
        })
    }
   
  },[selectedTime,date])
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
    <h2 className="text-xl font-bold mb-4">Select a Time Slot</h2>
    <div className="grid grid-cols-2 gap-4">
      {timeSlots.map((time,index) => (
        <div
          key={index}
          className={`p-2 border rounded-md cursor-pointer ${
            selectedTime === JSON.stringify(time) ? 'bg-green-100  text-green-800' : 'hover:bg-gray-200'
          }`}
          onClick={() => handleTimeSelection(time)}
        >
          {time.startTime+'-'+time.endTime}
        </div>
      ))}
    </div>
    <p className="mt-4">
      {selectedTime ? `Selected Time: ${JSON.parse(selectedTime).startTime+'-'+JSON.parse(selectedTime).endTime}` : 'No time selected'}
    </p>
  </div>
  )
}

export default TimeSlotCard
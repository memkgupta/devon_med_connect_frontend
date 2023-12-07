import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaMapMarkerAlt,FaCalendar ,FaGraduationCap, FaStar, FaMoneyBillWave, FaStethoscope, FaCamera, FaRupeeSign } from 'react-icons/fa';
import Calendar from '../components/Calendar';
import TimeSlotCard from '../components/cards/TimeSlotCard';
import AppointmentStatus from '../components/cards/AppointmentStatus';
import dayjs from 'dayjs';
import RatingsAndReviews from '../components/RatingsAndReviews';
import axios from 'axios';
import { BASE_URL } from '../constants/global';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {setDate,setTimeSlot} from '../redux/appointment';
function Doctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAppointmentSlotAvailaible,setIsAppointmentSlotAvailaible] = useState(null);
  const [isOnlineSlotAvailaible,setIsOnlineSlotAvailaible] = useState(null);
  const [selectedOnlineDate,setSelectedOnlineDate]=useState(null);
  const [selectedAppointmentDate,setSelectedAppointmentDate]=useState(null);

      const [doc,setDoc] = useState(null);
  const {id} = useParams();
  const loadDoc = useCallback(async()=>{
    const res = await axios.get(`${BASE_URL}/doctor/${id}`);
    const data = res.data;
    if(res.status===200){
setDoc(data.doctor)
    }
    else{
toast("Doctor Not Found")
    }
  },[id]);
  useEffect(()=>{
   loadDoc();
  },[]);
  const handleBookClick=(e,type)=>{
    if(type==='online-meet'){
dispatch(setDate(selectedOnlineDate));
    }
    else{
      dispatch(setDate(selectedAppointmentDate));
     
    }
    
    navigate(`/${type}/schedule/${id}/form`)
  }
  const handleSlotChecker = async()=>{

  }
      return (

    doc? (
        <div className='p-5'>
          <ToastContainer/>
    <div className='flex'>
            
          
            <img src={doc.images[0].url} alt="" className='w-3/6 rounded-lg'  />
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="https://placekitten.com/200/200" // Replace with the actual profile image URL
          alt="Doctor Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{doc.name.startsWith('Dr.')?doc.name:'Dr. '+doc.name}</h2>
          <p className="text-gray-500">{doc.specialization}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="inline-block mr-2" />
          {doc.streetAddress}, {doc.city}
        </p>
        <p className="flex items-center text-gray-700">
          <FaStar className="inline-block mr-2" />
          Reviews: {doc.ratings} ({doc.reviews.length})
        </p>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaMoneyBillWave className="inline-block mr-2" />
          Consultation Fee: <FaRupeeSign /> {doc.fees}
        </p>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaStethoscope className="inline-block mr-2" />
          Specialization: Cardiology
        </p>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaGraduationCap className="inline-block mr-2" />
          Qualifications: {doc.qualifications?.map((qualification,index)=>(<p key={index}>{qualification.title}</p>))}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">About Dr. John Doe</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget urna augue. Sed
          tristique eros vitae ligula fermentum, eu convallis lacus placerat. In hac habitasse
          platea dictumst.
        </p>
      </div>
    </div>
    </div>
    <div className="flex mt-5 justify-around">


    </div>
  {/* Checking slots for appointment */}
  <p className="my-12 text-lg font-bold">Check Slot Availaibality for Appointment</p>
<div id="slot_checker" className='flex justify-around mt-12'>

<Calendar setdate={setSelectedAppointmentDate}/>

<TimeSlotCard id={id} timeSlots={doc.appointmentTimeSlots} date={selectedAppointmentDate} setSlotAvailable={setIsAppointmentSlotAvailaible}/>
<div className="grid gap-y-2">
<AppointmentStatus isSlotAvailable={isAppointmentSlotAvailaible}/>
<button onClick={(e)=>{handleBookClick(e,'appointment')}} disabled={!isAppointmentSlotAvailaible}  className='bg-blue-700 p-2 rounded-md h-10 text-white flex items-center'><FaCalendar className='mx-2 mt-1'/> Book An Appointment</button>
</div>

</div>
{/* Online Slot Checker */}
<p className="my-12 text-lg font-bold">Check Slot Availaibality for Online Meeting</p>
<div id="slot_checker" className='flex justify-around mt-12'>

<Calendar setdate={setSelectedOnlineDate} />
<TimeSlotCard id={id} date={selectedOnlineDate} timeSlots={doc.onlineMeetTimeSlots} setSlotAvailable={setIsOnlineSlotAvailaible}/>
<div className="grid gap-y-2">
<AppointmentStatus isSlotAvailable={isOnlineSlotAvailaible}/>
<button onClick={(e)=>{handleBookClick(e,'online-meet')}} disabled={!isOnlineSlotAvailaible}  className='bg-blue-700 p-2 rounded-md h-10 text-white flex items-center'><GoDeviceCameraVideo className='mx-2 mt-1'/>Schedule An Online Meeting</button>
</div>
</div>

{/* Ratings And Reviews */}
{/* <div className="flex justify-center items-center mt-5">
      <RatingsAndReviews />
    </div> */}
</div>
    ):<p className='mt-12 text-2xl font-bold'>Loading</p>

  )
}

export default Doctor
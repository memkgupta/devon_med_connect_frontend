import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaMapMarkerAlt,FaCalendar ,FaGraduationCap, FaStar, FaMoneyBillWave, FaStethoscope, FaCamera } from 'react-icons/fa';
import Calendar from '../components/Calendar';
import TimeSlotCard from '../components/cards/TimeSlotCard';
import AppointmentStatus from '../components/cards/AppointmentStatus';
import dayjs from 'dayjs';
import RatingsAndReviews from '../components/RatingsAndReviews';
function Doctor() {
  const navigate = useNavigate();
  const [isAppointmentSlotAvailaible,setIsAppointmentSlotAvailaible] = useState(null);
  const [isOnlineSlotAvailaible,setIsOnlineSlotAvailaible] = useState(null);
  const [selectedOnlineDate,setSelectedOnlineDate]=useState(null);
  const [selectedAppointmentDate,setSelectedAppointmentDate]=useState(null);
    const [docs,setDocs]=useState([{
        id: "doc01",
        name: "Dr. John Smith",
        imageUrl: "../src/assets/doc.jpg",
        specialization: "General Physician",
        rating: 4.5,
        description: "Experienced general physician with a focus on preventive care.",
        address: "123 Medical Street, Cityville",
        isRecommended:true
      },
      {
        id: "doc02",
        name: "Dr. Emily Johnson",
        imageUrl: "../src/assets/doc.jpg",
        specialization: "Dermatologist",
        rating: 4.8,
        description: "Skilled dermatologist providing personalized skincare solutions.",
        address: "456 Dermatology Avenue, Townsville",
        isRecommended:false
      },
      {
        id: "doc03",
        name: "Dr. Michael Brown",
        imageUrl: "../src/assets/doc.jpg",
        specialization: "Cardiologist",
        rating: 4.2,
        description: "Cardiologist dedicated to heart health and cardiovascular care.",
        address: "789 Cardiology Lane, Heartsville",
        isRecommended:false
      },]);
      const [doc,setDoc] = useState(null);
  const {id} = useParams();
  useEffect(()=>{
    setDoc(docs.filter((d)=>(d.id===id))[0]);
    console.log(docs.filter((d)=>(d.id===id)))
  },[]);
  const handleSlotChecker = async()=>{

  }
      return (

    doc&& (
        <div className='p-5'>
    <div className='flex'>
            
          
            <img src={doc.imageUrl} alt="" className='w-3/6 rounded-lg'  />
            
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <img
          src="https://placekitten.com/200/200" // Replace with the actual profile image URL
          alt="Doctor Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">Dr. John Doe</h2>
          <p className="text-gray-500">Cardiologist</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="inline-block mr-2" />
          123 Medical Street, Cityville
        </p>
        <p className="flex items-center text-gray-700">
          <FaStar className="inline-block mr-2" />
          Reviews: 4.5 (120 reviews)
        </p>
      </div>

      <div className="mb-4">
        <p className="flex items-center text-gray-700">
          <FaMoneyBillWave className="inline-block mr-2" />
          Consultation Fee: $100
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
          Qualifications: MBBS, MD (Cardiology), Fellowship in Cardiac Imaging
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

<TimeSlotCard id={id} date={selectedAppointmentDate} setSlotAvailable={setIsAppointmentSlotAvailaible}/>
<div className="grid gap-y-2">
<AppointmentStatus isSlotAvailable={isAppointmentSlotAvailaible}/>
<button onClick={(e)=>{navigate(`/appointment/schedule/${id}/form`)}} disabled={!isAppointmentSlotAvailaible}  className='bg-blue-700 p-2 rounded-md h-10 text-white flex items-center'><FaCalendar className='mx-2 mt-1'/> Book An Appointment</button>
</div>

</div>
{/* Online Slot Checker */}
<p className="my-12 text-lg font-bold">Check Slot Availaibality for Online Meeting</p>
<div id="slot_checker" className='flex justify-around mt-12'>

<Calendar setdate={setSelectedOnlineDate} />
<TimeSlotCard id={id} date={selectedOnlineDate} setSlotAvailable={setIsOnlineSlotAvailaible}/>
<div className="grid gap-y-2">
<AppointmentStatus isSlotAvailable={isOnlineSlotAvailaible}/>
<button onClick={(e)=>{navigate(`/online-meeting/schedule/${id}/form`)}} disabled={!isOnlineSlotAvailaible}  className='bg-blue-700 p-2 rounded-md h-10 text-white flex items-center'><GoDeviceCameraVideo className='mx-2 mt-1'/>Schedule An Online Meeting</button>
</div>
</div>

{/* Ratings And Reviews */}
{/* <div className="flex justify-center items-center mt-5">
      <RatingsAndReviews />
    </div> */}
</div>
    )

  )
}

export default Doctor
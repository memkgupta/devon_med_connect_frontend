import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaMapMarkerAlt,FaCalendar ,FaGraduationCap, FaStar, FaMoneyBillWave, FaStethoscope } from 'react-icons/fa';
function Doctor() {
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
  },[])
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
<Link className='bg-blue-700 p-2 rounded-md text-white flex items-center' to={`/online-meeting/schedule/${id}`}><GoDeviceCameraVideo className='mx-2 mt-1'/> Schedule A Online Meeting</Link>
<Link className='bg-blue-700 p-2 rounded-md text-white flex items-center' to={`/appointment/schedule/${id}`}><FaCalendar className='mx-2 mt-1'/> Book An Appointment</Link>

    </div>
</div>
    )

  )
}

export default Doctor
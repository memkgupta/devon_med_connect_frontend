import React from 'react'
import { Link } from 'react-router-dom';

function Doctor({doctor}) {
    const { id, name, imageUrl, specialization, rating, description, address,isRecommended } = doctor;
  return (
    <Link to={`/doctor/${id}`}>
       <div className=" mx-8 rounded-md bg-white rounded-xl overflow-hidden shadow-md shadow-gray-200 my-5 flex items-center">
   <div className="w-2/6 relative">
   <img className=" h-full object-cover" src={imageUrl} alt={`Doctor ${name}`} />
  {isRecommended&& <span className="z-40 absolute top-0 left-0 bg-blue-500 text-white py-1 px-2 rounded-full text-xs">
        Recommended
      </span>}
   </div>
    <div className=" p-6 grid place-content-center">
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-4">{specialization}</p>
      <div className="flex justify-center items-center mb-4">
        <span className="text-yellow-500 flex ">
          {/* Assuming rating is out of 5 */}
          {[...Array(Math.round(rating))].map((_, index) => (
            <svg
              key={index}
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0l2.5 7.5H20l-5 5 1.5 7.5L10 15l-7.5 5L5 12.5 0 10h7.5L10 0z"
              />
            </svg>
          ))}
        </span>
        <span className="text-gray-600 ml-2">{rating.toFixed(1)}</span>
      </div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <p className="text-gray-600 text-sm">{address}</p>
    </div>
    {/* Button Group */}
    <div className="grow grid content-center place-content-center gap-y-2">
        <button className='bg-blue-700 p-2 rounded-md text-white' style={{maxWidth:'fit-content'}}>Book And Appointment</button>
        <button className='bg-blue-700 p-2 rounded-md text-white' style={{maxWidth:'fit-content'}}>Have A Online Meeting</button>
    </div>
  </div>
    </Link>
 
  )
}

export default Doctor
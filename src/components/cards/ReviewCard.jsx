import React from 'react'
import { FaStar } from 'react-icons/fa';
function ReviewCard({ rating, reviewText, reviewerName }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4" style={{minWidth:'250px'}}>
    <div className="flex items-center mb-2">
      <FaStar className="text-yellow-500 mr-1" />
      <span className="font-bold">{rating}</span>
    </div>
    <p className="text-gray-700 mb-2">{reviewText}</p>
    <p className="text-gray-500">- {reviewerName}</p>
  </div>
  )
}

export default ReviewCard
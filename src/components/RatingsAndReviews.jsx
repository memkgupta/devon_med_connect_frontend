import React from 'react'
import ReviewCard from './cards/ReviewCard';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function RatingsAndReviews() {
    const reviews = [
        { id: 1, rating: 4.5, reviewText: 'Great doctor, very knowledgeable!', reviewerName: 'John Doe' },
        { id: 2, rating: 5, reviewText: 'Excellent service and friendly staff.', reviewerName: 'Jane Smith' },
        { id: 3, rating: 4.5, reviewText: 'Great doctor, very knowledgeable!', reviewerName: 'John Doe' },
        { id: 4, rating: 5, reviewText: 'Excellent service and friendly staff.', reviewerName: 'Jane Smith' },
        // Add more reviews as needed
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };
  return (
<div className="max-w-2xl mx-auto mt-8 relative">
      <FaChevronLeft className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer" onClick={handlePrev} />
      <FaChevronRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl cursor-pointer" onClick={handleNext} />
      <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-${currentIndex * 100}%]" style={{maxWidth:'500px',overflow:'hidden'}}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            rating={review.rating}
            reviewText={review.reviewText}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </div>
  )
}

export default RatingsAndReviews
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const normalizedRating = Math.max(1, Math.min(10, rating));
  const fullStars = Math.min(Math.floor(normalizedRating / 2), 5);
  const hasHalfStar = normalizedRating % 2 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center">
      {Array.from({ length: fullStars }, (_, i) => (
        <FaStar key={i} className="text-yellow-500 mr-1" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 mr-1" />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <FaRegStar key={fullStars + i} className="text-yellow-300 mr-1" />
      ))}
    </div>
  );
};

export default Rating;

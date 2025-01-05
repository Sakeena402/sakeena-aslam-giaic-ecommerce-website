import React from "react";

interface ReviewCardProps {
  name: string;
  date: string;
  comment: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, comment, rating }) => {
  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-2xl ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        >
          &#9733;
        </span>
      );
    }
    return stars; // Ensure stars array is returned
  };

  return (
    <div className="p-4 border rounded-lg">
      {/* Name and Date Section */}
        {/* Star Ratings */}
        <div className="text-yellow-400">{renderStars(rating)}</div>
      <div className="flex items-center justify-between mb-2">
        
        <h3 className="font-bold">{name}</h3>
        
      </div>
      
      {/* Comment Section */}
      <p className="text-gray-600 mb-2">{comment}</p>
   <span className="text-gray-400 text-sm">Posted On {date}</span>
    
    </div>
  );
};

export default ReviewCard;

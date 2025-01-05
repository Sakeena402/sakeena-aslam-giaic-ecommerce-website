import React from "react";
import ReviewCard from "./ReviewCard";


interface RatingReviewsProps {
  reviews: {
    name: string;
    date: string;
    comment: string;
    rating: number;
  }[];
}

const RatingReviews: React.FC<RatingReviewsProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Rating & Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
          
        ))}
      </div>
    </div>
  );
};

export default RatingReviews;

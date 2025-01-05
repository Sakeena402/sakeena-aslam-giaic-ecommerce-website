import React from 'react';

type FeedbackCardProps = {
  rating: number;
  customerName: string;
  review: string;
   
};

const FeedbackCard: React.FC<FeedbackCardProps> = ({ rating, customerName, review }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-2xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="w-52 sm:w-60 md:w-72 lg:w-96 h-52 md:h-64 bg-white rounded-2xl p-6 flex flex-col space-y-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Rating and customer name */}
      <div className="flex flex-col space-y-2 ">
        <div className="flex space-x-2">{renderStars(rating)}</div>
        <p className="font-semibold text-lg text-left text-gray-800">{customerName}</p>
      </div>

      {/* Review text */}
      <p className="text-gray-500 font-light text-[0.5rem]  sm:text-sm ">{review}</p>
    </div>
  );
};

export default FeedbackCard;

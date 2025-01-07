import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import FeedbackCard from "./FeedbackCard";

import { reviews } from '@/data/products';

interface Review {
  rating: number;
  customerName: string;
  review: string;
}

export function CustomerFeedbackCarousel() {
  return (
    <div className="flex flex-col p-0 m-0 overflow-hidden w-full  bg-white">
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter leading-tight text-start mb-4">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="w-full max-w-6xl   px-2 py-8 relative  "> {/* Center the carousel */}
        <Carousel opts={{ align: "start" }} className="w-full  flex overflow-x-hidden sm:space-x-4 space-x-2">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="flex-shrink-0">
                <FeedbackCard
                  rating={review.rating}
                  customerName={review.customerName}
                  review={review.review}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full" />
        </Carousel>
      </div>
    </div>
  );
}
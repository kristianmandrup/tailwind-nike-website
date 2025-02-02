import React from "react";
import { reviews } from "../constants";
import { ReviewCard } from "../components";

export const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-4xl font-bold text-center font-palanquin">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="max-w-lg m-auto mt-4 text-center info-text">
        Hear genuine stories from our satisfied customers
      </p>
      <div className="flex items-center flex-1 mt-16 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

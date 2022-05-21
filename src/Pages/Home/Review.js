import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.description}</p>
        <div className="flex items-center">
          <div className="mr-5 w-16">
            <img src={review.img} alt="" />
          </div>
          <div>
            <h2 className="card-title text-xl">{review.name}</h2>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

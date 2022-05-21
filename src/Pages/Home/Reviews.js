import React from "react";
import Review from "./Review";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: 'california'
    },
    {
      _id: 2,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: 'california'
    },
    {
      _id: 3,
      name: "Winson Herry",
      description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: 'california'
    },
  ];
  return (
    <div className="my-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-secondary font-bold">Testimonial</h4>
          <h1 className="text-3xl">What Our Patient Says</h1>
        </div>
        <div>
          <img src={quote} alt="" />
        </div>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <Review key={review._id} 
          review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

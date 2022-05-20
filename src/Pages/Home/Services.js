import React from "react";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from "./Service";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "",
            img: whitening
        }
    ];
  return (
    <div class="pt-12">
      <div class="text-center">
        <p class=" font-bold text-secondary uppercase">
          Our Services
        </p>
        <h1 class="text-3xl">Services We Provide</h1>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
          services.map(service => <Service
          key={service._id}
          service={service}
          ></Service>)
      }
      </div>
    </div>
  );
};

export default Services;

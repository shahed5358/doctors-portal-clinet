import React from "react";

const Service = ({ service, setTreatment }) => {
    const {name, slots} = service;
  return (
    <div className="card lg:max-w-lg shadow-xl text-primary-content my-12">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>{slots.length ? <span>{slots[0]}</span> : <span className="text-red-500">Try another date</span>}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-action">
          <label 
           htmlFor="booking-modal"
           disabled={slots.length === 0}
           onClick= {() => setTreatment(service)}
           className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
           >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;

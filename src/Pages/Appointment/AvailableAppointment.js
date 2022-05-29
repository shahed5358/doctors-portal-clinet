import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({date}) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h4 className="text-secondary ">
          Available Appointment On {format(date, "PP")}
        </h4>
        <p className="text-gray">Please select a Service</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service 
          key={service._id} 
          service={service} 
          setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && <BookingModal 
      date={date} 
      treatment={treatment}
      setTreatment={setTreatment}
      ></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;

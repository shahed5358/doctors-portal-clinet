import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="text-center">
        <p className=" font-bold text-secondary">Contact Us</p>
        <h1 className="text-3xl text-white">Stay Connected With Us</h1>
        <div className="inline-block">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-sm w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-sm w-full max-w-xs m-3"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="input input-bordered input-lg w-full max-w-xs m-3"
          />
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

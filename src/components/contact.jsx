import React from "react";

const contact = () => {
  return (
    <div className="p-10" id="contact">
      <h1 className="text-center text-5xl font-extrabold text-blue-600">
        Contact Us
      </h1>
      <div className="flex items-center justify-centerp-10 flex-wrap">
        <div className="sm:w-full lg:w-1/2 flex justify-center items-center flex-col">
          <div className="text-2xl">
            Reach out to us for any queries or feedback.
            <br />
            We are here to help you.
          </div>
          <div className="m-5 flex gap-5">
            <i class="fa-solid fa-phone fa-2x text-blue-600"></i>
            <i class="fa-solid fa-envelope fa-2x text-blue-600"></i>
            <i class="fa-solid fa-map-marker fa-2x text-blue-600"></i>
          </div>
        </div>
        <div className="sm:w-full lg:w-1/2 justify-center items-start sm:pl-0 md:pl-32 flex flex-col">
          <h1 className="font-bold m-5 text-3xl">Get In Touch</h1>
          <div className="flex gap-5">
            <i class="fa-solid fa-phone text-blue-600"></i>
            <span>Phone: 123-456-7890</span>
          </div>
          <div className="flex gap-5">
            <i class="fa-solid fa-map-marker text-blue-600"></i>
            <span>Address:Baby monitoring system,srikakulam</span>
          </div>
          <div className="flex gap-5">
            <i class="fa-solid fa-envelope text-blue-600"></i>
            <span>Email:Babymonitoringservice@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

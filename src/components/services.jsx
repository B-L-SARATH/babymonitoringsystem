import React from "react";
import Service from "./service";
const services = () => {
  return (
    <div className="p-10" id="services">
      <h1 className="mb-10 text-center text-5xl font-extrabold text-blue-600">
        {" "}
        Our Services
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        <Service
          name="Smart Craddle Device"
          description="Device that monitors craddles and sends alerts"
          image="fa-brands fa-product-hunt fa-2x"
        />
        <Service
          name="Vaccination Reminder"
          description="Reminds parents about vaccination schedules"
          image="fa-solid fa-bell fa-2x"
        />
        <Service
          name="Disease information"
          description="Information about common diseases affecting infants"
          image="fa-solid fa-info-circle fa-2x"
        />
      </div>
    </div>
  );
};

export default services;

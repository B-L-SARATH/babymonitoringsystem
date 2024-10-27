import React from "react";
import Aboutimg from "../assets/about.jpg";
const about = () => {
  return (
    <div id="about">
      <h1 className="m-5 text-center text-5xl font-extrabold text-blue-600">
        About us
      </h1>
      <div className="flex flex-wrap items-center justify-between p-10">
        <div className="flex items-center justify-center rounded-lg sm:w-full md:w-1/2">
          <img className="w-5/6 rounded-lg" src={Aboutimg} />
        </div>
        <div className="p-5 font-semibold sm:w-full lg:w-1/2">
          our webiste is a comprehensive resource for parents and caregivers,
          focusing on infant health and wellness. It will feature sections on
          common diseases affecting infants, such as colic, respiratory
          infections, diarrhea, and jaundice, providing detailed information on
          their symptoms, required nutrients, and preventative measures to help
          manage these conditions effectively. Additionally, the webpage will
          include a vaccination schedule, offering timely reminders for
          essential vaccinations recommended for infants under one year. This
          feature ensures parents stay informed and up-to-date with important
          immunizations, contributing to infants health and development.This
          aims to be a reliable support tool for new parents, helping them
          navigate their infants early health needs confidently.
        </div>
      </div>
    </div>
  );
};

export default about;

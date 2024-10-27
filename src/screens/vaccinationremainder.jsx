import React from "react";
import RemainderImage from "../assets/remainder.jpg";
const vaccinationremainder = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-5xl text-blue-600 font-extrabold ">
        {" "}
        Vaccination Remainder
      </h1>
      <div className="w-full flex justify-around items-center p-10 gap-5 flex-wrap-reverse">
        <div className="sm:w-full md:w-2/5 p-10 flex flex-col gap-5 ">
          <h1 className="font-bold text-3xl">Get Vaccination Remainder</h1>
          <p className="font-light">
            Subscribe to our vaccination remainder service and get notified when
            your baby needs vaccination.
          </p>
          <button className="bg-blue-600 rounded-lg p-3 w-72 text-white font-bold">Subscribe</button>
        </div>
        <div className="sm:w-full md:w-1/2">
          <img src={RemainderImage} alt="" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default vaccinationremainder;

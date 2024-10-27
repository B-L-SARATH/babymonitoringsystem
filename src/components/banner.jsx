import React from "react";
import bannerImage from "../assets/banner.jpg";
import { Link } from "react-router-dom";
const banner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center border-yellow-900 sm:p-0 md:p-16 text-blue-600 flex-wrap-reverse">
      <div className="flex flex-col sm:w-full md:w-1/2 justify-center items-center  gap-10">
        <h1 className="text-center font-extrabold sm:text-6xl md:text-5xl">
          Monitor. Comfort. Protect. <br /> The Future of Baby Care Starts Here
        </h1>

        <Link
          className="rounded-full bg-blue-600 p-3 font-extrabold w-64 text-white text-center"
          to="/dashboard"
        >
          Explore now
        </Link>
      </div>
      <div className="flex justify-center items-center sm:w-full md:w-1/2">
        <img src={bannerImage} alt="baby image" />
      </div>
    </div>
  );
};

export default banner;

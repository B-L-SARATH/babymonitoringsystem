import React from "react";
import { Link } from "react-router-dom";
const dashboardcard = ({ name, path }) => {
  return (
    <div className="flex  flex-col  justify-center items-center p-10 text-white  h-32 w-80 bg-blue-600 rounded-xl gap-5 m-5">
      <h1 className="text-center font-extrabold">{name}</h1>
      <Link to={path}>
        <i class="fa-solid fa-location-arrow fa-2x"></i>
      </Link>
    </div>
  );
};

export default dashboardcard;

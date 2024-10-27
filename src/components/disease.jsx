import React from "react";
import { Link } from "react-router-dom";
const disease = ({ name, img }) => {
  return (
    <div className="w-72 rounded-lg  shadow-blue-600 shadow p-3 justify-center items-center flex flex-col gap-3">
      <img src={img} alt="" className=" max-h-32" />
      <h1 className="font-bold ">{name}</h1>
      <Link
        className="bg-blue-600 text-center rounded-lg w-48 p-3 text-white font-bold"
        to={`${name}`}
      >
        Visit
      </Link>
    </div>
  );
};

export default disease;

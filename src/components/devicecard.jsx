import React from "react";
import { Link } from "react-router-dom";
const devicecard = ({ id, name }) => {
  return (
    <div className="bg-blue-600 rounded-xl p-5 w-64 h-32 flex flex-col justify-center items-center m-5 gap-2 ">
      <h1 className="text-white font-extrabold">{id}</h1>
      <h1 className="text-white font-semibold">{name}</h1>
      <Link className="bg-white p-2 rounded-lg">Manage</Link>

    </div>
  );
};

export default devicecard;

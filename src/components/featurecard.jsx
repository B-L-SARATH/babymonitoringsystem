import React from "react";

const featurecard = ({ feature }) => {
  return (
    <div className="bg-blue-600 text-white rounded-xl w-72 h-20 p-10 flex justify-center items-center m-10 text-center font-semibold">
      {feature}
    </div>
  );
};

export default featurecard;

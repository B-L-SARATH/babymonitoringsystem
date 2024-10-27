import React from "react";

const service = ({ name, description, image }) => {
  return (
    <div className="m-10 flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-blue-600 p-6 text-white">
      <p className="m-2 text-white">
        <i class={image}></i>
      </p>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="mt-2 text-center font-extralight">{description}</p>
    </div>
  );
};

export default service;

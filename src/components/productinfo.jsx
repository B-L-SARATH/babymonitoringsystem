import React from "react";
import Service from "./service";
import FeatureCard from "./featurecard";
const productinfo = () => {
  return (
    <div className="p-10">
      <h1 className="mb-10 text-center text-5xl font-extrabold text-blue-600">
        {" "}
        Our Product Features
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        <FeatureCard feature="Automatic swinging of cradle  " />
        <FeatureCard feature="detects the wetness of baby mattress" />
        <FeatureCard feature="Notifies when baby cries" />
      </div>
    </div>
  );
};

export default productinfo;

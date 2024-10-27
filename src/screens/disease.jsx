import React from "react";
import { diseases } from "../assets/diseases";
import { useParams } from "react-router-dom";
const disease = () => {
  const { name } = useParams();
  const disease = diseases.find((disease) => disease.name == name);
  console.log(name);
  console.log(disease);

  return (
    <div>
      <h1 className="text-blue-600 text-center font-extrabold text-5xl">
        {disease.name}
      </h1>
      <div className="flex justify-around items-center flex-wrap-reverse p-20">
        <div className="sm:w-full md:w-1/2 flex flex-col justify-center items-center">
          <p>{disease.description}</p>
        </div>
        <div className="sm:w-full md:w-1/2 flex justify-center itemse-center">
          <img src={disease.img} alt="" />
        </div>
      </div>

      <div className="flex justify-around gap-4 flex-wrap sm:p-3 md:p-0">
        <div className="flex flex-col sm:full md:w-1/3  ">
          <h1 className="bg-blue-600 rounded-lg text-center p-2 ">
            {" "}
            Symptoms{" "}
          </h1>

          <div className="sm:w-full flex flex-wrap p-3 items-center justify-center">
            {disease.symptoms.map((symptom) => (
              <span className="shadow shadow-blue-600 p-2 rounded-lg m-2">
                {symptom}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:full md:w-1/3 ">
          <h1 className="bg-blue-600 rounded-lg text-center p-2 ">
            Precautions
          </h1>

          <div className=" flex flex-wrap justify-center items-center">
            {disease.precautions.map((precaution) => (
              <span className="shadow shadow-blue-600 p-2 rounded-lg m-2">
                {precaution}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:full md:w-1/3 ">
          <h1 className="bg-blue-600 rounded-lg text-center p-2 ">Nutrients</h1>
          <div className=" flex flex-wrap justify-center items-center">
            {disease.nutriens.map((nutrient) => (
              <span className="shadow shadow-blue-600 p-2 rounded-lg m-2">
                {nutrient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default disease;

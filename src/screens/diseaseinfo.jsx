import React, { useState } from "react";
import { diseases } from "../assets/diseases.jsx";
import Disease from "../components/disease";

const diseaseinfo = () => {
  const [searchvalue, setSearchValue] = useState("");

  return (
    <div className="p-10">
      <h1 className="text-center text-blue-600 font-extrabold text-5xl">
        Baby disease info
      </h1>
      <div className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Search the disease"
          className="w-72 border-3 text-center m-5  shadow shadow-blue-600 rounded-lg p-3 outline-blue-600"
          value={searchvalue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center gap-10 p-10 flex-wrap">
        {searchvalue.length > 0 ? (
          diseases.filter((disease) =>
            disease.name.toLowerCase().includes(searchvalue.toLowerCase())
          ).length > 0 ? (
            diseases
              .filter((disease) =>
                disease.name.toLowerCase().includes(searchvalue.toLowerCase())
              )
              .map((disease) => (
                <Disease
                  key={disease.id}
                  name={disease.name}
                  img={disease.img}
                />
              ))
          ) : (
            <h1 className="text-red-600 font-bold text-2xl">
              No disease found
            </h1>
          )
        ) : (
          diseases.map((disease) => (
            <Disease key={disease.id} name={disease.name} img={disease.img} />
          ))
        )}
      </div>
    </div>
  );
};

export default diseaseinfo;

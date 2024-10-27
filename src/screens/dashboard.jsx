import React from "react";
import dashboardImage from "../assets/dashboard.jpg";
import DashboardCard from "../components/dashboardcard";
const dashboard = () => {
  return (
    <div>
      <h1 className="text-blue-600 text-center text-5xl font-extrabold mt-5">
        Welcome to the Dashboard
      </h1>

      <div className="flex justify-center items-center p-10 flex-wrap-reverse">
        <div className="sm:w-full md:w-1/2 flex justify-center items-center flex-wrap">
          <DashboardCard name="Diseases INFO" path="/diseaseinfo" />
          <DashboardCard
            name="Vaccination Remainder"
            path="/vaccinationremainder"
          />
          <DashboardCard name="Smart Craddle" path="/smartcraddle" />
        </div>
        <div className="w-1/2">
          <img src={dashboardImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default dashboard;

import React, { useState } from "react";
import DeviceCard from "../components/devicecard";
import { Link } from "react-router-dom";
const smartcraddle = () => {
  const [devices, setDevices] = useState([
    { id: 12345, name: "Device 1" },
    { id: 233502, name: "Device 2" },
  ]);
  return (
    <div>
      <h1 className="text-blue-600 text-center font-extrabold text-5xl">
        smart craddle
      </h1>
      <div className="mt-10 p-10">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <h1 className="text-blue-600 font-bold text-3xl">
            Mangage Your Devices
          </h1>
          <Link
            to="/adddevice"
            className="bg-blue-600 rounded-xl text-white w-32 h-12 text-center p-3"
          >
            Add Device
          </Link>
        </div>
        {devices.length === 0 ? (
          <h1>No Devices Found</h1>
        ) : (
          <div className="flex justify-center items-center p-5 flex-wrap">
            {devices.map((device) => (
              <DeviceCard name={device.name} id={device.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default smartcraddle;

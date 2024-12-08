import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [captainData, setCaptainData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(captainData)
    setLoading(false);
  }

  return (
    <div className="p-10 flex flex-col justify-between">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
          className="w-16"
        />
        <form
          className=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="w-full mb-5">
            <label htmlFor="name">
              <h3 className="mb-2 font-medium text-base">What's your name</h3>
            </label>
            <div className="flex gap-2">
              <input
                required
                id="name"
                type="text"
                placeholder="First Name"
                className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
                onChange={(e) => {
                  setCaptainData({
                    ...captainData,
                    fullName: {
                      ...captainData.fullName,
                      firstName: e.target.value,
                    },
                  });
                }}
                value={captainData.fullName.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
                onChange={(e) => {
                  setCaptainData({
                    ...captainData,
                    fullName: {
                      ...captainData.fullName,
                      lastName: e.target.value,
                    },
                  });
                }}
                value={captainData.fullName.lastName}
              />
            </div>
          </div>
          <div className="w-full mb-5">
            <label htmlFor="email">
              <h3 className="text-base mb-2 font-medium">What's your email</h3>
            </label>
            <input
              required
              id="email"
              type="email"
              placeholder="Enter email"
              className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
              onChange={(e) => {
                setCaptainData({ ...captainData, email: e.target.value });
              }}
              value={captainData.email}
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="password">
              <h3 className="text-base mb-2 font-medium">Enter password</h3>
            </label>
            <input
              required
              id="password"
              type="password"
              placeholder="Enter password"
              className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
              onChange={(e) => {
                setCaptainData({ ...captainData, password: e.target.value });
              }}
              value={captainData.password}
            />
          </div>
          <div className="">
            <label htmlFor="color">
              <h3 className="text-base mb-2 font-medium">Vehicle details</h3>
            </label>
            <div className="mb-5">
              <div className="flex gap-2">
                <div>
                  <label htmlFor="color">
                    <h3 className="text-sm mb-2 font-medium text-gray-600">
                      Vehicle color
                    </h3>
                  </label>
                  <input
                    required
                    id="color"
                    type="text"
                    placeholder="Vehicle color"
                    className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
                    onChange={(e) => {
                      setCaptainData({
                        ...captainData,
                        vehicle: {
                          ...captainData.vehicle,
                          color: e.target.value,
                        },
                      });
                    }}
                    value={captainData.vehicle.color}
                  />
                </div>
                <div>
                  <label htmlFor="plate">
                    <h3 className="text-sm mb-2 font-medium text-gray-600">
                      Vehicle plate
                    </h3>
                  </label>
                  <input
                    required
                    id="plate"
                    type="text"
                    placeholder="Vehicle plate number"
                    className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
                    onChange={(e) => {
                      setCaptainData({
                        ...captainData,
                        vehicle: {
                          ...captainData.vehicle,
                          plate: e.target.value,
                        },
                      });
                    }}
                    value={captainData.vehicle.plate}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label htmlFor="capacity">
                    <h3 className="text-sm mb-2 font-medium text-gray-600">
                      Vehicle capacity
                    </h3>
                  </label>
                  <input
                    required
                    id="capacity"
                    type="number"
                    placeholder="Vehicle capacity"
                    className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-sm outline-none"
                    onChange={(e) => {
                      setCaptainData({
                        ...captainData,
                        vehicle: {
                          ...captainData.vehicle,
                          capacity: e.target.value,
                        },
                      });
                    }}
                    value={captainData.vehicle.capacity}
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="type">
                    <h3 className="text-sm mb-2 font-medium text-gray-600">
                      Vehicle type
                    </h3>
                  </label>
                  <select
                    name=""
                    id="type"
                    className="bg-[#eee] rounded py-[13px] p-4 border w-full text-sm outline-none"
                    onChange={(e) => {
                      setCaptainData({
                        ...captainData,
                        vehicle: {
                          ...captainData.vehicle,
                          vehicleType: e.target.value,
                        },
                      });
                    }}
                    value={captainData.vehicle.vehicleType}
                  >
                    <option value="" className="text-gray-500 text-base font-medium">Select vehicle</option>
                    <option value="Car">Car</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Auto">Auto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-black text-white py-3 w-full rounded mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-center mt-5">
            {" "}
            Already a partner?
            <Link to={"/captain-login"} className="text-blue-500 underline">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [userData, setUserData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(userData);
    setLoading(false);
  }

  return (
    <div className="p-10 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="w-16 mb-10"
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
                className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-base outline-none"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    fullName: {
                      ...userData.fullName,
                      firstName: e.target.value,
                    },
                  });
                }}
                value={userData.fullName.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-base outline-none"
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    fullName: {
                      ...userData.fullName,
                      lastName: e.target.value,
                    },
                  });
                }}
                value={userData.fullName.lastName}
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
              className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-base outline-none"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              value={userData.email}
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
              className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-base outline-none"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              value={userData.password}
            />
          </div>
          <button
            className="bg-black text-white py-3 w-full rounded mt-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center mt-5">
            {" "}
            Already a user?
            <Link to={"/login"} className="text-blue-500 underline">
              {" "}
              Login{" "}
            </Link>
          </p>
        </form>
      </div>
      <Link to={"/captain-login"}>
        <button className={`bg-green-500 text-white py-3 w-full rounded mt-3`}>
          Sign In as Captain
        </button>
      </Link>
    </div>
  );
};

export default UserSignup;

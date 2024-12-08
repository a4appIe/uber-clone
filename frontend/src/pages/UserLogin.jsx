import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    e.preventDefault();
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
            <label htmlFor="email">
              <h3 className="text-xl mb-2 font-medium">What's your email</h3>
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
              <h3 className="text-xl mb-2 font-medium">Enter password</h3>
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
          >
            Login
          </button>
          <p className="text-center mt-5">
            {" "}
            New Login?
            <Link to={"/signup"} className="text-blue-500 underline">
              {" "}
              Create an account{" "}
            </Link>
          </p>
        </form>
      </div>
      <Link to={"/captain-signup"}>
        <button className="bg-green-500 text-white py-3 w-full rounded mt-3">
          Signup as Captain
        </button>
      </Link>
    </div>
  );
};

export default UserLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [captainData, setCaptainData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  }

  return (
    <div className="p-10 flex flex-col justify-between h-screen">
      <div>
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
          className="w-20 mb-10"
        />
        <form
          className=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
              className="bg-[#eee] rounded py-2 p-4 border w-full text-lg placeholder:text-base outline-none"
              onChange={(e) => {
                setCaptainData({ ...captainData, password: e.target.value });
              }}
              value={captainData.password}
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
            Join a fleet?
            <Link to={"/captain-signup"} className="text-blue-500 underline">
              {" "}
              Register as a Captain{" "}
            </Link>
          </p>
        </form>
      </div>
      <Link to={"/login"}>
        <button className={`bg-green-500 text-white py-3 w-full rounded mt-3`}>
          Sign In as User
        </button>
      </Link>
    </div>
  );
};

export default CaptainLogin;

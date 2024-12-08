import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1548755562-d2c53dde888c?q=80&w=3100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center h-screen w-full flex flex-col justify-between pt-10'>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
        className="w-16 ml-10"
      />
      <div className="px-10 py-8 bg-white">
        <h1 className="text-2xl font-bold">Get Started with Uber</h1>
        <Link to={"/login"}>
          {" "}
          <button className="bg-black text-white py-3 w-full rounded mt-2">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

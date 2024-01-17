import React, { useState } from "react";
import "./login.module.css";
import Image from "@/common/Image";
import bg from "./pxfuel1.jpg";

const Login: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  return (
    <div className="container bg-transparent justify-center items-center flex h-screen w-full">
      <Image
        src={bg}
        className="absolute h-full z-[-1] w-full object-cover"
        alt="background"
      />
      <div className="form-box bg-white p-10 rounded-md">
        <h1
          id="title"
          className="text-center text-2xl border-b-2 border-red-600 w-fit mx-auto py-1"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <form>
          <div className="input-group flex flex-col gap-6 px-6 py-10">
            <div
              className="input-field"
              style={{ display: isSignIn ? "none" : "block" }}
            >
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                className="outline-none border-2 focus:border-gray-700 p-2 rounded-lg"
                placeholder="Name"
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                className="outline-none border-2 focus:border-gray-700 p-2 rounded-lg"
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                className="outline-none border-2 focus:border-gray-700 p-2 rounded-lg"
                placeholder="Password"
              />
            </div>
            <p>
              Forgot Password? <a href="#">Click Here</a>
            </p>
          </div>
          <div className="btn-fied flex gap-5 mx-auto w-fit">
            <button
              type="button"
              onClick={handleSignUpClick}
              className={!isSignIn ? "" : "disable"}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleSignInClick}
              className={isSignIn ? "" : "disable"}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

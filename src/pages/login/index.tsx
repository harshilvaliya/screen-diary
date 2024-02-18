import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./login.css";

import { FormEvent } from "react";

const Index = ({ setLoginUser }) => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: FormEvent) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (event: FormEvent) => {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();
    alert(data1.message);

    if (data1.success) {
      Navigate("/");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="../../../public/Images/bgg.jpg"
              className="img-fluid absolute"
              alt="Sample"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 relative justify-center flex items-center h-screen">
            <form
              className="login bg-white bg-opacity-70 p-8 rounded-xl"
              onSubmit={login}
            >
              {/* {console.log("User", user)} */}

              <div className="form-outline mb-4">
                <input
                  className="form-control form-control-lg rounded-lg px-2 text-lg w-full"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                ></input>
              </div>
              <div className="form-outline mb-4">
                <input
                  className="form-control form-control-lg rounded-lg px-2 text-lg w-full"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                ></input>
              </div>

              {/* // Update password */}
              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0 px-1">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label
                    className="form-check-label text-sm"
                    htmlFor="form2Example3"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  onClick={() => {
                    Navigate("/changePassword");
                  }}
                  className="text-sm text-blue-800"
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  style={{ padding: "0rem 2rem" }}
                  type="submit"
                  className="btn btn-primary btn-lg bg-red-800 rounded-2xl text-white"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <button
                    type="submit"
                    style={{ padding: "0rem 2rem" }}
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                      Navigate("/login/register");
                    }}
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

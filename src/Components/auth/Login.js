import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    otp: "",
    isOtpSent: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const err = Validation(values);
  //   setErrors(err);
  //   axios
  //     .post("http://localhost:8081/login", values)
  //     .then((res) => {
  //       if (res.data.message === "Login successful") {
  //         navigate("/welcomePage");
  //       } else {
  //         alert("No record existed");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    axios
      .post("http://localhost:8081/sendLoginOtp", values)
      .then((res) => {
        if (res.data.status === true) {
          navigate("/OTPLoginVerify", { state: { values } });
        } else {
          alert("No record existed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-secondary bg-gradient bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20211108/pngtree-abstract-blue-plain-background-with-modern-style-and-dynamic-lines-image_915412.png')",
      }}
    >
      <div className="bg-white p-8 sm:p-10 lg:p-16 w-[90%] sm:w-[70%] lg:w-[33%] border-slate-200 rounded-lg border-2 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="font-bold block mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="font-bold block mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="w-full sm:w-auto text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-7 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <strong>Log in</strong>
            </button>
          </div>
          <p className="mb-6 text-center font-bold text-sm sm:text-lg">
            You agree to our terms and policies?
          </p>
          <div className="flex justify-center">
            <Link
              to="/signup"
              className="text-blue-700 bg-blue-100 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg shadow"
            >
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

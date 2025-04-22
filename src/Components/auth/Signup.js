// Import required dependencies
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import { lab } from '../../pages/techSearchOptions';

// Signup component with form and validation logic
function Signup() {
  const [values, setValues] = useState({
    name: "",
    designation: "",
    lab: "",
    csirEmailId: "",
    mobileNo: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (
      values.name !== "" &&
      values.lab !== "" &&
      values.csirEmailId !== "" &&
      values.password !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:8081/sendOTP",
          values
        );
        console.log("API ", response);
        if (response?.data?.status === true) {
          navigate("/OTPVerify", { state: { values } });
        }
      } catch (error) {
        console.log("Error ", error);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-secondary bg-gradient bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20211108/pngtree-abstract-blue-plain-background-with-modern-style-and-dynamic-lines-image_915412.png')",
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 lg:p-8 w-full max-w-[65%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[40%] bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mt-6 text-center">Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={values.name}
              name="name"
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="designation"
              className="block text-lg font-medium mb-2"
            >
              Designation
            </label>
            <select
              id="designation"
              name="designation"
              value={values.designation}
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="">Select your designation</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="project_manager">Project Manager</option>
              <option value="qa">QA Engineer</option>
            </select>
            {errors.designation && (
              <span className="text-red-500 text-sm">{errors.designation}</span>
            )}
          </div>


          <div className="mb-3">
            <label htmlFor="lab" className="block text-lg font-medium mb-2">
              CSIR-Lab
            </label>
            <select
              id="lab"
              name="lab"
              value={values.lab}
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="" disabled>
                Select a  Lab
              </option>
              {lab.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
            {errors.labNo && (
              <span className="text-red-500 text-sm">{errors.labNo}</span>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="csirEmailId"
              className="block text-lg font-medium mb-2"
            >
              CSIR Email Id
            </label>
            <input
              id="csirEmailId"
              type="email"
              placeholder="Enter Your E-mail"
              name="csirEmailId"
              value={values.csirEmailId}
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.csirEmailId && (
              <span className="text-red-500 text-sm">{errors.csirEmailId}</span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="mobile"
              className="block text-lg font-medium mb-2"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              name="mobile"
              value={values.mobile}
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">{errors.mobile}</span>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>


          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </div>

          <p className="mt-6 text-bold font-bold text-center flex justify-center">
            You agree to our terms and policies? &nbsp;&nbsp;
            <Link
              to="/"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

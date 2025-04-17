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
    lab: "", // Field to store selected CSIR lab
    csirEmailId: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const validationErrors = Validation(values);
  //   setErrors(validationErrors);

  //   if (
  //     values.name !== "" &&
  //     values.csirLab !== "" &&
  //     values.csirEmailId !== "" &&
  //     values.password !== ""
  //   ) {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:8081/signup",
  //         values
  //       );
  //       console.log("API ", response);
  //       if (response?.data?.message) {
  //         navigate("/Login");
  //       }
  //     } catch (error) {
  //       console.log("Error ", error);
  //     }
  //   }
  // };

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

  // const csirLabs = [
  //   { value: "", label: "Select a CSIR Lab", disabled: true },
  //   {
  //     label:
  //       "CSIR-Advanced Materials and Processes Research Institute (CSIR-AMPRI), Bhopal",
  //     value: "CSIR-AMPRI",
  //   },
  //   {
  //     label: "CSIR-Central Building Research Institute (CSIR-CBRI), Roorkee",
  //     value: "CSIR-CBRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Center for Cellular Molecular Biology (CSIR-CCMB), Hyderabad",
  //     value: "CSIR-CCMB",
  //   },
  //   {
  //     label: "CSIR-Central Drug Research Institute (CSIR-CDRI), Lucknow",
  //     value: "CSIR-CDRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central ElectroChemical Research Institute (CSIR-CECRI), Karaikudi",
  //     value: "CSIR-CECRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Electronics Engineering Research Institute (CSIR-CEERI), Pilani",
  //     value: "CSIR-CEERI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Food Technological Research Institute (CSIR-CFTRI), Mysore",
  //     value: "CSIR-CFTRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Glass and Ceramic Research Institute (CSIR-CGCRI), Kolkata",
  //     value: "CSIR-CGCRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Institute of Medicinal and Aromatic Plants (CSIR-CIMAP), Lucknow",
  //     value: "CSIR-CIMAP",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Institute of Mining and Fuel Research (CSIR-CIMFR), Dhanbad",
  //     value: "CSIR-CIMFR",
  //   },
  //   {
  //     label: "CSIR-Central Leather Research Institute (CSIR-CLRI), Chennai",
  //     value: "CSIR-CLRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Mechanical Engineering Research Institute (CSIR-CMERI), Durgapur",
  //     value: "CSIR-CMERI",
  //   },
  //   {
  //     label: "CSIR-Central Road Research Institute (CSIR-CRRI), New Delhi",
  //     value: "CSIR-CRRI",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Scientific Instruments Organisation (CSIR-CSIO), Chandigarh",
  //     value: "CSIR-CSIO",
  //   },
  //   {
  //     label:
  //       "CSIR-Central Salt and Marine Chemicals Research Institute (CSIR-CSMCRI), Bhavnagar",
  //     value: "CSIR-CSMCRI",
  //   },
  //   {
  //     label: "CSIR-Central Fourth Paradigm Institute (CSIR-4PI), Bengaluru",
  //     value: "CSIR-4PI",
  //   },
  //   {
  //     label:
  //       "CSIR-Institute of Genomics and Integrative Biology (CSIR-IGIB), Delhi",
  //     value: "CSIR-IGIB",
  //   },
  //   {
  //     label:
  //       "CSIR-Institute of Himalayan Bioresource Technology (CSIR-IHBT), Palampur",
  //     value: "CSIR-IHBT",
  //   },
  //   {
  //     label: "CSIR-Indian Institute of Chemical Biology (CSIR-IICB), Kolkata",
  //     value: "CSIR-IICB",
  //   },
  //   {
  //     label:
  //       "CSIR-Indian Institute of Chemical Technology (CSIR-IICT), Hyderabad",
  //     value: "CSIR-IICT",
  //   },
  //   {
  //     label:
  //       "CSIR-Indian Institute of Integrative Medicine (CSIR-IIIM), UT of J&K",
  //     value: "CSIR-IIIM",
  //   },
  //   {
  //     label: "CSIR-Indian Institute of Petroleum (CSIR-IIP), Dehradun",
  //     value: "CSIR-IIP",
  //   },
  //   {
  //     label:
  //       "CSIR-Indian Institute of Toxicology Research (CSIR-IITR), Lucknow",
  //     value: "CSIR-IITR",
  //   },
  //   {
  //     label:
  //       "CSIR-Institute of Minerals and Materials Technology (CSIR-IIMT), Bhubaneswar",
  //     value: "CSIR-IIMT",
  //   },
  //   {
  //     label: "CSIR-Institute of Microbial Technology (CSIR-IMT)",
  //     value: "CSIR-IMT",
  //   },
  //   {
  //     label:
  //       "CSIR-Institute of Minerals and Materials Technology (CSIR-IMTECH), Chandigarh",
  //     value: "CSIR-IMTECH",
  //   },
  //   {
  //     label: "CSIR-National Aerospace Laboratories (CSIR-NAL), Bengaluru",
  //     value: "NCSIR-NAL",
  //   },
  //   {
  //     label: "CSIR-National Botanical Research Institute (CSIR-NBRI), Lucknow",
  //     value: "CSIR-NBRI",
  //   },
  //   {
  //     label: "CSIR-National Chemical Laboratory (CSIR-NCL), Pune",
  //     value: "CSIR-NCL",
  //   },
  //   {
  //     label:
  //       "CSIR-National Environmental Engineering Research Institute (CSIR-NEERI), Nagpur",
  //     value: "NEE&NEERI",
  //   },
  //   {
  //     label:
  //       "CSIR-North-East Institute of Science and Technology (CSIR-NEIST), Jorhat",
  //     value: "CSIR-NEIST",
  //   },
  //   {
  //     label:
  //       "CSIR-National Geophysical Research Institute (CSIR-NGRI), Hyderabad",
  //     value: "CSIR-NGRI",
  //   },
  //   {
  //     label:
  //       "CSIR-National Institute for Interdisciplinary Science and Technology (CSIR-NIIST), Thiruvananthapuram",
  //     value: "CSIR-NIIST",
  //   },
  //   {
  //     label: "CSIR-National Institute of Oceanography (CSIR-NIO), Goa",
  //     value: "CSIR-NIO",
  //   },
  //   {
  //     label: "CSIR-National Metallurgical Laboratory (CSIR-NML), Jamshedpur",
  //     value: "CSIR-NML",
  //   },
  //   {
  //     label: "CSIR-National Physical Laboratory (CSIR-NPL), New Delhi",
  //     value: "CSIR-NPL",
  //   },
  //   {
  //     label:
  //       "CSIR-National Institute of Science Communication & Policy Research (CSIR-NISCPR), Delhi",
  //     value: "CSIR-NISCPR",
  //   },
  //   {
  //     label: "CSIR-Madras Complex (CSIR-CMC), Chennai",
  //     value: "SERC",
  //   },
  //   {
  //     label: "CSIR-Structural Engineering Research Centre (CSIR-SERC), Chennai",
  //     value: "CSIR-CMC",
  //   },
  //   {
  //     label: "Other than CSIR",
  //     value: "CSIR",
  //   },
  // ];



  return (
    <div
      className="flex justify-center items-center h-screen bg-secondary bg-gradient bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20211108/pngtree-abstract-blue-plain-background-with-modern-style-and-dynamic-lines-image_915412.png')",
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-[95%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[40%] bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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

          <div className="mb-4">
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
                Select a lab
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

          <div className="mb-4">
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

          <div className="mb-6">
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

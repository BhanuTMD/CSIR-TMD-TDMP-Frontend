import axios from "axios";
import { useNavigate } from "react-router-dom";
import FooterBar from "./common/footer";
import Header from "./common/header";
import NavBar from "./common/navBar";
import Section from "./common/section";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf"; // Import jsPDF

const Section2 = () => {
  const initialValues = {
    technologyRefNo: "",
    iprType: "",
    registrationNo: "",
    Status: "",
    StatusDate: null,
    country: "",
  };
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(null);
  const [countries, setCountries] = useState([]);

  const minDate = new Date("1800-08-12");
  const maxDate = new Date("3000-08-12");

  const validationSchema = Yup.object({
    iprType: Yup.string().required("Required"),
    RegistrationNo: Yup.string()
      .max(50, "Registration No. must be 50 characters or less")
      .required("Required"),
    Status: Yup.string().required("Required"),
    StatusDate: Yup.date().nullable().required("Status Date is required"),
    country: Yup.string().required("Country is required"),
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load country data. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = (values) => {
    const url = "http://localhost:8081/createData"; // Replace with your API endpoint
    const headers = {
      "Content-Type": "application/json",
    };

    // Save data to API
    axios
      .post(url, values, { headers: headers })
      .then((response) => {
        console.log("Response data:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Generate PDF on successful submission
        generatePDF(values);
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Form submission failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  // Function to generate PDF
  const generatePDF = (values) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("IPR Status Form Data", 10, 10);
    doc.setFontSize(12);

    const formData = `
      IPR Type: ${values.iprType || "N/A"}
      Registration No.: ${values.RegistrationNo || "N/A"}
      Status: ${values.Status || "N/A"}
      Status Date: ${
        values.StatusDate
          ? new Date(values.StatusDate).toLocaleDateString()
          : "N/A"
      }
      Country: ${values.country || "N/A"}
    `;
    doc.text(formData, 10, 20);

    doc.save("FormData.pdf");
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex">
        <div className="bg-gray-800">{/* <Sidebar /> */}</div>
        <div className="flex-1 p-8 bg-blue-200 border">
          <Section sectionLine="Section 2 : IPR Status -Add/Modify Sub Form " />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="form-group mb-4">
                  <label
                    className="font-bold flex justify-between"
                    htmlFor="technologyRefNo"
                  >
                    Technology /Knowhow Ref No:
                    <span className="Hint block text-xs text-red-500 inline text-end">
                      *Mandatory Field*
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="technologyRefNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                    placeholder="Enter New Information"
                  />
                  <ErrorMessage
                    name="technologyRefNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    className="font-bold flex justify-between"
                    htmlFor="iprType"
                  >
                    IPR Type
                    <span className="Hint block text-xs text-red-500 inline text-end">
                      *Mandatory Field*
                    </span>
                  </label>
                  <Field
                    name="iprType"
                    as="select"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  >
                    <option value="">--Please Select--</option>
                    <option value="patent">Patent</option>
                    <option value="industrial design">Industrial Design</option>
                    <option value="trademark">Trademark</option>
                    <option value="copyright">Copyright</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="iprType"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="RegistrationNo">
                    Registration No.
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 50 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="RegistrationNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="RegistrationNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="Status">
                    Status
                  </label>
                  <Field
                    name="Status"
                    as="select"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  >
                    <option value="">--Please Select Status--</option>
                    {/* <option value="Applied for">Applied for</option> */}
                    <option value="Filed">Filed</option>
                    <option value="Pending for Grant">Pending for Grant</option>
                    <option value="Granted">Granted</option>
                    <option value="Lapsed">Lapsed</option>
                    <option value="Abandoned">Abandoned</option>
                  </Field>
                  <ErrorMessage
                    name="Status"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="StatusDate">
                    Status Date: &nbsp;
                  </label>
                  <div className="Home3">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setFieldValue("StatusDate", date);
                      }}
                      dateFormat="dd/MM/yyyy"
                      minDate={minDate}
                      maxDate={maxDate}
                      className="w-full p-2 text-lg outline-0.1 rounded-md"
                      placeholderText="Select a date"
                    />
                  </div>
                  <ErrorMessage
                    name="StatusDate"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4">
                  <label className="font-bold" htmlFor="country">
                    Country
                  </label>
                  <Field
                    name="country"
                    as="select"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">--Please Select--</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4 flex justify-center space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => navigate("/section1")}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    onClick={() => navigate("/section3")}
                  >
                    Next
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default Section2;

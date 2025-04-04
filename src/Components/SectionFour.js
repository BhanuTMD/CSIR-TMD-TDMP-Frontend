import axios from "axios";
import FooterBar from "./common/footer";
import Header from "./common/header";
import NavBar from "./common/navBar";
import Section from "./common/section";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionFour = () => {
  const [countries, setCountries] = useState([]);

  const initialValues = {
    technologyRefNo: "",
    clientName: "",
    clientAddress: "",
    city: "",
    country: "",
    nodalContactPerson: "",
    deploymentDetails: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    // Add validation rules as needed
    // NameOfClient: Yup.string().required("Required"),
    // AddressOfClient: Yup.string().required("Required"),
    // country: Yup.string().required("Required"),
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    const url = "http://localhost:8080/apf/tdmp/saveSectionFour"; // Replace with your API endpoint
    const headers = {
      "Content-Type": "application/json",
    };

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

  return (
    <>
      <Header />
      <NavBar />
      <div className="p-8 bg-blue-200 border">
        <Section sectionLine="Section 4 : Commercialization /Deployment Details-Add/ Modify Sub Form" />
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
              {/* Name of Client */}
              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="clientName">
                  Name of Client: &nbsp;
                  <span className="Hint block text-sm text-red-500 inline">
                    Max. 300 Characters
                  </span>
                </label>
                <Field
                  type="text"
                  name="clientName"
                  className="w-full p-2 text-lg outline-0.1 rounded-md"
                />
                <ErrorMessage
                  name="clientName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Address of Client */}
              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="clientAddress">
                  Address of Client: &nbsp;
                  <span className="Hint block text-sm text-red-500 inline">
                    Max. 300 Characters
                  </span>
                </label>
                <Field
                  type="text"
                  as="textarea"
                  name="clientAddress"
                  className="w-full p-2 text-lg outline-0.1 rounded-md"
                />
                <ErrorMessage
                  name="clientAddress"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* City */}
              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="city">
                  City &nbsp;
                  <span className="Hint block text-sm text-red-500 inline">
                    Max. 300 Characters
                  </span>
                </label>
                <Field
                  type="text"
                  name="city"
                  className="w-full p-2 text-lg outline-0.1 rounded-md"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-300"
                />
              </div>

              {/* Country - Dynamic Dropdown */}
              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="country">
                  Country
                </label>
                <Field
                  name="country"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

              {/* Other fields like Name and Address of Nodal Contact Person, Deployment Details */}
              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="nodalContactPerson">
                  Name and Address of Nodal Contact Person: &nbsp;
                  <span className="Hint block text-sm text-red-500 inline">
                    Max. 300 Characters
                  </span>
                </label>
                <Field
                  type="text"
                  as="textarea"
                  name="nodalContactPerson"
                  className="w-full p-2 text-lg outline-0.1 rounded-md"
                />
                <ErrorMessage
                  name="nodalContactPerson"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="form-group mb-4">
                <label className="font-bold" htmlFor="deploymentDetails">
                  Deployment Details &nbsp;
                  <span className="Hint block text-sm text-red-500 inline">
                    Max. 300 Characters
                  </span>
                </label>
                <Field
                  type="text"
                  as="textarea"
                  name="deploymentDetails"
                  className="w-full p-2 text-lg outline-0.1 rounded-md"
                />
                <ErrorMessage
                  name="deploymentDetails"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="form-group mb-4 flex justify-center">
                <button
                  type="button"
                  className="px-2 py-2 bg-blue-500 text-white rounded-md ml-4"
                  onClick={() => navigate("/section3")}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <FooterBar />
    </>
  );
};

export default SectionFour;

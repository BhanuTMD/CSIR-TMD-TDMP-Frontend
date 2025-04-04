import axios from "axios";
import FooterBar from "./common/footer";
import Header from "./common/header";
import NavBar from "./common/navBar";
import Section from "./common/section";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import jsPDF from "jspdf"; // Import jsPDF
import CustomSelect from "./utils/CustomSelect";
import { useNavigate } from "react-router-dom";

const SectionTwo = () => {
  const initialValues = {
    technologyRefNo: "",
    iprType: "",
    registrationNo: "",
    status: "",
    statusDate: null,
    country: [],
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  
  //date validation
  const minDate = new Date("1800-08-12");
  const maxDate = new Date("3000-08-12");

  const validationSchema = Yup.object({
    iprType: Yup.string().required("Required"),
    registrationNo: Yup.string()
      .max(50, "Registration No. must be 50 characters or less")
      .required("Required"),
    status: Yup.string().required("Required"),
    statusDate: Yup.date().nullable().required("status Date is required"),
    country: Yup.array()
      .min(1, "At least one country is required")
      .required("Country selection is required"),
  });

  const country = [
    {
      label: "Afghanistan",
      value: "AF",
    },
    {
      label: "Albania",
      value: "AL",
    },
    {
      label: "Algeria",
      value: "DZ",
    },
    {
      label: "Andorra",
      value: "AD",
    },
    {
      label: "Angola",
      value: "AO",
    },
    {
      label: "Antigua and Barbuda",
      value: "AG",
    },
    {
      label: "Argentina",
      value: "AR",
    },
    {
      label: "Armenia",
      value: "AM",
    },
    {
      label: "Australia",
      value: "AU",
    },
    {
      label: "Austria",
      value: "AT",
    },
    {
      label: "Azerbaijan",
      value: "AZ",
    },
    {
      label: "Bahamas",
      value: "BS",
    },
    {
      label: "Bahrain",
      value: "BH",
    },
    {
      label: "Bangladesh",
      value: "BD",
    },
    {
      label: "Barbados",
      value: "BB",
    },
    {
      label: "Belarus",
      value: "BY",
    },
    {
      label: "Belgium",
      value: "BE",
    },
    {
      label: "Belize",
      value: "BZ",
    },
    {
      label: "Benin",
      value: "BJ",
    },
    {
      label: "Bhutan",
      value: "BT",
    },
    {
      label: "Bolivia",
      value: "BO",
    },
    {
      label: "Bosnia and Herzegovina",
      value: "BA",
    },
    {
      label: "Botswana",
      value: "BW",
    },
    {
      label: "Brazil",
      value: "BR",
    },
    {
      label: "Brunei",
      value: "BN",
    },
    {
      label: "Bulgaria",
      value: "BG",
    },
    {
      label: "Burkina Faso",
      value: "BF",
    },
    {
      label: "Burundi",
      value: "BI",
    },
    {
      label: "Cabo Verde",
      value: "CV",
    },
    {
      label: "Cambodia",
      value: "KH",
    },
    {
      label: "Cameroon",
      value: "CM",
    },
    {
      label: "Canada",
      value: "CA",
    },
    {
      label: "Central African Republic",
      value: "CF",
    },
    {
      label: "Chad",
      value: "TD",
    },
    {
      label: "Chile",
      value: "CL",
    },
    {
      label: "China",
      value: "CN",
    },
    {
      label: "Colombia",
      value: "CO",
    },
    {
      label: "Comoros",
      value: "KM",
    },
    {
      label: "Congo (Congo-Brazzaville)",
      value: "CG",
    },
    {
      label: "Costa Rica",
      value: "CR",
    },
    {
      label: "Croatia",
      value: "HR",
    },
    {
      label: "Cuba",
      value: "CU",
    },
    {
      label: "Cyprus",
      value: "CY",
    },
    {
      label: "Czech Republic",
      value: "CZ",
    },
    {
      label: "Democratic Republic of the Congo",
      value: "CD",
    },
    {
      label: "Denmark",
      value: "DK",
    },
    {
      label: "Djibouti",
      value: "DJ",
    },
    {
      label: "Dominica",
      value: "DM",
    },
    {
      label: "Dominican Republic",
      value: "DO",
    },
    {
      label: "Ecuador",
      value: "EC",
    },
    {
      label: "Egypt",
      value: "EG",
    },
    {
      label: "El Salvador",
      value: "SV",
    },
    {
      label: "Equatorial Guinea",
      value: "GQ",
    },
    {
      label: "Eritrea",
      value: "ER",
    },
    {
      label: "Estonia",
      value: "EE",
    },
    {
      label: "Eswatini",
      value: "SZ",
    },
    {
      label: "Ethiopia",
      value: "ET",
    },
    {
      label: "Fiji",
      value: "FJ",
    },
    {
      label: "Finland",
      value: "FI",
    },
    {
      label: "France",
      value: "FR",
    },
    {
      label: "Gabon",
      value: "GA",
    },
    {
      label: "Gambia",
      value: "GM",
    },
    {
      label: "Georgia",
      value: "GE",
    },
    {
      label: "Germany",
      value: "DE",
    },
    {
      label: "Ghana",
      value: "GH",
    },
    {
      label: "Greece",
      value: "GR",
    },
    {
      label: "Grenada",
      value: "GD",
    },
    {
      label: "Guatemala",
      value: "GT",
    },
    {
      label: "Guinea",
      value: "GN",
    },
    {
      label: "Guinea-Bissau",
      value: "GW",
    },
    {
      label: "Guyana",
      value: "GY",
    },
    {
      label: "Haiti",
      value: "HT",
    },
    {
      label: "Honduras",
      value: "HN",
    },
    {
      label: "Hungary",
      value: "HU",
    },
    {
      label: "Iceland",
      value: "IS",
    },
    {
      label: "India",
      value: "IN",
    },
    {
      label: "Indonesia",
      value: "ID",
    },
    {
      label: "Iran",
      value: "IR",
    },
    {
      label: "Iraq",
      value: "IQ",
    },
    {
      label: "Ireland",
      value: "IE",
    },
    {
      label: "Israel",
      value: "IL",
    },
    {
      label: "Italy",
      value: "IT",
    },
    {
      label: "Jamaica",
      value: "JM",
    },
    {
      label: "Japan",
      value: "JP",
    },
    {
      label: "Jordan",
      value: "JO",
    },
    {
      label: "Kazakhstan",
      value: "KZ",
    },
    {
      label: "Kenya",
      value: "KE",
    },
    {
      label: "Kiribati",
      value: "KI",
    },
    {
      label: "Kuwait",
      value: "KW",
    },
    {
      label: "Kyrgyzstan",
      value: "KG",
    },
    {
      label: "Laos",
      value: "LA",
    },
    {
      label: "Latvia",
      value: "LV",
    },
    {
      label: "Lebanon",
      value: "LB",
    },
    {
      label: "Lesotho",
      value: "LS",
    },
    {
      label: "Liberia",
      value: "LR",
    },
    {
      label: "Libya",
      value: "LY",
    },
    {
      label: "Liechtenstein",
      value: "LI",
    },
    {
      label: "Lithuania",
      value: "LT",
    },
    {
      label: "Luxembourg",
      value: "LU",
    },
    {
      label: "Madagascar",
      value: "MG",
    },
    {
      label: "Malawi",
      value: "MW",
    },
    {
      label: "Malaysia",
      value: "MY",
    },
    {
      label: "Maldives",
      value: "MV",
    },
    {
      label: "Mali",
      value: "ML",
    },
    {
      label: "Malta",
      value: "MT",
    },
    {
      label: "Marshall Islands",
      value: "MH",
    },
    {
      label: "Mauritania",
      value: "MR",
    },
    {
      label: "Mauritius",
      value: "MU",
    },
    {
      label: "Mexico",
      value: "MX",
    },
    {
      label: "Micronesia",
      value: "FM",
    },
    {
      label: "Moldova",
      value: "MD",
    },
    {
      label: "Monaco",
      value: "MC",
    },
    {
      label: "Mongolia",
      value: "MN",
    },
    {
      label: "Montenegro",
      value: "ME",
    },
    {
      label: "Morocco",
      value: "MA",
    },
    {
      label: "Mozambique",
      value: "MZ",
    },
    {
      label: "Myanmar (Burma)",
      value: "MM",
    },
    {
      label: "Namibia",
      value: "NA",
    },
    {
      label: "Nauru",
      value: "NR",
    },
    {
      label: "Nepal",
      value: "NP",
    },
    {
      label: "Netherlands",
      value: "NL",
    },
    {
      label: "New Zealand",
      value: "NZ",
    },
    {
      label: "Nicaragua",
      value: "NI",
    },
    {
      label: "Niger",
      value: "NE",
    },
    {
      label: "Nigeria",
      value: "NG",
    },
    {
      label: "North Korea",
      value: "KP",
    },
    {
      label: "North Macedonia",
      value: "MK",
    },
    {
      label: "Norway",
      value: "NO",
    },
    {
      label: "Oman",
      value: "OM",
    },
    {
      label: "Pakistan",
      value: "PK",
    },
    {
      label: "Palau",
      value: "PW",
    },
    {
      label: "Palestine",
      value: "PS",
    },
    {
      label: "Panama",
      value: "PA",
    },
    {
      label: "Papua New Guinea",
      value: "PG",
    },
    {
      label: "Paraguay",
      value: "PY",
    },
    {
      label: "Peru",
      value: "PE",
    },
    {
      label: "Philippines",
      value: "PH",
    },
    {
      label: "Poland",
      value: "PL",
    },
    {
      label: "Portugal",
      value: "PT",
    },
    {
      label: "Qatar",
      value: "QA",
    },
    {
      label: "Romania",
      value: "RO",
    },
    {
      label: "Russia",
      value: "RU",
    },
    {
      label: "Rwanda",
      value: "RW",
    },
    {
      label: "Saint Kitts and Nevis",
      value: "KN",
    },
    {
      label: "Saint Lucia",
      value: "LC",
    },
    {
      label: "Saint Vincent and the Grenadines",
      value: "VC",
    },
    {
      label: "Samoa",
      value: "WS",
    },
    {
      label: "San Marino",
      value: "SM",
    },
    {
      label: "Sao Tome and Principe",
      value: "ST",
    },
    {
      label: "Saudi Arabia",
      value: "SA",
    },
    {
      label: "Senegal",
      value: "SN",
    },
    {
      label: "Serbia",
      value: "RS",
    },
    {
      label: "Seychelles",
      value: "SC",
    },
    {
      label: "Sierra Leone",
      value: "SL",
    },
    {
      label: "Singapore",
      value: "SG",
    },
    {
      label: "Slovakia",
      value: "SK",
    },
    {
      label: "Slovenia",
      value: "SI",
    },
    {
      label: "Solomon Islands",
      value: "SB",
    },
    {
      label: "Somalia",
      value: "SO",
    },
    {
      label: "South Africa",
      value: "ZA",
    },
    {
      label: "South Korea",
      value: "KR",
    },
    {
      label: "South Sudan",
      value: "SS",
    },
    {
      label: "Spain",
      value: "ES",
    },
    {
      label: "Sri Lanka",
      value: "LK",
    },
    {
      label: "Sudan",
      value: "SD",
    },
    {
      label: "Suriname",
      value: "SR",
    },
    {
      label: "Sweden",
      value: "SE",
    },
    {
      label: "Switzerland",
      value: "CH",
    },
    {
      label: "Syria",
      value: "SY",
    },
    {
      label: "Taiwan",
      value: "TW",
    },
    {
      label: "Tajikistan",
      value: "TJ",
    },
    {
      label: "Tanzania",
      value: "TZ",
    },
    {
      label: "Thailand",
      value: "TH",
    },
    {
      label: "Timor-Leste",
      value: "TL",
    },
    {
      label: "Togo",
      value: "TG",
    },
    {
      label: "Tonga",
      value: "TO",
    },
    {
      label: "Trinidad and Tobago",
      value: "TT",
    },
    {
      label: "Tunisia",
      value: "TN",
    },
    {
      label: "Turkey",
      value: "TR",
    },
    {
      label: "Turkmenistan",
      value: "TM",
    },
    {
      label: "Tuvalu",
      value: "TV",
    },
    {
      label: "Uganda",
      value: "UG",
    },
    {
      label: "Ukraine",
      value: "UA",
    },
    {
      label: "United Arab Emirates",
      value: "AE",
    },
    {
      label: "United Kingdom",
      value: "GB",
    },
    {
      label: "United States of America",
      value: "US",
    },
    {
      label: "Uruguay",
      value: "UY",
    },
    {
      label: "Uzbekistan",
      value: "UZ",
    },
    {
      label: "Vanuatu",
      value: "VU",
    },
    {
      label: "Vatican City (Holy See)",
      value: "VA",
    },
    {
      label: "Venezuela",
      value: "VE",
    },
    {
      label: "Vietnam",
      value: "VN",
    },
    {
      label: "Yemen",
      value: "YE",
    },
    {
      label: "Zambia",
      value: "ZM",
    },
    {
      label: "Zimbabwe",
      value: "ZW",
    },
  ];

  const handleSubmit = (values) => {
    const url = "http://localhost:8080/apf/tdmp/saveSectionTwo";
    const headers = {
      "Content-Type": "application/json",
    };

    // Prepare payload with country as array and format statusDate
    const payload = {
      technologyRefNo: values.technologyRefNo,
      iprType: values.iprType,
      registrationNo: values.registrationNo,
      status: values.status,
      statusDate: values.statusDate ? formatDate(values.statusDate) : null,
      country: Array.isArray(values.country)
        ? values.country
        : [values.country],
    };

    axios
      .post(url, payload, { headers: headers })
      .then((response) => {
        console.log("Response data:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        // generatePDF(values);
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

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="flex">
        <div className="bg-gray-800">{/* <Sidebar /> */}</div>
        <div className="flex-1 p-8 bg-blue-200 border">
          <Section sectionLine="Section 2 : IPR status -Add/Modify Sub Form " />
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
                  <label className="font-bold" htmlFor="registrationNo">
                    Registration No.
                    <span className="Hint block text-sm text-red-500 inline">
                      Max. 50 Characters
                    </span>
                  </label>
                  <Field
                    type="text"
                    name="registrationNo"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  />
                  <ErrorMessage
                    name="registrationNo"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="status">
                    status
                  </label>
                  <Field
                    name="status"
                    as="select"
                    className="w-full p-2 text-lg outline-0.1 rounded-md"
                  >
                    <option value="">--Please Select status--</option>
                    {/* <option value="Applied for">Applied for</option> */}
                    <option value="Filed">Filed</option>
                    <option value="Pending for Grant">Pending for Grant</option>
                    <option value="Granted">Granted</option>
                    <option value="Lapsed">Lapsed</option>
                    <option value="Abandoned">Abandoned</option>
                  </Field>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group">
                  <label className="font-bold" htmlFor="statusDate">
                    status Date: &nbsp;
                  </label>
                  <div className="Home3">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setFieldValue("statusDate", date);
                      }}
                      dateFormat="dd/MM/yyyy"
                      minDate={minDate}
                      maxDate={maxDate}
                      className="w-full p-2 text-lg outline-0.1 rounded-md"
                      placeholderText="Select a date"
                    />
                  </div>
                  <ErrorMessage
                    name="statusDate"
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
                    options={country}
                    multiple={true}
                    component={CustomSelect}
                    //className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-auto"
                    placeholder="Select country"
                    isMulti={true}
                  ></Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="form-group mb-4 flex justify-center ">
                  <button
                    type="button"
                    className="px-2 py-2 bg-blue-500 text-white rounded-md ml-4"
                    onClick={() => navigate("/section1")}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
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

export default SectionTwo;

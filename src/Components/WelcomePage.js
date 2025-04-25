import React from "react";
import "./WelcomePage.css"; // Import your custom CSS for the animation
// import FooterBar from "./common/footer";
import NavBar from "./common/navBar";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative">
      {/* Logo and Header Section */}
      <div className="absolute top-4 left-2 flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4">
        {/* Logo Image */}
        <div>
          <img
            src="/logo.jpg"
            alt="CSIR-Logo"
            className="w-32 sm:w-40 h-auto"
          />
        </div>
        {/* Header Text */}
        <div className="text-left mt-2 sm:mt-0">
          <p className="text-xs sm:text-sm font-medium text-gray-700">
            वैज्ञानिक तथा औद्योगिक अनुसंधान परिषद् <br />
            Council of Scientific & Industrial Research <br />
            (विज्ञान एवं प्रौद्योगिकी मंत्रालय, भारत सरकार) <br />
            Ministry of Science & Technology, Govt. of India
          </p>
        </div>
      </div>
      {/* Header Text */}
      <div className="text-left">
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-700 m-7">
          Technology Database Management Portal (TDMP)
        </h1>
      </div>
      <NavBar />
      <div className="text-left px-4">
        <p className="text-base sm:text-lg font-medium text-gray-700 mt-6">
          Technology Management Directorate (TMD) facilitates CSIR connect with
          Line Ministries, State Governments and other organizations on one hand
          and with <br /> industry on the other for providing high quality
          technology-based products/ solutions/ services as well as competitive   
          advantage to citizens of the country.
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-700 mt-3">
          The Directorate is responsible for:
          <ul className="list-disc list-inside">
            <li>
            TDMP is a robust and dynamic data feeding portal designed specifically for Technologies/Know-how developed by CSIR labs.
            </li>
            <li>
            It enables the CSIR-Technology Management Directorate (TMD) to easily manage and access up-to-date information across all CSIR labs.
            </li>
            <li>The portal centralizes technology data, ensuring consistency and transparency in how information is stored and shared.</li>
            <li>
            It streamlines the process of capturing, updating, and showcasing technological developments in real-time.
            </li>
            <li>TDMP fosters collaboration between labs and supports quick, informed decision-making.</li>
            <li>It also plays a key role in promoting the commercialization and licensing of CSIR technologies, connecting innovations with industry needs.</li>
            <li>With TDMP, CSIR ensures that every innovation is documented, accessible, and ready for deployment or commercialization.

            </li>
            {/* <li>The portal not only captures innovation but also streamlines its journey toward industrial application.</li>
            <li>TDMP empowers CSIR with real-time visibility and control over the entire landscape of developed technologies.</li> */}
          </ul>
        </p>
      </div>
      <div className="space-y-4 text-center w-full flex flex-col items-center mt-20">
        {/* Update */}
        <div className="w-11/12 bg-indigo-500 text-white font-semibold py-2 px-4 overflow-hidden whitespace-nowrap">
          <p className="inline-block marquee-animation">
            {
              "Created & Maintained by Technology Management Directorate, CSIR, Headquarter, New Delhi"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

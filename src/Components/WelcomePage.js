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
        <h1 className="text-2xl sm:text-4xl font-bold text-blue-700 m-4">
          Technology Database Management Portal (TDMP-TMD)
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
              Facilitating development of thematic roadmap and strategy for CSIR
              in key industrial sectors;
            </li>
            <li>
              Interface and help establish organic linkages between CSIR
              laboratories and stakeholders including industries, Central/State
              Ministries, Agencies, etc.,
              <br /> for technology development and their customised deployment
              as per needs/requirements;
            </li>
            <li>
              Management of CSIR Awards namely, CSIR Diamond Jubilee Technology
              Awards (CDJTA), CSIR Award for S&T Innovations for Rural
              Development (CAIRD),
              <br /> and CSIR Technology Awards (CTA); and
            </li>
            <li>Corporate Social Responsibility (CSR) measures.</li>
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

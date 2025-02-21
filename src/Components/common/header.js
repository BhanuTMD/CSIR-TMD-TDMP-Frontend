import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 relative">
      <h1 className="lg:text-4xl font-extrabold text-blue-300 shadow-md tracking-wide absolute left-1/2 transform -translate-x-1/2">
        CSIR Technology Database India
      </h1>
      <a href="WelcomePage">
        <img
          src="/logo.jpg" // Update this path to match your logo's location
          alt="Logo"
          className="h-12 w-auto" // Adjust width and height as needed
        />
      </a>
    </div>
  );
};

export default Header;

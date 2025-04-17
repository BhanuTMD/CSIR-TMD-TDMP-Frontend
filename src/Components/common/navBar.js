import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const isWelcomePage = location.pathname === "/welcomePage";

  return (
    <div className="w-full bg-indigo-300 text-blue-600 font-bold shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-3">
        <div className="flex w-full space-x-6 items-center">
          {/* Welcome */}
          <Link
            to="/welcomePage"
            className="hover:text-blue-800 cursor-pointer text-xl"
          >
            Welcome
          </Link>

          {/* View Technology */}
          <Link
            to="/techSearch"
            className="hover:text-blue-800 cursor-pointer text-xl"
          >
            View 
          </Link>

          {/* Technology dropdown */}
          <div className="relative group">
            <div className="cursor-pointer text-xl hover:text-blue-800">
              Technology
            </div>
            <div className="absolute hidden group-hover:block bg-indigo-200 mt-1 rounded shadow-md z-10">
              <Link
                to="/SectionOne"
                className="block px-4 py-2 hover:bg-indigo-300"
              >
                Add New Technology
              </Link>
            </div>
          </div>

          {/* Conditional Login/Register */}
          {isWelcomePage && (
            <div
              className="ml-auto nav-item hover:text-blue-800 cursor-pointer text-xl"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              Login/Register
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;



// /***new welcome page code */

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [showSections, setShowSections] = useState(false);

//   return (
//     <div className="bg-gray-50 dark:bg-gray-800 min-h-min">
//       {/* Navbar */}
//       <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
//           {/* Logo Section */}
//           <Link
//             to="/WelcomePage"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="h-8"
//               alt="Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
//               Home
//             </span>
//           </Link>

//           {/* Hamburger Button */}
//           <button
//             data-collapse-toggle="navbar-hamburger"
//             type="button"
//             className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-hamburger"
//             aria-expanded="false"
//             onClick={() => setShowSections(!showSections)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="max-w-screen-xl mx-auto mt-8">

//       </div>

//       {/* Section Content */}
//       {showSections && (
//         <div className="max-w-screen-xl mx-auto mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 to="/section1"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Section 1
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/section2"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Section 2
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/section3"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Section 3
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/section4"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Section 4
//               </Link>
//             </li>
//             <li>
//               <div
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
//                 onClick={() => {
//                   localStorage.removeItem("token");
//                   window.location.href = "/";
//                 }}
//               >
//                 Logout
//               </div>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NavBar;

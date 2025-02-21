// import React, { useState } from "react";

// const Sidebar = () => {
//   const [selectedTech, setSelectedTech] = useState(null);

//   // Dummy data for technology details (Only keeping 'Home')
//   const techDetails = [{ id: 1, name: "Home", href: "WelcomePage" }];

//   const handleTechClick = (tech) => {
//     setSelectedTech(tech);
//   };

//   return (
//     <div className="bg-gray-800 text-white w-1/7 py-8 sticky top-0">
//       <div className="px-8">
//         <ul>
//           {techDetails.map((tech) => (
//             <li key={tech.id} className="py-2">
//               <div
//                 className={`cursor-pointer transition-colors duration-200 ${
//                   selectedTech && selectedTech.id === tech.id
//                     ? "font-bold bg-gray-600"
//                     : "hover:bg-gray-400"
//                 }`}
//                 onClick={() => handleTechClick(tech)}
//               >
//                 <a href={tech.href} className="block px-2 py-1">
//                   {tech.name}
//                 </a>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

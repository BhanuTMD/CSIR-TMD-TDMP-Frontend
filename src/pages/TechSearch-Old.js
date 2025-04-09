// import FooterBar from "../Components/common/footer";
// import NavBar from "../Components/common/navBar";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import CustomSelect from "../Components/utils/CustomSelect";
// import * as Yup from "yup";
// import React, { useState } from 'react';
// import SectionOne from "../Components/table/SectionOneData";
// import SectionTwo from "../Components/table/SectionTwoData";
// import SectionThree from "../Components/table/SectionThreeData";
// import SectionFour from "../Components/table/SectionFourData";

// const industrialSector = [
//   {
//     label: " Agriculture and Allied Industries (AG&A)",
//     value: "AG&A",
//   },
//   {
//     label: "Auto Components (AUTOC)",
//     value: "AUTOC",
//   },
//   {
//     label: "Automobiles (AUTO)",
//     value: "AUTO",
//   },
//   {
//     label: "Aviation (AVT)",
//     value: "AVT",
//   },
//   {
//     label: "Banking (BNK)",
//     value: "BNK",
//   },
//   {
//     label: "Biotechnology (BIOT)",
//     value: "BIOT",
//   },
//   {
//     label: "Cement (CEM)",
//     value: "CEM",
//   },
//   {
//     label: "Chemicals (CHE) ",
//     value: "CHE",
//   },
//   {
//     label: "Consumer Durables (CONSD)",
//     value: "CONSD",
//   },
//   {
//     label: "Defence Manufacturing (DEFM)",
//     value: "DEFM",
//   },
//   {
//     label: "Education and Training (EDU&T)",
//     value: "EDU&T",
//   },
//   {
//     label: "Electronics System Design & Manufacturing (ESDM)",
//     value: "ESDM",
//   },
//   {
//     label: "Engineering and Capital Goods (EN&CG)",
//     value: "EN&CG",
//   },
//   {
//     label: "Financial Services (FINS)",
//     value: "FINS",
//   },
//   {
//     label: "Fast Moving Consumer Goods (FMCG)",
//     value: "FMCG",
//   },
//   {
//     label: "Gems and Jewellery (GEMJ)",
//     value: "GEMJ",
//   },
//   {
//     label: "Healthcare (HTC)",
//     value: "HTC",
//   },
//   {
//     label: "Infrastructure (INF)",
//     value: "INF",
//   },
//   {
//     label: "Insurance (INS)",
//     value: "INS",
//   },
//   {
//     label: "IT & Business Process Management (IT&BPM)",
//     value: "IT&BPM",
//   },
//   {
//     label: "Leather & Non-Leather (LEA)",
//     value: "LEA",
//   },
//   {
//     label: "Manufacturing (MNF)",
//     value: "MNF",
//   },
//   {
//     label: "Media and Entertainment (M&E)",
//     value: "M&E",
//   },
//   {
//     label: "Medical Devices (MEDD)",
//     value: "MEDD",
//   },
//   {
//     label: "Metals and Mining (M&M)",
//     value: "M&M",
//   },
//   {
//     label: "Micro, Small and Medium Enterprises (MSME)",
//     value: "MSME",
//   },
//   {
//     label: "Oil and Gas (O&G)",
//     value: "O&G",
//   },
//   {
//     label: "Pharmaceuticals (pharma)",
//     value: "pharma",
//   },
//   {
//     label: "Ports and Shipping (P&S)",
//     value: "P&S",
//   },
//   {
//     label: "Power (PSL)",
//     value: "PSL",
//   },
//   {
//     label: "Railways (RLT)",
//     value: "RLT",
//   },
//   {
//     label: "Real Estate (RE)",
//     value: "RE",
//   },
//   {
//     label: "Renewable Energy (RE)",
//     value: "RE",
//   },
//   {
//     label: "Roads and Highways (R&H)",
//     value: "R&H",
//   },
//   {
//     label: "Science and Technology (SC)",
//     value: "SC",
//   },
//   {
//     label: "Services (SRV)",
//     value: "SRV",
//   },
//   {
//     label: "Space (SP)",
//     value: "SP",
//   },
//   {
//     label: "Telecom (T&P)",
//     value: "T&P",
//   },
//   {
//     label: "Textiles and Garments (TSM)",
//     value: "TSM",
//   },
//   {
//     label: "Tourism and Hospitality (TOU)",
//     value: "TOU",
//   },
//   {
//     label: "Others (OTR)",
//     value: "OTR",
//   },
// ];

// const theme = [
//   {
//     label:
//       "Aerospace, Electronics and Instrumentation & Strategic Sector (AEISS)",
//     value: "(AEISS)",
//   },
//   {
//     label: "Chemical (including leather) and   Postchemicals (CLP)",
//     value: "(CLP)",
//   },
//   {
//     label: "Ecology, Environment, Earth & Ocean & Science and Water (ESS)",
//     value: "(ESS)",
//   },
//   {
//     label: "Ecology, Environment, Earth & Ocean & Science and Water (EOW)",
//     value: "(EOW)",
//   },
//   {
//     label: "Civil, Infrastructure & Engineering (CIE)",
//     value: "(CIE)",
//   },
//   {
//     label: "Agri, Nutrition & Biotechnology & Strategic Sector (ANB)",
//     value: "(ANB)",
//   },
//   {
//     label: " Mining, Minirals, Metal and Materials (4M)",
//     value: "(4M)",
//   },
//   {
//     label:
//       "Healthcare-Chemical Drugs,Phytopharmaceuticals,Biopharmaceutical,and Regulatory (HTC)",
//     value: "(HTC)",
//   },
// ];

// const labNo = [
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
//     label: "CSIR-Center for Cellular Molecular Biology (CSIR-CCMB), Hyderabad",
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
//     label: "CSIR-Indian Institute of Toxicology Research (CSIR-IITR), Lucknow",
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


// const TechSearch = () => {
//   const initialValues = {
//     industrialSector: "",
//     labNo: "",
//     themeNo: "",
//     trnNo: "",
//     sectionSelect: ""
//   };

//   const validationSchema = Yup.object({
//     // Uncomment and add validation as needed
//     // industrialSector: Yup.string().required("Required"),
//     // labNo: Yup.string().required("Required"),
//     // themeNo: Yup.string().required("Required"),
//     // trnNo: Yup.string().required("Required"),
//     // sectionSelect: Yup.string().required("Required"),
//   });

//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedSection, setSelectedSection] = useState('');


//   const handleSubmit = (values) => {
//     console.log("Submitted Data:", values);
//     fetchData(values);
//   };

//   const fetchData = async (values) => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:8080/apf/tdmp/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           theme: values.themeNo,
//           industrialSector: values.industrialSector,
//           lab: values.labNo,
//           technologyRefNo: values.trnNo,
//           page: 0,
//           size: 10,
//         }),
//       });
//       const result = await response.json();
//       setData(result); // Store the entire response
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSectionChange = (event) => {
//     setSelectedSection(event.target.value);
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="flex">
//         <div className="bg-gray-800"></div>
//         <div className="flex-1 p-8 bg-blue-200 border">
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             <Form>
//               <div className="grid grid-cols-4 gap-4">
//                 {/* Industrial Sector Dropdown */}
//                 <div className="form-group mb-4">
//                   <label className="font-bold" htmlFor="industrialSector">
//                     INDUSTRIAL SECTOR
//                   </label>
//                   <Field
//                     name="industrialSector"
//                     options={industrialSector}
//                     component={CustomSelect}
//                     placeholder="Select Industrial Sector..."
//                   />
//                   <ErrorMessage
//                     name="industrialSector"
//                     component="div"
//                     className="text-red-500"
//                   />
//                 </div>

//                 {/* Lab No Dropdown */}
//                 <div className="form-group mb-4">
//                   <label className="font-bold" htmlFor="labNo">
//                     LAB NO
//                   </label>
//                   <Field
//                     name="labNo"
//                     options={labNo}
//                     component={CustomSelect}
//                     placeholder="Select List Of Lab From here..."
//                   />
//                   <ErrorMessage
//                     name="labNo"
//                     component="div"
//                     className="text-red-500"
//                   />
//                 </div>

//                 {/* Theme No Dropdown */}
//                 <div className="form-group mb-4">
//                   <label className="font-bold" htmlFor="themeNo">
//                     THEME NO
//                   </label>
//                   <Field
//                     name="themeNo"
//                     options={theme}
//                     component={CustomSelect}
//                     placeholder="Select a Theme..."
//                   />
//                   <ErrorMessage
//                     name="themeNo"
//                     component="div"
//                     className="text-red-500"
//                   />
//                 </div>

//                 {/* TRN No Input Field */}
//                 <div className="form-group mb-4">
//                   <label className="font-bold" htmlFor="trnNo">
//                     TRN NO
//                   </label>
//                   <Field
//                     type="text"
//                     name="trnNo"
//                     className="w-full p-2 text-md outline-0.1 rounded-md"
//                     placeholder="Enter TRN No"
//                   />
//                   <ErrorMessage
//                     name="trnNo"
//                     component="div"
//                     className="text-red-500"
//                   />
//                 </div>
//               </div>

//               <div className="form-group mb-4 flex justify-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Enter
//                 </button>
//               </div>

//               <div className="form-group mb-4">
//                 <label
//                   className="font-bold flex justify-between"
//                   htmlFor="sectionSelect"
//                 >
//                   SECTION
//                   <span className="Hint block text-xs text-red-500 inline text-end"></span>
//                 </label>
//                 <Field
//                   name="sectionSelect"
//                   as="select"
//                   className="w-full p-2 text-lg outline-0.1 rounded-md"
//                   onChange={handleSectionChange}
//                 >
//                   <option value="">-- Select Section--</option>
//                   <option value="SectionOne">SectionOne</option>
//                   <option value="SectionTwo">SectionTwo</option>
//                   <option value="SectionThree">SectionThree</option>
//                   <option value="SectionFour">SectionFour</option>
//                 </Field>
//                 <ErrorMessage
//                   name="sectionSelect"
//                   component="div"
//                   className="text-red-500"
//                 />
//               </div>
//             </Form>
//           </Formik>

//           {/* Data Table */}
//           {/* Display data based on selected section */}
//           {loading ? (
//             <div className="text-center py-8">Loading...</div>
//           ) : (
//             <>
//             {selectedSection === "SectionOne" && <SectionOne data={data} />}
//             {selectedSection === "SectionTwo" && <SectionTwo data={data} />}
//             {selectedSection === "SectionThree" && <SectionThree data={data} />}
//             {selectedSection === "SectionFour" && <SectionFour data={data} />}
//           </>
//         )}
//         </div>
//       </div>
//       <FooterBar />
//     </>
//   );
// };

// export default TechSearch;
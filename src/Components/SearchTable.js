import React, { useState } from "react";

const TenColumnTable = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // State for data (initially empty, will be filled from backend)
  //const [tableData,setTableData] = useState([...])
  const [tableData] = useState([]);

  // Column headers
  const columns = [
    "Technology /Knowhow Ref No",
    "Keywords for Technology / Knowhow",
    "Name of Technology / Knowhow:",
    "Industrial Sector",
    "Lead Laboratory / Institute",
    "Theme",
    "Multi Laboratories / Institutes ",
    "If Yes,Please Specify Labs/Institutes",
    "Technology Readiness Level (TRL)",
    "Scale of Development",
    "Year of Development",
    "Brief details of Technology / Knowhow",
    "Competitive Positioning in the domain (how is it better than competing technology)/Technology Benchmarking",
    "Potential Stakeholders",
    "Techno-economics (including development & deployment cost,operational cost, payback period etc.)",
    "Market Potential ",
    "Environmental considerations / Statutory regulatory compliance details",
    "Upload High-Resolution Picture",
    "Contact Details of Laboratory",
  ];

  // Filtered data
  const filteredData = tableData.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePrint = () => {
    window.print();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search table..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Print Table
        </button>
      </div>

      <div className="w-full max-w-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md print:border-collapse">
          <thead>
            <tr className="bg-blue-100">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-center border border-gray-300 font-semibold text-blue-800 print:border print:border-gray-300"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200 print:break-inside-avoid"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-2 text-center border border-gray-300 text-gray-700 print:border print:border-gray-300"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenColumnTable;

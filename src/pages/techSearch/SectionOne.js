import React from 'react';

const SectionOne = ({ data }) => {

    // const handlePrintAll = () => {
    //     const newWindow = window.open('', '', 'width=800,height=600');
    //     const sectionTitle = "Section One - Technology Details";

    //     const rowHTML = `
    //       <html>
    //         <head>
    //           <title>Print Preview - ${sectionTitle}</title>
    //           <style>
    //             body { font-family: Arial, sans-serif; padding: 20px; }
    //             table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    //             th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    //             th { background-color: #f9f9f9; }
    //           </style>
    //         </head>
    //         <body>
    //           <h2>${sectionTitle}</h2>
    //           <table>
    //             <thead>
    //               <tr>
    //                 <th>TRN No</th>
    //                 <th>Technology Name</th>
    //                 <th>Keywords</th>
    //                 <th>Industrial Sector</th>
    //                 <th>Multi Lab Institute</th>
    //                 <th>Lead Lab</th>
    //                 <th>Associate Institutes</th>
    //                 <th>Theme</th>
    //                 <th>Technology Level</th>
    //                 <th>Scale of Development</th>
    //                 <th>Year of Development</th>
    //                 <th>Brief</th>
    //                 <th>Competitive Position</th>
    //                 <th>Stakeholders</th>
    //                 <th>Techno Economics</th>
    //                 <th>Market Potential</th>
    //                 <th>Environmental Statutory</th>
    //                 <th>Laboratory Details</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               ${data.sectionOneList.map(item => `
    //                 <tr>
    //                   <td>${item.technologyRefNo || '-'}</td>
    //                   <td>${item.nameTechnology || '-'}</td>
    //                   <td>${item.keywordTechnology || '-'}</td>
    //                   <td>${item.industrialSector?.join(', ') || '-'}</td>
    //                   <td>${item.multiLabInstitute || '-'}</td>
    //                   <td>${item.leadLaboratory || '-'}</td>
    //                   <td>${item.associateInstitute?.join(', ') || '-'}</td>
    //                   <td>${item.theme?.join(', ') || '-'}</td>
    //                   <td>${item.technologyLevel || '-'}</td>
    //                   <td>${item.scaleDevelopment || '-'}</td>
    //                   <td>${item.yearDevelopment || '-'}</td>
    //                   <td>${item.briefTech || '-'}</td>
    //                   <td>${item.competitivePosition || '-'}</td>
    //                   <td>${item.stakeHolders?.join(', ') || '-'}</td>
    //                   <td>${item.technoEconomics || '-'}</td>
    //                   <td>${item.marketPotential || '-'}</td>
    //                   <td>${item.environmentalStatutory || '-'}</td>
    //                   <td>${item.laboratoryDetail || '-'}</td>
    //                 </tr>
    //               `).join('')}
    //             </tbody>
    //           </table>
    //           <script>
    //             window.onload = function() {
    //               window.print();
    //             }
    //           </script>
    //         </body>
    //       </html>
    //     `;
    //     newWindow.document.write(rowHTML);
    //     newWindow.document.close();
    // };
    const handlePrintRow = (item) => {
        const newWindow = window.open('', '', 'width=800,height=600');
        const rowHTML = `
          <html>
            <head>
              <title>Print Preview - ${item.nameTechnology || 'Technology'}</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
                th { background-color: #f9f9f9; }
              </style>
            </head>
            <body>
              <h2>Technology Detail - ${item.nameTechnology || '-'}</h2>
              <table>
                <tbody>
                  <tr><th>TRN No</th><td>${item.technologyRefNo || '-'}</td></tr>
                  <tr><th>Technology Name</th><td>${item.nameTechnology || '-'}</td></tr>
                  <tr><th>Keywords</th><td>${item.keywordTechnology || '-'}</td></tr>
                  <tr><th>Industrial Sector</th><td>${item.industrialSector?.join(', ') || '-'}</td></tr>
                  <tr><th>Multi Lab Institute</th><td>${item.multiLabInstitute || '-'}</td></tr>
                  <tr><th>Lead Lab</th><td>${item.leadLaboratory || '-'}</td></tr>
                  <tr><th>Associate Institutes</th><td>${item.associateInstitute?.join(', ') || '-'}</td></tr>
                  <tr><th>Theme</th><td>${item.theme?.join(', ') || '-'}</td></tr>
                  <tr><th>Technology Level</th><td>${item.technologyLevel || '-'}</td></tr>
                  <tr><th>Scale of Development</th><td>${item.scaleDevelopment || '-'}</td></tr>
                  <tr><th>Year of Development</th><td>${item.yearDevelopment || '-'}</td></tr>
                  <tr><th>Brief</th><td>${item.briefTech || '-'}</td></tr>
                  <tr><th>Competitive Position</th><td>${item.competitivePosition || '-'}</td></tr>
                  <tr><th>Stakeholders</th><td>${item.stakeHolders?.join(', ') || '-'}</td></tr>
                  <tr><th>Techno Economics</th><td>${item.technoEconomics || '-'}</td></tr>
                  <tr><th>Market Potential</th><td>${item.marketPotential || '-'}</td></tr>
                  <tr><th>Environmental Statutory</th><td>${item.environmentalStatutory || '-'}</td></tr>
                  <tr><th>Laboratory Details</th><td>${item.laboratoryDetail || '-'}</td></tr>
                </tbody>
              </table>
              <script>
                window.onload = function() {
                  window.print();
                }
              </script>
            </body>
          </html>
        `;
        newWindow.document.write(rowHTML);
        newWindow.document.close();
    };
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Section One - Technology Details</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">TRN No</th>
                            <th className="py-2 px-4 border">Technology Name</th>
                            <th className="py-2 px-4 border">Keywords</th>
                            <th className="py-2 px-4 border">Industrial Sector</th>
                            <th className="py-2 px-4 border">Multi Lab Institute</th>
                            <th className="py-2 px-4 border">Lead Lab</th>
                            <th className="py-2 px-4 border">Associate Institutes</th>
                            <th className="py-2 px-4 border">Theme</th>
                            <th className="py-2 px-4 border">Technology Level</th>
                            <th className="py-2 px-4 border">Scale of Development</th>
                            <th className="py-2 px-4 border">Year of Development</th>
                            <th className="py-2 px-4 border">Brief</th>
                            <th className="py-2 px-4 border">Competitive Position</th>
                            <th className="py-2 px-4 border">Stakeholders</th>
                            <th className="py-2 px-4 border">Techno Economics</th>
                            <th className="py-2 px-4 border">Market Potential</th>
                            <th className="py-2 px-4 border">Environmental Statutory</th>
                            <th className="py-2 px-4 border">Laboratory Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sectionOneList.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                                <td className="py-2 px-4 border">{item.nameTechnology || '-'}</td>
                                <td className="py-2 px-4 border">{item.keywordTechnology || '-'}</td>
                                <td className="py-2 px-4 border">
                                    {item.industrialSector?.join(', ') || '-'}
                                </td>
                                <td className="py-2 px-4 border">{item.multiLabInstitute || '-'}</td>
                                <td className="py-2 px-4 border">{item.leadLaboratory || '-'}</td>
                                <td className="py-2 px-4 border">
                                    {item.associateInstitute?.join(', ') || '-'}
                                </td>
                                <td className="py-2 px-4 border">
                                    {item.theme?.join(', ') || '-'}
                                </td>
                                <td className="py-2 px-4 border">{item.technologyLevel || '-'}</td>
                                <td className="py-2 px-4 border">{item.scaleDevelopment || '-'}</td>
                                <td className="py-2 px-4 border">{item.yearDevelopment || '-'}</td>
                                <td className="py-2 px-4 border">{item.briefTech || '-'}</td>
                                <td className="py-2 px-4 border">{item.competitivePosition || '-'}</td>
                                <td className="py-2 px-4 border">
                                    {item.stakeHolders?.join(', ') || '-'}
                                </td>
                                <td className="py-2 px-4 border">{item.technoEconomics || '-'}</td>
                                <td className="py-2 px-4 border">{item.marketPotential || '-'}</td>
                                <td className="py-2 px-4 border">{item.environmentalStatutory || '-'}</td>
                                <td className="py-2 px-4 border">{item.laboratoryDetail || '-'}</td>
                                <td className="py-2 px-4 border">
                                    <td className="py-2 px-4 border">
                                        <button
                                            onClick={() => handlePrintRow(item)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Print
                                        </button>
                                    </td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {data.picture && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Technology Image</h3>
                    <img
                        src={data.picture}
                        alt="Technology visual representation"
                        className="max-w-full h-auto rounded border"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Available';
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default SectionOne;



//new code with checkbox and radio button

// import React, { useState } from 'react';

// const SectionOne = ({ data, handlePrintRow }) => {
//     const [selectedRows, setSelectedRows] = useState([]);

//     const toggleRowSelection = (item) => {
//         setSelectedRows((prev) => {
//             const exists = prev.find((row) => row.technologyRefNo === item.technologyRefNo);
//             if (exists) {
//                 return prev.filter((row) => row.technologyRefNo !== item.technologyRefNo);
//             } else {
//                 return [...prev, item];
//             }
//         });
//     };

//     const handlePrintSelected = () => {
//         if (selectedRows.length === 0) {
//             alert("Please select at least one row to print.");
//             return;
//         }
//         handlePrintRow(selectedRows);
//     };

//     return (
//         <div className="mt-8">
//             <h2 className="text-xl font-bold mb-4">Section One - Technology Details</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white border">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="py-2 px-4 border">Select</th>
//                             <th className="py-2 px-4 border">TRN No</th>
//                             <th className="py-2 px-4 border">Technology Name</th>
//                             <th className="py-2 px-4 border">Keywords</th>
//                             <th className="py-2 px-4 border">Industrial Sector</th>
//                             <th className="py-2 px-4 border">Multi Lab Institute</th>
//                             <th className="py-2 px-4 border">Lead Lab</th>
//                             <th className="py-2 px-4 border">Associate Institutes</th>
//                             <th className="py-2 px-4 border">Theme</th>
//                             <th className="py-2 px-4 border">Technology Level</th>
//                             <th className="py-2 px-4 border">Scale of Development</th>
//                             <th className="py-2 px-4 border">Year of Development</th>
//                             <th className="py-2 px-4 border">Brief</th>
//                             <th className="py-2 px-4 border">Competitive Position</th>
//                             <th className="py-2 px-4 border">Stakeholders</th>
//                             <th className="py-2 px-4 border">Techno Economics</th>
//                             <th className="py-2 px-4 border">Market Potential</th>
//                             <th className="py-2 px-4 border">Environmental Statutory</th>
//                             <th className="py-2 px-4 border">Laboratory Details</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.sectionOneList.map((item, index) => (
//                             <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
//                                 <td className="py-2 px-4 border text-center">
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedRows.some(row => row.technologyRefNo === item.technologyRefNo)}
//                                         onChange={() => toggleRowSelection(item)}
//                                     />
//                                 </td>
//                                 <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.nameTechnology || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.keywordTechnology || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.industrialSector?.join(', ') || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.multiLabInstitute || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.leadLaboratory || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.associateInstitute?.join(', ') || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.theme?.join(', ') || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.technologyLevel || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.scaleDevelopment || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.yearDevelopment || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.briefTech || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.competitivePosition || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.stakeHolders?.join(', ') || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.technoEconomics || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.marketPotential || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.environmentalStatutory || '-'}</td>
//                                 <td className="py-2 px-4 border">{item.laboratoryDetail || '-'}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="mt-4">
//                 <button
//                     onClick={handlePrintSelected}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Print Selected
//                 </button>
//             </div>

//             {data.picture && (
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold mb-2">Technology Image</h3>
//                     <img
//                         src={data.picture}
//                         alt="Technology visual representation"
//                         className="max-w-full h-auto rounded border"
//                         onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Available';
//                         }}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SectionOne;

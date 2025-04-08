import React from "react";
const SectionTwo = ({ data }) => {
    if (!data || data.length === 0) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Section Two - IPR Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">TRN No</th>
                <th className="py-2 px-4 border">IPR Type</th>
                <th className="py-2 px-4 border">Registration No</th>
                <th className="py-2 px-4 border">Status</th>
                <th className="py-2 px-4 border">Status Date</th>
                <th className="py-2 px-4 border">Countries</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                  <td className="py-2 px-4 border">{item.iprType || '-'}</td>
                  <td className="py-2 px-4 border">{item.registrationNo || '-'}</td>
                  <td className="py-2 px-4 border">{item.status || '-'}</td>
                  <td className="py-2 px-4 border">{item.statusDate || '-'}</td>
                  <td className="py-2 px-4 border">{item.countries?.join(', ') || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SectionTwo;
  
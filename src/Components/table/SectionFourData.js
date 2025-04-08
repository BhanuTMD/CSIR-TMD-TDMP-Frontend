import React from "react";
const SectionFour = ({ data }) => {
    if (!data || data.length === 0) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Section Four - Deployment Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">TRN No</th>
                <th className="py-2 px-4 border">Client Name</th>
                <th className="py-2 px-4 border">Address</th>
                <th className="py-2 px-4 border">City</th>
                <th className="py-2 px-4 border">Country</th>
                <th className="py-2 px-4 border">Contact Person</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                  <td className="py-2 px-4 border">{item.clientName || '-'}</td>
                  <td className="py-2 px-4 border">{item.clientAddress || '-'}</td>
                  <td className="py-2 px-4 border">{item.city || '-'}</td>
                  <td className="py-2 px-4 border">{item.country || '-'}</td>
                  <td className="py-2 px-4 border">{item.nodalContactPerson || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SectionFour;
  
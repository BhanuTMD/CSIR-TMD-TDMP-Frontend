import React from "react";
const SectionThree = ({ data }) => {
    if (!data || data.length === 0) return null;
  
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Section Three - Licensing Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border">TRN No</th>
                <th className="py-2 px-4 border">License Name</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Region</th>
                <th className="py-2 px-4 border">Valid Until</th>
                <th className="py-2 px-4 border">Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                  <td className="py-2 px-4 border">{item.licenseName || '-'}</td>
                  <td className="py-2 px-4 border">{item.typeOfLicense || '-'}</td>
                  <td className="py-2 px-4 border">{item.staRegionalGeography || '-'}</td>
                  <td className="py-2 px-4 border">{item.licenseValidUntil || '-'}</td>
                  <td className="py-2 px-4 border">{item.grandTotal || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SectionThree;
  
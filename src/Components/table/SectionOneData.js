import React from "react";
const SectionOne = ({ data }) => {
    if (!data || data.length === 0) return null;
  
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
                <th className="py-2 px-4 border">Lead Lab</th>
                <th className="py-2 px-4 border">Technology Level</th>
                <th className="py-2 px-4 border">Brief</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                  <td className="py-2 px-4 border">{item.nameTechnology || '-'}</td>
                  <td className="py-2 px-4 border">{item.keywordTechnology || '-'}</td>
                  <td className="py-2 px-4 border">{item.industrialSector?.join(', ') || '-'}</td>
                  <td className="py-2 px-4 border">{item.leadLaboratory || '-'}</td>
                  <td className="py-2 px-4 border">{item.technologyLevel || '-'}</td>
                  <td className="py-2 px-4 border">{item.briefTech || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SectionOne;
  
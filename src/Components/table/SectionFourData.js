import React from "react";

const SectionFour = ({ data }) => {
  // 1. First, log the actual data structure to console
  console.log("API Response Data:", data);

  // 2. Handle cases where data might be null/undefined
  if (!data) {
    return <div className="mt-8 text-center text-gray-500">Loading data...</div>;
  }

  // 3. Extract the actual deployment data based on common response structures
  let deploymentData = [];

  // Case 1: Data is directly an array of deployments
  if (Array.isArray(data)) {
    deploymentData = data;
  } 
  // Case 2: Data is an object with a content array (common in paginated APIs)
  else if (data.content && Array.isArray(data.content)) {
    deploymentData = data.content;
  }
  // Case 3: Data has a specific deployments property
  else if (data.deployments && Array.isArray(data.deployments)) {
    deploymentData = data.deployments;
  }
  // Case 4: Data is a single deployment object
  else if (data.technologyRefNo) { // Check for any deployment property
    deploymentData = [data]; // Wrap single object in array
  }
  // Add more cases as needed based on your actual API response

  // 4. After extraction, check if we have any data
  if (deploymentData.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500">
        No deployment details found in the response.
        <div className="text-xs mt-2">
          (Expected array of deployments but got: {JSON.stringify(data)})
        </div>
      </div>
    );
  }

  // 5. Render the table with the extracted data
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
            {deploymentData.map((deployment, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border">{deployment.technologyRefNo || '-'}</td>
                <td className="py-2 px-4 border">{deployment.clientName || '-'}</td>
                <td className="py-2 px-4 border">{deployment.clientAddress || '-'}</td>
                <td className="py-2 px-4 border">{deployment.city || '-'}</td>
                <td className="py-2 px-4 border">{deployment.country || '-'}</td>
                <td className="py-2 px-4 border">{deployment.nodalContactPerson || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SectionFour;
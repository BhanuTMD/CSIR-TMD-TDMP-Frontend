import React from 'react';

const SectionThree = ({ data }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Section Three - Licensing Details</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">TRN No</th>
                            <th className="py-2 px-4 border">License Name</th>
                            <th className="py-2 px-4 border">Agreement Date</th>
                            <th className="py-2 px-4 border">License Type</th>
                            <th className="py-2 px-4 border">Region</th>
                            <th className="py-2 px-4 border">Exclusivity</th>
                            <th className="py-2 px-4 border">License Date</th>
                            <th className="py-2 px-4 border">Validity</th>
                            <th className="py-2 px-4 border">Payment Terms</th>
                            <th className="py-2 px-4 border">Royalty</th>
                            <th className="py-2 px-4 border">Premia</th>
                            <th className="py-2 px-4 border">Sub Total Royalty</th>
                            <th className="py-2 px-4 border">Sub Total Premia</th>
                            <th className="py-2 px-4 border">Grand Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sectionThreeList.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                <td className="py-2 px-4 border">{item.technologyRefNo || '-'}</td>
                                <td className="py-2 px-4 border">{item.licenseName || '-'}</td>
                                <td className="py-2 px-4 border">{item.dateOfAgreementSigning || '-'}</td>
                                <td className="py-2 px-4 border">{item.typeOfLicense || '-'}</td>
                                <td className="py-2 px-4 border">{item.staRegionalGeography || '-'}</td>
                                <td className="py-2 px-4 border">{item.detailsOfExclusivity || '-'}</td>
                                <td className="py-2 px-4 border">{item.dateOfLicense || '-'}</td>
                                <td className="py-2 px-4 border">{item.licenseValidUntil || '-'}</td>
                                <td className="py-2 px-4 border">{item.paymentTerms || '-'}</td>
                                <td className="py-2 px-4 border">
                                    {(item.royalty || []).map((royalty, idx) => (
                                        <div key={idx} className="mb-1">
                                            ₹{royalty.amount} on {royalty.date}
                                        </div>
                                    ))}
                                    {(!item.royalty || item.royalty.length === 0) && '-'}
                                </td>
                                <td className="py-2 px-4 border">
                                    {(item.premia || []).map((premia, idx) => (
                                        <div key={idx} className="mb-1">
                                            ₹{premia.amount} on {premia.date}
                                        </div>
                                    ))}
                                    {(!item.premia || item.premia.length === 0) && '-'}
                                </td>
                                <td className="py-2 px-4 border">₹{item.subTotalRoyalty || '0'}</td>
                                <td className="py-2 px-4 border">₹{item.subTotalPremia || '0'}</td>
                                <td className="py-2 px-4 border">₹{item.grandTotal || '0'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SectionThree;
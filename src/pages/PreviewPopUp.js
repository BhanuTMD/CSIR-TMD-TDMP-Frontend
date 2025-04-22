import React from 'react';

const PreviewPopUp = ({ item, onClose }) => {
    return (
        <div className="popup-container">
            <h2>Technology Detail - {item.nameTechnology || '-'}</h2>
            <table className="popup-table">
                <tbody>
                    <tr>
                        <th>TRN No</th>
                        <td>{item.technologyRefNo || '-'}</td>
                    </tr>
                    <tr>
                        <th>Technology Name</th>
                        <td>{item.nameTechnology || '-'}</td>
                    </tr>
                    <tr>
                        <th>Keywords</th>
                        <td>{item.keywordTechnology || '-'}</td>
                    </tr>
                    <tr>
                        <th>Industrial Sector</th>
                        <td>{item.industrialSector?.join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <th>Multi Lab Institute</th>
                        <td>{item.multiLabInstitute || '-'}</td>
                    </tr>
                    <tr>
                        <th>Lead Lab</th>
                        <td>{item.leadLaboratory || '-'}</td>
                    </tr>
                    <tr>
                        <th>Associate Institutes</th>
                        <td>{item.associateInstitute?.join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <th>Theme</th>
                        <td>{item.theme?.join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <th>Technology Level</th>
                        <td>{item.technologyLevel || '-'}</td>
                    </tr>
                    <tr>
                        <th>Scale of Development</th>
                        <td>{item.scaleDevelopment || '-'}</td>
                    </tr>
                    <tr>
                        <th>Year of Development</th>
                        <td>{item.yearDevelopment || '-'}</td>
                    </tr>
                    <tr>
                        <th>Brief</th>
                        <td>{item.briefTech || '-'}</td>
                    </tr>
                    <tr>
                        <th>Competitive Position</th>
                        <td>{item.competitivePosition || '-'}</td>
                    </tr>
                    <tr>
                        <th>Stakeholders</th>
                        <td>{item.stakeHolders?.join(', ') || '-'}</td>
                    </tr>
                    <tr>
                        <th>Techno Economics</th>
                        <td>{item.technoEconomics || '-'}</td>
                    </tr>
                    <tr>
                        <th>Market Potential</th>
                        <td>{item.marketPotential || '-'}</td>
                    </tr>
                    <tr>
                        <th>Environmental Statutory</th>
                        <td>{item.environmentalStatutory || '-'}</td>
                    </tr>
                    <tr>
                        <th>Laboratory Details</th>
                        <td>{item.laboratoryDetail || '-'}</td>
                    </tr>
                </tbody>
            </table>
            <button className="close-button" onClick={onClose}>
                Close
            </button>
        </div>
    );
};

export default PreviewPopUp;
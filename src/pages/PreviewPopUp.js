import React from 'react';

const PrintPreview = ({ item }) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h2>Technology Detail - {item.nameTechnology || '-'}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <tbody>
                    <tr><th style={styles.th}>TRN No</th><td style={styles.td}>{item.technologyRefNo || '-'}</td></tr>
                    <tr><th style={styles.th}>Technology Name</th><td style={styles.td}>{item.nameTechnology || '-'}</td></tr>
                    <tr><th style={styles.th}>Keywords</th><td style={styles.td}>{item.keywordTechnology || '-'}</td></tr>
                    <tr><th style={styles.th}>Industrial Sector</th><td style={styles.td}>{item.industrialSector?.join(', ') || '-'}</td></tr>
                    <tr><th style={styles.th}>Multi Lab Institute</th><td style={styles.td}>{item.multiLabInstitute || '-'}</td></tr>
                    <tr><th style={styles.th}>Lead Lab</th><td style={styles.td}>{item.leadLaboratory || '-'}</td></tr>
                    <tr><th style={styles.th}>Associate Institutes</th><td style={styles.td}>{item.associateInstitute?.join(', ') || '-'}</td></tr>
                    <tr><th style={styles.th}>Theme</th><td style={styles.td}>{item.theme?.join(', ') || '-'}</td></tr>
                    <tr><th style={styles.th}>Technology Level</th><td style={styles.td}>{item.technologyLevel || '-'}</td></tr>
                    <tr><th style={styles.th}>Scale of Development</th><td style={styles.td}>{item.scaleDevelopment || '-'}</td></tr>
                    <tr><th style={styles.th}>Year of Development</th><td style={styles.td}>{item.yearDevelopment || '-'}</td></tr>
                    <tr><th style={styles.th}>Brief</th><td style={styles.td}>{item.briefTech || '-'}</td></tr>
                    <tr><th style={styles.th}>Competitive Position</th><td style={styles.td}>{item.competitivePosition || '-'}</td></tr>
                    <tr><th style={styles.th}>Stakeholders</th><td style={styles.td}>{item.stakeHolders?.join(', ') || '-'}</td></tr>
                    <tr><th style={styles.th}>Techno Economics</th><td style={styles.td}>{item.technoEconomics || '-'}</td></tr>
                    <tr><th style={styles.th}>Market Potential</th><td style={styles.td}>{item.marketPotential || '-'}</td></tr>
                    <tr><th style={styles.th}>Environmental Statutory</th><td style={styles.td}>{item.environmentalStatutory || '-'}</td></tr>
                    <tr><th style={styles.th}>Laboratory Details</th><td style={styles.td}>{item.laboratoryDetail || '-'}</td></tr>
                </tbody>
            </table>
            {React.useEffect(() => {
                window.onload = function() {
                    window.print();
                };
            }, [])}
        </div>
    );
};
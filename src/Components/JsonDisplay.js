// src/JsonDisplay.js
import React, { useState, useEffect } from 'react';

const JsonDisplay = () => {
    const [data, setData] = useState(null);
    const [visibleColumns, setVisibleColumns] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // Fetch the JSON data
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/api/your-endpoint'); // Replace with your API endpoint
            const result = await response.json();
            setData(result);

            // Set up columns based on the first item in sectionOneList
            if (result.sectionOneList.length > 0) {
                const keys = Object.keys(result.sectionOneList[0]);
                const initialVisibleColumns = {};
                keys.forEach(key => {
                    initialVisibleColumns[key] = true; // Set all columns to be visible by default
                });
                setVisibleColumns(initialVisibleColumns);
                setColumns(keys);
            }
        };
        fetchData();
    }, []);

    const handleColumnToggle = (column) => {
        setVisibleColumns((prev) => ({ ...prev, [column]: !prev[column] }));
    };

    const handlePrint = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write('<h1>JSON Data</h1>');
        if (data) {
            printWindow.document.write('<table border="1"><thead><tr>');
            columns.forEach((column) => {
                if (visibleColumns[column]) {
                    printWindow.document.write(`<th>${column}</th>`);
                }
            });
            printWindow.document.write('</tr></thead><tbody>');
            data.sectionOneList.forEach((item) => {
                printWindow.document.write('<tr>');
                columns.forEach((column) => {
                    if (visibleColumns[column]) {
                        printWindow.document.write(`<td>${item[column]}</td>`);
                    }
                });
                printWindow.document.write('</tr>');
            });
            printWindow.document.write('</tbody></table>');
        }
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div>
            <h1>JSON Data Display</h1>
            <div>
                <h3>Select Columns to Display:</h3>
                {columns.map((column) => (
                    <div key={column}>
                        <input
                            type="checkbox"
                            checked={visibleColumns[column]}
                            onChange={() => handleColumnToggle(column)}
                        />
                        <label>{column}</label>
                    </div>
                ))}
            </div>
            {data && (
                <table>
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                visibleColumns[column] && <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.sectionOneList.map((item) => (
                            <tr key={item.technologyRefNo}>
                                {columns.map((column) => (
                                    visibleColumns[column] && <td key={column}>{item[column]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={handlePrint}>Print</button>
        </div>
    );
};

export default JsonDisplay;
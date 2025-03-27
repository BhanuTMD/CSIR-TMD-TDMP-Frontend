// src/TechSearch.js
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const TechSearch = () => {
    const [searchParams, setSearchParams] = useState({
        theme: '',
        industrialSector: '',
        lab: '',
        technologyRefNo: '',
        page: 0,
        size: 10,
    });
    const [data, setData] = useState({
        sectionOneList: [],
        sectionTwoList: [],
        sectionThreeList: [],
        sectionFourList: [],
        totalPages: 0,
        totalElements: 0,
    });

    const handleSearch = async () => {
        const response = await fetch('http://localhost:8080/apf/tdmp/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchParams),
        });
        const result = await response.json();
        setData(result);
    };

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setSearchParams((prev) => ({ ...prev, page: selectedPage }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prev) => ({ ...prev, [name]: value }));
    };

    const handlePrint = (technologyRefNo) => {
        const printContent = data.sectionOneList.find(item => item.technologyRefNo === technologyRefNo);
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow.document.write(`<h1>${printContent.nameTechnology}</h1>`);
        printWindow.document.write(`<p>Technology Ref No: ${printContent.technologyRefNo}</p>`);
        printWindow.document.write(`<p>Industrial Sector: ${printContent.industrialSector}</p>`);
        printWindow.document.write(`<p>Theme: ${printContent.theme}</p>`);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    useEffect(() => {
        handleSearch();
    }, [searchParams.page]);

    return (
        <div>
            <h1>Technology Search</h1>
            <div>
                <input
                    type="text"
                    name="theme"
                    placeholder="Theme"
                    value={searchParams.theme}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="industrialSector"
                    placeholder="Industrial Sector"
                    value={searchParams.industrialSector}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="lab"
                    placeholder="Lab"
                    value={searchParams.lab}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="technologyRefNo"
                    placeholder="Technology Ref No"
                    value={searchParams.technologyRefNo}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Technology Ref No</th>
                        <th>Name</th>
                        <th>Industrial Sector</th>
                        <th>Theme</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.sectionOneList.map((item) => (
                        <tr key={item.technologyRefNo}>
                            <td>{item.technologyRefNo}</td>
                            <td>{item.nameTechnology}</td>
                            <td>{item.industrialSector}</td>
                            <td>{item.theme}</td>
                            <td>
                                <button onClick={() => handlePrint(item.technologyRefNo)}>Print</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={data.totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};

export default TechSearch;
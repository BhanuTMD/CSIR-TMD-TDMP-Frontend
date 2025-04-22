import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FooterBar from "../Components/common/footer";
import NavBar from "../Components/common/navBar";
import TechSearchForm from '../pages/techSearch/TechSearchForm';
import SectionOne from '../pages/techSearch/SectionOne';
import SectionTwo from '../pages/techSearch/SectionTwo';
import SectionThree from '../pages/techSearch/SectionThree';
import SectionFour from '../pages/techSearch/SectionFour';


const TechSearch = () => {
    const initialValues = {
        industrialSector: "",
        labNo: "",
        themeNo: "",
        trnNo: "",
        sectionSelect: ""
    };

    const validationSchema = Yup.object({
        // Validation schema
    });

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');

    const handleSectionChange = (event) => {
        const { value } = event.target;
        setSelectedSection(value);
    };

    const handleSubmit = (values) => {
        console.log("Submitted Data:", values);
        fetchData(values);
    };

    const fetchData = async (values) => {
        setLoading(true);
        try {
            const response = await fetch('http://172.16.2.102:8080/apf/tdmp/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    theme: values.themeNo,
                    industrialSector: values.industrialSector,
                    lab: values.labNo,
                    technologyRefNo: values.trnNo,
                    page: 0,
                    size: 10,
                }),
            });
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div className="flex">
                <div className="bg-gray-800"></div>
                <div className="flex-1 p-8 bg-blue-200 border">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <TechSearchForm 
                                selectedSection={selectedSection}
                                handleSectionChange={handleSectionChange}
                            />
                        </Form>
                    </Formik>

                    {(loading && <div className="text-center py-8">Loading...</div>) || (
                        <>
                            {(!selectedSection || selectedSection === 'SectionOne') && data.sectionOneList && (
                                <SectionOne data={data}  />
                            )}

                            {(!selectedSection || selectedSection === 'SectionTwo') && data.sectionTwoList && (
                                <SectionTwo data={data} />
                            )}

                            {(!selectedSection || selectedSection === 'SectionThree') && data.sectionThreeList && (
                                <SectionThree data={data} />
                            )}

                            {(!selectedSection || selectedSection === 'SectionFour') && data.sectionFourList && (
                                <SectionFour data={data} />
                            )}
                        </>
                    )}
                </div>
            </div>
            <FooterBar />
        </>
    );
};

export default TechSearch;
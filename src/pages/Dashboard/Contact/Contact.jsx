import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Sharing is Caring!!!" heading="Contact"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Contact</h3>
            </div>
        </div>
    );
};

export default Contact;
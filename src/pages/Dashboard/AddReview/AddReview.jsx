import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const AddReview = () => {
    return (
        <div>
            <Helmet>
                <title>Add Review | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Sharing is Caring!!!" heading="Give A Review"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Review</h3>
            </div>
        </div>
    );
};

export default AddReview;
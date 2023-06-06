import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
                <title>Payment History | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="At A Glance!" heading="Payment History"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Payment History</h3>
            </div>
        </div>
    );
};

export default PaymentHistory;
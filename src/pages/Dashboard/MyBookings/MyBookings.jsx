import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const MyBookings = () => {
    return (
        <div>
            <Helmet>
                <title>My Bookings | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Excellent Ambience" heading="My Bookings"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">My Bookings</h3>
            </div>
        </div>
    );
};

export default MyBookings;
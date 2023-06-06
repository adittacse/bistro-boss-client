import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const ManageBookings = () => {
    return (
        <div>
            <Helmet>
                <title>Manage Bookings | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="At A Glance!" heading="Manage All Bookings"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Manage Bookings</h3>
            </div>
        </div>
    );
};

export default ManageBookings;
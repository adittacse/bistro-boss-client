import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const Reservation = () => {
    return (
        <div>
            <Helmet>
                <title>Reservation | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Reservation" heading="Book A table"></SectionTitle>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Reservation</h3>
            </div>
        </div>
    );
};

export default Reservation;
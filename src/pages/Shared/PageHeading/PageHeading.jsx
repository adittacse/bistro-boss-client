import React from 'react';

const PageHeading = ({ subHeading, heading }) => {
    return (
        <div className="text-center mb-8">
            <h4 className="text-xl text-[#D99904] mb-4">---{subHeading}---</h4>
            <div className="divider w-1/3 mx-auto"></div>
            <h2 className="text-4xl uppercase">{heading}</h2>
            <div className="divider w-1/3 mx-auto"></div>
        </div>
    );
};

export default PageHeading;
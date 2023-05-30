import React from 'react';
import {Helmet} from "react-helmet-async";

const MyCart = () => {
    return (
        <div>
            <Helmet>
                <title>My Cart | Bistro Bos</title>
            </Helmet>
            <h2>My cart</h2>
        </div>
    );
};

export default MyCart;
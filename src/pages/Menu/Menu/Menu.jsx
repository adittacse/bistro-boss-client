import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover.jsx";

import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu.jsx";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
            
        </div>
    );
};

export default Menu;
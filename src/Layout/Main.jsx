import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer.jsx";

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
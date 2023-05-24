import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer.jsx";
import NavBar from "../pages/Shared/NavBar/NavBar.jsx";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
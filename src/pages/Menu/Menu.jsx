import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from "../Shared/Cover/Cover.jsx";

import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu.jsx";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Desserts" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Pizza" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Salads" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Soups" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;
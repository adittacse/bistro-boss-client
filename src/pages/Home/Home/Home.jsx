import React from 'react';
import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import Featured from "../Featured/Featured.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Bos</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
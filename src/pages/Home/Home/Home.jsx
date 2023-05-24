import React from 'react';
import Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx";
import PopularMenu from "../PopularMenu/PopularMenu.jsx";
import Featured from "../Featured/Featured.jsx";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;
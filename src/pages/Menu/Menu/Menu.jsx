import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from "../../Shared/Cover/Cover.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import MenuCategory from "../MenuCategory/MenuCategory.jsx";

import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
    const [menu] = useMenu();
    const biryani = menu.filter(item => item.category === "Biryani");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
            {/*main cover*/}
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            {/*offered menu items*/}
            <MenuCategory coverImage={pizzaImg} items={biryani} title="Biryani" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*dessert menu items*/}
            <MenuCategory coverImage={dessertImg} items={dessert} title="Desserts" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*pizza menu items*/}
            <MenuCategory coverImage={pizzaImg} items={pizza} title="Pizza" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*salad menu items*/}
            <MenuCategory coverImage={saladImg} items={salad} title="Salad" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            {/*soup menu items*/}
            <MenuCategory coverImage={soupImg} items={soup} title="Soup" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
        </div>
    );
};

export default Menu;
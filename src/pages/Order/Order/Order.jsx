import React, {useState} from 'react';
import shopCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover.jsx";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu.jsx";
import OrderTab from "../OrderTab/OrderTab.jsx";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const Order = () => {
    const categories = ["offered", "Salad", "Pizza", "Soup", "Desserts", "Drinks"];
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const offered = menu.filter(item => item.category == "offered");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const dessert = menu.filter(item => item.category === "dessert");
    const drinks = menu.filter(item => item.category === "drinks");
    
    return (
        <div>
            <Helmet>
                <title>Our Shop | Bistro Boss</title>
            </Helmet>
            <Cover img={shopCoverImg} title="Our Shop" description="Would you like to try a dish?"></Cover>
            <Tabs className="mt-16 mb-16" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center mb-16">
                    <Tab>OFFERED</Tab>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
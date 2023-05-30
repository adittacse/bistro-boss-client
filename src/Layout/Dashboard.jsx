import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { MdShoppingBag, MdEmail } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/*page content here*/}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    <li><NavLink to="/dashboard/home"><AiFillHome></AiFillHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><SlCalender></SlCalender> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/payment-history"><GiWallet></GiWallet> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <div className="border mt-4 mb-4"></div>
                    <li><NavLink to="/"><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><TiThMenu></TiThMenu> Menu</NavLink></li>
                    <li><NavLink to="/order/offered"><MdShoppingBag></MdShoppingBag> Shop</NavLink></li>
                    <li><NavLink to="/"><MdEmail></MdEmail> Contact</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;
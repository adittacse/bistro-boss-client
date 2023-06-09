import React, {useContext, useEffect, useState} from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";
import { FaShoppingCart, FaBook, FaUsers } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import {MdShoppingBag, MdEmail, MdReviews} from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../hooks/useAdmin.jsx";
import useAuth from "../hooks/useAuth.jsx";
import {IoLogOut} from "react-icons/io5";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const {user, logOut} =useAuth();
    
    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => {})
    }
    
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col item-center mt-2">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                {/*page content here*/}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {
                        isAdmin ? <>
                                <li><NavLink to="/dashboard/admin-home"><AiFillHome></AiFillHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/add-item"><ImSpoonKnife></ImSpoonKnife> Add An Item</NavLink></li>
                                <li><NavLink to="/dashboard/manage-items"><TfiMenuAlt></TfiMenuAlt> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/manage-bookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/all-users"><FaUsers></FaUsers> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to="/dashboard/user-home"><AiFillHome></AiFillHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><SlCalender></SlCalender> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/payment-history"><GiWallet></GiWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                <li><NavLink to="/dashboard/add-review"><MdReviews></MdReviews> Add Review</NavLink></li>
                                <li><NavLink to="/dashboard/my-bookings"><SlCalender></SlCalender> My Bookings</NavLink></li>
                            
                            </>
                    }
                    
                    <div className="border mt-4 mb-4"></div>
                    <li><NavLink to="/"><AiFillHome></AiFillHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><TiThMenu></TiThMenu> Menu</NavLink></li>
                    <li><NavLink to="/order/offered"><MdShoppingBag></MdShoppingBag> Shop</NavLink></li>
                    <li><NavLink to="/dashboard/contact"><MdEmail></MdEmail> Contact</NavLink></li>
                    {
                        user && <li><NavLink onClick={handleLogout} to="/"><IoLogOut></IoLogOut> Logout</NavLink></li>
                    }
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import {Helmet} from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";
import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {GiWallet} from "react-icons/gi";
import {FaTruck, FaUsers} from "react-icons/fa";
import {TbChefHat} from "react-icons/tb";

const AdminHome = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const { data: stats = {} } = useQuery({
        queryKey: ["admin-stats"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/admin-stats");
            return res.data;
        }
    });
    
    return (
        <div>
            <Helmet>
                <title>Admin Dashboard | Bistro Boss</title>
            </Helmet>
            <div className="w-[95%] mx-auto mt-8">
                <h3 className="text-2xl uppercase">Welcome Back, {user?.displayName}</h3>
            </div>
            
            <div className="stats shadow w-[95%] flex mx-auto mt-8">
                
                <div className="stat flex">
                    <div className="stat-figure text-secondary text-4xl">
                        <GiWallet></GiWallet>
                    </div>
                    <div>
                        <div className="stat-value">${parseFloat(stats.revenue || 0).toFixed(2)}</div>
                        <div className="stat-title">Revenue</div>
                    </div>
                </div>
                
                <div className="stat flex">
                    <div className="stat-figure text-secondary text-4xl">
                        <FaUsers></FaUsers>
                    </div>
                    <div>
                        <div className="stat-value">{stats.users}</div>
                        <div className="stat-title">Customers</div>
                    </div>
                </div>
                
                <div className="stat flex">
                    <div className="stat-figure text-secondary text-4xl">
                        <TbChefHat></TbChefHat>
                    </div>
                    <div>
                        <div className="stat-value">{stats.products}</div>
                        <div className="stat-title">Products</div>
                    </div>
                </div>
                
                <div className="stat flex">
                    <div className="stat-figure text-secondary text-4xl">
                        <FaTruck></FaTruck>
                    </div>
                    <div>
                        <div className="stat-value">{stats.orders}</div>
                        <div className="stat-title">Orders</div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default AdminHome;
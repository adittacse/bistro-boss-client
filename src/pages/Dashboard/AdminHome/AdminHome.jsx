import React from 'react';
import {Helmet} from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";
import {useQuery} from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import {GiWallet} from "react-icons/gi";
import {FaTruck, FaUsers} from "react-icons/fa";
import {TbChefHat} from "react-icons/tb";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const AdminHome = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'green'];
    
    const {data: chartData = []} = useQuery({
        queryKey: ["chart-data"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure("/order-stats");
            return res.data;
        }
    });
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };
    
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    
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
            
            <div className="flex mt-8">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                
                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
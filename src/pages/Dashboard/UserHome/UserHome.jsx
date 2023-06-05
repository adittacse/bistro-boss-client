import React from 'react';
import {Helmet} from "react-helmet-async";
import useAuth from "../../../hooks/useAuth.jsx";

const UserHome = () => {
    const {user} = useAuth();
    
    return (
        <div>
            <Helmet>
                <title>User Dashboard | Bistro Boss</title>
            </Helmet>
            <div className="w-[95%] mx-auto mt-16">
                <h3 className="text-2xl uppercase">Welcome Back, {user?.displayName}!</h3>
            </div>
        </div>
    );
};

export default UserHome;
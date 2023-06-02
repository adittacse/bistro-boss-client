import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import useAdmin from "../hooks/useAdmin.jsx";

const AdminRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading) {
        return <progress className="progress progress-error w-56 flex mx-auto"></progress>;
    }
    
    if (user && isAdmin) {
        return children;
    }
    
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
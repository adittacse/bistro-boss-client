import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => {})
    }
    
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/offered">Our Shop</Link></li>
        {
            user ? <>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </>
            : <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </>
        }
        
    </>
    
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        { user && <>
                            <img className="w-12 h-12 rounded" src={user?.photoURL} alt="User Photo"/>
                            <p className="ml-3">{user?.displayName}</p>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
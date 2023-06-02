import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Menu from "../pages/Menu/Menu/Menu.jsx";
import Order from "../pages/Order/Order/Order.jsx";
import Login from "../pages/Login/Login.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import MyCart from "../pages/Dashboard/MyCart/MyCart.jsx";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers.jsx";
import AddItem from "../pages/Dashboard/AddItem/AddItem.jsx";
import AdminRoute from "./AdminRoute.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "add-item",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            }
        ]
    }
]);
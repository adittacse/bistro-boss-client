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
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems.jsx";
import Payment from "../pages/Dashboard/Payment/Payment.jsx";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome.jsx";
import UserHome from "../pages/Dashboard/UserHome/UserHome.jsx";
import ManageBookings from "../pages/Dashboard/ManageBookings/ManageBookings.jsx";
import Reservation from "../pages/Dashboard/Reservation/Reservation.jsx";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import AddReview from "../pages/Dashboard/AddReview/AddReview.jsx";
import MyBookings from "../pages/Dashboard/MyBookings/MyBookings.jsx";
import Contact from "../pages/Dashboard/Contact/Contact.jsx";

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
            // admin dashboard routes
            {
                path: "admin-home",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "all-users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "add-item",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "manage-bookings",
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            // user dashboard routes
            {
                path: "user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "reservation",
                element: <Reservation></Reservation>
            },
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "my-cart",
                element: <MyCart></MyCart>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "add-review",
                element: <AddReview></AddReview>
            },
            {
                path: "my-bookings",
                element: <MyBookings></MyBookings>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
        ]
    }
]);
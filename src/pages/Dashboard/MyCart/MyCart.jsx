import React from 'react';
import {Helmet} from "react-helmet-async";
import useCart from "../../../hooks/useCart.jsx";
import { RiDeleteBin5Line } from "react-icons/ri";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    
    return (
        <div className="w-full px-28">
            <Helmet>
                <title>My Cart | Bistro Bos</title>
            </Helmet>
            <div className="flex justify-between items-center font-semibold h-[44px] mb-6">
                <h3 className="text-3xl uppercase">Total Orders: {cart.length}</h3>
                <h3 className="text-3xl uppercase">Total Price: ${totalPrice}</h3>
                <button className="btn btn-warning text-white">Pay</button>
            </div>
            <div className="overflow-x-auto w-full justify-between">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>ITEM IMAGE</th>
                        <th>ITEM NAME</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-[75px] h-[75px]">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <th>
                                <button className="btn text-xl bg-red-800 text-white">
                                    <RiDeleteBin5Line></RiDeleteBin5Line>
                                </button>
                            </th>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;
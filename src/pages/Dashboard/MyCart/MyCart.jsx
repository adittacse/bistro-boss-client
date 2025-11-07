import React from 'react';
import {Helmet} from "react-helmet-async";
import useCart from "../../../hooks/useCart.jsx";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import {Link} from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    
    const handleDelete = (item) => {
        Swal.fire({
            title: `Are you want to delete ${item.name}?`,
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-xpq6.onrender.com/carts/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    return (
        <div className="w-full">
            <Helmet>
                <title>My Cart | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Excellent Ambience" heading="My Boookings"></SectionTitle>
            <div className="flex justify-between items-center w-[95%] mx-auto font-semibold mb-8">
                <h3 className="text-2xl uppercase">Total Orders: {cart.length}</h3>
                <h3 className="text-2xl uppercase">Total Price: ${totalPrice.toFixed(2)}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning text-white">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto w-[95%] mx-auto justify-between">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="bg-[#D1A054] text-white"></th>
                        <th className="bg-[#D1A054] text-white">ITEM IMAGE</th>
                        <th className="bg-[#D1A054] text-white">ITEM NAME</th>
                        <th className="bg-[#D1A054] text-white">PRICE</th>
                        <th className="bg-[#D1A054] text-white">ACTION</th>
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
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn text-lg bg-red-800 text-white">
                                    <RiDeleteBin5Line></RiDeleteBin5Line>
                                </button>
                            </td>
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
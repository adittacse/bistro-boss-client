import React from 'react';
import {Helmet} from "react-helmet-async";
import useCart from "../../../hooks/useCart.jsx";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

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
                fetch(`http://localhost:3000/carts/${item._id}`, {
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
                <title>My Cart | Bistro Bos</title>
            </Helmet>
            <div className="flex justify-evenly items-center font-semibold mb-8">
                <h3 className="text-3xl uppercase">Total Orders: {cart.length}</h3>
                <h3 className="text-3xl uppercase">Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className="btn btn-warning text-white">Pay</button>
            </div>
            <div className="overflow-x-auto w-[95%] mx-auto justify-between">
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
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item)} className="btn text-lg bg-red-800 text-white">
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
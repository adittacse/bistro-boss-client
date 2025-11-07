import React, {useContext} from 'react';
import {AuthContext} from "../../providers/AuthProvider.jsx";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom";
import useCart from "../../hooks/useCart.jsx";

const FoodCart = ({ item }) => {
    const {_id, name, recipe, image, price} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email};
            
            fetch("https://bistro-boss-server-xpq6.onrender.com/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: {from: location}});
                }
            })
        }
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Menu" /></figure>
            <p className="absolute right-4 top-4 p-2 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title flex mx-auto">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end flex mx-auto">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-warning uppercase bg-[#E8E8E8] border-b-4 hover:bg-[#111827] text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;
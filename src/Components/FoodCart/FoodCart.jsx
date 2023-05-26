import React from 'react';

const FoodCart = ({ item }) => {
    const {name, recipe, image, price} = item;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Menu" /></figure>
            <p className="absolute right-4 top-4 p-2 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title flex mx-auto">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end flex mx-auto">
                    <button className="btn btn-warning uppercase bg-[#E8E8E8] border-b-4 hover:bg-[#111827] text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;
import React from 'react';
import MenuItem from "../../Shared/MenuItem/MenuItem.jsx";
import Cover from "../../Shared/Cover/Cover.jsx";
import {Link} from "react-router-dom";

const MenuCategory = ({ items, coverImage, title, description }) => {
    return (
        <div className="pt-8">
            {
                title && <Cover img={coverImage} title={title} description={description}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="card-actions justify-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-warning uppercase bg-[#E8E8E8] border-b-4 hover:bg-[#111827] text-[#BB8506]">Order You Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
import React from 'react';
import MenuItem from "../../Shared/MenuItem/MenuItem.jsx";
import Cover from "../../Shared/Cover/Cover.jsx";

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
        </div>
    );
};

export default MenuCategory;
import React from 'react';

const MenuItem = ({ item }) => {
    const {name, recipe, image, price} = item;
    
    return (
        <div className="flex space-x-2">
            <img style={{width: "118px", height: "104px", borderRadius: "0 200px 200px 200px"}} src={image} alt="Item"/>
            <div>
                <h3 className="text-xl uppercase">{name} ------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;
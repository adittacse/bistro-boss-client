import React, {useEffect, useState} from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import MenuItem from "../../Shared/MenuItem/MenuItem.jsx";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect( () => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === "popular");
                setMenu(popularItems);
            });
    }, []);
    
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex flex-col items-center mt-6">
                <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
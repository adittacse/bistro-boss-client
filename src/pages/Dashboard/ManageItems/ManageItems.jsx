import React from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import {RiDeleteBin5Line} from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

const ManageItems = () => {
    const [menu] = useMenu();
    
    return (
        <div>
            <Helmet>
                <title>My Cart | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Hurry Up!" heading="Manage All Items"></SectionTitle>
            <div className="flex font-semibold w-[95%] mx-auto mb-8">
                <h3 className="text-2xl uppercase">Total Items: {menu.length}</h3>
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
                        <th className="bg-[#D1A054] text-white">EDIT</th>
                        <th className="bg-[#D1A054] text-white">DELETE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menu.map((item, index) => <tr key={item._id}>
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
                                    <button title="Edit Item"
                                            className="btn text-lg bg-[#D1A054] text-white">
                                        <BiEdit></BiEdit>
                                    </button>
                                </td>
                                <td>
                                    <button title="Delete Item"
                                            className="btn text-lg bg-red-800 text-white">
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

export default ManageItems;
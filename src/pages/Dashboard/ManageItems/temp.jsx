import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import {RiDeleteBin5Line} from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    
    const [productImages, setProductImages] = useState({});
    
    const fetchProductImages = async (productId) => {
        try {
            const response = await axiosSecure.get(`/uploads/${productId}`, {
                responseType: 'blob', // Set the response type to 'blob'
            });
            
            const blobUrl = URL.createObjectURL(response.data);
            setProductImages(prevImages => ({
                ...prevImages,
                [productId]: blobUrl,
            }));
        } catch (error) {
            console.error('Error fetching product images:', error);
        }
    };
    
    
    useEffect(() => {
        menu.forEach((item) => {
            fetchProductImages(item._id).then(() => {}).catch(error => {error.message});
        });
    }, [menu]);
    
    
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount> 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
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
                                    <div className="avatar">
                                        <div className="mask mask-square w-32 h-32">
                                            {productImages[item._id] && (
                                                <img
                                                    className="w-12"
                                                    src={productImages[item._id]}
                                                    alt="Product Image"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </td>
                                
                                {/*<td>*/}
                                {/*    <div className="avatar">*/}
                                {/*        <div className="mask mask-square w-32 h-32">*/}
                                {/*            {productImages[item._id] &&*/}
                                {/*                <img className="w-12"*/}
                                {/*                     src={productImages[item._id]}*/}
                                {/*                     alt="Product Image"/>*/}
                                {/*            }*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</td>*/}
                                
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button title="Edit Item"
                                            className="btn text-lg bg-[#D1A054] text-white">
                                        <BiEdit></BiEdit>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} title="Delete Item"
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
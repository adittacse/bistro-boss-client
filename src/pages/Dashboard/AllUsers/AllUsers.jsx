import React from 'react';
import {useQuery} from "@tanstack/react-query";
import PageHeading from "../../Shared/PageHeading/PageHeading.jsx";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import {RiDeleteBin5Line} from "react-icons/ri";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:3000/users");
        return res.json();
    });
    
    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Make ${user.name} as Admin?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/users/admin/${user._id}`, {
                    method: "PATCH"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Congratulations!',
                                `${user.name} is an Admin now`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    const handleUserDelete = (user) => {
    
    }
    
    return (
        <div>
            <Helmet>
                <title>All Users | Bistro Bos</title>
            </Helmet>
            <PageHeading subHeading="How Many?" heading="Manage All Users"></PageHeading>
            <div className="flex font-semibold w-[95%] mx-auto mb-8">
                <h3 className="text-2xl uppercase">Total Users: {users.length}</h3>
            </div>
            <div className="overflow-x-auto w-[95%] mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th className="bg-[#D1A054] text-white"></th>
                        <th className="bg-[#D1A054] text-white">Name</th>
                        <th className="bg-[#D1A054] text-white">Email</th>
                        <th className="bg-[#D1A054] text-white">Role</th>
                        <th className="bg-[#D1A054] text-white">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.role === "admin" ? <>
                                        <button className="btn text-lg bg-emerald-800 text-white">
                                            <MdAdminPanelSettings></MdAdminPanelSettings>
                                        </button>
                                        </> : <>
                                            <button onClick={() => handleMakeAdmin(user)} className="btn text-lg bg-[#D1A054] text-white">
                                                <HiUserGroup></HiUserGroup>
                                            </button>
                                        </>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleUserDelete(user)} className="btn text-lg bg-red-800 text-white">
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

export default AllUsers;
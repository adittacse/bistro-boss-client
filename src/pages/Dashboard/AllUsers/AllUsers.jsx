import React from 'react';
import {useQuery} from "@tanstack/react-query";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import {RiDeleteBin5Line} from "react-icons/ri";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const {data: users = [], refetch} = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
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
                fetch(`https://bistrobossrestuarant-adittacse.b4a.run/users/user-to-admin/${user._id}`, {
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
    
    const handleMakeUser = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Make ${user.name} Subscriber?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Subscriber!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistrobossrestuarant-adittacse.b4a.run/users/admin-to-user/${user._id}`, {
                    method: "PATCH"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Congratulations!',
                                `${user.name} is Subscriber now`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
    const handleUserDelete = (user) => {
        Swal.fire({
            title: `Are you want to delete ${user.name}?`,
            text: "You won't be able to restore this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistrobossrestuarant-adittacse.b4a.run/users/${user._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User been deleted.',
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
                <title>All Users | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="How Many?" heading="Manage All Users"></SectionTitle>
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
                                        <button onClick={() => handleMakeUser(user)}
                                                title="Admin"
                                                className="btn text-lg bg-emerald-800 text-white">
                                            <MdAdminPanelSettings></MdAdminPanelSettings>
                                        </button>
                                        </> : <>
                                            <button onClick={() => handleMakeAdmin(user)}
                                                    title="Subscriber"
                                                    className="btn text-lg bg-[#D1A054] text-white">
                                                <HiUserGroup></HiUserGroup>
                                            </button>
                                        </>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleUserDelete(user)}
                                        title="Delete User"
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

export default AllUsers;
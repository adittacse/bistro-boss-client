import React from 'react';
import {useQuery} from "@tanstack/react-query";
import PageHeading from "../../Shared/PageHeading/PageHeading.jsx";
import { HiUserGroup } from "react-icons/hi";
import {RiDeleteBin5Line} from "react-icons/ri";

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:3000/users");
        return res.json();
    });
    
    return (
        <div className="">
            <PageHeading subHeading="How Many?" heading="Manage All Users"></PageHeading>
            <div className="flex font-semibold w-[95%] mx-auto mb-8">
                <h3 className="text-2xl uppercase">Total Users: {users.length}</h3>
            </div>
            <div className="overflow-x-auto w-[95%] mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn text-lg bg-[#D1A054] text-white">
                                    <HiUserGroup></HiUserGroup>
                                </button>
                            </td>
                            <td>
                                <button className="btn text-lg bg-red-800 text-white">
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
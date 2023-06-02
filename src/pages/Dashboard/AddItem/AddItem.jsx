import React, {useState} from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import {Helmet} from "react-helmet-async";
import { useForm } from 'react-hook-form';
import {ImSpoonKnife} from "react-icons/im";

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);
    
    return (
        <div className="w-full">
            <Helmet>
                <title>Add An Item | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="What's New?" heading="Add An item"></SectionTitle>
            <div className="w-[90%] justify-center mx-auto my-8 p-6 rounded-xl bg-[#D1A054]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full" />
                    </div>
                    <div className="flex">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black">Category*</span>
                            </label>
                            <select {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                                <option>Pizza</option>
                                <option>Salad</option>
                                <option>Soup</option>
                            </select>
                        </div>
                        <div className="form-control w-full ml-6">
                            <label className="label">
                                <span className="label-text text-black">Price*</span>
                            </label>
                            <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-32" {...register("recipe", { required: true })} placeholder="Recipe Details"></textarea>
                    </div>
                    <input type="file" className="file-input w-full max-w-xs mt-4" />
                    <div className="flex mx-auto justify-center items-center mt-6">
                        <input className="btn btn-secondary" type="submit" value="Add Item"/>
                        <ImSpoonKnife className="text-white ml-2" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
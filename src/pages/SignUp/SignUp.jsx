import React, {useState} from 'react';
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import {Helmet} from "react-helmet-async";

import img from "../../assets/others/authentication2.png";

const SignUp = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };
    
    return (
        <>
            <Helmet>
                <title>Sign Up | Bistro Bos</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={img} alt=""/>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center mt-8">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-warning">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.name && <span className="text-warning">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className="text-warning">Password is required</p>}
                                {errors.password?.type === "minLength" && <p className="text-warning">Password must be 6 characters</p>}
                                {errors.password?.type === "maxLength" && <p className="text-warning">Password must be less than 20 characters</p>}
                                {errors.password?.type === "pattern" && <p className="text-warning">Password must have one uppercase, one lowercase, one number & one special character</p>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up"/>
                            </div>
                        </form>
                        <p className="text-center">Already registered? <Link to="/login">Go to log in</Link></p>
                        
                        <p className="text-success text-center">{success}</p>
                        <p className="text-warning text-center">{error}</p>
                        
                        <div className="divider mb-6">Or sign in with</div>
                        <div className="flex justify-center mb-6">
                            <button className="btn btn-circle mr-4">
                                <FaFacebookF></FaFacebookF>
                            </button>
                            <button className="btn btn-circle mr-4">
                                <FaGoogle></FaGoogle>
                            </button>
                            <button className="btn btn-circle mr-4">
                                <FaGithub></FaGithub>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
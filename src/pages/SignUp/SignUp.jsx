import React, {useState} from 'react';
import {LoadCanvasTemplate} from "react-simple-captcha";
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";

const SignUp = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/*<img src={img} alt=""/>*/}
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
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
    );
};

export default SignUp;
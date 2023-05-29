import React, {useContext, useEffect, useState} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import {AuthContext} from "../../providers/AuthProvider.jsx";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from "sweetalert2";

import img from "../../assets/others/authentication2.png";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const {signIn, googleSignIn} = useContext(AuthContext);
    const [error, setError] = useState("");
    
    useEffect( () => {
        loadCaptchaEnginge(6);
    }, []);
    
    const handleValidateCaptcha = (event) => {
        const userCaptchaValue = event.target.value;
        
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    
    const handleLogin = (event) => {
        event.preventDefault();
        setError("");
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    title: 'Login Successful!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                setError("Wrong Credentials!");
            });
    }
    
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setError("");
                const loggedUser = result.user;
                // navigate(from, { replace: true });
                Swal.fire({
                    title: 'Custom animation with Animate.css',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                setError("Something Wrong!");
            })
    }
    
    return (
        <>
            <Helmet>
                <title>Login | Bistro Bos</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center mt-6">Login</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="recaptcha" placeholder="Type Above Captcha" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login"/>
                            </div>
                        </form>
                        <p className="text-center">New here? <Link to="/signup">Create a New Account</Link></p>
                        
                        <p className="text-warning text-center">{error}</p>
                        
                        <div className="divider mb-6">Or sign in with</div>
                        <div className="flex justify-center mb-6">
                            <button className="btn btn-circle mr-4">
                                <FaFacebookF></FaFacebookF>
                            </button>
                            <button onClick={handleGoogleSignIn} className="btn btn-circle mr-4">
                                <FaGoogle></FaGoogle>
                            </button>
                            <button className="btn btn-circle mr-4">
                                <FaGithub></FaGithub>
                            </button>
                        </div>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
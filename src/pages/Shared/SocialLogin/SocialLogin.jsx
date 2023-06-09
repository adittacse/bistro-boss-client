import React, {useContext} from 'react';
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import Swal from "sweetalert2";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useLocation, useNavigate} from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = {
                    name: loggedUser.displayName,
                    email: loggedUser.email,
                    role: "subscriber"
                };
                fetch("https://bistrobossrestuarant-adittacse.b4a.run/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then( () => {
                        Swal.fire({
                            title: 'Login Successful!',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: error.message,
                //     footer: 'Something went wrong!'
                // })
            })
    }
    
    return (
        <div>
            <div className="divider mt-6 mb-6">Or sign in with</div>
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
    );
};

export default SocialLogin;
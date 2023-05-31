import React, {useContext} from 'react';
import {FaFacebookF, FaGithub, FaGoogle} from "react-icons/fa";
import Swal from "sweetalert2";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleGoogleSignIn = () => {
        googleSignIn()
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
                });
                navigate("/");
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
    );
};

export default SocialLogin;
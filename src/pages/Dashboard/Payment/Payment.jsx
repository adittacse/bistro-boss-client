import React from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import CheckoutForm from "./CheckoutForm.jsx";
import {Helmet} from "react-helmet-async";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    
    return (
        <div>
            <Helmet>
                <title>Payment | Bistro Boss</title>
            </Helmet>
            <SectionTitle subHeading="Pay Now" heading="Payment"></SectionTitle>
            <div className="w-[95%]  mt-20 px-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
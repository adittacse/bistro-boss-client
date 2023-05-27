import React, {useEffect, useState} from 'react';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect( () => {
        fetch("http://localhost:3000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    
    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Clients Say" heading="Testimonials"></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide  key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly/>
                            <FaQuoteLeft className="text-7xl font-bold mt-8"></FaQuoteLeft>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-3xl font-semibold uppercase text-yellow-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
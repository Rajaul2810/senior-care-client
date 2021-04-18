import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TastimonialPage from '../TastimonialPage/TastimonialPage';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fathomless-journey-02312.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="text-center mt-5">
            <h2 className="mb-5"> Client Review..</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        reviews.map(review => <TastimonialPage key={review._id} review={review}></TastimonialPage>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
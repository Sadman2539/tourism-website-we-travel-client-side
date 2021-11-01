import React from 'react';
import travel from '../../images/why.png';
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <div className="d-lg-flex align-items-center">
            <div>
                <img src={travel} alt="" className="img-fluid" />
            </div>
            <div className="text-center w-50 mx-auto">
                <div>
                    <h1>Why Choose We Travel</h1>
                    <p>We provide the best traveling experience within your budget. We care about safety of our users.We manage tours around the world, more tan 100 countries</p>
                </div>
                <div className="mt-4">
                    <h3>
                        <i className="fas fa-map-marked"></i>
                        Professional and Certified</h3>
                    <p>We provide professional service.</p>
                    <h3><i className="fas fa-plane"></i>Get Instant Tour Bookings</h3>
                    <p>We provide instant tour booking.</p>

                </div>


            </div>
        </div>
    );
};

export default WhyChoose;
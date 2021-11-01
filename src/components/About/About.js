import React from 'react';

const About = () => {
    return (
        <div className="text-center p-3">
            <h1>About Us</h1>
            <h3>We provide the best traveling experience for you</h3>
            <p>We Travel is a World Leading Online Tour Booking Platform</p>
            <div className="w-100">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/X5uxoBv-myU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br />
            <button className="regular-btn mt-3">Read More
                <span><i className="fas fa-arrow-right ms-2"></i></span>
            </button>
        </div>
    );
};

export default About;
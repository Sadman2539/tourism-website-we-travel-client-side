import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <h1>We Travel</h1>
                <p>Amazing Tours And Fun Adventures Waiting For You</p>
            </div>
            <div className="contact-icons">
                <h5>Contact Us</h5>
                <span><i className="fab fa-youtube fa-2x  me-2"></i></span>
                <span><i className="fab fa-facebook fa-2x  me-2"></i></span>
                <span><i className="fas fa-envelope fa-2x "></i></span>
            </div>
        </div >
    );
};

export default Footer;
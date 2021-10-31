import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Service from '../Service/Service';
import WhyChoose from '../WhyChoose/WhyChoose';

import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://grisly-warlock-36369.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="welcome-section" id="home">
                <div className="welcome-content">
                    <h3 className="w-75 text-center">We provide the best travel package for you!</h3>
                    <NavLink to="/bookTour">
                        <button className="regular-btn m-3 mx-auto">
                            Book a Tour
                            <span><i class="fas fa-arrow-right ms-2"></i></span>
                        </button>
                    </NavLink>

                </div>
            </div>

            {/* our services section  */}
            <div className="services">
                <div className="container mt-5">
                    <h1 className="text-center">Our Services</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                        }


                    </Row>
                    <NavLink to="/services">
                        <button className="regular-btn m-3 mx-auto">More
                            <span><i class="fas fa-arrow-right ms-2"></i></span>
                        </button>
                    </NavLink>

                </div>
            </div>

            {/* Why Choose Us section  */}
            <WhyChoose></WhyChoose>

            {/* Blog Section  */}
            <Blog></Blog>

        </>
    );
};
export default Home;
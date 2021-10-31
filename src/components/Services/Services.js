import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';
// import './Services.css'

const Services = () => {
    // const { } = props;
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://grisly-warlock-36369.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-5">
            <h1 className="text-center">Our Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }


            </Row>
            <NavLink to={"/"}>

                <button className="regular-btn mt-4">
                    <span><i class="fas fa-arrow-left me-2"></i></span>
                    Bo Back</button>
            </NavLink>
        </div>
    );
};

export default Services;
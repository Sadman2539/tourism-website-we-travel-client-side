import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            <div className="text-center">
                <h1> {service.destination}</h1>
                <img src={service.img} alt="" />
                <p>{service.description}</p>
            </div>
            <Link to='/services'>
                <button className="regular-btn">Go back</button>
            </Link>
        </>
    );
};

export default ServiceDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

import { Card } from 'react-bootstrap';
import './Booking.css'
import useAuth from '../../Hooks/useAuth';
const Booking = (props) => {
    const { user } = useAuth()
    const { bookingId, serviceId } = useParams();
    const [service, setService] = useState({});
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        fetch(`https://grisly-warlock-36369.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    useEffect(() => {
        fetch(`https://grisly-warlock-36369.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    //   post booking data to database 
    const onSubmit = data => {
        console.log(data);
        axios.post('https://grisly-warlock-36369.herokuapp.com/manageBookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <>
            <div className="container mt-5 card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{service.destination}</h5>
                            <p className="card-text"><small className="text-muted">${service.price}</small></p>
                            <p className="card-text">{service.description}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="booking-form container">
                <h1 className="text-center mt-5 mb-4">Booking Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                    <input {...register("email", { required: true, maxLength: 50 })} value={user.email} />
                    <input {...register("address", { required: true, maxLength: 100 })} placeholder="Your address" />
                    <select {...register("payment")}>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="other">Others</option>
                    </select>
                    <input type="submit" value="Confirm Booking" />
                </form>

            </div>

        </>
    );
};

export default Booking;
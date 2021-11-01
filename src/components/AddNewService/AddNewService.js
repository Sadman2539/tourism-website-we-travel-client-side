import React from 'react';
import './AddNewService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
const BookTour = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/manageBookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    return (
        <div className="booking-form mt-5">
            <h2 className="text-center">Add a new Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Place description" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div >
    );
};

export default BookTour;
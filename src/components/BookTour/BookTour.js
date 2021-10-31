import React from 'react';
import './BookTour.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
const BookTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    return (
        <div className="contact-form">
            <h2 className="text-center">Book a trip to your dream destination </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <textarea {...register("description")} placeholder="Place description" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>




            {/* <Form className="container mt-5">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="text" placeholder="your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="text" placeholder="Your Destination" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="email" placeholder="youremail@example.com" />
                </Form.Group>

                <button className="regular-btn">Submit</button>
            </Form > */}
        </div >
    );
};

export default BookTour;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { destination, description, img, price, _id } = props.service;
    return (

        <Col>
            <Card className="service">
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{destination}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <NavLink to={`/booking/${_id}`}>
                        <button className="regular-btn">Book Now</button>
                    </NavLink>
                </Card.Body>

            </Card>
        </Col>



    );
};

export default Service;
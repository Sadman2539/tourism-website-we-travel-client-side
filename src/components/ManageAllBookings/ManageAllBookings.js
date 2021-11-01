import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ManageAllBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    // handleDelete function call 
    const handleDelete = id => {
        const url = `http://localhost:5000/manageBookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                    alert("Deleted Successfully!")
                }
            })
    }
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-4">Manage All Bookings</h1>

            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    bookings.map(booking => <Col>
                        <Card className="service">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title>Name: {booking.name}</Card.Title>
                                <Card.Text>
                                    Address: {booking.address}
                                </Card.Text>
                                <Card.Text>
                                    Email: {booking.email}
                                </Card.Text>
                                <Card.Text>
                                    Payment Method: {booking.payment}
                                </Card.Text>
                                <Button onClick={() => handleDelete(booking._id)} variant="danger">Delete</Button>

                            </Card.Body>

                        </Card>
                    </Col>

                    )
                }


            </Row>


        </div>
    );
};

export default ManageAllBookings;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="m-5">
            <h1 className="m-5">Latest News & Articles</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className="service">
                        <Card.Img variant="top" src="https://tevily-html.vercel.app/assets/images/blog/news-details-img-1.jpg" />
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>Things to See and Do When Visiting Japan</Card.Title>

                            <NavLink to={`#`}>
                                <button className="regular-btn">Read More</button>
                            </NavLink>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card className="service">
                        <Card.Img variant="top" src="https://tevily-html.vercel.app/assets/images/blog/news-details-img-1.jpg" />
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>Journeys are Best Measured in New Friends</Card.Title>

                            <NavLink to={`#`}>
                                <button className="regular-btn">Read More</button>
                            </NavLink>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card className="service">
                        <Card.Img variant="top" src="https://tevily-html.vercel.app/assets/images/blog/news-details-img-1.jpg" />
                        <Card.Body className="d-flex flex-column align-items-center">
                            <Card.Title>Travel the Most Beautiful Places in the World</Card.Title>

                            <NavLink to={`#`}>
                                <button className="regular-btn">Read More</button>
                            </NavLink>
                        </Card.Body>

                    </Card>
                </Col>


            </Row>
        </div>
    );
};

export default Blog;
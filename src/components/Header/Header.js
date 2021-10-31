import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
            <Container>
                <Navbar.Brand as={HashLink} to="/home">
                    We Travel
                    <i class="fas fa-globe"></i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink as={HashLink} to="/home" >Home</NavLink>
                        <NavLink as={HashLink} to="/about">About</NavLink>
                        <NavLink as={HashLink} to="/services">Services</NavLink>

                    </Nav>
                    <Nav>
                        {
                            !user.displayName ?
                                <div>
                                    <Link to="/login">
                                        <button className="regular-btn">Sign Up</button>
                                    </Link>
                                </div> :
                                <div>
                                    <NavLink as={HashLink} to="/myBookings" >My Bookings</NavLink>
                                    <NavLink as={HashLink} to="/manageBookings" >Manage All Bookings</NavLink>
                                    <NavLink as={HashLink} to="/bookTour" >Book a trip</NavLink>
                                    <span className=" me-4"> {user.displayName}!</span>
                                    <button onClick={logout} className="regular-btn">Log Out</button>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;
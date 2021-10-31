import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase.init';
import { useState } from "react";
import useAuth from '../../Hooks/useAuth';
import { getAuth } from '@firebase/auth';
import './Login.css'
initializeAuthentication();
const Login = () => {
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from;
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, loginWIthEmailPassword } = useAuth();

    // handleGoogleLogin function declaration 
    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                redirect_uri ? history.push(redirect_uri) : history.push('/home');
            })




    }
    // handleLogin function call 
    const handleLogin = (event) => {
        event.preventDefault();
        loginWIthEmailPassword(email, password);
    }
    // handleEmailChange function call 
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    // handlePasswordChange function call 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div className="container w-50 login-section">
            <h1 className="text-center">Please login to book trip</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="regular-btn ">
                    Login
                </Button>
                <hr />
                <Button onClick={handleGoogleLogin} className="regular-btn me-4 mt-2">
                    Google Sign In
                </Button>
                <br />
                <Link to="/signup" >
                    Need a account?
                </Link>
            </Form>
        </div >
    );
};

export default Login;
// libraries 
import { useEffect, useState } from "react";
// css 
import "../assets/css/nav.css"

// bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

// components 
import axiosInstance from "../axios";




function ResponsiveNavbar() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/">OMD</Navbar.Brand>
                <div></div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>

                    <Nav
                        className=" my-2 my-lg-0 childd"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/">Home</NavLink></Nav.Link >
                        {isAuth ? <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/">Hi</NavLink></Nav.Link > :
                            <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/signup">Signup</NavLink></Nav.Link >
                        }

                        {isAuth ? <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/logout">Logout</NavLink></Nav.Link > :
                            <Nav.Link >< NavLink activeClassName="active" className='link-color' to="/login">Login</NavLink></Nav.Link >
                        }


                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default ResponsiveNavbar;


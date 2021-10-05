import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-head">

        <div className="d-flex">
            
                <div className="menu-style ">
                <Navbar bg="primary" variant="dark">
                <Container className="menu-container">
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto ">
                    <Nav.Link href="/about">About us</Nav.Link>
                    <Nav.Link href="/service">Service</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
                </div>
        </div>
</div>
    );
};

export default Header;
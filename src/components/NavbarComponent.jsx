import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Coffeeroasters" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="d-flex">
                        <Link to={'/'} className='nav-link'> Home </Link>
                        <Link to={'/about'} className='nav-link'> About us </Link>
                        <Link to={'/subscribe'} className='nav-link'> Create your plan </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
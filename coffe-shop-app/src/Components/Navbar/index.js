import React from 'react';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import coflogo from './../../coffee-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <BootstrapNavbar bg="light" expand="lg">
            <BootstrapNavbar.Brand href="/"><img src={coflogo} alt="logo" width="50" /></BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/Shop'>Coffee Shop</Link>
                    <Link to='/Kitchen'>Kitchen</Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}

export default Navbar

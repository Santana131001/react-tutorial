import React from 'react';
import Controller from './controller';
import Logo from './../../logo.svg';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import './style.scss';

class Header extends Controller {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Navbar className="bg-purple" expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <img src={Logo}
                        width="50"
                        height="50"
                        className="border-white-1 rotate"
                        alt="React Bootstrap logo" />
                    <span className="text-white ml-3">ReactJS Tutorial</span>
                    <i className="fas fa-heart ml-1" id="link"></i>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
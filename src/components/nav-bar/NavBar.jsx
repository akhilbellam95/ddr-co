import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
    <div>
      <Navbar collapseOnSelect expand="md" sticky="top">
        <Navbar.Brand href="#home"><img src="../images/Logo.png" alt="DDR & Co logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About Us</Link>
            <Link className="link" to="/projects">Projects</Link>
            <Link className="link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
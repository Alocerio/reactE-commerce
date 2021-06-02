import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Row, Container, ContainerFluid, Button, Alert, Navbar, Nav, Form, NavDropdown, FormControl  } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar className="px-2" sticky="top" expand="sm" collapseOnSelect>
  <Navbar.Brand href="#home" className="logo mx-auto">Came From</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="text-center">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
      <NavDropdown title="Links" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">link1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    </div>
  );
}

export default App;

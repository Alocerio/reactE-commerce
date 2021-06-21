import React from 'react';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap';
import { Bag } from 'react-bootstrap-icons';

import CartWidget from './CartWidget/CartWidget';

function Navigation() {

const fontColor= {
  color: 'black'
};

  return (
    <div className="App">
        
        <Navbar className="bgGradient px-4"   expand="lg">
        <Nav.Link><Bag  className="px-auto" style={fontColor}  size={30} /></Nav.Link>
        <CartWidget />
 
  <Navbar.Toggle aria-controls="navbarScroll" />

  <Navbar.Collapse  id="navbarScroll">
    <Nav
      className="ml-auto my-1 my-lg-0"
      style={{ maxHeight: '200px' }}
      navbarScroll
    >

  <NavLink activeClassName='selected' className='nav-link' exact to={'/category/:id'}>Shop</NavLink>
    <Nav.Link href="#action2">Contact</Nav.Link>
    <NavDropdown title="QA" id="navbarScrollingDropdown">
      <NavDropdown.Item  href="#action3">Delivery tracking</NavDropdown.Item>
      <NavDropdown.Item href="#action4">Calculate shipping</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">Wanna be a CF?</NavDropdown.Item>
    </NavDropdown>
      </Nav>
   
  

  </Navbar.Collapse>
  
</Navbar>
        
    
    </div>
  );
}

export default Navigation;
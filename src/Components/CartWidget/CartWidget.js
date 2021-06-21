import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cartWidget.css';
import { Navbar } from 'react-bootstrap';


function CartWidget() {
    return  (
          <Navbar.Brand className="logo " href="#">
              <NavLink activeClassName="selected" exact to={'/'}>
                  Occidental</NavLink></Navbar.Brand>
    )
}
export default  CartWidget;

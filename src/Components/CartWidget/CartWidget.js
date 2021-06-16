import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './cartWidget.css';
import { Navbar } from 'react-bootstrap';


function CartWidget() {
    return  (
          <Navbar.Brand className="logo " href="#">Occidental</Navbar.Brand>
    )
}
export default  CartWidget;

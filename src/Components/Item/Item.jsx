import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavLink} from 'react-router-dom';
function Item({name, imageSource, id, category}) {

  
    return(
        <div className="card text-center bgGradient "   >  
               <img className="img-fluid" src={imageSource} alt="" />
            
            <div className="card-body text-white">
                <h4 className="card-title">{name} </h4>
                <p className="card-text text-secundary">Lorem {id}, 
                ipsum dolor sit amet consectetur adipisicing elit.
                earum vitae est in expedita assumenda! tque id placeat.
                </p>

                <NavLink activeClassName='selected' exact to={'/itemDetail/1'}
                className="btn btn-secundary ">
                Click to more
                </NavLink>
      
            </div>
        </div>
    );
}
export default Item;
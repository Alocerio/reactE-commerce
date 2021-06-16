import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Item({name, imageSource}) {

 

    return(
        <div className="card text-center bgGradient" >
               <img className="img-fluid" src={imageSource} alt="" />
            
            <div className="card-body text-white">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secundary">Lorem, 
                ipsum dolor sit amet consectetur adipisicing elit.
                earum vitae est in expedita assumenda! tque id placeat.
                </p>
                <a href="" className="btn btn-outline-secundary rounded-0">
                    Click to more
                </a>
            </div>
        </div>
    );
}
export default Item;
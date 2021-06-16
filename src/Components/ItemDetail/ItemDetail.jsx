import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemDetail({name, imageSource, stock}) {

    return(
        <div className="card text-center bgGradient" >
           
            <div className="card-body text-white">
                <h2>Detalles del producto</h2>
                <h4 className="card-title">Existen {stock} en stock! </h4>
                <p className="card-text text-secundary">
                    {name}
                </p>
                <img className="img-fluid" src={imageSource} alt="" />
            
                <a href="" className="btn btn-outline-secundary rounded-0">
                    Comprar YA
                </a>
            </div>
        </div>
    );
}
export default ItemDetail;
import React, { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { objetos } from '../ItemList/ItemList';


function ItemDetailContainer() {
    const [productos, setProductos] = useState(objetos);
   
    return(
        <div>
            <div className="container d-flex 
            justify-content-center align-items-center h-100">
            
                   {
                  productos.map( obj => (
                    <div className="p-2" key={obj.id}>
                    <ItemDetail name={obj.name} stock={obj.stock} imageSource={obj.image}/>
                </div>
                  ))}
                
            </div>
        </div>
    );
}

export default ItemDetailContainer;
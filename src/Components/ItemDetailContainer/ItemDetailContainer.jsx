import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from '../ItemDetail/ItemDetail';


//IMG Importing

import img1 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img1.jpg';
import img2 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img2.jpg';
import img3 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img3.jpg';



const objetos = [
    {
        id: '0',
        name: 'Objeto 1',
        image: img1,
        stock: 1,
    }

]




const getItems = new Promise((resolve, reject) =>{

    console.log('Espera de 2 segundos...');
    setTimeout(() =>{
        resolve(objetos[1]);
    }, 2000); 
});

getItems.then(details => {
   
        console.log(details);
  
})


function ItemDetailContainer() {

    return(
        <div>
            <div className="container d-flex 
            justify-content-center align-items-center h-100">
            
                   {
                  objetos.map( obj => (
                    <div className="p-2" key={obj.id}>
                    <ItemDetail name={obj.name} stock={obj.stock} imageSource={obj.image}/>
                </div>
                  ))}
                
            </div>
        </div>
    );
}

export default ItemDetailContainer;
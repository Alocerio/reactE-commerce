import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/Components/Item/Item.jsx';

//IMG Importing

import img1 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img1.jpg';
import img2 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img2.jpg';
import img3 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img3.jpg';

const objetos = [
    {
        id: '0',
        name: 'Objeto 1',
        image: img1,
    },
    {
        id: '1',
        name: 'Objeto 2',
        image: img2,
    },
    {
        id: '2',
        name: 'Objeto 3',
        image: img3,
    },

]



const task = new Promise((resolve, reject) =>{

    console.log('Esperando 3 segundos...');
    setTimeout(() =>{
        resolve(objetos);
    }, 3000); 
});

task.then(data => {
    data.forEach((producto) => {
        console.log(producto);
    });
  
})

function ItemList() {
    console.log(objetos);
    return(
        <div>
            <div className="container d-flex 
            justify-content-center align-items-center h-100">
                <div className="row">
                   {
                  objetos.map( obj => (
                    <div className="col-md-4 p-2" key={obj.id}>
                    <Item name={obj.name} imageSource={obj.image}/>
                </div>
                  ))}
                </div>
            </div>
        </div>
    );
}


export default ItemList;
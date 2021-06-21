import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/Components/Item/Item.jsx';

//IMG Importing

import img1 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img1.jpg';
import img2 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img2.jpg';
import img3 from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/assets/images/img3.jpg';

export const objetos = [
    {
        id: 0,
        name: 'Objeto 1',
        image: img1,
        stock: 10,
        category: 'verano'
    },
    {
        id: 1,
        name: 'Objeto 2',
        image: img2,
        stock: 20,
        category: 'invierno'
    },
    {
        id: 2,
        name: 'Objeto 3',
        image: img3,
        stock: 50,
        category: 'invierno'
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
  const [products, setProducts] = useState(objetos);
 
    return(
        <div>
            <div className="container d-flex 
            justify-content-center align-items-center h-100">
                <div className="row">
                   {
                 products.map( (obj, i) => (
                    <div className="col-md-4 p-2" key={i}>
                    <Item  name={obj.name} id={obj.id} imageSource={obj.image}/>
                </div>
                  ))}
                </div>
            </div>
        </div>
    );
}


export default ItemList;
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';

import ItemList from '/Users/leandrobordon/Documents/React Course/clase1/e-commerce/src/Components/ItemList/ItemList.jsx';

function ItemListContainer() {
    return  (
      <div>      
      <h1 className="mt-4 text-center">Aqui va un Catalogo</h1>
      <ItemList/>
      
</div>
    )
}
export default  ItemListContainer;

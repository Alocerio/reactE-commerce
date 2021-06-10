import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import FnContador from './ItemCount';


function ItemListContainer() {
    return  (
      <div>      
      <h1 className="mt-4 text-center">Aqui va un Catalogo</h1>
      <FnContador stock="5" initial="1" />
</div>
    )
}
export default  ItemListContainer;

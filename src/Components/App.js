import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navigation from './Navigation';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';

const App = () => {
    return (
        <BrowserRouter>
           <Navigation />
       <Switch>
           <Route exact path="/" >
           <ItemListContainer />
           </Route>
           <Route exact path="/detail/:id" >
           <ItemDetailContainer />
           </Route>
      
       </Switch>
       
      </BrowserRouter>
    )
}

export default App;
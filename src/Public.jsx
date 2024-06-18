// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Servicios from './Pages/Servicios';
import MercadoLibre from './Pages/Mercadolibre';
import Clientes from './Pages/Clientes';
import Contacto from './Pages/Contacto';



function Public() {
  return (
    <><Router>
     
      <div className="App ">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Servicios" component={Servicios} />
          <Route path="/Mercadolibre" component={MercadoLibre} />
          <Route path="/Clientes" component={Clientes} />
          <Route path="/Contacto" component={Contacto} />
        </Switch>
      </div>
    </Router></>
  );
}

export default Public;


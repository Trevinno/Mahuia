import React, { useState } from 'react'
import {Route, Switch, Redirect, useHistory} from 'react-router-dom'

import './App.css';

import Inicio from './pages/Inicio'
import Perfil from './pages/Perfil'
import Categorias from './pages/Categorias'
import Carrito from './pages/Carrito'
import AboutUs from './pages/AboutUs'
import FAQ from './pages/FAQ'

import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path='/Inicio' component={Inicio} />
        <Route path='/Perfil/:_id' component={Perfil} />
        <Route path='/Categorias' component={Categorias} />
        <Route path='/Carrito' component={Carrito} />
        <Route path='/Nosotros' component={AboutUs} />
        <Route path='/FAQ' component={FAQ} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

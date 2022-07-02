import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./comps/Navigation";
import FooterComponent from "./comps/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route } from 'react-router-dom'
import { Items } from './comps/Items'

function App() {
  return (
    <>
       <BrowserRouter>
       <NavbarComponent />
        <FooterComponent />
       </BrowserRouter>
    </>
  );
}

export default App;

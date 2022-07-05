import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from "./comps/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Items } from './comps/Items'
import About from './pages/About'
import Partnership from './pages/Partnership'
import Catalog from './pages/Catalog'
import Brands from './pages/Brands'
import Contacts from './pages/Contacts'
import Promotions from './pages/Promotions'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Profile from './pages/Profile';
import Navigation from './comps/Navigation';
import CatalogClass from './pages/CatalogClass';
function App() {
  const { ItemNew, ItemPopular, ItemOnSale } = Items;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id)
    if (productExit) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }

  };
  const onRemove = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const decreaseQty = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navigation cartItems={cartItems} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contacts"  element={<Contacts />}></Route>
          <Route exact path="/catalog"  element={<Catalog />}></Route>
          <Route exact path="/catalogclass"  element={<CatalogClass ItemPopular={ItemPopular} ItemOnSale={ItemOnSale} ItemNew={ItemNew} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} itemsPerPage={5}/>}></Route>
          <Route exact path="/partnership"  element={<Partnership />}></Route>
          <Route exact path="/brands"  element={<Brands />}></Route>
          <Route exact path="/profile"  element={<Profile />}></Route>
          <Route exact path="/promotions"  element={<Promotions />}></Route>
          <Route exact path="/"  element={<Home ItemNew={ItemNew} cartItems={cartItems} ItemPopular={ItemPopular} ItemOnSale={ItemOnSale} onAdd={onAdd} onRemove={onRemove} decreaseQty={decreaseQty} />} ></Route>
          <Route exact path="/cart"  element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} decreaseQty={decreaseQty} />} ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
